var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 839285684,
    "app_item_id": 839285684,
    "bundle_id": "com.oneothergame.7min-fitness",
    "application_version": "5.11.0.2",
    "download_id": 501362330577209841,
    "version_external_identifier": 848489264,
    "receipt_creation_date": "2022-05-01 16:48:56 Etc/GMT",
    "receipt_creation_date_ms": "1651423736000",
    "receipt_creation_date_pst": "2022-05-01 09:48:56 America/Los_Angeles",
    "request_date": "2022-05-01 16:49:42 Etc/GMT",
    "request_date_ms": "1651423782098",
    "request_date_pst": "2022-05-01 09:49:42 America/Los_Angeles",
    "original_purchase_date": "2022-05-01 09:39:00 Etc/GMT",
    "original_purchase_date_ms": "1651397940000",
    "original_purchase_date_pst": "2022-05-01 02:39:00 America/Los_Angeles",
    "original_application_version": "5.11.0.2",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.oneothergame.7min_fitness.supporter_yearly_02",
      "transaction_id": "190001280441907",
      "original_transaction_id": "190001280441907",
      "purchase_date": "2022-05-01 16:46:30 Etc/GMT",
      "purchase_date_ms": "1651423590000",
      "purchase_date_pst": "2022-05-01 09:46:30 America/Los_Angeles",
      "original_purchase_date": "2022-05-01 16:46:30 Etc/GMT",
      "original_purchase_date_ms": "1651423590000",
      "original_purchase_date_pst": "2022-05-01 09:46:30 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000556062895",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.oneothergame.7min_fitness.supporter_yearly_02",
    "transaction_id": "190001280441907",
    "original_transaction_id": "190001280441907",
    "purchase_date": "2022-05-01 16:46:30 Etc/GMT",
    "purchase_date_ms": "1651423590000",
    "purchase_date_pst": "2022-05-01 09:46:30 America/Los_Angeles",
    "original_purchase_date": "2022-05-01 16:46:30 Etc/GMT",
    "original_purchase_date_ms": "1651423590000",
    "original_purchase_date_pst": "2022-05-01 09:46:30 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000556062895",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20506528"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.oneothergame.7min_fitness.supporter_yearly_02",
    "product_id": "com.oneothergame.7min_fitness.supporter_yearly_02",
    "original_transaction_id": "190001280441907",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj);
$done({body});
