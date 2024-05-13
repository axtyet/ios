/*
时尚芭莎

[rewrite_local]

http://bz.metshow.cn/api/userminivip/myminivipinfo url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/ssbs.js

[mitm]
hostname = bz.metshow.cn
*/

var body = JSON.parse($response.body);
body.result.IsMiniVip = 1;
body.result.MiniItemEndDate = "\/Date(4714972789403+0800)\/";
$done({ body: JSON.stringify(body) });
