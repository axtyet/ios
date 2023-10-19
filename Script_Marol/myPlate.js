var body = $response.body;
var obj = JSON.parse(body);

obj.gold_member = true,

body = JSON.stringify(obj);
$done({body});
