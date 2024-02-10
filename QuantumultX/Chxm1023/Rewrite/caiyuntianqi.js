/*************************************

项目名称：彩云天气+彩云天气Pro
下载地址：https://t.cn/A66d95hV
版本支持：7.6.0
更新日期：2023-12-02
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
# VIP信息
^https?:\/\/(biz|wrapper|starplucker)\.(cyapi|caiyunapp)\.(cn|com)\/(.+\/(user\?app_name|activity\?app_name|visitors|operation\/banners)|p\/v\d\/(vip_info|user_info)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js
# SVIP地图-48小时预报(方法来源:苍井灰灰)
^https?:\/\/(api|wrapper)\.(cyapi|caiyunapp)\.(cn|com)\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js

[mitm]
hostname = *.cyapi.cn, *.caiyunapp.com

*************************************/


const chxm1024 = {};
const chxm1023 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const url = $request.url;
const adUrl = /(activity\?app_name|operation\/banners)/;
const vipUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/vip_info/;
const userUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/v\d\/user\?app_name/;
const infoUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/user_info/;

if (typeof $response == "undefined") {
  chxm1024.headers = $request.headers;
  chxm1024.headers['device-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps';
} else {
  switch (true) {
    case adUrl.test(url):
      chxm1023.status = "ok";
      chxm1023.activities = [{"items":[{}]}];
      chxm1023.data = [];
      break;
    case vipUrl.test(url):
      chxm1023 = {  ...chxm1023,  vip: {    "expires_time" : "4092599349",    "is_auto_renewal" : true  },  trial_svip: {    ...chxm1023.trial_svip,    "received_time" : "1666666666",    "expires_time" : "4092599349",    "is_recharge_vip" : true  },  svip: {    "expires_time" : "4092599349",    "is_auto_renewal" : true  }};
      break;
    case userUrl.test(url):
      chxm1023.result = { ...chxm1023.result,  is_vip: true,  vip_expired_at: 4092599349,  svip_given: 9999,  is_xy_vip: true,  xy_svip_expire: 4092599349,  wt: {  ...chxm1023.result.wt,  vip: {  ...chxm1023.result.wt.vip,  "expired_at" : 0,  "enabled" : true,  "svip_apple_expired_at" : 4092599349,  "is_auto_renewal" : true,  "svip_expired_at" : 4092599349    },    svip_given: 9999,  },  is_phone_verified: true,  vip_take_effect: 1,  is_primary: true,  xy_vip_expire: 4092599349,  svip_expired_at: 4092599349,  svip_take_effect: 1,  vip_type: "s",  phone_num: "13145200000",  name: "叮当猫の分享频道",  avatar: "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png",  bound_status: {  ...chxm1023.result.bound_status,  caiyun: {  ...chxm1023.result.bound_status.caiyun,  "username" : "叮当猫の分享频道",  "is_bound" : true}}};
      break;
    case infoUrl.test(url):
      chxm1023["reg_days"] = 99999;
      chxm1023["name"] = "叮当猫の分享频道";
      chxm1023["avatar"] = "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png";
      break;
    }
  chxm1024.body = JSON.stringify(chxm1023);
}

$done(chxm1024);