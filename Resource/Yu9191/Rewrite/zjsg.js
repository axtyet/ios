/*
指尖时光
[rewrite_local]

https://integral2.zhijiantime.com url script-request-header https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/zjsg.js


[mitm]
hostname = wxapi.zhongyuedu.com
*/
const headers = Object.fromEntries(Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value]));
Object.assign(headers, {
    'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI2MTI3IiwiYXVkIjoiWmhpamlhbkF1ZGllbmNlIiwibmJmIjoxNzExMzc3ODMzLCJTTlNQbGF0Zm9ybSI6IldYIiwiRGV2aWNlSWQiOiJBM0VFQzQ1NS00NjJCLURBM0UtMjdBRS0zNjdCRUE0NTRCMjUiLCJpc3MiOiJaaGlqaWFuemh1b3l1ZSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiLpvpnot4MiLCJleHAiOjU3OTI5NDYyNDN9.j4KEZBL293FhgO4ydCMZkmxSiYYmhrqrdsbIhXC3t7A',
});

//delete headers.platform;

$done({ headers });