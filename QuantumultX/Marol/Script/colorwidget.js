var obj = JSON.parse($response.body);

obj.subscriber.entitlements = {
      "pro":{
              "expires_date":"2029-05-26T05:05:04Z",
              "product_identifier":"cw_1999_ly_3d0",
              "purchase_date":"2022-04-09T05:05:04Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "cw_1999_ly_3d0":{
              "billing_issues_detected_at":null,
              "expires_date":"2029-05-26T05:05:04Z",
              "is_sandbox":false,
              "original_purchase_date":"2022-04-09T05:05:04Z",
              "period_type":"normal",
              "purchase_date":"2022-04-09T05:05:04Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
      }
  }

$done({body: JSON.stringify(obj)});
