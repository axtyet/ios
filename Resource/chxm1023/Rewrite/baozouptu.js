/*************************************

项目名称：暴走P图
下载地址：https://t.cn/A6WwGEm7
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
https?:\/\/api\.intelimeditor\.com\/user\/loginByThirdPlatformApp url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/chxm1023/Rewrite/baozouptu.js

[mitm]
hostname = api.intelimeditor.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data.lookVipCount = 3;
chxm1023.data.vipExpireTime = "4092599349000";

$done({body : JSON.stringify(chxm1023)});
