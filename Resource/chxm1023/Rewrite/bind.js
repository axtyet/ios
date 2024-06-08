/*************************************

项目名称：Bind-情侣自动报备
下载地址：https://t.cn/A6NZk6t1
更新日期：2024-06-08
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.bindapp\.cn\/locate\/get\/other-side\/position url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/chxm1023/Rewrite/bind.js

[mitm]
hostname = api.bindapp.cn

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data.user.vip = {
  "level" : 3,
  "expireTs" : 4092599349000,
  "isExpired" : false
};

chxm1023.data.myInfo.vip = {
  "level" : 3,
  "expireTs" : 4092599349000,
  "isExpired" : false
};

$done({body : JSON.stringify(chxm1023)});
