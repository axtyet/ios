/*
番茄闪轻
[rewrite_local]

https://tomato-health.imfasting.cn/api/user_info url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/fqsq.js

[mitm]
hostname = tomato-health.imfasting.cn
*/


let obj = JSON.parse($response.body);
    
    
    //obj.username = "我是baby";  

    obj.data.vip_type = 6;  
  
    
    $done({
        body: JSON.stringify(obj)
    });