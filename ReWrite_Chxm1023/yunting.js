/*************************************

项目名称：云听 全国电台/有声听书
下载地址：https://t.cn/A6ouQ21g
脚本作者：chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：已解锁免费在线听以及可下载。

**************************************

[rewrite_local]
(^https?:\/\/(ytmsout|ytapi)\.radio\.cn|60\.205\.171\.165)\/(contentBiz|publish|rights|user\/appUser\/getUserInfo|ytsrv\/srv\/appUser\/getUserInfoH5) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yunting.js

[mitm]
hostname = *.radio.cn, 60.205.171.165

*************************************/


const js1 = '/ytmsout';
const ad1 = '/publish/recScreen/getLoadPage';
const ad2 = '/publish';
const vip1 = '/user/appUser/getUserInfo';
const vip2 = '/ytsrv/srv/appUser/getUserInfoH5';
const vip3 = '/rights/userRights/memberCenterRightsDetail';
var body = $response.body;
var chxm1023 = JSON.parse(body);

//解锁听书&下载内容
if ($request.url.indexOf(js1) != -1){
  body = body.replace(/\"needPay":\d+/g, '\"needPay":0');
  body = body.replace(/\"songVirtualPrice":\d+/g,'\"songVirtualPrice":0');
  body = body.replace(/\"songNeedPay":\d+/g, '\"songNeedPay":0');
  body = body.replace(/\"enableStatus":\d+/g, '\"enableStatus":1');
  body = body.replace(/\"price":\d+/g, '\"price":0');
  body = body.replace(/\"priceUnit":\d+/g, '\"priceUnit":0');
  body = body.replace(/\"orderSpeedRightFlag":\w+/g,'\"orderSpeedRightFlag":true');
  body = body.replace(/\"userBuyAlbumFlag":\w+/g,'\"userBuyAlbumFlag":true');
  body = body.replace(/\"userBuySingleFlag":\w+/g, '\"userBuySingleFlag":true');
  body = body.replace(/\"userBuyOutAlbumFlag":\w+/g,'\"userBuyOutAlbumFlag":true');
  body = body.replace(/\"singlePlayFlag":\w+/g, '\"singlePlayFlag":true');
  body = body.replace(/\"singleDownloadFlag":\w+/g, '\"singleDownloadFlag":true');
  body = body.replace(/\"auditionFlag":\w+/g, '\"auditionFlag":true');
  body = body.replace(/\"auditionFlag":\d+/g, '\"auditionFlag":1');
}

//开屏/弹窗处理
if ($request.url.indexOf(ad1) != -1){
  body = body.replace(/{.*?}$/g, '\{}');
}

//角标处理
if ($request.url.indexOf(ad2) != -1){
  body = body.replace(/\"markText":"\w+"/g, '\"markText":""');
  body = body.replace(/\"contentMarkImg":".*?"/g, '\"contentMarkImg":""');
}

//VIP信息
if ($request.url.indexOf(vip1) != -1){
  chxm1023.data.sex = 1;
  chxm1023.data.vipExpireTime = 4092599349000;
  chxm1023.data.vipFlag = 1;
  chxm1023.data.memberMarkVo = {
      "signActiveImg" : "https://ytmedia.radio.cn/CCYT%2F2023%2F01%2F06%2F1672991809upc7cd442706edf9cd097eab02ddbc0fe7.png",
      "signUnactiveImg" : "https://ytmedia.radio.cn/CCYT%2F2023%2F01%2F06%2F1672992265up413309085e3fc6878f935a74d2ca73b3.png",
      "foreColorVal" : "#292421",
      "markText" : "VIP身份",
      "packageId" : "1002",
      "fitVersion" : "1",
      "packageActiveFlag" : true,
      "packageName" : "VIP",
      "backGroundColorVal" : "#F0FFFF"
    };
  body = JSON.stringify(chxm1023);
}

if ($request.url.indexOf(vip2) != -1){
  chxm1023.object.baseInfo.isVip = 1;
  chxm1023.object.baseInfo.vipTime = "2099-09-09";
  body = JSON.stringify(chxm1023);
}

if ($request.url.indexOf(vip3) != -1){
  chxm1023.data.userPackageExpireVo =  {
      "endTime" : "2099-09-09 09:09:09",
      "startTime" : "2023-07-20 00:00:00"
    };

  body = JSON.stringify(chxm1023);
}

$done({body});
