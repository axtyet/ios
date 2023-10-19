#https://commerce-api.faceu.mobi/commerce/v1/subscription/user_info url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/qingyan.js

var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.start_time = 1650118095,
obj.data.end_time = 1871024163,  
obj.data.is_cancel_subscribe = false,  
obj.data.end_time = 1871024163,    
obj.data.flag = true,    
 

body = JSON.stringify(obj);
$done({body});

