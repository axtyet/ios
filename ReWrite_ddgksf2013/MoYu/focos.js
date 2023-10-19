/***********************************

> 应用名称：focos
> 下载地址：http://t.cn/AilyJ3mp
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 解锁说明：解锁高级会员权限
> 更新时间：2023-05-05
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️
          
          
[rewrite_local]
  
# > focos☆解锁会员权限（2023-05-05）@ddgksf2013
^https?:\/\/buy\.itunes\.apple\.com\/\w{13}$ url script-response-body https://github.com/ddgksf2013/MoYu/raw/master/focos.js


[mitm]
 
hostname = buy.itunes.apple.com


***********************************/








var obj={"environment":"Production","receipt":{"receipt_type":"Production","adam_id":1274938524,"app_item_id":1274938524,"bundle_id":"com.focos","application_version":"6232","download_id":70049600760253,"version_external_identifier":856544003,"receipt_creation_date":"2023-04-24 12:19:26 Etc/GMT","receipt_creation_date_ms":"1682338766000","receipt_creation_date_pst":"2023-04-24 05:19:26 America/Los_Angeles","request_date":"2023-05-05 13:32:22 Etc/GMT","request_date_ms":"1683293542144","request_date_pst":"2023-05-05 06:32:22 America/Los_Angeles","original_purchase_date":"2019-12-08 02:27:24 Etc/GMT","original_purchase_date_ms":"1575772044000","original_purchase_date_pst":"2019-12-07 18:27:24 America/Los_Angeles","original_application_version":"6094","in_app":[{"quantity":"1","product_id":"com.focos.1w_t8_1w","transaction_id":"300001425572931","original_transaction_id":"300001425572931","purchase_date":"2023-04-21 04:42:21 Etc/GMT","purchase_date_ms":"1682052141000","purchase_date_pst":"2023-04-20 21:42:21 America/Los_Angeles","original_purchase_date":"2023-04-21 04:42:22 Etc/GMT","original_purchase_date_ms":"1682052142000","original_purchase_date_pst":"2023-04-20 21:42:22 America/Los_Angeles","expires_date":"2029-10-10 17:10:10 Etc/GMT","expires_date_ms":"1886346610000","expires_date_pst":"2029-10-10 10:10:10 America/Los_Angeles","web_order_line_item_id":"300000660435578","is_trial_period":"true","is_in_intro_offer_period":"false","in_app_ownership_type":"PURCHASED"}]},"latest_receipt_info":[{"quantity":"1","product_id":"com.focos.1w_t8_1w","transaction_id":"300001425572931","original_transaction_id":"300001425572931","purchase_date":"2023-04-21 04:42:21 Etc/GMT","purchase_date_ms":"1682052141000","purchase_date_pst":"2023-04-20 21:42:21 America/Los_Angeles","original_purchase_date":"2023-04-21 04:42:22 Etc/GMT","original_purchase_date_ms":"1682052142000","original_purchase_date_pst":"2023-04-20 21:42:22 America/Los_Angeles","expires_date":"2029-10-10 17:10:10 Etc/GMT","expires_date_ms":"1886346610000","expires_date_pst":"2029-10-10 10:10:10 America/Los_Angeles","web_order_line_item_id":"300000660435578","is_trial_period":"true","is_in_intro_offer_period":"false","in_app_ownership_type":"PURCHASED","subscription_group_identifier":"20939412"}],"latest_receipt":"","pending_renewal_info":[{"expiration_intent":"0","auto_renew_product_id":"com.focos.1w_t8_1w","is_in_billing_retry_period":"0","product_id":"com.focos.1w_t8_1w","original_transaction_id":"300001425572931","auto_renew_status":"1"}],"status":0};$done({body:JSON.stringify(obj)});
