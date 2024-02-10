var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1532637143,
    "app_item_id": 1532637143,
    "bundle_id": "co.vulcanlabs.batterywidget",
    "application_version": "3",
    "download_id": 501348947990994310,
    "version_external_identifier": 840820766,
    "receipt_creation_date": "2022-04-26 17:03:59 Etc/GMT",
    "receipt_creation_date_ms": "1650992639000",
    "receipt_creation_date_pst": "2022-04-26 10:03:59 America/Los_Angeles",
    "request_date": "2022-04-26 17:04:18 Etc/GMT",
    "request_date_ms": "1650992658490",
    "request_date_pst": "2022-04-26 10:04:18 America/Los_Angeles",
    "original_purchase_date": "2022-04-26 16:11:03 Etc/GMT",
    "original_purchase_date_ms": "1650989463000",
    "original_purchase_date_pst": "2022-04-26 09:11:03 America/Los_Angeles",
    "original_application_version": "3",
    "in_app": [{
      "quantity": "1",
      "product_id": "co.vulcanlabs.batterywidget.lifetime",
      "transaction_id": "190001276009392",
      "original_transaction_id": "190001276009392",
      "purchase_date": "2022-04-26 17:03:58 Etc/GMT",
      "purchase_date_ms": "1650992638000",
      "purchase_date_pst": "2022-04-26 10:03:58 America/Los_Angeles",
      "original_purchase_date": "2022-04-26 17:03:59 Etc/GMT",
      "original_purchase_date_ms": "1650992639000",
      "original_purchase_date_pst": "2022-04-26 10:03:59 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000553653902",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "co.vulcanlabs.batterywidget.lifetime",
    "transaction_id": "190001276009392",
    "original_transaction_id": "190001276009392",
    "purchase_date": "2022-04-26 17:03:58 Etc/GMT",
    "purchase_date_ms": "1650992638000",
    "purchase_date_pst": "2022-04-26 10:03:58 America/Los_Angeles",
    "original_purchase_date": "2022-04-26 17:03:59 Etc/GMT",
    "original_purchase_date_ms": "1650992639000",
    "original_purchase_date_pst": "2022-04-26 10:03:59 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000553653902",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20689215"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "co.vulcanlabs.batterywidget.lifetime",
    "product_id": "co.vulcanlabs.batterywidget.lifetime",
    "original_transaction_id": "190001276009392",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj);
$done({body});
