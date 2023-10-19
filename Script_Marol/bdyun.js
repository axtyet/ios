var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "product_infos": [{
    "product_id": "5210897752128663390",
    "start_time": 1415433645,
    "end_time": 2147483648,
    "buy_time": "1415433645",
    "cluster": "offlinedl",
    "detail_cluster": "offlinedl",
    "product_name": "offlinedl_permanent",
    "status": "0",
    "function_num": 2,
    "buy_description": "离线下载套餐(永久)",
    "product_description": "离线下载套餐(永久)"
  }, {
    "product_id": "",
    "start_time": 1648175150,
    "end_time": 1650902399,
    "buy_time": 0,
    "cluster": "vip",
    "detail_cluster": "svip",
    "auto_upgrade_to_svip": 0,
    "product_name": "svip2_nd",
    "status": 0,
    "function_num": 0,
    "buy_description": "",
    "product_description": "",
    "cur_svip_type": "month"
  }, {
    "product_id": "",
    "start_time": 1648175151,
    "end_time": 1650902399,
    "buy_time": 0,
    "cluster": "contentvip",
    "detail_cluster": "contentvip",
    "auto_upgrade_to_svip": 0,
    "product_name": "contentvip_nd",
    "status": 0,
    "function_num": 0,
    "buy_description": "",
    "product_description": ""
  }],
  "currenttime": 1650250123,
  "reminder": {
    "svip": {
      "leftseconds": 65227600,
      "nextState": "normal"
    },
    "reminderWithContent": [],
    "advertiseContent": []
  },
  "current_product": {
    "cluster": "vip",
    "detail_cluster": "svip",
    "product_type": "vip2_1m_auto",
    "product_id": "12187135090581539740"
  },
  "level_info": {
    "current_value": 485,
    "current_level": 1,
    "history_value": 485,
    "history_level": 1,
    "last_manual_collection_time": 0
  },
  "previous_product": [],
  "current_privilege_card": [],
  "last_privilege_card": [],
  "current_product_v2": {
    "cluster": "vip",
    "detail_cluster": "svip",
    "product_type": "vip2_1m_auto",
    "product_id": "12187135090581539740"
  },
  "previous_product_v2": {},
  "current_privilege_card_v2": {},
  "last_privilege_card_v2": {},
  "request_id": 186237459030834025
}

body = JSON.stringify(obj);
$done({body});
