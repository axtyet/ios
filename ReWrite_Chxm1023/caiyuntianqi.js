/*************************************

项目名称：彩云天气-净化/部分SVIP
下载地址：https://t.cn/A66d95hV
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/


var chxm1023 = JSON.parse($response.body);
const urls = ['/vip_info', '/activity', 'user'];

urls.forEach(url => {
  if ($request.url.includes(url)){
    switch(url) {
      case '/vip_info':
        chxm1023 = {
          ...chxm1023, 
          vip: {
            "expires_time" : "4092599349",
            "is_auto_renewal" : true
          },
          svip: {
            "expires_time" : "4092599349",
            "is_auto_renewal" : true
          }
        }
        break;
      case '/activity':
        chxm1023.activities = [];
        break;
      case 'user':
        chxm1023.result = {
          ...chxm1023.result,
          ranking_above: 99,
          is_vip: true,
          vip_expired_at: 4092599349,
          svip_given: 9999,
          is_xy_vip: true,
          xy_svip_expire: 4092599349,
          wt: {
            ...chxm1023.result.wt,
            vip: {
              "auto_renewal_type" : "",
              "expired_at" : 0,
              "enabled" : true,
              "svip_apple_expired_at" : 4092599349,
              "is_auto_renewal" : true,
              "svip_expired_at" : 4092599349,
              "svip_auto_renewal_type" : ""
            },
            svip_given: 9999,
            ranking_above: 99,
          },
          is_phone_verified: true,
          phone_num: "13145200000",
          vip_take_effect: 1,
          is_primary: true,
          xy_vip_expire: 4092599349,
          svip_expired_at: 4092599349,
          svip_take_effect: 1,
          vip_type: "s"
        }
        break;
    }
  }
})

$done({ body: JSON.stringify(chxm1023)});