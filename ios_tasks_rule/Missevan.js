/**************************************
脚本名称：猫耳FM
脚本作者：@Sliverkiss
更新日期：2024-02-14 20:13:56
------------------------------------------
脚本兼容：Surge、QuantumultX、Loon、Shadowrocket、Node.js
只测试过QuantumultX，其它环境请自行尝试

脚本建议一天运行3次：10,20,30 9 * * *

网页入口：https://m.missevan.com/

*************************
【 签到脚本使用教程 】:
*************************

单账号&多账号：
1.将获取ck脚本拉取到本地
2.打开猫耳FM网页->登录账号，点击主页刷新，提示获取cookie成功则可以使用该脚本
3.关闭获取cookie脚本，防止产生不必要的mitm

QuantumultX配置如下：

[rewrite_local]
^https:\/\/www\.missevan\.com\/account\/userinfo url script-response-body https://gist.githubusercontent.com/Sliverkiss/79fd3bc95310d10bccc45efdab0204fc/raw/missevan.js

[MITM]
hostname = www.missevan.com

====================================
⚠️【免责声明】
------------------------------------------
1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。
******************************************/


// env.js 全局
const $ = new Env("猫耳FM");
const ckName = "missevan_data";
//-------------------- 一般不动变量区域 -------------------------------------
const Notify = 1;//0为关闭通知,1为打开通知,默认为1
const notify = $.isNode() ? require('./sendNotify') : '';
let envSplitor = ["@"]; //多账号分隔符
let userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || [];
let userList = [];
let userIdx = 0;
let userCount = 0;
//调试
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata('is_debug')) || 'false';
// 为通知准备的空数组
$.notifyMsg = [];
//---------------------- 自定义变量区域 -----------------------------------

//脚本入口函数main()
async function main() {
    await getNotice()
    console.log('\n================== 任务 ==================\n');
    for (let user of userList) {
        console.log(`🔷账号${user.index} >> Start work`)
        console.log(`随机延迟${user.getRandomTime()}ms`);
        //执行签到
        let { username, point } = await user.userInfo();
        if (user.ckStatus) {
            let reward = {
                "getSign": { "name": "签到任务", "gtype": 1 },
                "getComment": { "name": "评论任务", "gtype": 2 },
                "putFish": { "name": "投食鱼干", "gtype": 4 }
            }
            //天天摸鱼
            let fishMsg = await user.getFish();
            //评论任务
            await user.addComment();
            //投喂
            await user.taskFish();
            //领取签到任务奖励
            await user.getReward(reward.getSign);
            //领取评论任务奖励
            await user.getReward(reward.getComment);
            //领取投喂鱼干奖励
            await user.getReward(reward.putFish);
            //投喂鱼干抽奖
            await user.task("https://www.missevan.com/member/getfeedtask?ttype=1&userid=&_=")
            let infoRes = await user.userInfo();
            DoubleLog(`用户名:${username}\n小鱼干:${infoRes.point}小鱼干`);
        } else {
            //将ck过期消息存入消息数组
            $.notifyMsg.push(`❌账号${user.index} >> Check ck error!`)
        }
    }
}

class UserInfo {
    constructor(user) {
        this.index = ++userIdx;
        this.token = user.token;
        this.ckStatus = true;
        this.headers = {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": this.token,
            "referer": "https://fm.missevan.com/live/160481424",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; Redmi K30) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.111 Mobile Safari/537.36",
        };
    }
    getRandomTime() {
        return randomInt(1000, 3000)
    }
    //请求二次封装
    Request(options, method) {
        typeof (method) === 'undefined' ? ('body' in options ? method = 'post' : method = 'get') : method = method;
        return new Promise((resolve, reject) => {
            $.http[method.toLowerCase()](options)
                .then((response) => {
                    let res = response.body;
                    res = $.toObj(res) || res;
                    resolve(res);
                })
                .catch((err) => reject(err));
        });
    };
    //用户信息
    async userInfo() {
        try {
            const options = {
                url: `https://www.missevan.com/account/userinfo`,
                headers: this.headers
            };
            //post方法
            let res = await this.Request(options);
            let { username, avatar2, point } = res?.info ?? {};
            debug(res, "用户信息");
            if (res?.success) {
                $.avatar = avatar2;
                return { username, point };
            } else {
                this.ckStatus = false;
            }
            return false;
        } catch (e) {
            $.log(`❌用户信息查询失败!原因为:${e}`)
        }
    }
    //执行任务
    async task(url) {
        try {
            const options = {
                url: url,
                headers: this.headers
            };
            //post方法
            let res = await this.Request(options);
            debug(res, "执行任务");
        } catch (e) {
            $.log(`❌用户信息查询失败!原因为:${e}`)
        }
    }
    //领取任务奖励
    async getReward(reward) {
        try {
            const options = {
                url: `https://www.missevan.com/member/getcatears?gtype=${reward.gtype}`,
                headers: this.headers
            };
            //post方法
            let res = await this.Request(options);
            debug(res, reward.name);
            $.log(`${reward.name}:${res?.info || res?.error}`)
        } catch (e) {
            $.log(`❌领取${reward.name}奖励失败!原因为:${e}`)
        }
    }
    //天天摸鱼
    async getFish() {
        try {
            const options = {
                url: `https://www.missevan.com/member/gettask?ttype=1&userid=`,
                headers: this.headers
            };
            //post方法
            let res = await this.Request(options);
            debug(res, "天天摸鱼");
            $.log(`天天摸鱼:${res?.success || res?.error}`)
        } catch (e) {
            $.log(`❌天天摸鱼执行失败!原因为:${e}`)
        }
    }
    //投喂鱼干
    async taskFish() {
        try {
            const options = {
                url: `https://www.missevan.com/sound/ts`,
                headers: this.headers,
                body: `sound_id=2006321`
            };
            //post方法
            let res = await this.Request(options);
            debug(res, "投喂");
        } catch (e) {
            $.log(`❌投喂任务失败!原因为:${e}`)
        }
    }

    //评论任务
    async addComment() {
        try {
            let { hitokoto } = await this.Request({ url: "https://v1.hitokoto.cn" });
            const options = {
                url: `https://www.missevan.com/site/addcomment`,
                headers: this.headers,
                body: `type=1&eId=2154758&comment=${encodeURI(hitokoto)}`
            };
            //post方法
            let res = await this.Request(options);
            debug(res, "评论任务");
        } catch (e) {
            $.log(`❌投喂任务失败!原因为:${e}`)
        }
    }

}
//获取Cookie
async function getCookie() {
    if ($request && $request.method != 'OPTIONS') {
        //请求头大小写转换,兼容代理软件环境
        const headers = ObjectKeys2LowerCase($request.headers);
        //获取token
        const tokenValue = headers.cookie;
        const body = JSON.parse($response.body);
        //是否存在多账号数据
        if (!userCookie || (Array.isArray(userCookie) && userCookie.length == 0)) {
            userCookie.push({ "id": body.info.id, "token": tokenValue });
            $.setjson(userCookie, ckName);
            $.msg($.name, `🎉${body?.info?.username}获取token成功!`, "");
        } else {
            userCookie = eval('(' + userCookie + ')');
            let index = userCookie.findIndex(e => e.id == body.info.id);
            //更新账号数据
            if (userCookie[index]) {
                userCookie[index].token = tokenValue;
                $.setjson(userCookie, ckName);
                $.msg($.name, `🎉账号[${body?.info?.username}]更新token成功!`, "");
            } else {
                //添加新账号
                userCookie.push({ "id": body.info.id, "token": tokenValue });
                $.setjson(userCookie, ckName);
                $.msg($.name, `🎉账号[${body?.info?.username}]获取token成功!!`, ``);
            }
        }
    }
}

async function getNotice() {
    try {
        const urls = ["https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/notice.json", "https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/tip.json"];
        for (const url of urls) {
            const options = {
                url: url,
                headers: { "User-Agent": "" }
            };
            const result = await httpRequest(options);
            if (result) console.log(result.notice);
        }
    } catch (e) {
        console.log(e);
    }
}

//主程序执行入口
!(async () => {
    //没有设置变量,执行Cookie获取
    if (typeof $request != "undefined") {
        await getCookie();
        return;
    }
    //未检测到ck，退出
    if (!(await checkEnv())) { throw new Error(`❌未检测到ck，请添加环境变量`) };
    //加载模块
    if (!(await loadModule())) { throw new Error(`❌加载模块失败，请检查模块路径是否正常`) }
    //存在账号，则执行任务
    if (userList.length > 0) {
        await main();
    }
})()
    .catch((e) => $.notifyMsg.push(e.message || e))//捕获登录函数等抛出的异常, 并把原因添加到全局变量(通知)
    .finally(async () => {
        await SendMsg($.notifyMsg.join('\n'))//带上总结推送通知
        $.done({ ok: 1 }); //调用Surge、QX内部特有的函数, 用于退出脚本执行
    });

/** --------------------------------辅助函数区域------------------------------------------- */

// 双平台log输出
function DoubleLog(data) {
    if ($.isNode()) {
        if (data) {
            console.log(`${data}`);
            $.notifyMsg.push(`${data}`);
        }
    } else {
        console.log(`${data}`);
        $.notifyMsg.push(`${data}`);
    }
}

// DEBUG
function debug(text, title = 'debug') {
    if ($.is_debug === 'true') {
        if (typeof text == "string") {
            console.log(`\n-----------${title}------------\n`);
            console.log(text);
            console.log(`\n-----------${title}------------\n`);
        } else if (typeof text == "object") {
            console.log(`\n-----------${title}------------\n`);
            console.log($.toStr(text));
            console.log(`\n-----------${title}------------\n`);
        }
    }
}


//检查变量
async function checkEnv() {
    if (!userCookie || (Array.isArray(userCookie) && userCookie.length == 0)) {
        console.log("未找到CK");
        return;
    } else {
        userCookie = eval('(' + userCookie + ')');
        for (let n of userCookie) n && userList.push(new UserInfo(n));
        userCount = userList.length;
    }
    return console.log(`共找到${userCount}个账号`), true;//true == !0
}

/**
 * 随机整数生成
 */
function randomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
// 发送消息
async function SendMsg(message) {
    if (!message) return;
    if (Notify > 0) {
        if ($.isNode()) {
            await notify.sendNotify($.name, message)
        } else {
            $.msg($.name, '', message, { 'media-url': $.avatar })
        }
    } else {
        console.log(message)
    }
}

//加载模块
async function loadModule() {
    //加载Sakura多功能工具模块
    $.SakuraUtils = await loadSakuraUtils();
    return $.SakuraUtils ? true : false;
}
/** ---------------------------------固定不动区域----------------------------------------- */
// prettier-ignore
function ObjectKeys2LowerCase(obj) { const _lower = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])); return new Proxy(_lower, { get: function (target, propKey, receiver) { return Reflect.get(target, propKey.toLowerCase(), receiver) }, set: function (target, propKey, value, receiver) { return Reflect.set(target, propKey.toLowerCase(), value, receiver) } }) };
//Sakura多功能工具模块，引入模块方法如下：
async function loadSakuraUtils() { let code = ($.isNode() ? process.env['SakuraUtil_code'] : $.getdata('SakuraUtil_code')) || ''; if (code && Object.keys(code).length) { console.log(`✅${$.name}:缓存中存在SakuraUtil代码,跳过下载`); eval(code); return creatUtils() } console.log(`🚀${$.name}:开始下载SakuraUtil代码`); return new Promise(async (resolve) => { $.getScript('https://cdn.jsdelivr.net/gh/Sliverkiss/QuantumultX@main/Utils/SakuraUtil.js').then((fn) => { $.setdata(fn, "SakuraUtil_code"); eval(fn); const SakuraUtil = creatUtils(); console.log(`✅SakuraUtil加载成功,请继续`); resolve(SakuraUtil) }) }) };
//请求函数函数二次封装
function httpRequest(options, method) { typeof (method) === 'undefined' ? ('body' in options ? method = 'post' : method = 'get') : method = method; return new Promise((resolve) => { $[method](options, (err, resp, data) => { try { if (err) { console.log(`${method}请求失败`); $.logErr(err) } else { if (data) { typeof JSON.parse(data) == 'object' ? data = JSON.parse(data) : data = data; resolve(data) } else { console.log(`请求api返回数据为空，请检查自身原因`) } } } catch (e) { $.logErr(e, resp) } finally { resolve() } }) }) }
//From chavyleung's Env.js
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, a) => { s.call(this, t, (t, s, r) => { t ? a(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const a = this.getdata(t); if (a) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, a) => e(a)) }) } runScript(t, e) { return new Promise(s => { let a = this.getdata("@chavy_boxjs_userCfgs.httpapi"); a = a ? a.replace(/\n/g, "").trim() : a; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [i, o] = a.split("@"), n = { url: `http://${o}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": i, Accept: "*/*" }, timeout: r }; this.post(n, (t, e, a) => s(a)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), a = !s && this.fs.existsSync(e); if (!s && !a) return {}; { const a = s ? t : e; try { return JSON.parse(this.fs.readFileSync(a)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), a = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const a = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of a) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, a, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e), i = this.getval(a), o = a ? "null" === i ? null : i || "{}" : "{}"; try { const e = JSON.parse(o); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), a) } catch (e) { const i = {}; this.lodash_set(i, r, t), s = this.setval(JSON.stringify(i), a) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, a) => { !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, a) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: a, headers: r, body: i, bodyBytes: o } = t; e(null, { status: s, statusCode: a, headers: r, body: i, bodyBytes: o }, i, o) }, t => e(t && t.error || "UndefinedError")); break; case "Node.js": let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: a, statusCode: r, headers: i, rawBody: o } = t, n = s.decode(o, this.encoding); e(null, { status: a, statusCode: r, headers: i, rawBody: o, body: n }, n) }, t => { const { message: a, response: r } = t; e(a, r, r && s.decode(r.rawBody, this.encoding)) }) } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, a) => { !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, a) }); break; case "Quantumult X": t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: a, headers: r, body: i, bodyBytes: o } = t; e(null, { status: s, statusCode: a, headers: r, body: i, bodyBytes: o }, i, o) }, t => e(t && t.error || "UndefinedError")); break; case "Node.js": let a = require("iconv-lite"); this.initGotEnv(t); const { url: r, ...i } = t; this.got[s](r, i).then(t => { const { statusCode: s, statusCode: r, headers: i, rawBody: o } = t, n = a.decode(o, this.encoding); e(null, { status: s, statusCode: r, headers: i, rawBody: o, body: n }, n) }, t => { const { message: s, response: r } = t; e(s, r, r && a.decode(r.rawBody, this.encoding)) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let a = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length))); return t } queryStr(t) { let e = ""; for (const s in t) { let a = t[s]; null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`) } return e = e.substring(0, e.length - 1), e } msg(e = t, s = "", a = "", r) { const i = t => { switch (typeof t) { case void 0: return t; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: t }; case "Loon": case "Shadowrocket": return t; case "Quantumult X": return { "open-url": t }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } case "Loon": { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } case "Quantumult X": { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl, a = t["update-pasteboard"] || t.updatePasteboard; return { "open-url": e, "media-url": s, "update-pasteboard": a } } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(e, s, a, i(r)); break; case "Quantumult X": $notify(e, s, a, i(r)); break; case "Node.js": }if (!this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), a && t.push(a), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, t.stack) } } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(t, e) }
