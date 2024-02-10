var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1221965482,
    "app_item_id": 1221965482,
    "bundle_id": "com.vgfit.waterreminder",
    "application_version": "1.7.28",
    "download_id": 501362343678727411,
    "version_external_identifier": 843068428,
    "receipt_creation_date": "2022-05-02 15:50:37 Etc/GMT",
    "receipt_creation_date_ms": "1651506637000",
    "receipt_creation_date_pst": "2022-05-02 08:50:37 America/Los_Angeles",
    "request_date": "2022-05-02 15:51:22 Etc/GMT",
    "request_date_ms": "1651506682110",
    "request_date_pst": "2022-05-02 08:51:22 America/Los_Angeles",
    "original_purchase_date": "2022-05-01 09:45:41 Etc/GMT",
    "original_purchase_date_ms": "1651398341000",
    "original_purchase_date_pst": "2022-05-01 02:45:41 America/Los_Angeles",
    "original_application_version": "1.7.28",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.vgfit.waterreminder.year",
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
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.vgfit.waterreminder.year",
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
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20560831"
  }],
  "latest_receipt": "",
    "pending_renewal_info": [{
    "auto_renew_product_id": "com.vgfit.waterreminder.year",
    "product_id": "com.vgfit.waterreminder.year",
    "original_transaction_id": "190001281277445",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj);
$done({body});
