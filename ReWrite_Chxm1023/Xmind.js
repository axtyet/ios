/*************************************

项目名称：Xmind-思维导图 解锁VIP
下载地址：https://t.cn/AipCL5zE
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：先登录Xmind账号在恢复购买

**************************************

[rewrite_local]
^https?:\/\/www\.xmind\.(cn|net|app)\/.+\/devices url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Xmind.js

[mitm]
hostname = www.xmind.*

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "license" : {
    "status" : "sub",
    "expireTime" : 4092599349000
  },
  "_code" : 200,
  "raw_data" : "bKnTeMMu/TJ86ZFoUqG+sfKC1nitD8b/NaUT93UBc0woo0BF5uBVYXsHUQJkQxLHGlZCbdnKaKzZ4iljM9xddkyMycpUbAtDoywnr4RNzxqXY20pDM0Bdgm+HssaS1RworH8aaaf0IYnnGplxIuqMyT9107PrenF0MBUIaKU9Cw="
};

$done({body : JSON.stringify(chxm1023)});
