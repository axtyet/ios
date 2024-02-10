var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "member_expired_at": 1870847739,
  "is_year_member": true,
  "is_member": true,
}

body = JSON.stringify(obj);
$done({body});
