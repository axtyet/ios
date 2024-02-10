var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "co.bergen.Darkroom.entitlement.allToolsAndFilters": {
        "expires_date": "2029-07-15T05:14:16Z",
        "grace_period_expires_date": null,
        "product_identifier": "co.bergen.Darkroom.product.year.everything",
        "purchase_date": "2022-07-08T05:14:16Z"
      },
      "co.bergen.Darkroom.entitlement.selectiveAdjustments": {
        "expires_date": "2029-07-15T05:14:16Z",
        "grace_period_expires_date": null,
        "product_identifier": "co.bergen.Darkroom.product.year.everything",
        "purchase_date": "2022-07-08T05:14:16Z"
      }
    },
  
obj.subscriber.subscriptions = {
      "co.bergen.Darkroom.product.year.everything": {
        "billing_issues_detected_at": null,
        "expires_date": "2029-07-15T05:14:16Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-07-08T05:14:17Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-07-08T05:14:16Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }


body = JSON.stringify(obj); 
$done({body});
