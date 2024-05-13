
/*

光华商学
付费及会员专享课程 

[rewrite_local]

^https:\/\/api2019\.jiheapp\.com\/v1\/(user\/info\/get|user\/course\/(check_material|section_list|detail)) url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/ghsx.js

[mitm]
hostname = api2019.jiheapp.com
*/

































let body = $response.body;
let url = $request.url;

if (url.indexOf("https://api2019.jiheapp.com/v1/user/info/get") !== -1) {
    let data = JSON.parse(body);
    data.data.status = "3";
    data.data.nickname = "Baby";
    data.data.customer_id = "叮当猫TG频道@chxm1023";
    body = JSON.stringify(data);
} else if (url.match(/^https:\/\/api2019\.jiheapp\.com\/v1\/user\/course\/(check_material|section_list|detail)/)) {
    body = body.replace(/("material"\s*:\s*)"[YN]"/g, '$1"Y"')
               .replace(/("ppt"\s*:\s*)"[YN]"/g, '$1"Y"')
               .replace(/("doc"\s*:\s*)"[YN]"/g, '$1"Y"')
               .replace(/("book"\s*:\s*)"[YN]"/g, '$1"Y"')
               .replace(/("preview_time"\s*:\s*)"\d+"/g, '$19999')
               .replace(/("is_black"\s*:\s*)"[YN]"/g, '$1"Y"')
               .replace(/("is_vip"\s*:\s*)"[YN]"/g, '$1"Y"')
               .replace(/("is_real_vip"\s*:\s*)"[YN]"/g, '$1"Y"')
               .replace(/("is_svip"\s*:\s*)"[YN]"/g, '$1"Y"')
               .replace(/("is_end"\s*:\s*)"[YN]"/g, '$1"N"');
}

$done({ body: body });
