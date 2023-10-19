var body = $response.body;
var obj = JSON.parse(body);

obj.data.app_receipt = {
      "verified_at": "2022-04-25T11:02:19+00:00",
      "intro_offer_used_product_ids": ["com.cardinalblue.PicCollage.subscription.annual.promotion"],
      "pending_renewal_info": {
        "edges": [{
          "node": {
            "product_id": "com.cardinalblue.PicCollage.subscription.annual.promotion",
            "auto_renew_status": true,
            "expiration_intent": null
          }
        }]
      },
      "purchases": {
        "edges": [{
          "node": {
            "product_id": "com.cardinalblue.PicCollage.subscription.annual.promotion",
            "transaction_id": "190001274994143",
            "purchased_at": "2022-04-25T11:02:14+00:00",
            "expires_at": "2029-05-02T11:02:14+00:00",
            "verified_at": "2022-04-25T11:02:19+00:00",
            "canceled_at": null,
            "is_trial_period": false,
            "is_in_intro_offer_period": false
          }
        }]
      },
      "is_free_trial_eligible": false
    }

body = JSON.stringify(obj);
$done({body});
