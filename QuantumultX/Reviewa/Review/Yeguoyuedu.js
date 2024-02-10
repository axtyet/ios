/*************************************

项目名称：野果阅读-外区下载
下载地址：https://t.cn/A6NTIw89
脚本作者：chxm1023

**************************************

[rewrite_local]
^https?:\/\/yeguo\.236api\.com url script-response-body https://raw.githubusercontent.com/Reviewa/Review/main/Yeguoyuedu.js

[mitm]
hostname = yeguo.236api.com

*************************************/


var body = $response.body;

body = body.replace(/\"total_ticket":\d+/g, '\"total_ticket":999999');

body = body.replace(/\"read_time":"\d+"/g, '\"read_time":"4092599350000"');

body = body.replace(/\"key":".*?"/g, '\"key":"level_6"');

body = body.replace(/\"vip_end_date":\d+/g, '\"vip_end_date":"2099-09-09 09:09:09"');

$done({body});
