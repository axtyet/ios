/*
口语轻松学
[rewrite_local]

https://api.qsongxue.com/user/memberData url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/kyqsx.js

[mitm]
hostname = api.qsongxue.com
*/



let obj = JSON.parse($response.body);
    
    
    //obj.username = "我是baby";  

    obj.data.vip_end_time = "98484848484848";  
		obj.data.vip_endtime = "938838383838383";
		obj.data.svip_endtime = "93838383883839";
		obj.data.is_dumbass_vip = "1";
  obj.data.jpvip_endtime = "938388383838383";
    
    $done({
        body: JSON.stringify(obj)
    });