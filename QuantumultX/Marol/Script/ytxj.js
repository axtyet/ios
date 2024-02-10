var body = $response.body; 
var obj = JSON.parse(body); 

obj = 
{
  "status" : 0,
  "data" : {
    "uidProductInfo" : [

    ],
    "didSubscribeType" : 0,
    "didProductInfo" : [

    ],
    "vipUserRedeemLogInfoList" : [

    ],
    "vipUserProductInfo" : {
      "reBuyPromotionText" : "",
      "promotionTextType" : 1,
      "promotionText" : "新会员专享一甜VIP首充特惠",
      "myProducts" : [

      ],
      "trailStatus" : 0,
      "expireTime" : 1743855103000,
      "isInExpireRenewDuration" : 0,
      "vip" : true,
      "subscribeType" : 1
    },
    "uidSubscribeType" : 0
  },
  "extraInfo" : {

  },
  "message" : "SUCCESS",
  "serverTm" : 1649149331293
}

body = JSON.stringify(obj);
$done({body});
