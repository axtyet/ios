/***********************************

> 应用名称：Awesome Habits
> 软件版本：4.7.2
> 下载地址：http://t.cn/A6pyNrCq
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 解锁说明：解锁高级会员权限
> 更新时间：2023-05-30
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
  
# ～ AwesomeHabits☆解锁会员权限（2023-05-30）@ddgksf2013
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://github.com/ddgksf2013/MoYu/raw/master/AwesomeHabitsProCrack.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[mitm] 

hostname=api.revenuecat.com

***********************************/























var ddgksf2013={"request_date":"2020-06-05T11:54:41Z","request_date_ms":1591358081473,"subscriber":{"entitlements":{"premium":{"expires_date":"2029-02-18T07:52:54Z","product_identifier":"com.premium.yearly","purchase_date":"2020-02-11T07:52:54Z"}},"first_seen":"2020-05-29T07:59:41Z","last_seen":"2020-06-05T11:46:28Z","management_url":null,"non_subscriptions":{},"original_app_user_id":"RbhyxwVVYSgnnUEtme2444PjccJ3","original_application_version":"5","original_purchase_date":"2020-05-29T07:47:32Z","other_purchases":{},"subscriptions":{"com.premium.yearly":{"billing_issues_detected_at":null,"expires_date":"2029-02-18T07:52:54Z","is_sandbox":false,"original_purchase_date":"2020-02-11T07:52:55Z","period_type":"normal","purchase_date":"2020-02-11T07:52:54Z","store":"app_store","unsubscribe_detected_at":null}}}};
$done({body:JSON.stringify(ddgksf2013)});
