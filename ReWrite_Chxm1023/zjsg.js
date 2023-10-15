/*************************************

项目名称：指尖时光
下载地址：https://too.st/5Dh
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/integral2\.dasyibalang\.com\/.+\/User url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zjsg.js

[mitm]
hostname = integral2.dasyibalang.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = { ...chxm1023.data, VIP: 3, MembersBeginDateMs: 1666666666666, MembersEndDateMs: 4092599349000 };

$done({body : JSON.stringify(chxm1023)});
