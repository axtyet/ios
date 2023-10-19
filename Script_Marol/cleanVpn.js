var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1446749209,
    "app_item_id": 1446749209,
    "bundle_id": "com.vpn.proxymaster",
    "application_version": "1.1",
    "download_id": 501342006065497195,
    "version_external_identifier": 847843518,
    "receipt_creation_date": "2022-04-24 07:36:18 Etc/GMT",
    "receipt_creation_date_ms": "1650785778000",
    "receipt_creation_date_pst": "2022-04-24 00:36:18 America/Los_Angeles",
    "request_date": "2022-04-24 07:36:36 Etc/GMT",
    "request_date_ms": "1650785796433",
    "request_date_pst": "2022-04-24 00:36:36 America/Los_Angeles",
    "original_purchase_date": "2022-04-24 05:20:07 Etc/GMT",
    "original_purchase_date_ms": "1650777607000",
    "original_purchase_date_pst": "2022-04-23 22:20:07 America/Los_Angeles",
    "original_application_version": "1.1",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.vpn.proxymaster.year",
      "transaction_id": "190001274087671",
      "original_transaction_id": "190001274087671",
      "purchase_date": "2022-04-24 07:36:17 Etc/GMT",
      "purchase_date_ms": "1650785777000",
      "purchase_date_pst": "2022-04-24 00:36:17 America/Los_Angeles",
      "original_purchase_date": "2022-04-24 07:36:18 Etc/GMT",
      "original_purchase_date_ms": "1650785778000",
      "original_purchase_date_pst": "2022-04-24 00:36:18 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000552575226",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.vpn.proxymaster.year",
    "transaction_id": "190001274087671",
    "original_transaction_id": "190001274087671",
    "purchase_date": "2022-04-24 07:36:17 Etc/GMT",
    "purchase_date_ms": "1650785777000",
    "purchase_date_pst": "2022-04-24 00:36:17 America/Los_Angeles",
    "original_purchase_date": "2022-04-24 07:36:18 Etc/GMT",
    "original_purchase_date_ms": "1650785778000",
    "original_purchase_date_pst": "2022-04-24 00:36:18 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000552575226",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20498797"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.vpn.proxymaster.year",
    "product_id": "com.vpn.proxymaster.year",
    "original_transaction_id": "190001274087671",
    "auto_renew_status": "1"
  }],
  "status": 0
}


body = JSON.stringify(obj);
$done({body});
