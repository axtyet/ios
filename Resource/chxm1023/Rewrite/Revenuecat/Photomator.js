/*************************************

项目名称：Photomator-照片编辑
下载地址：https://t.cn/A60W87es
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/chxm1023/Rewrite/Revenuecat/Photomator.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/chxm1023/Rewrite/Revenuecat/Photomator.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const chxm1023 = {};
const chxm1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "pixelmator_photo_pro_access";
const chxm = "pixelmator_photo_lifetime_v1_pro_offer";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  chxm1023.headers = $request.headers;
} else if (chxm1024 && chxm1024.subscriber) {
  data = {
 "Author": "chxm1023",
 "Telegram" : "https://t.me/chxm1023",
 "warning": "仅供学习，禁止转载或售卖",
 //"expires_date": "2099-09-09T09:09:09Z",
 "purchase_date": "2022-09-09T09:09:09Z"
 };
  chxm1024.subscriber.subscriptions[(chxm)] = {
 "Author": "chxm1023",
 "Telegram" : "https://t.me/chxm1023",
 "warning": "仅供学习，禁止转载或售卖",
 "original_purchase_date": "2022-09-09T09:09:09Z",
 "period_type" : "1",
 "purchase_date": "2022-09-09T09:09:09Z",
 //"expires_date": "2099-09-09T09:09:09Z",
 "store" : "app_store",
 "ownership_type": "PURCHASED"
 };
  chxm1024.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  chxm1024.subscriber.entitlements[(name)].product_identifier = (chxm);
  chxm1023.body = JSON.stringify(chxm1024);
}

$done(chxm1023);