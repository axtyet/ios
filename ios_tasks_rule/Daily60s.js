/******************************************
 * @name 每天60秒读懂世界
 * @channel https://t.me/yqc_123
 * @feedback https://t.me/yqc_777
 * @version 1.0.4

******************************************/

const $ = new Env('每天60秒读懂世界')
const MAX_MESSAGE_COUNT = 155 // 由于Surge通知过长会遮挡且点击后无法跳转日志, 在此做截断, 并且点击通知会跳转页面展示详情
// 且用且珍惜 毕竟不是官方接口 个人维护毕竟都是为爱付出 指不定哪天会停止维护
// 数据来源 https://www.jun.la/
// TODO: 是否有精力监听公众号发文 -> 需更新ck和token等不固定参数
;(async () => {
    const junla = await JunLa()
    // prettier-ignore
    const getContent=async()=>{try{const t=await junla.GetList();return await junla.GetContent(t)}catch(t){return await junla.GetContent2()}},getOpenURL=async()=>{try{openURL=await junla.GetImage()}catch(t){openURL=await ImageAPI()}};
    let { title, thumb, content, openURL } = await getContent()
    const subTitle = content[content.length - 1] // 微语
    const message = chunkBySize(content, MAX_MESSAGE_COUNT)
    openURL = openURL || (await getOpenURL())
    await SendNotify(title, subTitle, message, { 'open-url': openURL, 'media-url': thumb })
})()
    .catch((e) => $.log('', `❗️ ${$.name}, 失败! 原因: ${e}!`, ''))
    .finally(() => $.done())

// 备用接口
async function ImageAPI() {
    let imgUrl = ''
    try {
        const { code, msg, imageUrl } = await httpRequest({ url: `http://dwz.2xb.cn/zaob` })
        if (code === 200) imgUrl = imageUrl
        else {
            console.log(`60s图片接口已挂: ${msg}`)
        }
    } catch (e) {
        console.log(`60s图片接口已挂`)
    } finally {
        return imgUrl
    }
}
/**
 * 网络请求的二次封装
 * @param {*} t 请求参数
 * @returns
 */
function httpRequest(t) {
    const e = t.method || 'GET'
    return new Promise((o, s) => {
        $.http[e.toLowerCase()](t)
            .then((t) => {
                const { statusCode: e, body: c } = t
                if (200 === e) {
                    try {
                        c = JSON.parse(c)
                    } catch (t) {}
                    o(c)
                } else s(`请求失败: ${e}`)
            })
            .catch((t) => s(t))
    })
}
/**
 * 对通知的再封装(可适配青龙针对多端通知)
 */
async function SendNotify(n, o = '', i = '', t = {}) {
    const e = 'undefined' != typeof $app && 'undefined' != typeof $http,
        s = t['open-url'],
        f = t['media-url']
    if (($.isQuanX() && $notify(n, o, i, t), $.isSurge())) {
        const t = f ? `${i}\n多媒体:${f}` : i
        $notification.post(n, o, t, { url: s })
    }
    if ($.isLoon()) {
        const t = {}
        s && (t.openUrl = s), f && (t.mediaUrl = f), '{}' === JSON.stringify(t) ? $notification.post(n, o, i) : $notification.post(n, o, i, t)
    }
    const c = `${i}${s ? `\n点击跳转: ${s}` : ''}${f ? `\n多媒体: ${f}` : ''}`
    if (e) {
        const i = require('push')
        i.schedule({ title: n, body: `${o ? `${o}\n` : ''}${c}` })
    }
    if ($.isNode())
        try {
            const i = require('../sendNotify')
            await i.sendNotify(`${n}\n${o}`, c)
        } catch (n) {
            console.log('没有找到sendNotify.js文件')
        }
    console.log(`${n}\n${o}\n${c}\n\n`)
}
/**
 * 按照指定大小分割数组
 * @param {*} arr 数组
 * @param {*} size 分割总字数
 * @returns
 */
function chunkBySize(arr, size = MAX_MESSAGE_COUNT) {
    arr = typeof arr === 'string' ? arr.split('\n') : arr
    const resultText = `\n=======👉点击通知查看更多👈=======\n`
    let message = []
    if ($.isNode()) {
        message = arr.join('\n').replace(/\n$/, '')
    } else {
        for (const item of arr) {
            if (message.join('\n').length >= size) {
                break
            }
            message.push(item)
        }
        message = `${message.join('\n')}${resultText}`
    }
    return message
}
/** 创建对象 */
async function JunLa() {
    const cheerio = await loadCheerio()
    return new (class {
        constructor() {
            this.today = $.time('yyyy年MM月dd', new Date())
        }
        // 查找最新文章
        async GetList() {
            try {
                const resp = await httpRequest({ url: `https://www.jun.la/60snews/` })
                const Query = cheerio.load(resp)
                return Query('article')
                    .map((i, el) => {
                        let $el = Query(el)
                        let title = $el.find('h2.entry-title a').text()
                        let link = $el.find('h2.entry-title a').attr('href')
                        let _date = $el.find('.date').text()
                        let _day = $el.find('.timeline-time').text().replace(/\n|\t/g, '')
                        let date = `${_date}${_day}`
                        return { title, link, date }
                    })
                    .get()
            } catch (e) {
                throw new Error(e)
            }
        }
        // 产出文章
        async GetContent(url) {
            try {
                const resp = await httpRequest({ url })
                const Query = cheerio.load(resp)
                const container = Query('.single-content')
                const title = Query('.entry-title').text()
                const thumb = container.find('section p img').attr('src')
                const content = container
                    .find('section section p')
                    .map((i, el) => Query(el).find('span').text())
                    .get()
                    .filter(Boolean)
                return { title, thumb, content }
            } catch (e) {
                throw new Error(e)
            }
        }
        async GetContent2() {
            try {
                const resp = await httpRequest({ url: `https://www.jun.la/news.html/` })
                const Query = cheerio.load(resp)
                const container = Query('.entry-content')
                const title = container
                    .find('p:contains("简报标题")')
                    .text()
                    .replace(/简报标题：/, '')
                const thumb = container
                    .find('p:contains("简报图片")')
                    .text()
                    .replace(/简报图片：/, '')
                const openURL = container
                    .find('p:contains("简报长文图片")')
                    .text()
                    .replace(/简报长文图片：/, '')
                const content = container
                    .find('p')
                    .slice(6)
                    .map((i, el) => Query(el).text())
                    .get()
                    .filter(Boolean)
                return { title, thumb, content, openURL }
            } catch (e) {
                throw new Error(e)
            }
        }
        // 产出图片
        GetImage() {
            return new Promise(async (resolve, reject) => {
                const url = `https://api.jun.la/60s.php?format=image`
                httpRequest({ url })
                    .then(() => {
                        console.log(`✔️ 𝐈𝐧𝐭𝐞𝐫𝐟𝐚𝐜𝐞 𝐯𝐚𝐥𝐢𝐝.`)
                        resolve(url)
                    })
                    .catch((e) => {
                        console.log(`❌ 𝐈𝐧𝐭𝐞𝐫𝐟𝐚𝐜𝐞 𝐟𝐚𝐢𝐥𝐞𝐝.`)
                        reject(e)
                    })
            })
        }
    })()
}
/** 加载cheerio模块 */
async function loadCheerio() {
    return new Promise(async (resolve) => {
        $.getScript(
            'https://cdn.jsdelivr.net/gh/Yuheng0101/X@main/Utils/cheerio.js'
        ).then((fn) => {
            eval(fn)
            const cheerio = createCheerio()
            console.log(`✅ 60s读懂世界: cheerio加载成功, 请继续`)
            resolve(cheerio)
        })
        .catch((e) => {
            console.log(`❌ 60s读懂世界: cheerio加载失败, 原因: ${e || '网络开小差了'}`)
            resolve('')
        })
    })
}
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,a)=>{s.call(this,t,(t,s,r)=>{t?a(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const a=this.getdata(t);if(a)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,a)=>e(a))})}runScript(t,e){return new Promise(s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[i,o]=a.split("@"),n={url:`http://${o}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":i,Accept:"*/*"},timeout:r};this.post(n,(t,e,a)=>s(a))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e);if(!s&&!a)return{};{const a=s?t:e;try{return JSON.parse(this.fs.readFileSync(a))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):a?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const a=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of a)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,a)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[a+1])>>0==+e[a+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,a,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,a,r]=/^@(.*?)\.(.*?)$/.exec(e),i=this.getval(a),o=a?"null"===i?null:i||"{}":"{}";try{const e=JSON.parse(o);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),a)}catch(e){const i={};this.lodash_set(i,r,t),s=this.setval(JSON.stringify(i),a)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:a,statusCode:r,headers:i,rawBody:o}=t,n=s.decode(o,this.encoding);e(null,{status:a,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:a,response:r}=t;e(a,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let a=require("iconv-lite");this.initGotEnv(t);const{url:r,...i}=t;this.got[s](r,i).then(t=>{const{statusCode:s,statusCode:r,headers:i,rawBody:o}=t,n=a.decode(o,this.encoding);e(null,{status:s,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:s,response:r}=t;e(s,r,r&&a.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t}queryStr(t){let e="";for(const s in t){let a=t[s];null!=a&&""!==a&&("object"==typeof a&&(a=JSON.stringify(a)),e+=`${s}=${a}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",a="",r){const i=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{let e=t.url||t.openUrl||t["open-url"];return{url:e}}case"Loon":{let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}case"Quantumult X":{let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,a=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":a}}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,a,i(r));break;case"Quantumult X":$notify(e,s,a,i(r));break;case"Node.js":}if(!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),a&&t.push(a),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,t.stack)}}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}
