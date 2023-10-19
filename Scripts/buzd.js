
/***************************************

脚本功能：不折叠输入法VIP
下载地址：appstore
软件版本：
脚本作者：伟人
更新时间：2023-03-05
问题反馈：QQ+55749353
作者QQ:55749353
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
忠告:请添加频道获取食用方法

**************************************

[mitm]

hostname = *keyboard*

[rewrite_local]


^http[s]?:\/\/api\.keyboard\.buzhedie\.com\/input\/member_info\/.*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/buzd.js



***************************************/

var body = $response.body;
let obj = JSON.parse($response.body);
obj={
  "status": 1,
  "msg": "success",
  "error_code": 0,
  "data": {
    "is_vip": true,
    "vip_time": "2999-09-09到期",
    "nick_name": "by~伟人",
    "avatar_url": "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg"
  }
}

$done({body: JSON.stringify(obj)});
