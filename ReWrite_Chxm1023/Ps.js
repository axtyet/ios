/*************************************

项目名称：PS 图片编辑
下载地址：https://t.cn/A6ou0oGd
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Ps.js

[mitm] 

hostname = lcs-mobile-cops.adobe.io

*************************************/

var chxm1023 = JSON.parse($response.body);

    chxm1023 = 
{"mobileProfileSpecVersion":"1.0","mobileProfile":{"id":"68f8320b-03f4-4f22-98d3-456ff55d9cc6","previousProfileId":"0ad86170-a2e4-42f6-8f9f-f37f1db2806f","serverId":"lcs-mobile-cops","profileStatus":"PROFILE_AVAILABLE","appLicenseMode":"FREEMIUM","legacyProfile":"{}","relationshipProfile":"[]","userProfile":"{\"userId\":\"845F6381634D8F160A495FC7@AdobeID\",\"firstName\":\"%E8%81%AA\",\"lastName\":\"%E6%98%8E\",\"email\":\"6bb4ptwzsb@privaterelay.appleid.com\",\"countryCode\":\"CN\",\"displayName\":\"%E6%98%8E%20%E8%81%AA\",\"accountType\":\"type1\",\"authId\":\"845F6381634D8F160A495FC7@AdobeID\"}","additionalLegacyProfiles":"{}","appProfile":"{}","controlProfile":{"cacheRefreshControl":{"appRefreshInterval":86400000}}},"workflow":null}

$done({body : JSON.stringify(chxm1023)});
