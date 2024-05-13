/*************************************

项目名称：心脏+
软件版本：1.4.1
下载地址：https://is.gd/1Pq4K6
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.995120\.cn\/mini\/api\/appleplus\/ url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/xinzang.js

[mitm]
hostname = api.995120.cn

*************************************/


var anni = JSON.parse($response.body);

anni.body.data.experienceCard.content = "SVIP剩余9999999999999次";
anni.body.data.experienceCard.balanceNum = "9999999999999";
anni.body.data.experienceCard.endTime = "2099-12-31到期";

$done({ body: JSON.stringify(anni) });
