var body = $response.body;
var obj = JSON.parse(body);

obj.data.user.isVip = "1",
obj.data.user.isLifeVip = "1",
obj.data.user.vipEndTime = "2029-04-16 16:56:03.0"


body = JSON.stringify(obj);
$done({body});
