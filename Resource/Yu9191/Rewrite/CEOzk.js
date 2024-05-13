
/**

CEO周课


[rewrite_local]

https://user.xiaozaoapp.com/app/ceouser/loginAuto url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/CEOzk.js

[mitm] 

hostname = user.xiaozaoapp.com

*/
var body = $response.body;

body = body.replace(/("vip_end_time"\s*:\s*)""/g, '$1"2099-09-09"');

body = body.replace(/("is_vip"\s*:\s*)0/g, '$11');

body = body.replace(/("nickname"\s*:\s*)"CEO_0092"/g, '$1"Baby"');

$done({ body });
