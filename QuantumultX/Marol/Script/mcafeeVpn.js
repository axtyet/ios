var body = $response.body;
var obj = JSON.parse(body);

obj.sub_type = "Premium",
obj.sub_expiry = 1871702980000,

body = JSON.stringify(obj);
$done({body});
