var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.VIP = 1,
obj.data.MembersEndDataMs = "1871024163000"

body = JSON.stringify(obj);
$done({body});
