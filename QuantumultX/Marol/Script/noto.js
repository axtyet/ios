var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "pro": {
        "expires_date": "2029-06-14T13:54:33Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.lkzhao.editor.pro.ios.monthly",
        "purchase_date": "2022-06-11T13:54:33Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "com.lkzhao.editor.pro.ios.monthly": {
        "billing_issues_detected_at": null,
        "expires_date": "2029-06-14T13:54:33Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-06-11T13:54:34Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-06-11T13:54:33Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
  }

body = JSON.stringify(obj);
$done({body});
