/*

子午觉

[rewrite_local]

https://ms.51wnl-cq.com/userApi/getUserDetai url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/zwj.js


[mitm]
hostname = ms.51wnl-cq.com
*/
$done({ body: $response.body
    .replace(/("vipEndTime"\s*:\s*)null/g, '$1"2099年04月18日"')
    .replace(/("vipStatus"\s*:\s*)\d+(?![\d.])/g, '$11') });