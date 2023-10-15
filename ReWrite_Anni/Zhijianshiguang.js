/*************************************

项目名称：指尖时光
下载地址：https://too.st/5Dh
脚本作者：chxm1023
当前版本：6.3.80
**************************************

[rewrite_local]
^https?:\/\/integral2\.dasyibalang\.com\/.+\/User url script-response-body https://raw.githubusercontent.com/Reviewa/Review/main/Zhijianshiguang.js

[mitm]
hostname = integral2.dasyibalang.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = { ...chxm1023.data, VIP: 3, MembersBeginDateMs: 1666666666666, MembersEndDateMs: 4092599349000 };

$done({body : JSON.stringify(chxm1023)});
