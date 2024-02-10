/***********************************

> 应用名称：简讯VIP
> 软件版本：5.0.1
> 下载地址：https://apps.apple.com/cn/app/id1160249028
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 解锁说明：高级会员功能、免开屏广告、享暗黑模式
> 更新时间：2022-12-03
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
  
# ～ 简讯解锁会员权限（2022-12-03）@ddgksf2013
^https?:\/\/api\.tipsoon\.com\/api\/v1\/user\/info url script-response-body https://github.com/ddgksf2013/dev/raw/main/JianXunProCrack.js


[mitm] 

hostname=api.tipsoon.com

***********************************/









re('is_vip":false@expire_time":"\\d{4}','is_vip":true@expire_time":"2029')
function re(){var e=$response.body;if(arguments[0].includes("@")){var n=arguments[0].split("@"),r=arguments[1].split("@");for(i=0;i<n.length;i++)var l=new RegExp(n[i],"g"),e=e.replace(l,r[i])}else{l=new RegExp(arguments[0],"g");e=e.replace(l,arguments[1])}$done(e)}
