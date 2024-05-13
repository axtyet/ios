/*
成人高考

[rewrite_local]

^http:\/\/api\.chengkaowang\.cn\/index\.php\/AppApi\/(Intopic\/(showtk_detail|showtk_kmlistNew)|Goods\/(goodsinfoNew|getDirectByCourse)|MsProduct\/(getProductLesson|getProductInfo|getProductMaterial))$ url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/crgk.js


[mitm]
hostname = api.chengkaowang.cn
*/

$done({ body: $response.body
    .replace(/("is_buy"\s*:\s*)\d+/g, '$11')
    .replace(/("is_view"\s*:\s*)\d+/g, '$11')
    .replace(/("writed_count"\s*:\s*)\d+/g, '$1999')//已刷题数
    .replace(/("can_write"\s*:\s*)\d+/g, '$10')
    .replace(/("isAudition"\s*:\s*)\d+/g, '$11')
    .replace(/("is_free"\s*:\s*)\d+/g, '$11') });
