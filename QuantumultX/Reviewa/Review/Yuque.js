/*
语雀测试：0.10.8（605）
作者：ios151
[rewrite_local]


https://www.yuque.com/api url script-request-header https://raw.githubusercontent.com/Reviewa/Review/main/Yuque.js

[mitm]

hostname = www.yuque.com

*/
var headers = $request.headers;

headers['Cookie'] = 'lang=zh-cn; current_theme=default; yuque_ctoken=UecGBu_0eFJ2f6TIw5xVpfCZ; acw_tc=0bca293a16981676610704511e26b938b47736c1c5d3ef40bc197f297304fb; _yuque_session=UXfM4DotG1zyB5Wl7Cpqi34ZYXdrKGVC1D0YXnmhFtaZu1OCVQAy4WpzGJdhRnb_QgUP84NE9FYeMeTButCskA==';

headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/19B81 NebulaSDK/1.8.100112 Nebula  YuqueMobileApp/0.10.8 (AppBuild/605 Device/Phone Locale/zh-cn Theme/light YuqueType/public) WK PSDType(1) mPaaSClient/(null)';

$done({
    headers: headers
});
