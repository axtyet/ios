/**************************

脚本功能：千亦时间 永久会员
下载地址：appstor
软件版本：所有
脚本作者：伟人
作者QQ:
更新时间：2023-06-05
问题反馈：QQ+
QQ会员群：PY
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*********************************************

^http[s]?:\/\/app\.thwlqy\.com\/login\/login\/veifys\.html url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/qysj.js

hostname = app.thwlqy.com

****************************/



var body = $response.body; 
let obj = JSON.parse($response.body);
obj.msg.time = -1 ;
$done({body: JSON.stringify(obj)});
