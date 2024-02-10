/***********************************

> 应用名称：Not Boring 四件套（天气、习惯、日历、时间）
> 软件版本：2.13
> 下载地址：https://apps.apple.com/cn/app/id531063436
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 解锁说明：解锁高级会员权限
> 更新时间：2022-12-03
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
  
# ～ Not Boring 四件套[天气、习惯、日历、时间] 解锁会员权限（2022-12-03）@ddgksf2013
^https?:\/\/api-weather\.andy\.works\/v\d\/\w{13,18}$ url reject-dict
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/*) url script-echo-response https://github.com/ddgksf2013/dev/raw/main/NotBoringProCrack.js

[mitm] 

hostname=api-weather.andy.works,api.revenuecat.com

***********************************/























var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf26ab=["\x32\x30\x32\x32\x2D\x31\x31\x2D\x32\x33\x54\x31\x33\x3A\x32\x38\x3A\x35\x33\x5A","\x32\x30\x32\x32\x2D\x31\x31\x2D\x30\x31\x54\x32\x31\x3A\x33\x39\x3A\x31\x33\x5A","\x30","\x32\x30\x32\x32\x2D\x30\x36\x2D\x31\x30\x54\x31\x39\x3A\x31\x33\x3A\x31\x35\x5A","\x32\x30\x32\x39\x2D\x30\x36\x2D\x31\x37\x54\x31\x39\x3A\x31\x33\x3A\x31\x34\x5A","\x74\x72\x69\x61\x6C","\x32\x30\x32\x32\x2D\x30\x36\x2D\x31\x30\x54\x31\x39\x3A\x31\x33\x3A\x31\x34\x5A","\x50\x55\x52\x43\x48\x41\x53\x45\x44","\x61\x70\x70\x5F\x73\x74\x6F\x72\x65","\x63\x6F\x6D\x2E\x61\x6E\x64\x79\x77\x6F\x72\x6B\x73\x2E\x77\x65\x61\x74\x68\x65\x72\x2E\x79\x65\x61\x72\x6C\x79\x50\x61\x74\x72\x6F\x6E","\x32\x30\x32\x31\x2D\x31\x32\x2D\x33\x30\x54\x31\x35\x3A\x33\x33\x3A\x32\x37\x5A","\x39\x33\x33\x37\x30\x41\x41\x37\x2D\x41\x30\x42\x43\x2D\x34\x44\x33\x38\x2D\x39\x30\x38\x46\x2D\x37\x38\x31\x33\x31\x36\x45\x41\x34\x39\x42\x44","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var ddgksf2013={request_date_ms:1669210133364,request_date:__Oxf26ab[0x0],subscriber:{non_subscriptions:{},first_seen:__Oxf26ab[0x1],original_application_version:__Oxf26ab[0x2],other_purchases:{},management_url:null,subscriptions:{"\x63\x6F\x6D\x2E\x61\x6E\x64\x79\x77\x6F\x72\x6B\x73\x2E\x77\x65\x61\x74\x68\x65\x72\x2E\x79\x65\x61\x72\x6C\x79\x50\x61\x74\x72\x6F\x6E":{original_purchase_date:__Oxf26ab[0x3],expires_date:__Oxf26ab[0x4],is_sandbox:!1,refunded_at:null,unsubscribe_detected_at:__Oxf26ab[0x1],grace_period_expires_date:null,period_type:__Oxf26ab[0x5],purchase_date:__Oxf26ab[0x6],billing_issues_detected_at:null,ownership_type:__Oxf26ab[0x7],store:__Oxf26ab[0x8],auto_resume_date:null}},entitlements:{patron:{grace_period_expires_date:null,purchase_date:__Oxf26ab[0x6],product_identifier:__Oxf26ab[0x9],expires_date:__Oxf26ab[0x4]},skinAndy:{grace_period_expires_date:null,purchase_date:__Oxf26ab[0x6],product_identifier:__Oxf26ab[0x9],expires_date:__Oxf26ab[0x4]},skinMonster:{grace_period_expires_date:null,purchase_date:__Oxf26ab[0x6],product_identifier:__Oxf26ab[0x9],expires_date:__Oxf26ab[0x4]},skinCedar:{grace_period_expires_date:null,purchase_date:__Oxf26ab[0x6],product_identifier:__Oxf26ab[0x9],expires_date:__Oxf26ab[0x4]},skinKarat:{grace_period_expires_date:null,purchase_date:__Oxf26ab[0x6],product_identifier:__Oxf26ab[0x9],expires_date:__Oxf26ab[0x4]},skinOpal:{grace_period_expires_date:null,purchase_date:__Oxf26ab[0x6],product_identifier:__Oxf26ab[0x9],expires_date:__Oxf26ab[0x4]},skinPresstube:{grace_period_expires_date:null,purchase_date:__Oxf26ab[0x6],product_identifier:__Oxf26ab[0x9],expires_date:__Oxf26ab[0x4]},skinChroma:{grace_period_expires_date:null,purchase_date:__Oxf26ab[0x6],product_identifier:__Oxf26ab[0x9],expires_date:__Oxf26ab[0x4]}},original_purchase_date:__Oxf26ab[0xa],original_app_user_id:__Oxf26ab[0xb],last_seen:__Oxf26ab[0x0]}};$done({body:JSON[__Oxf26ab[0xc]](ddgksf2013)});;;(function(_0x6ab3x2,_0x6ab3x3,_0x6ab3x4,_0x6ab3x5,_0x6ab3x6,_0x6ab3x7){_0x6ab3x7= __Oxf26ab[0xd];_0x6ab3x5= function(_0x6ab3x8){if( typeof alert!== _0x6ab3x7){alert(_0x6ab3x8)};if( typeof console!== _0x6ab3x7){console[__Oxf26ab[0xe]](_0x6ab3x8)}};_0x6ab3x4= function(_0x6ab3x9,_0x6ab3x2){return _0x6ab3x9+ _0x6ab3x2};_0x6ab3x6= _0x6ab3x4(__Oxf26ab[0xf],_0x6ab3x4(_0x6ab3x4(__Oxf26ab[0x10],__Oxf26ab[0x11]),__Oxf26ab[0x12]));try{_0x6ab3x2= __encode;if(!( typeof _0x6ab3x2!== _0x6ab3x7&& _0x6ab3x2=== _0x6ab3x4(__Oxf26ab[0x13],__Oxf26ab[0x14]))){_0x6ab3x5(_0x6ab3x6)}}catch(e){_0x6ab3x5(_0x6ab3x6)}})({})
