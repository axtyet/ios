/*
zt

[rewrite_local]

https://app.zhongyi108.com/api/(user/getUcenterData|course/getDetail|user/getUserInfoNew) url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/zt.js



[mitm]
hostname = app.zhongyi108.com

*/
$done({
    body: $response.body
        .replace(/("is_svip"\s*:\s*)0/g, '$11')
        .replace(/("is_vip"\s*:\s*)0/g, '$11')
        .replace(/("is_try"\s*:\s*)0/g, '$11')
        .replace(/("is_buy"\s*:\s*)0/g, '$11')
        .replace(/("end_svip_time"\s*:\s*)""/g, '$1"2099-09-09"')
        .replace(/("end_vip_time"\s*:\s*)""/g, '$1"2099-09-09"')
    
     .replace(/("user_level"\s*:\s*).*?/g, '$19')
});
