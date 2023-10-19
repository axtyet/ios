var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1569291816,
    "app_item_id": 1569291816,
    "bundle_id": "com.bestcool.photoscanner",
    "application_version": "40",
    "download_id": 500935934584949171,
    "version_external_identifier": 846821007,
    "receipt_creation_date": "2022-01-26 02:55:19 Etc/GMT",
    "receipt_creation_date_ms": "1643165719000",
    "receipt_creation_date_pst": "2022-01-25 18:55:19 America/Los_Angeles",
    "request_date": "2022-02-05 17:13:48 Etc/GMT",
    "request_date_ms": "1644081228639",
    "request_date_pst": "2022-02-05 09:13:48 America/Los_Angeles",
    "original_purchase_date": "2021-12-01 19:01:34 Etc/GMT",
    "original_purchase_date_ms": "1638385294000",
    "original_purchase_date_pst": "2021-12-01 11:01:34 America/Los_Angeles",
    "original_application_version": "22",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.photoscanners.yearly",
      "transaction_id": "730000766600650",
      "original_transaction_id": "730000766600650",
      "purchase_date": "2021-11-25 17:07:45 Etc/GMT",
      "purchase_date_ms": "1637860065000",
      "purchase_date_pst": "2021-11-25 09:07:45 America/Los_Angeles",
      "original_purchase_date": "2021-11-25 17:07:48 Etc/GMT",
      "original_purchase_date_ms": "1637860068000",
      "original_purchase_date_pst": "2021-11-25 09:07:48 America/Los_Angeles",
      "expires_date": "2099-09-09 17:07:45 Etc/GMT",
      "expires_date_ms": "4092647115000",
      "expires_date_pst": "2099-09-09 09:07:45 America/Los_Angeles",
      "web_order_line_item_id": "730000330755327",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.photoscanners.yearly",
    "transaction_id": "730000766600650",
    "original_transaction_id": "730000766600650",
    "purchase_date": "2021-11-25 17:07:45 Etc/GMT",
    "purchase_date_ms": "1637860065000",
    "purchase_date_pst": "2021-11-25 09:07:45 America/Los_Angeles",
    "original_purchase_date": "2021-11-25 17:07:48 Etc/GMT",
    "original_purchase_date_ms": "1637860068000",
    "original_purchase_date_pst": "2021-11-25 09:07:48 America/Los_Angeles",
    "expires_date": "2099-09-09 17:07:45 Etc/GMT",
    "expires_date_ms": "4092647115000",
    "expires_date_pst": "2099-09-09 09:07:45 America/Los_Angeles",
    "web_order_line_item_id": "730000330755327",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20902245"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.photoscanners.yearly",
    "product_id": "com.photoscanners.yearly",
    "original_transaction_id": "730000766600650",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj);
$done({body});
