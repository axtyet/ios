/*

Mobile01
解锁会员
移除所有广告
其他功能未测试

[rewrite_local]
https://www.mobile01.com/api/account/verify_token.php url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/Mobile01.js
[mitm]
hostname = www.mobile01.com

*/
var body = JSON.parse($response.body);
body.response.user.ad_display.web = false;
body.response.user.ad_display.app = false;
body.response.user.ad_display.mobile = false;
body.response.user.vip_expirydate = 9898988999;
body.response.user.allow_vip = true;
body.response.user.vip = true;
body.response.user.post_permission = true;
$done({ body: JSON.stringify(body) });

