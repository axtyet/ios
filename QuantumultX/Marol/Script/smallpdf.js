var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "success": true,
  "data": {
    "identities": [{
      "connection": "Username-Password-Authentication",
      "provider": "smallpdf",
      "isSocial": false
    }],
    "email_verified": true,
    "created_at": "2022-04-12T15:36:31Z",
    "app_metadata": {
      "mobile_user": true,
      "is_in_free_trial_period": true,
      "expirationDate": "2099-04-16",
      "signedUp": true,
      "canceled": true,
      "is_in_free_trial_period": true,
      "app_store": {
        "plan_id": "desktop-monthly-usd",
        "country_geoip": "CN"
      },
      "free_trial_series_sent_at": "2022-04-10T08:46:56",
      "free_trial_series": "email_trial_original",
      "subscription_platform": "ios",
      "free_trial_user": true,
      "trial_duration": "1000",
      "grace_period": 16,
      "has_business_email": true,
      "has_business_email": true,
      "lock": "0001-01-01T00:00:00Z",
      "is_migrated_keycloak": true,
      "disputes": {},
      "subscription": {
        "previous_platforms": {}
      }
    },
    "user_metadata": {
      "language": "zh"
    },
  }
}


body = JSON.stringify(obj);
$done({body});
