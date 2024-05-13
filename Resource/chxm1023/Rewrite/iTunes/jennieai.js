/*************************************

项目名称：Jennie-AI
下载地址：https://too.st/6lZ
更新日期：2023-11-17
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/chxm1023/Rewrite/iTunes/jennieai.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "status" : 0,
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1645846825,
    "receipt_creation_date" : "2023-11-21 16:43:28 Etc/GMT",
    "bundle_id" : "com.skysoft.text2image",
    "original_purchase_date" : "2023-11-21 14:32:43 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1694250549000",
        "expires_date" : "2099-09-09 09:09:09 Etc/GMT",
        "expires_date_pst" : "2099-09-09 06:06:06 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "490001314520000",
        "is_trial_period" : "false",
        "original_transaction_id" : "490001314520000",
        "purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
        "product_id" : "com.skysoft.text2img.vip.yearly",
        "original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1694250550000",
        "web_order_line_item_id" : "490000123456789",
        "expires_date_ms" : "4092599349000",
        "purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
        "original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
      }
    ],
    "adam_id" : 1645846825,
    "receipt_creation_date_pst" : "2023-11-21 08:43:28 America/Los_Angeles",
    "request_date" : "2023-11-22 22:37:44 Etc/GMT",
    "request_date_pst" : "2023-11-22 14:37:44 America/Los_Angeles",
    "version_external_identifier" : 859518250,
    "request_date_ms" : "1700692664453",
    "original_purchase_date_pst" : "2023-11-21 06:32:43 America/Los_Angeles",
    "application_version" : "50",
    "original_purchase_date_ms" : "1700577163000",
    "receipt_creation_date_ms" : "1700585008000",
    "original_application_version" : "50",
    "download_id" : 502973838310026300
  },
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1694250549000",
      "expires_date" : "2099-09-09 09:09:09 Etc/GMT",
      "expires_date_pst" : "2099-09-09 06:06:06 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "490001314520000",
      "is_trial_period" : "false",
      "original_transaction_id" : "490001314520000",
      "purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
      "product_id" : "com.skysoft.text2img.vip.yearly",
      "original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1694250550000",
      "web_order_line_item_id" : "490000123456789",
      "expires_date_ms" : "4092599349000",
      "purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
      "original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
    }
  ],
  "latest_receipt" : "chxm1023",
  "environment" : "Production",
  "pending_renewal_info" : [
    {
      "product_id" : "com.skysoft.text2img.vip.yearly",
      "original_transaction_id" : "490001314520000",
      "auto_renew_product_id" : "com.skysoft.text2img.vip.yearly",
      "auto_renew_status" : "1"
    }
  ],
  "warning" : "仅供学习，禁止转载或售卖",
  "Telegram" : "https://t.me/chxm1023"
};

$done({body: JSON.stringify(chxm1023)});
