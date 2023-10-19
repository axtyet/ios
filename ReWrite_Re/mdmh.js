/***************************************

脚本功能：免耽漫画
脚本作者：伟人
作者QQ:55749353
食用方法 : 
更新时间：2023年7月20日
问题反馈：QQ+55749353
作者忠告: 建议使用柔纸巾！
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^http[s]?:\/\/app\.lalaldc\.cn\/api\/lifan-customer\/customer\/info.*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/mdmh.js

[mitm]

hostname = app.lalaldc.cn

***************************************/
var body = $response.body;

let obj = JSON.parse($response.body);
obj.data.wxName = "by伟人";
obj.data.username = "by伟人";
obj.data.goldAmount = 99880;
obj.data.headerUrl = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";
obj.data.isvip = 1;
obj.data.uid = "https://t.me/WeiRenQAQ";
obj.data.vipStatus = 1;
obj.data.vipEndDate = 29990909;
obj.data.level = 30;

$done({
    body:  JSON.stringify(obj)
});
