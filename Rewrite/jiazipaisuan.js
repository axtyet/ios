/******************************

脚本名称: 甲子排盘
脚本作者：ios151
更新时间：2023年8月20日 22:37
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

***************************

[rewrite_local]

^https:\/\/app.iyzbz.com\/app\/user\/selfinfo url script-echo-response https://raw.githubusercontent.com/Yu9191/Rewrite/main/jiazipaisuan.js

[mitm] 

hostname = app.iyzbz.com

*******************************/


var objc = JSON.parse($response.body);

    objc = {
  "message": "ok",
  "data": {
    "memberLevel": 1,
    "registerChannel": "AppStore",
    "inviteCodeSelf": "1",
    "memberLevelName": null,
    "link": "https:\/\/web.iyzbz.com?inviteCode=2AGO6HFI",
    "auroraId": "191e35f7e1596084869",
    "isAgent": 0,
    "birthDay": null,
    "sex": null,
    "inviteUserUid": null,
    "birthPlaceId": null,
    "agentId": null,
    "inviteLink": "https:\/\/web.iyzbz.com\/invite\/",
    "birthPlaceName": null,
    "uid": "2023082020064048196116c",
    "userName": "牛马",
    "enableBeInvited": true,
    "weChatName": null,
    "createTime": "2023-08-20T20:06:41.000+08:00",
    "expireTime": null
  },
  "code": 200
}

$done({body : JSON.stringify(objc)});