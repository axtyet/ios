var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "result" : {
    "subscriptionTrialPeriod" : false,
    "subscriptionExpirationDateMs" : 1872518379000,
    "isEligibleForFreeTrial" : true,
    "subscriptionProductId" : "com.Yooshr.Giftr.subscriptionPremium.Yearly",
    "originalAppVersion" : "1205",
    "subscriptionAutoRenewStatus" : 1,
    "subscriber_platform" : "ios",
    "isValidSubscriber" : true,
    "isEligibleForSubscriptionOffer" : true,
    "subscriptionDateLastVerified" : 1651654341272,
    "subscriptionAutoRenewPreference" : "com.Yooshr.Giftr.subscriptionPremium.Yearly"
  }
}


body = JSON.stringify(obj);
$done({body});
