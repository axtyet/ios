/*************************************

项目名称：Agenda
下载地址：https://t.cn/A6ouQyEq
脚本作者：chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]

^https:\/\/accounts\.agenda\.com\/users\/.*\/license url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/chxm1023/Rewrite/Ag.js

[mitm]

hostname = accounts.agenda.com

*************************************/


var body = $response.body; 
var chxm1023 = JSON.parse(body); 

chxm1023.licenseStatusMobile = 1;
chxm1023.unlockExpiryMobile = 4092600296;
chxm1023.informUserOfPendingBonus = true;
chxm1023.licenseStatus = 1;
chxm1023.isSubscribed = true;
chxm1023.unlockExpiry = 4092600296;
chxm1023.error = 0;
chxm1023.isSubscribedMobile = true;
chxm1023.universalPurchaseAvailable = true;

$done({body : JSON.stringify(chxm1023)});
