/*************************************

项目功能：搜图神器 解锁VIP(先登录)
下载地址：https://t.cn/A6ogWd6z
脚本作者：chxm1023
使用方法：请先登录账号，再开脚本。
当前版本：1.7.3
**************************************

[rewrite_local]
^http:\/\/wallpaper\.soutushenqi\.com\/api\/.+\/account\/token url script-response-body https://raw.githubusercontent.com/Reviewa/Review/main/Soutushenqi.js

[mitm]
hostname = wallpaper.soutushenqi.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data.vipPastDueTime = 4092599350000;
chxm1023.data.vipLabel = "元老捐赠会员";
chxm1023.data.vipLabelLevel = 4;
chxm1023.data.vipType = 1;
chxm1023.data.pcVipType = 1;
chxm1023.data.pcVipPastDueTime = 4092599349000;
chxm1023.data.vitalityVipPastDueTime = 4092599349000;
chxm1023.data.vitalityPcVipPastDueTime = 4092599349000;

$done({body : JSON.stringify(chxm1023)});
