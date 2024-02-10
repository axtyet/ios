var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1194023242,
    "app_item_id": 1194023242,
    "bundle_id": "net.daylio.Daylio",
    "application_version": "125",
    "download_id": 501367756637789842,
    "version_external_identifier": 848294512,
    "receipt_creation_date": "2022-05-03 15:20:27 Etc/GMT",
    "receipt_creation_date_ms": "1651591227000",
    "receipt_creation_date_pst": "2022-05-03 08:20:27 America/Los_Angeles",
    "request_date": "2022-05-03 15:20:44 Etc/GMT",
    "request_date_ms": "1651591244961",
    "request_date_pst": "2022-05-03 08:20:44 America/Los_Angeles",
    "original_purchase_date": "2022-05-03 07:38:10 Etc/GMT",
    "original_purchase_date_ms": "1651563490000",
    "original_purchase_date_pst": "2022-05-03 00:38:10 America/Los_Angeles",
    "original_application_version": "125",
    "in_app": [{
      "quantity": "1",
      "product_id": "net.daylio.one_year_pro.offer_initial",
      "transaction_id": "190001282075869",
      "original_transaction_id": "190001282075869",
      "purchase_date": "2022-05-03 15:20:27 Etc/GMT",
      "purchase_date_ms": "1651591227000",
      "purchase_date_pst": "2022-05-03 08:20:27 America/Los_Angeles",
      "original_purchase_date": "2022-05-03 15:20:27 Etc/GMT",
      "original_purchase_date_ms": "1651591227000",
      "original_purchase_date_pst": "2022-05-03 08:20:27 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000556938597",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "net.daylio.one_year_pro.offer_initial",
    "transaction_id": "190001282075869",
    "original_transaction_id": "190001282075869",
    "purchase_date": "2022-05-03 15:20:27 Etc/GMT",
    "purchase_date_ms": "1651591227000",
    "purchase_date_pst": "2022-05-03 08:20:27 America/Los_Angeles",
    "original_purchase_date": "2022-05-03 15:20:27 Etc/GMT",
    "original_purchase_date_ms": "1651591227000",
    "original_purchase_date_pst": "2022-05-03 08:20:27 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000556938597",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20512870"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "net.daylio.one_year_pro.offer_initial",
    "product_id": "net.daylio.one_year_pro.offer_initial",
    "original_transaction_id": "190001282075869",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj); 
$done({body});
