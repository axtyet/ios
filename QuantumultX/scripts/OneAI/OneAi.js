/*
one AI@Rnik666

[rewrite_local] 
^https?:\/\/service-hgtbohj8-1259001022\.gz\.apigw\.tencentcs\.com\/release\/requestUserData url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/QuantumultX/scripts/OneAI/OneAi.js

[MITM]
hostname = service-hgtbohj8-1259001022.gz.apigw.tencentcs.com

*/
var Rnik = JSON.parse($response.body);
Rnik = {
  
  "systemName" : "iOS",
  "device" : "iPhone 11",
  "countFreeMessage" : 99999999,
  "emailDate" : "",
  "countFreeMessageDaily" : 99999999,
  "countReviewRewardEach" : 99999999,
  "latestInSubDate" : "",
  "countInviteRewardTotal" : 99999999,
  "countInviteRewardEach" : 99999999,
  "emailTime" : 0,
  "version" : "1.9.0",
  "inviteCodeSelf" : "574128",
  "wechatGroupQrCodeScreenshotDate" : null,
  "updateDate" : "2024-05-07 22:12:09",
  "appInstalled" : "TestFlight",
  "weiboDate" : "",
  "wechatGroupQrCodeScreenshotTime" : null,
  "countModeration" : 0,
  "deviceId" : "6626266eb09c45498e3ef5d7016f1fd6",
  "blackListCode" : 0,
  "updateTime" : 1715091129,
  "countFreeMessageConsumed" : 0,
  "freeTryEndDate" : "4081846329",
  "weiboTime" : 0,
  "inviteCodeBy" : "",
  "systemVersion" : "15.3.1",
  "createDate" : "2024-05-07 22:06:39",
  "languageCode" : "zh",
  "createTime" : 1715090799,
  "ghostDetail" : "",
  "countInviteInvitees" : 99999999,
  "trafficMode" : 1,
  "countInviteRewardRemain" : 99999999,
  "blackListDetail" : "",
  "build" : "2258",
  "isSubscriptionActive" : 1,
  "displayName" : "OneAI"
}


  
  
  
  
$done({ body: JSON.stringify(Rnik) });
