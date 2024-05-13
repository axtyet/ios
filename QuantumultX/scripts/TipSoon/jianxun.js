/*

简讯 - 短阅读秒懂：https://apps.apple.com/app/id1160249028

[rewrite_local]
^https?:\/\/api\.tipsoon\.com/api\/v1\/(user\/info|login\/account) url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/QuantumultX/scripts/TipSoon/jianxun.js

[MITM]
hostname = api.tipsoon.com

*/
var guding = JSON.parse($response.body);
if ($request.url.includes("/user/info")) {
  guding.data.icon_url = "https://raw.githubusercontent.com/axtyet/Nebula/main/Icons/icon.png";
  guding.data.is_vip = true;
  guding.data.name = "江上酒゛";
  guding.data.vip_expire_time = "2099-09-09 06:06:06";
  guding.data.user_id = "axtyet";
} else if ($request.url.includes("/login/account")) {
  guding.data.items[0].mobile = "6";
}
$done({ body: JSON.stringify(guding) });
