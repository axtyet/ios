/*************************************

项目名称：adapty-合集
下载地址：https://t.cn/A6NiBJqw
更新日期：2024-06-21
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.adapty\.io\/api\/v\d\/sdk\/(analytics\/profiles\/.+$|in-apps\/(apple\/receipt\/validate|purchase-containers\/.+$)) url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/chxm1023/Rewrite/adapty.js

[mitm]
hostname = api.adapty.io

*************************************/


var chxm1023 = JSON.parse($response.body);
const headers = $request.headers;
const ua = headers['User-Agent'] || headers['user-agent'];
const profileid = headers['adapty-sdk-profile-id'] || headers['ADAPTY-SDK-PROFILE-ID'];

const list = {
  'ChatAI': { id: "chatai_yearly_ios", bundle_id: "com.scaleup.chatai", latest: "chxm1023" },  //Nova-chat机器人
  'FacePlus': { id: "faceplus_yearly_subs_3dft_ios", bundle_id: "com.scaleup.faceplus", latest: "chxm1023" },  //Retouch: Al FaceEditor
  'Batched': { id: "com.advasoft.batched.premium_year", bundle_id: "com.advasoft.batched", latest: "chxm1023" }  //Batched-多量图片编辑器
};

const premiumTemplate = {"id":"premium","is_lifetime":false,"store":"app_store","starts_at":null,"billing_issue_detected_at":null,"unsubscribed_at":null,"expires_at":"2099-09-09T09:09:09.000000+0000","will_renew":true,"is_active":true,"offer_id":null,"is_in_grace_period":false,"activated_at":"2024-01-23T09:09:09.000000+0000","active_promotional_offer_id":null,"renewed_at":"2024-01-23T09:09:09.000000+0000","is_refund":false,"active_introductory_offer_type":"free_trial","cancellation_reason":null,"active_promotional_offer_type":null};

const receiptTemplate = {"quantity":"1","purchase_date_ms":"1706000949000","expires_date":"2099-09-09 09:09:09 Etc/GMT","expires_date_pst":"2099-09-09 06:06:06 America/Los_Angeles","is_in_intro_offer_period":"false","transaction_id":"490001271881589","is_trial_period":"true","original_transaction_id":"490001271881589","purchase_date":"2024-01-23 09:09:09 Etc/GMT","original_purchase_date_pst":"2024-01-23 01:09:09 America/Los_Angeles","in_app_ownership_type":"PURCHASED","original_purchase_date_ms":"1706000949000","web_order_line_item_id":"490000579504987","expires_date_ms":"4092628149000","purchase_date_pst":"2024-01-23 01:09:09 America/Los_Angeles","original_purchase_date":"2024-01-23 09:09:09 Etc/GMT"};

const profilesPattern = /analytics\/profiles\/.+$/;
const receiptPattern = /(receipt\/validate|purchase-containers\/.+)/;

for (const key in list) {
  if (new RegExp(`^${key}`, `i`).test(ua)) {

    const premium = {
      ...premiumTemplate,
      "vendor_product_id": list[key].id
    };

    const receiptdata = {
      ...receiptTemplate,
      "product_id": list[key].id
    };

    if (profilesPattern.test($request.url)) {
      chxm1023.data.attributes.subscriptions = {
        [list[key].id]: {
          ...premium,
          "vendor_transaction_id": "490001271881589",
          "vendor_original_transaction_id": "490001271881589",
          "is_sandbox": false
        }
      };
      chxm1023.data.attributes.paid_access_levels = {
        premium: {
          ...premium
        }
      };
    }

    if (receiptPattern.test($request.url)) {
      chxm1023 = {"data":{"type":"adapty_inapps_apple_receipt_validation_result","id":profileid,"attributes":{"app_id":"56eb457c-6ad4-40aa-9b29-ea29e10e3505","profile_id":profileid,"apple_validation_result":{"environment":"Production","receipt":{"receipt_type":"Production","app_item_id":1560806510,"receipt_creation_date":"2024-01-23 09:09:09 Etc/GMT","bundle_id":list[key].bundle_id,"in_app":[{...receiptdata}],"original_purchase_date":"2024-01-23 09:09:09 Etc/GMT","adam_id":1560806510,"receipt_creation_date_pst":"2024-01-23 01:09:09 America/Los_Angeles","request_date":"2024-01-23 09:09:09 Etc/GMT","request_date_pst":"2024-01-23 01:09:09 America/Los_Angeles","version_external_identifier":854389279,"request_date_ms":"1706000949000","original_purchase_date_pst":"2024-01-23 01:09:09 America/Los_Angeles","application_version":"1","original_purchase_date_ms":"1706000949000","receipt_creation_date_ms":"1706000949000","original_application_version":"1","download_id":502124859031306100},"status":0,"pending_renewal_info":[{"expiration_intent":"1","product_id":list[key].id,"is_in_billing_retry_period":"0","auto_renew_product_id":list[key].id,"original_transaction_id":"490001271881589","auto_renew_status":"0"}],"latest_receipt_info":[{...receiptdata}],"latest_receipt":list[key].latest},"segment_hash":"8245f974014fdf4c","promotional_offer_eligibility":false,"non_subscriptions":null,"custom_attributes":{},"customer_user_id":null,"introductory_offer_eligibility":false,"subscriptions":{[list[key].id]:{...premium,"vendor_transaction_id":"490001271881589","vendor_original_transaction_id":"490001271881589","is_sandbox":false}},"total_revenue_usd":0,"paid_access_levels":{"premium":{...premium}}}}};
    }

    console.log('已操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/chxm1023');
    break;
  }
}

$done({ body: JSON.stringify(chxm1023) });