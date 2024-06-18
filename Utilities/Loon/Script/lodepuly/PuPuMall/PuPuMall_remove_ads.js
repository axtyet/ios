/*
脚本引用 https://raw.githubusercontent.com/kelv1n1n/script/main/js/pp.js
*/
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

const search = "/banner/search_component_banner";
const mine = "position_types=60%2C560%2C850%2C860%2C890%2C2400";
const search_hot = "/search/hot_keywords";
const recommend = "/resource_preload/list_h5_resource";
const recommendPro = "/recommendation/interests/products";
if (url.indexOf(mine) != -1) {
  obj.data = [];
  body = JSON.stringify(obj);
  console.log("清除啦");
  $done({body});
}

if (url.indexOf(search) != -1) {
  obj.data = [];
  body = JSON.stringify(obj);
  // console.log("热搜清除啦");
  $done({body});
}

if (url.indexOf(search_hot) != -1) {
  obj.data = [];
  body = JSON.stringify(obj);
  // console.log("热搜发现清除啦");
  $done({body});
}

if (url.indexOf(recommend) != -1) {
  obj.data = obj.data.filter(item => item.filename !== "RecommendProduct.29e31893.js");
  body = JSON.stringify(obj);
  // console.log("推荐清除啦");
  $done({body});
}

if (url.indexOf(recommendPro) != -1) {
  obj.data = {};
  body = JSON.stringify(obj);
  // console.log("推荐商品清除啦");
  $done({body});
}

const typeArr = [50, 2, 90, 770, 80, 320];
obj.data = obj.data.filter(item => !typeArr.includes(item.position_type));

body = JSON.stringify(obj);
$done({body});