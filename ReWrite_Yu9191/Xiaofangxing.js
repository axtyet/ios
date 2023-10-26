/******************************
消费行  https://t.cn/A6OsSXGV
@ios151
*******************

[rewrite_local]
https://www.xfx119.com/ksVRExamSystem/validityTerm? url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Xiaofangxing.js



[mitm]
hostname = www.xfx119.com

*******************************/

var chxm1023 = JSON.parse($response.body);

chxm1023 = {...chxm1023,
  "llkcValidityDays" : 4092599349,
  "tkValidityDays" : 4092599349,
  "validityDays" : 4092599349,
  "fgjxjvValidityDays" : 4092599349,
  "studySubsystem" : "2099-09-09 09:09:09"
}

$done({body : JSON.stringify(chxm1023)});
