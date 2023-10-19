// bilibili自定义设置添加其他blacklist，来源于nzw9314
//^https:\/\/app\.bilibili\.com\/(search\/resource|x\/(resource\/show\/tab|v2\/(view|rank|feed|reply\/main|account\/mine))) url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/bilibili.js

const up_blacklist = ['NathanRich火锅大王','大祥哥来了','共青团中央','猛男舞团IconX','记录生活的蛋黄派','力原君','宝剑嫂','雨哥到处跑','啊吗粽','枪弹轨迹','徐大虾咯','盗月社食遇记','老师好我叫何同学','老番茄','敬汉卿','纳豆奶奶','吃花椒的喵酱','央视频','央视新闻','人民网','人民日报','观察者网','人民网','张维为','中国boy超级大猩猩','拜托了小翔哥','三代鹿人','柳飘飘了吗','花少北','六道轮回','在下哲别','东尼okii','LexBurner','拉宏桑','金灿荣教授','观视频工作室','留学生日报','司马南','硬核的半佛仙人','暴躁的仙人jump','轩邈Elias','楼上的老张','老坛胡说','路温1900','树根龙门阵','枪弹轨迹','肝帝董佳宁','温柔JUNZ','吃素的狮子','记录生活的蛋黄派','贤宝宝Baby','马督工','三十六贱笑','绝命老铁','我是EyeOpener','火星方阵'];
const title_blackwords = ['乔碧萝','鸡你太美','焯','共青团','一个赞','小学生','新人up','反正没人看','王冰冰','刘浩存','谷爱凌','怒批','吃花椒的喵酱','央视频','央视新闻','人民网','人民日报','何同学','央媒','怒批','狠批','赵立坚','外交部','不要笑挑战','蹭饭','不要看挑战','土味挑战','整蛊','我被网暴了','被抄袭了','tm','小伙','蔡徐坤','ikun','坤坤','鸡脚','小黑子','裁缝','电音','华春莹','张瀚','肖战','娱乐圈'];
const region_blacklist = ['宅舞','三次元舞蹈'];

let body = $response.body;
console.log($request.url)
console.log(body)
body = JSON.parse(body);

// 观看页面
if (-1 != $request.url.indexOf('/x/v2/view\?a') && 0 == body['code']) {
    body['data']['relates'] = body['data']['relates'].filter(function (item) {
        if (item.hasOwnProperty('is_ad')) {
            return false;
        }
        return true;
    });
}

// 排行榜
if (-1 != $request.url.indexOf('/x/v2/rank') && 0 == body['code']) {
    body['data'] = body['data'].filter(function (item) {
        if (up_blacklist.includes(item.name)) {
            return false;
        }
        return true;
    });
}

// feed
if (-1 != $request.url.indexOf('/x/v2/feed') && 0 == body['code']) {
    body['data']['items'] = body['data']['items'].filter(function (item) {
        // search_subscribe 人气UP主推荐
        if (['ad_web_s', 'ad_web', 'live', 'banner', 'search_subscribe'].includes(item.card_goto)) {
            return false;
        }
        if (item.hasOwnProperty('ad_info')) {
            return false;
        }
        if (up_blacklist.includes(item.args.up_name)) {
            return false;
        }
        if (region_blacklist.includes(item.args.rname)) {
            return false;
        }
        for( let word of title_blackwords){
            if(-1 != item.title.indexOf(word)){
                return false;
            }
        }
        return true;
    });
}

// 搜索页Banner
if(-1 != $request.url.indexOf('search/resource') && 0 == body['code']){
    body['data'] = [];
}

// 评论页面notice
if (-1 != $request.url.indexOf('/x/v2/reply/main') && 0 == body['code']) {
    body['data']['notice'] = {};
}

body = JSON.stringify(body);
$done({body});
