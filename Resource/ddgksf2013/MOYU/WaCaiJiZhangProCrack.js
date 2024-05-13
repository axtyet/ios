/***********************************

> 应用名称：挖财记账
> 软件版本：7.6.0
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2024-03-29
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
  
# > 挖财记账☆解锁会员权限（2024-03-29）@ddgksf2013
^https?:\/\/jz\.wacaijizhang\.com\/api\/vipmember\/v\d\/index url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/ddgksf2013/MOYU/WaCaiJiZhangProCrack.js


[mitm] 

hostname=jz.wacaijizhang.com

***********************************/





















var body = $response.body.replace(/vipMemberEnable":0/g, 'vipMemberEnable":1')
                         .replace(/vipType":0/g, 'vipType":2')
                         .replace(/isPermanentVip":false/g, 'isPermanentVip":true');
$done({ body })
