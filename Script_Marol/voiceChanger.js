var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.vipState.state = 1,
obj.data.vipState.forever = true,
obj.data.vipState.startTime = 1650099394000,
obj.data.vipState.expireTime = 1871024163000

body = JSON.stringify(obj);
$done({body});
