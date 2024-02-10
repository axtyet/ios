var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 944665061,
    "app_item_id": 944665061,
    "bundle_id": "com.loveyouchenapps.knockout",
    "application_version": "7.38",
    "download_id": 501371116553047653,
    "version_external_identifier": 848703603,
    "receipt_creation_date": "2022-05-04 12:11:38 Etc/GMT",
    "receipt_creation_date_ms": "1651666298000",
    "receipt_creation_date_pst": "2022-05-04 05:11:38 America/Los_Angeles",
    "request_date": "2022-05-04 12:11:39 Etc/GMT",
    "request_date_ms": "1651666299863",
    "request_date_pst": "2022-05-04 05:11:39 America/Los_Angeles",
    "original_purchase_date": "2022-05-04 12:06:29 Etc/GMT",
    "original_purchase_date_ms": "1651665989000",
    "original_purchase_date_pst": "2022-05-04 05:06:29 America/Los_Angeles",
    "original_application_version": "7.38",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.knockout.7daysplus",
      "transaction_id": "190001282772956",
      "original_transaction_id": "190001282772956",
      "purchase_date": "2022-05-04 12:11:15 Etc/GMT",
      "purchase_date_ms": "1651666275000",
      "purchase_date_pst": "2022-05-04 05:11:15 America/Los_Angeles",
      "original_purchase_date": "2022-05-04 12:11:16 Etc/GMT",
      "original_purchase_date_ms": "1651666276000",
      "original_purchase_date_pst": "2022-05-04 05:11:16 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000557319569",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.knockout.7daysplus",
    "transaction_id": "190001282772956",
    "original_transaction_id": "190001282772956",
    "purchase_date": "2022-05-04 12:11:15 Etc/GMT",
    "purchase_date_ms": "1651666275000",
    "purchase_date_pst": "2022-05-04 05:11:15 America/Los_Angeles",
    "original_purchase_date": "2022-05-04 12:11:16 Etc/GMT",
    "original_purchase_date_ms": "1651666276000",
    "original_purchase_date_pst": "2022-05-04 05:11:16 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000557319569",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20386379"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.knockout.7daysplus",
    "product_id": "com.knockout.7daysplus",
    "original_transaction_id": "190001282772956",
    "auto_renew_status": "1"
  }],
  "status": 0
}
  
body = JSON.stringify(obj);
$done({body});
