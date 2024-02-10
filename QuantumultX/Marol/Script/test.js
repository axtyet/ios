var body = $response.body;
var obj = JSON.parse(body);

obj.data.me.tier = "pro",
obj.data.me.normalized_user_tier = "pro", 
obj.data.me.user_subscriptions = [{
        "id": "385846",
        "plan_id": "pro",
        "expires_at": "2022-10-07 22:40:28 -0700",
        "status": "active",
        "payment_type": "apple"
      }],      
obj.data.me.normalized_user_tier = "pro", 
obj.data.me.applet_quota_slots_total = -1,
obj.data.me.applet_quota_slots_remaining = -1, 
obj.data.me.permissions = {
        "filter_code": {
          "minimum_tier": "pro",
          "permitted": true
        },
        "multi_action": {
          "minimum_tier": "intermediate_pro",
          "permitted": true
        },
        "queries": {
          "minimum_tier": "pro",
          "permitted": true
        },
        "multi_service_account": {
          "minimum_tier": "pro",
          "permitted": true
        }
      }


  

body = JSON.stringify(obj); 
$done({body});
