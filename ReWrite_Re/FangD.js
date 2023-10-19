/***************************************


脚本作者：伟人
作者QQ:55749353
更新时间：2022-12-30
问题反馈：QQ+55749353
作者忠告: 建议使用在线观看地址观看！
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^http[s]?:\/\/interface57\.fangdongliqi\.com\/(House\/AddHouse|House\/Room\/Tenant\/AddTenant|House\/Room\/Tenant\/UpdTenant|House\/DelHouse).*$ url response-body "Result":"[^"]+ response-body "Result": "SUCCESS
^http[s]?:\/\/interface57\.fangdongliqi\.com\/(House\/AddHouse|House\/Room\/Tenant\/AddTenant) url request-body Access_Token.[a-zA-Z0-9-]+ request-body Access_Token=4cec9b21-30ca-4224-b7a5-1b0f262f812a
^http[s]?:\/\/interface57\.fangdongliqi\.com\/Gold\/GetGoldInfo url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/FangD.js

[mitm]
hostname = interface57.fangdongliqi.com

**************************************/


var body = $response.body; 
let obj = JSON.parse($response.body);
obj={
  "Result": "SUCCESS",
  "GoldInfo": {
    "Gold": 0,
    "RoomCount": 0,
    "ResidualCount": 0,
    "UseRoomCount": 0,
    "DaysRemaining": 999880,
    "IsFree": 1,
    "OverdueDate": "2999-09-09",
    "OverdueStatus": 0,
    "FreeDays": 2,
    "IsBuy": 0,
    "NowDate": "2022-12-30",
    "UnpaidTradeId": 0,
    "ExtendBeginDate": "2022-12-30",
    "ContractCount": 0,
    "CanBuy": "Y"
  }
}
$done({body: JSON.stringify(obj)});
