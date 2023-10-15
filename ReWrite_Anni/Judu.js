/*

句读：https://apps.apple.com/app/id1073431872
当前版本：4.2.9
[rewrite_local]
^https?:\/\/judouapp\.com\/api\/v2\/mine\/profile url script-response-body https://raw.githubusercontent.com/Reviewa/Review/main/Judu.js

[MITM]
hostname = judouapp.com

*/
var guding = JSON.parse($response.body);
guding.is_member = true;
guding.nickname = "Review";
guding.member_expired_at = 148204937166;

$done({ body: JSON.stringify(guding) });
