var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "latestSubscriptionReceipts": [{
    "lastRefreshDateMs": 1655361934442,
    "authToken": "",
    "productId": "com.andyworks.weather.yearlyPatron",
    "groupId": "20717154",
    "expiresDateMs": 1876286918000,
    "purchaseDateMs": 1655361843000,
    "originalPurchaseDateMs": 1655361844000,
    "isOriginalBeliever": true,
    "cancellationDateMs": null,
    "originalTransactionId": "210001122188900",
    "isTrialPeriod": false,
    "sourceBundleId": "com.andyworks.weather",
    "expirationIntent": "",
    "autoRenewStatus": "1",
    "autoRenewProductId": "com.andyworks.weather.yearlyPatron",
    "isInBillingRetryPeriod": false
  }]
}


body = JSON.stringify(obj);
$done({body});
