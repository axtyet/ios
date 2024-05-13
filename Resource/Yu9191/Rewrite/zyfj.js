/*

中医方剂

[rewrite_local]

https://medicine-books.meappstore.top/medicineModule/api/users/iosUserLogin url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/zyfj.js


[mitm]
hostname = medicine-books.meappstore.top
*/
var body = JSON.parse($response.body);

body.data.vipState = 3;
body.data.vipEndDateTime = "2099-04-18 12:03:06";
body.data.vipEndTime = "2099-18 12:03:06";
body.data.alias = "Baby"; 

$done({ body: JSON.stringify(body) });
