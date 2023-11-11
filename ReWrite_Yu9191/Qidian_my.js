/*
[rewrite_local]
# 我的界面
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v3\/user\/getaccountpage url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Qidian_my.js
# 我的界面内测推广
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v1\/adv\/getadvlistbatch url reject

[mitm] 
hostname = magev6.if.qidian.com
*/
var Q = JSON.parse($response.body);
Q.Data.BenefitButtonList = [];//福利中心
Q.Data.FunctionButtonList = [];//我发布的
Q.Data.BottomButtonList = [];//帮助与客服
$done({body : JSON.stringify(Q)});
