var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "subscription_ttl_in_seconds": "86400",
  "subscription_info": {
    "sub_entitled_count": 50,
    "ap_enabled": false,
    "exp_date": "2029-05-23T18:29:45.42Z",
    "sub_status": "Active",
    "sub_length": "259200000",
    "renew_url": "https://home.mcafee.com/Root/RenewProduct.aspx?affid=0&culture=FR-FR&pkgs=521_0-0_FR-FR_0_EE13B515-8607-483F-A238-AF135688825C_111&ProvisionId=7299D8C8-E473-46B8-8527-49DD114ACE25",
    "time_to_expiry_in_seconds": "259183700",
    "auto_renewal_flag": "No_Disabled",
    "has_sub_transitioned": false,
    "is_authenticated": true,
    "provision_id": "7299D8C8-E473-46B8-8527-49DD114ACE25",
    "affid": "0",
    "assetAssociationStatus": "active"
  }
}

body = JSON.stringify(obj);
$done({body});
