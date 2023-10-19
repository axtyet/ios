var body = $response.body;
var obj = JSON.parse(body);

obj.subscriptionEndDate = "2029-05-01T10:10:53.929Z",
obj.subscriptionStartDate = "2022-05-01T10:10:53.929Z",
obj.hasPremium = true,

body = JSON.stringify(obj);
$done({body}); 
