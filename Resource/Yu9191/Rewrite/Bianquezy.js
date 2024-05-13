/*
扁鹊

[rewrite_local]

https://wxapi.zhongyuedu.com/zy/video_list.php url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/Bianquezy.js
#开屏 会出现网络错误 所以注释掉了
#https://wxapi.zhongyuedu.com/zy/begin.php url reject 
[mitm]
hostname = wxapi.zhongyuedu.com
*/
var body = $response.body;
body = body.replace(/("price"\s*:\s*)""/g, '$1"0"');
$done({ body: body });
