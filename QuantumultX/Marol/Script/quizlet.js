var body = $response.body;
var obj = JSON.parse(body);

obj.responses.models.user.type = 1,

body = JSON.stringify(obj);
$done({body});
