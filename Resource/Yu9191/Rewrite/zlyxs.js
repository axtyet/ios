/*
直路研习社

[rewrite_local]

https://app.unitefactory.com/api/v2/column/columnInfo url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/zlyxs.js

[mitm]
hostname = app.unitefactory.com
*/
let body = $response.body;
body = body.replace(/("ca_is_free"\s*:\s*)"0"/g, '$1"1"');
$done({ body: body });