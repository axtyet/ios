var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "Gold":{
              "expires_date":"2029-05-26T05:05:04Z",
              "product_identifier":"rc_4999_1y_7d_antares",
              "purchase_date":"2022-04-09T05:05:04Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "rc_4999_1y_7d_antares":{
              "billing_issues_detected_at":null,
              "expires_date":"2029-05-26T05:05:04Z",
              "is_sandbox":false,
              "original_purchase_date":"2022-04-09T05:05:04Z",
              "ownership_type": "PURCHASED",
              "period_type":"normal",
              "purchase_date":"2022-04-09T05:05:04Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
      }
  }

body = JSON.stringify(obj);
$done({body});
