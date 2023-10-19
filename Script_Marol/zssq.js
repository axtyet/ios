#追书神器test

var body = $response.body;
var obj = JSON.parse(body); 

var obj = {"balance":0,"iosBalance":0,"voucherBalance":0,
           "beanVoucherBalance":0,"monthly":0,"isMonthly":false,
           "voucherCount":0,"beanVoucherCount":0,"isNewUser":false,
           "time":1649493057,"voucherSum":0,"isFree":true,"freeTime":1649493057,
           "isAppstoreAutoMonthly":true,"isNewUserVip":true,"newUserWelfareText":"",
           "vipId":"","vipStatus":2,"expiresDay":1678352707000,"superMonthlyExpire":1678352707000,"isSVIPUser":true,"ok":true}


body = JSON.stringify(obj);
$done({body});
