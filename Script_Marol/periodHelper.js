var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "Premium": {
        "expires_date": "2029-05-04T16:32:33Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.lbrc.PeriodCalendar.premium.yearly",
        "purchase_date": "2022-05-01T16:32:33Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "com.lbrc.PeriodCalendar.premium.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2029-05-08T15:24:07Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-05-01T15:24:07Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-05-01T15:24:07Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
  }

body = JSON.stringify(obj);
$done({body});
