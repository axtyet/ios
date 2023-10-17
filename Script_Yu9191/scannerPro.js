/*************************************

项目名称：ScannerPro
使用说明：失败就下载重新安装
特别说明：已经安装的 开规则进 解锁试用到期2099

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Yu9191/Script/main/scannerPro.js

#^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Yu9191/Script/main/scannerPro.js


[mitm]
hostname = api.revenuecat.com

*************************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms" : 1591358081473,
  "request_date" : "2021-06-05T11:54:41Z",
  "subscriber" : {
    "last_seen" : "2021-06-05T11:46:28Z",
    "first_seen" : "2021-05-29T07:59:41Z",
    "original_application_version" : "514",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.readdle.Scanner.subscription.year25" : {
        "is_sandbox" : false,
        "period_type" : "normal",
        "billing_issues_detected_at" : null,
        "unsubscribe_detected_at" : null,
        "expires_date" : "2099-09-18T07:52:54Z",
        "original_purchase_date" : "2021-02-11T07:52:55Z",
        "purchase_date" : "2021-02-11T07:52:54Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "plus" : {
        "expires_date" : "2099-02-18T07:52:54Z",
        "product_identifier" : "com.readdle.Scanner.subscription.year25",
        "purchase_date" : "2021-02-11T07:52:54Z"
      }
    },
    "original_purchase_date" : "2021-05-29T07:47:32Z",
    "original_app_user_id" : "baby",
    "non_subscriptions" : {

    }
  }
}


$done({body : JSON.stringify(objc)});
