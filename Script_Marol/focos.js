var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1274938524,
    "app_item_id": 1274938524,
    "bundle_id": "com.focos",
    "application_version": "6132",
    "download_id": 501376268183363710,
    "version_external_identifier": 848663411,
    "receipt_creation_date": "2022-05-06 13:54:25 Etc/GMT",
    "receipt_creation_date_ms": "1651845265000",
    "receipt_creation_date_pst": "2022-05-06 06:54:25 America/Los_Angeles",
    "request_date": "2022-05-06 13:55:53 Etc/GMT",
    "request_date_ms": "1651845353338",
    "request_date_pst": "2022-05-06 06:55:53 America/Los_Angeles",
    "original_purchase_date": "2022-05-06 07:46:40 Etc/GMT",
    "original_purchase_date_ms": "1651823200000",
    "original_purchase_date_pst": "2022-05-06 00:46:40 America/Los_Angeles",
    "original_application_version": "6132",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.focos.1w_t4_1w",
      "transaction_id": "210001095303830",
      "original_transaction_id": "210001095303830",
      "purchase_date": "2022-05-06 10:42:46 Etc/GMT",
      "purchase_date_ms": "1651833766000",
      "purchase_date_pst": "2022-05-06 03:42:46 America/Los_Angeles",
      "original_purchase_date": "2022-05-06 10:42:47 Etc/GMT",
      "original_purchase_date_ms": "1651833767000",
      "original_purchase_date_pst": "2022-05-06 03:42:47 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "210000467214276",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.focos.1w_t4_1w",
    "transaction_id": "210001095303830",
    "original_transaction_id": "210001095303830",
    "purchase_date": "2022-05-06 10:42:46 Etc/GMT",
    "purchase_date_ms": "1651833766000",
    "purchase_date_pst": "2022-05-06 03:42:46 America/Los_Angeles",
    "original_purchase_date": "2022-05-06 10:42:47 Etc/GMT",
    "original_purchase_date_ms": "1651833767000",
    "original_purchase_date_pst": "2022-05-06 03:42:47 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "210000467214276",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20939412"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.focos.1w_t4_1w",
    "product_id": "com.focos.1w_t4_1w",
    "original_transaction_id": "210001095303830",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj);
$done({body});
