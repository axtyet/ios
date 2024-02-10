/*************************************
  
‎脚本功能：TouchRetouch——解锁订阅
下载地址：https://apps.apple.com/us/app/touchretouch/id373311252
软件版本：5.1.9
脚本作者：转载于Guding88
更新时间：2023-8-5
TG反馈群：https://t.me/GudingChat
TG频道群：https://t.me/Guding88
使用声明：此脚本仅供学习与交流，请勿贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/Reviewa/Review/main/TouchRetouch.js

[MITM]
hostname = api.revenuecat.com

*******************************/

const guding = {};
const guding6 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  guding.headers = $request.headers;
} else if (guding6 && guding6.subscriber) {
  guding6.subscriber.subscriptions = guding6.subscriber.subscriptions || {};
  guding6.subscriber.entitlement = guding6.subscriber.entitlement || {};
  const app = 'gd';const list = {'gd':{name: 'premium', id: 'tr5_yearlysubsc_20dlrs_1'}};
  const data = {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"};
for (const i in list) { if (new RegExp(`^${i}`, `i`).test(app)) {
guding6.subscriber.subscriptions[list[i].id] = data;
guding6.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
guding6.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
                break;
          }
    }
    guding.body = JSON.stringify(guding6);
}
$done(guding);
