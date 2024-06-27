/*
reelmaker

[rewrite_local]

https:\/\/us-central1-imin-aa206\.cloudfunctions\.net\/(validateSubscription|checkIfUserVip) url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/reelmaker.js

[mitm]
hostname = us-central1-imin-aa206.cloudfunctions.net

*/

let url = $request.url;
let body = JSON.parse($response.body);

const yz = /checkIfUserVip/;
const vip = /validateSubscription/;

if (yz.test(url)) {
    if (body.hasOwnProperty("is_vip")) {
        body.is_vip = true;
    }
} else if (vip.test(url)) {
    body = {
        "purchased_product": "1511295558",
        "is_in_intro_offer_period": false,
        "receipt_status": 0,
        "expires_date_ms": "2099-09-29T05:18:19.000Z",
        "redeemedOffers": [],
        "original_purchase_date_ms": "2024-06-25T05:18:20.000Z",
        "is_trial_period": true,
        "subscription_status": "Active",
        "is_subcribed": true,
        "free_trial_start_date": 1719292699000,
        "had_intro_offer": true
    };
}

$done({ body: JSON.stringify(body), status: 200 });
