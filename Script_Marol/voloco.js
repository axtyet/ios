var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1052970183,
    "app_item_id": 1052970183,
    "bundle_id": "com.resonantcavity.Voloco",
    "application_version": "411",
    "download_id": 501793334888893955,
    "version_external_identifier": 852334453,
    "receipt_creation_date": "2022-09-30 15:40:21 Etc/GMT",
    "receipt_creation_date_ms": "1664552421000",
    "receipt_creation_date_pst": "2022-09-30 08:40:21 America/Los_Angeles",
    "request_date": "2022-09-30 15:40:42 Etc/GMT",
    "request_date_ms": "1664552442535",
    "request_date_pst": "2022-09-30 08:40:42 America/Los_Angeles",
    "original_purchase_date": "2022-09-30 15:17:59 Etc/GMT",
    "original_purchase_date_ms": "1664551079000",
    "original_purchase_date_pst": "2022-09-30 08:17:59 America/Los_Angeles",
    "original_application_version": "411",
    "in_app": [{
      "quantity": "1",
      "product_id": "jean_laroche",
      "transaction_id": "190001281277445",
      "original_transaction_id": "190001281277445",
      "purchase_date": "2022-05-02 15:50:36 Etc/GMT",
      "purchase_date_ms": "1651506636000",
      "purchase_date_pst": "2022-05-02 08:50:36 America/Los_Angeles",
      "original_purchase_date": "2022-05-02 15:50:37 Etc/GMT",
      "original_purchase_date_ms": "1651506637000",
      "original_purchase_date_pst": "2022-05-02 08:50:37 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000556503417",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "jean_laroche",
    "transaction_id": "190001281277445",
    "original_transaction_id": "190001281277445",
    "purchase_date": "2022-05-02 15:50:36 Etc/GMT",
    "purchase_date_ms": "1651506636000",
    "purchase_date_pst": "2022-05-02 08:50:36 America/Los_Angeles",
    "original_purchase_date": "2022-05-02 15:50:37 Etc/GMT",
    "original_purchase_date_ms": "1651506637000",
    "original_purchase_date_pst": "2022-05-02 08:50:37 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000556503417",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20560831"
  }],
  "latest_receipt": "",
    "pending_renewal_info": [{
    "auto_renew_product_id": "jean_laroche",
    "product_id": "jean_laroche",
    "original_transaction_id": "190001281277445",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj);
$done({body});
