var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1177964608,
    "app_item_id": 1177964608,
    "bundle_id": "ch.b-eng.tor",
    "application_version": "2.7.1",
    "download_id": 501340400353829181,
    "version_external_identifier": 846682500,
    "receipt_creation_date": "2022-04-23 17:54:34 Etc/GMT",
    "receipt_creation_date_ms": "1650736474000",
    "receipt_creation_date_pst": "2022-04-23 10:54:34 America/Los_Angeles",
    "request_date": "2022-04-23 17:54:55 Etc/GMT",
    "request_date_ms": "1650736495477",
    "request_date_pst": "2022-04-23 10:54:55 America/Los_Angeles",
    "original_purchase_date": "2022-04-23 15:43:43 Etc/GMT",
    "original_purchase_date_ms": "1650728623000",
    "original_purchase_date_pst": "2022-04-23 08:43:43 America/Los_Angeles",
    "original_application_version": "2.7.1",
    "in_app": [{
      "quantity": "1",
      "product_id": "annually.subscription.key",
      "transaction_id": "190001273654795",
      "original_transaction_id": "190001273654795",
      "purchase_date": "2022-04-23 17:54:33 Etc/GMT",
      "purchase_date_ms": "1650736473000",
      "purchase_date_pst": "2022-04-23 10:54:33 America/Los_Angeles",
      "original_purchase_date": "2022-04-23 17:54:33 Etc/GMT",
      "original_purchase_date_ms": "1650736473000",
      "original_purchase_date_pst": "2022-04-23 10:54:33 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000552348620",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "annually.subscription.key",
    "transaction_id": "190001273654795",
    "original_transaction_id": "190001273654795",
    "purchase_date": "2022-04-23 17:54:33 Etc/GMT",
    "purchase_date_ms": "1650736473000",
    "purchase_date_pst": "2022-04-23 10:54:33 America/Los_Angeles",
    "original_purchase_date": "2022-04-23 17:54:33 Etc/GMT",
    "original_purchase_date_ms": "1650736473000",
    "original_purchase_date_pst": "2022-04-23 10:54:33 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000552348620",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20833022"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "annually.subscription.key",
    "product_id": "annually.subscription.key",
    "original_transaction_id": "190001273654795",
    "auto_renew_status": "1"
  }],
  "status": 0
}


body = JSON.stringify(obj);
$done({body});
