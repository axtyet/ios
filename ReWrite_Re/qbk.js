/*
[rewrite_local]

^http[s]?:\/\/api\.qbkzhibo\.com\/api\/(member\/login|common\/advTextModeration).*$ url response-body "errcode":\d+ response-body "errcode":0

^https://api.qbkzhibo.com/api/message/isBanPM url 307 https://api.qbkzhibo.com/api/common/advTextModeration

[mitm]
hostname = api.qbkzhibo.com

*/
