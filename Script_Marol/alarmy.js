let obj = JSON.parse($response.body);

obj.subscription = [{
    "originalTransactionID": "",
    "productID": "droom.sleepIfUCanFree.premium.yearly01.4",
    "willAutoRenew": true,
    "isActive": true,
    "expiresDateMs": 1883142423000,
    "periodType": "TRIAL",
    "latestPurchaseDateMs": 1651590191000,
    "originalPurchaseDateMs": 1651590191000
  }],

$done({body: JSON.stringify(obj)});
