/***********************************

> 应用名称：谜底时钟
> 下载地址：http://t.cn/A6og4CvR
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 解锁说明：解锁高级会员权限
> 更新时间：2023-03-03
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️
          
          
[rewrite_local]
  
# > 谜底时钟☆解锁会员权限（2023-03-03）@ddgksf2013
^https?:\/\/buy\.itunes\.apple\.com\/\w{13}$ url script-response-body https://github.com/ddgksf2013/MoYu/raw/master/mdclock.js


[mitm]
 
hostname = buy.itunes.apple.com


***********************************/








var obj={environment:"Production",receipt:{receipt_type:"Production",app_item_id:1536358464,receipt_creation_date:"2023-03-02 06:07:04 Etc/GMT",bundle_id:"tech.miidii.MDClock",original_purchase_date:"2020-12-22 11:02:54 Etc/GMT",in_app:[{quantity:"1",purchase_date_ms:"1636036037000",expires_date:"2029-10-10 17:10:10 Etc/GMT",expires_date_pst:"2029-10-10 10:10:10 America/Los_Angeles",is_in_intro_offer_period:"false",transaction_id:"300000963095042",is_trial_period:"true",original_transaction_id:"300000963095042",purchase_date:"2021-11-04 14:27:17 Etc/GMT",product_id:"tech.miidii.MDClock.subscription.year",original_purchase_date_pst:"2021-11-04 07:27:17 America/Los_Angeles",in_app_ownership_type:"PURCHASED",original_purchase_date_ms:"1636036037000",web_order_line_item_id:"300000419185967",expires_date_ms:"1886346610000",purchase_date_pst:"2021-11-04 07:27:17 America/Los_Angeles",original_purchase_date:"2021-11-04 14:27:17 Etc/GMT"}],adam_id:1536358464,receipt_creation_date_pst:"2023-03-01 22:07:04 America/Los_Angeles",request_date:"2023-03-03 11:28:34 Etc/GMT",request_date_pst:"2023-03-03 03:28:34 America/Los_Angeles",version_external_identifier:855101300,request_date_ms:"1677842914475",original_purchase_date_pst:"2020-12-22 03:02:54 America/Los_Angeles",application_version:"657",original_purchase_date_ms:"1608634974000",receipt_creation_date_ms:"1677737224000",original_application_version:"112",download_id:70074314215384},pending_renewal_info:[{expiration_intent:"0",product_id:"tech.miidii.MDClock.subscription.year",is_in_billing_retry_period:"0",auto_renew_product_id:"tech.miidii.MDClock.subscription.year",original_transaction_id:"300000963095042",auto_renew_status:"1"}],status:0,latest_receipt_info:[{quantity:"1",purchase_date_ms:"1636036037000",expires_date:"2029-10-10 17:10:10 Etc/GMT",expires_date_pst:"2029-10-10 10:10:10 America/Los_Angeles",is_in_intro_offer_period:"false",transaction_id:"300000963095042",is_trial_period:"true",original_transaction_id:"300000963095042",purchase_date:"2021-11-04 14:27:17 Etc/GMT",product_id:"tech.miidii.MDClock.subscription.year",original_purchase_date_pst:"2021-11-04 07:27:17 America/Los_Angeles",in_app_ownership_type:"PURCHASED",subscription_group_identifier:"20895383",original_purchase_date_ms:"1636036037000",web_order_line_item_id:"300000419185967",expires_date_ms:"1886346610000",purchase_date_pst:"2021-11-04 07:27:17 America/Los_Angeles",original_purchase_date:"2021-11-04 14:27:17 Etc/GMT"}],latest_receipt:""};$done({body:JSON.stringify(obj)});
