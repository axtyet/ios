
/*
初练瑜伽

[rewrite_local]

https://yoga-api.aiyouaiyou.cn/api/v100/get_user_info url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/chulianyujia.js


[mitm]
hostname = yoga-api.aiyouaiyou.cn
*/

let obj = JSON.parse($response.body);
obj.data.vip_end_time = 9999999999999;
obj.data.vip_status = 1;
obj.data.agreement_status = 1;//协议状态
obj.data.nickname = "Baby";
$done({body: JSON.stringify(obj)});
