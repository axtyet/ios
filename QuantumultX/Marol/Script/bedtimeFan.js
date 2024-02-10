var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "com.bedtimefan.entitlement.campfire": {
        "expires_date": "2029-05-08T15:24:07Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.ellisapps.bedtimesleepfanlite.SubscriptionYearlyL19Y_F1W",
        "purchase_date": "2022-05-01T15:24:07Z"
      },
      "com.bedtimefan.entitlement.crickets": {
        "expires_date": "2029-05-08T15:24:07Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.ellisapps.bedtimesleepfanlite.SubscriptionYearlyL19Y_F1W",
        "purchase_date": "2022-05-01T15:24:07Z"
      },
      "com.bedtimefan.entitlement.premium": {
        "expires_date": "2029-05-08T15:24:07Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.ellisapps.bedtimesleepfanlite.SubscriptionYearlyL19Y_F1W",
        "purchase_date": "2022-05-01T15:24:07Z"
      },
      "com.bedtimefan.entitlement.rain": {
        "expires_date": "2029-05-08T15:24:07Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.ellisapps.bedtimesleepfanlite.SubscriptionYearlyL19Y_F1W",
        "purchase_date": "2022-05-01T15:24:07Z"
      },
      "com.bedtimefan.entitlement.removeAds": {
        "expires_date": "2029-05-08T15:24:07Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.ellisapps.bedtimesleepfanlite.SubscriptionYearlyL19Y_F1W",
        "purchase_date": "2022-05-01T15:24:07Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "com.ellisapps.bedtimesleepfanlite.SubscriptionYearlyL19Y_F1W": {
        "billing_issues_detected_at": null,
        "expires_date": "2029-05-08T15:24:07Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-05-01T15:24:07Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-05-01T15:24:07Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
  }

body = JSON.stringify(obj);
$done({body});
