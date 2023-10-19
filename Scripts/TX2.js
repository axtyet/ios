/***************************************

脚本功能：溏心Vlog 会员视频

在线观看地址:https://txk003.com/line?
脚本作者：伟人
作者QQ:55749353
更新时间：2023-04-26
问题反馈：QQ+55749353
作者忠告: 建议使用在线观看地址观看！
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

#溏心Vlog🚗会员+付费视频

^http[s]:\/\/txh.*com\/h5\/user\/info.*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/TX2.js
^http[s]?:\/\/tx[a-zA-Z0-9].+(com|cc|cn)\/h5\/system\/info.*$ url script-request-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/TX1.js
^http[s]?:\/\/tx.*com\/h5\/system\/sendSms url reject-200
^http[s]?:\/\/tx.*com\/image\?type\=account&username\=.*$ url reject-200
^http[s]?:\/\/tx.*com\/h5\/message\/systemUnreadNum url reject-200
^http[s]?:\/\/tx.*com\/h5\/user\/findQrcode url reject-200

[mitm]
hostname = tx*.com


**************************************/

body = $response.body.replace(/.+/, "b+leYchu6BEih6N1sgZ9e0m6583stCXpK3WdmzWGg3w3ALiJV+BMMFor381ZkLmHBX46z4I9I/3tg9x5FJyl2dJwNI82HGkMUsAfXVsjqkAeYZu0Xj5T7iZQH7KVrypuxOtOuxvJPuH9Kglns/GAzWWn6FI4mQv25kfUAlPJ/H95d8WQdSBqwclQ1M7e9vaWfYMegGuncpHSQEVeLDNXP2WXHVxe5+QdaFHG5ZALCFQuksqG9zx8JF37M/G2P7RZ9txZYYwoWWwhLpwi8Otc1PTg1or3jtacV16fWAxr37pSWp+SI2k10eG5TN2sgH2qn3Gpx3yqq6C7jkHuC5uB0FUpbktg7WafgmmcxH1BhpZC8RERDkVCMDqQUICOteGLqXlflVv1cn8D+Bi7bxblkFSvwrEZ+UP7ANeTTM3R0+3pLT3ZJcGSotbEbhNeeBEM7g+vSbsmq3TLIWn7BcDuFPaTU47Pw7FUbEPT8fiOXcnF+rokYfGhbcl7/CUjT8AyS8Z0JTK0AJZxI6qOg+7i+4D2jZcKmToiuLWkk2Kb5pfkd1YWFuJ3tXBttucrFT/Y7cCd1imxezNmQH11Rs+RvFgcG/aDXMv++yFhCvW8LMhI+rLhK/veiQ/cnovl6Z09BuNf8HHRwqi6CGSRKO00zSZViSYragtuH8l/hUQ29fv9Rfw0/96WtcGp88ij4YdmMdDrOSjpplSiax8363bQipV7V0FppOd7bbtNfSNglorzEc5M2LNn9SLhbkv/HphFxYtxgAjbCIc2ceOvF5ZgA3i9Z4S58T+kmrY32hEPNTJShC07xuqoRamFYQr5DWmgc9MZk3CT5Mqw8zEEnHQfhDCGc6MjDjkH9b8x7JOYlxS158UvB5uUAuVDlXxtm9KmjmmF5PXh6bCz+BCqiavsFFgCt+HLKu3zGcIcCsFEuXJ75o1in/LIS/Fy3TouplzBoCkn4n4vHLK0dRvbfO9tv1d0Y6hXOUEPmEVEtssoonFmQPexaTWpKKV7Hssz+YFS7jQwBR52QD9XT+aCsZ3OZGDFsPfaHTikAoSAkhp6DKL6xbmcFwjI/ktXo4ZvumZxgCm9g3BqgCychU3tTwzt0mfQIy59acD1CVXojxkDUbCrKF2ezp9/XcZdog/VlAdQl5Hcn0+rcmVN7LGbn2G+KOLlE8PbUhQowygrTyFTUxl+xRhoTiwB6wUHCQBnvfT1i6ZSO/QBWVOoM6tvu+MoGvUZL0eV64CcnPX48Y9oL0Gjd7FXLv1h7Kovd+IovA8bbruJpKEFuQ30ptyJXSGf3dZK+eyWwgBz+Om+IqoYXeLgL6jcXOxT9amjEAkmBk1vO//NFPVZR9AiwPR07XAZ1DnamleCAKlKYu9Z6lXnczqr7kkb9BSXbkWc+Eyqi5Ikf4DJdIz20HLa08MWHuyoNQhcDWT+FOXQwGZwi9oAHwWhJGl7ivL+8RkQYSe8xahaP+3/VrAeJSBJMuD8WWz2Oaw8WeYQRmly2oJda5D6/4WxfmeOvmd61G8oS4Npvw09HHMTsxUm2Rt1GvQnkj/VzuKpJH5ElztKY0eDeGJ7I3qfRsEdE8ClNnD2Mfn5/IGs9lhlvHbTDN0Y8MpcSuDyih7bSzpc/nEqCKIoHZ6qkACzBUHfKF0ancZv178MSnt1iHeUQEkV99w3LwKkv1nyykCQ27brFPQei1g6XSeapZ4=")
$done({body});
