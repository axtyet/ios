var body = $response.body;
var obj = JSON.parse(body); 

obj = {
  "isPremiumUser": true
}


body = JSON.stringify(obj);
$done({body});
