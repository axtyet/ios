var obj = JSON.parse($response.body);

obj.vips = [
    {
      "memberid" : 12,
      "expire_time" : 1878219024,
      "name" : "稻壳会员",
      "has_ad" : 0,
      "enabled" : null
    }
    { 
      "memberid" : 40,
      "expire_time" : 1878219024,
      "name" : "超级会员",
      "has_ad" : 0,
      "enabled" : null
    }
    { 
      "memberid" : 20,
      "expire_time" : 1878219024,
      "name" : "WPS会",
      "has_ad" : 0,
      "enabled" : null
    }
];

$done({body: JSON.stringify(obj)});
