/****************************************

项目功能：趣听音乐馆
功能说明：屏蔽弹窗/首页横幅
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

*****************************************

            
[rewrite_local]
^https?:\/\/(api|api\.next)\.bspapp\.com\/client$ url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/chxm1023/Advertising/quting.js

[mitm]
hostname = api.bspapp.com, api.next.bspapp.com

****************************************/


var body = $response.body.replace(/\"needVerify":\d+/g, '\"needVerify":false').replace(/\"bannerList":\[.+\]/g, '\"bannerList":[]');$done({body});
