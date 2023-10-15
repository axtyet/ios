/*************************************

项目功能：一言 解锁会员/净化广告
下载地址：https://t.cn/Aini0veg
脚本作者：chxm1023
当前版本：4.60
**************************************

[rewrite_local]
^https:\/\/app\.yiyan\.art\/yiyan url script-response-body https://raw.githubusercontent.com/Reviewa/Review/main/Yiyan.js

[mitm]
hostname = app.yiyan.art

*************************************/


var chxm1023 = $response.body.replace(/viptype":"\d+"/g, 'viptype":"4"').replace(/banner":\[.+\]/g, 'banner":[]');$done(chxm1023);
