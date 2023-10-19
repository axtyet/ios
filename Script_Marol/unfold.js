var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1247275033,
    "app_item_id": 1247275033,
    "bundle_id": "com.moonlab.unfoldstories",
    "application_version": "31560",
    "download_id": 501345079598029112,
    "version_external_identifier": 848318690,
    "receipt_creation_date": "2022-04-25 07:46:29 Etc/GMT",
    "receipt_creation_date_ms": "1650872789000",
    "receipt_creation_date_pst": "2022-04-25 00:46:29 America/Los_Angeles",
    "request_date": "2022-04-25 07:46:30 Etc/GMT",
    "request_date_ms": "1650872790815",
    "request_date_pst": "2022-04-25 00:46:30 America/Los_Angeles",
    "original_purchase_date": "2022-04-25 07:23:59 Etc/GMT",
    "original_purchase_date_ms": "1650871439000",
    "original_purchase_date_pst": "2022-04-25 00:23:59 America/Los_Angeles",
    "original_application_version": "31560",
    "in_app": [{
      "quantity": "1",
      "product_id": "UNFOLD_FOR_BRANDS_YEAR",
      "transaction_id": "190001274894730",
      "original_transaction_id": "190001274894730",
      "purchase_date": "2022-04-25 07:45:59 Etc/GMT",
      "purchase_date_ms": "1650872759000",
      "purchase_date_pst": "2022-04-25 00:45:59 America/Los_Angeles",
      "original_purchase_date": "2022-04-25 07:46:00 Etc/GMT",
      "original_purchase_date_ms": "1650872760000",
      "original_purchase_date_pst": "2022-04-25 00:46:00 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000553019461",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "UNFOLD_FOR_BRANDS_YEAR",
    "transaction_id": "190001274894730",
    "original_transaction_id": "190001274894730",
    "purchase_date": "2022-04-25 07:45:59 Etc/GMT",
    "purchase_date_ms": "1650872759000",
    "purchase_date_pst": "2022-04-25 00:45:59 America/Los_Angeles",
    "original_purchase_date": "2022-04-25 07:46:00 Etc/GMT",
    "original_purchase_date_ms": "1650872760000",
    "original_purchase_date_pst": "2022-04-25 00:46:00 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000553019461",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20524427"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "UNFOLD_FOR_BRANDS_YEAR",
    "product_id": "UNFOLD_FOR_BRANDS_YEAR",
    "original_transaction_id": "190001274894730",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj);
$done({body});
