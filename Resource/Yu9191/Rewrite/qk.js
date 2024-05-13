
/*

氢课
部分付费课程解锁 够用 
如果卡顿 可以自己抓课程完整播放地址 

[rewrite_local]

^https:\/\/(www\.qker\.com\/qker2c\/v2\/course\/serial\/\d+\/children|console\.qker\.com\/linga\/api\/v1\/course\/serial\/\d+\/children|console\.qker\.com\/linga\/api\/v1\/user\/details) url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/qk.js


[mitm]
hostname = *.qker.com
*/
const url = $request.url;

if (url === "https://console.qker.com/linga/api/v1/user/details") {
    var body = JSON.parse($response.body);
    body.data.nickname = "baby";
    body.data.expireTime = 4704173101000;
    body.data.vipTips = "超级会员";
    body.data.vip = true; 
    $done({ body: JSON.stringify(body) });
} else if (url.match(/^https:\/\/(www\.qker\.com\/qker2c\/v2\/course\/serial\/\d+\/children|console\.qker\.com\/linga\/api\/v1\/course\/serial\/\d+\/children)/)) {
    var modifiedBody = $response.body
        .replace(/("vipFree"\s*:\s*)false/g, '$1true')
        .replace(/("locked"\s*:\s*)false/g, '$1true')
        .replace(/("liveRecord"\s*:\s*)false/g, '$1true')
        .replace(/("free"\s*:\s*)false/g, '$1true')
        .replace(/("startTime"\s*:\s*)null/g, '$1"1501827480000"')
        .replace(/("publishTime"\s*:\s*)null/g, '$1"1501827480000"')
        .replace(/("dropTime"\s*:\s*)null/g, '$1"1501827480000"')
        .replace(/("updateTime"\s*:\s*)null/g, '$1"1501827480000"')
        .replace(/("openingDate"\s*:\s*)null/g, '$1"1501827480000"')
        .replace(/("expireDate"\s*:\s*)null/g, '$1"1501827480000"')
        .replace(/("createTime"\s*:\s*)\d+/g, '$11704173101000');
    $done({ body: modifiedBody });
}
