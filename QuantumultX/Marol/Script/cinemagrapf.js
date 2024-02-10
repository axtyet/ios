#https://api.flixel.com/api/verify_credentials url script-response-body cinemagrapf.js


var body = $response.body;
var obj = JSON.parse(body);

obj.subscription = {
    "includes_hosting": false,
    "merchant": "apple",
    "keys2": ["apps", "last_verified_date", "merchant", "plan"],
    "display_name": "Cinemagraph Pro for iOS",
    "auto_renew": true,
    "embed_count": 0,
    "merchant_billing_url": "https://apps.apple.com/account/billing",
    "apps": "com.flixel.cinemagraphpro",
    "signature2": "",
    "embed_count_limit": null,
    "storage_limit": 1073741824,
    "expiry_date": "2029-08-13T16:18:50Z",
    "usage_reset_date": null,
    "plan": "cp-ios",
    "plan_exceeded": false,
    "merchant_manage_url": "https://apps.apple.com/account/subscriptions",
    "last_verified_date": "2022-08-06T16:19:25Z",
    "past_due": false,
    "storage_usage": 0,
    "churned": false
  },


body = JSON.stringify(obj);
$done({body});
