var body = $response.body;
var obj = JSON.parse(body);

obj.data.isvip = 1,
obj.data.vipStatus = 1,     
obj.data.vipEndDate = "2029-01-01", 
obj.data.vipEndDateTime = "2029-01-01 10:19:38"


body = JSON.stringify(obj);
$done({body});
