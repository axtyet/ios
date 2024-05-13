/*************************************

项目名称：波点音乐
下载地址：https://t.cn/A6NLgAZW
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
https:\/\/bd-api\.kuwo\.cn url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/chxm1023/Rewrite/bodianyinyue.js

[mitm]
hostname = bd-api.kuwo.cn

*************************************/


var body = $response.body;
body = body.replace(/\"expireDate":\d+/g, '\"expireDate":4092599349000');
body = body.replace(/\"isVip":\d+/g, '\"isVip":1');
body = body.replace(/\"vip":\d+/g, '\"vip":1');
$done({body});
