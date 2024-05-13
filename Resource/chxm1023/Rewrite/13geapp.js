/*************************************

项目名称：13个APP解锁全家桶
下载地址：https://t.cn/A6Ouq9uD
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(appss|standard)\.(rhinox.*|linhongshi)\.com\/.+\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/chxm1023/Rewrite/13geapp.js

[mitm]
hostname = *.rhinox*.com, appss.linhongshi.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

if (ua.indexOf('bnchangtu') != -1) {
  chxm1023.result["type"] = "FOREVER";
} else { chxm1023.result["type"] = "VIP"; }
chxm1023.result["vipGroupInfos"] = [      {        "groupType" : "TYPE_ONE",        "vipType" : "VIP",        "autoPay" : "YES"      }    ];
chxm1023.result["vipExpireTime"] = "2099-09-09 09:09:09";
chxm1023.result["vipExpireDays"] = 999999;

$done({body : JSON.stringify(chxm1023)});
