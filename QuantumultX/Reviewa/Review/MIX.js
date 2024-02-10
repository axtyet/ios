/**************************
脚本作者：xiaomao
Mix当前版本：5.2.23

使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/Reviewa/Review/main/Mix.js

2、打开软件 > 右上角 > 恢复购买

3、拦截Mix社区加载 host, mix-community.camera360.com, reject


[mitm]
hostname = mix-api.camera360.com,cdn-bm.camera360.com

[rewrite_local]
https:\/\/mix-api\.camera360\.com\/v1\/operational-positions url reject
https:\/\/cdn-bm\.camera360\.com\/api\/mix\/recovery url script-response-body https://raw.githubusercontent.com/Reviewa/Review/main/mix.js
https:\/\/cdn-bm\.camera360\.com\/api\/iap\/check-receipt url script-response-body https://raw.githubusercontent.com/Reviewa/Review/main/mix.js
https:\/\/cdn-bm\.camera360\.com\/\/api\/mix-asset\/assets url script-response-body https://raw.githubusercontent.com/Reviewa/Review/main/mix.js



********************************/
