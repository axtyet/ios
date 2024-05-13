/*
中医药在线
解锁付费课程观看权限


[rewrite_local]

^https:\/\/3api\.zyyzx\.com\.cn\/(education\/api\/coursetenant\/getCourseChapterAndLessonByCourseId|admin\/api\/user\/selectUserInfo) url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/Resource/Yu9191/Rewrite/zyyzx.js

[mitm]
hostname = 3api.zyyzx.com.cn
*/

$done({ body: $response.body
	.replace(/("free"\s*:\s*)"0"/g, '$1 "1"')
	.replace(/("avatar"\s*:\s*)""/g, '$1"https:\/\/www.gsstargroup.com\/userimg\/202403\/1711898790039.png"')
.replace(/("username"\s*:\s*)"[^"]*"/g, '$1"baby"')
    .replace(/("nickName"\s*:\s*)"[^"]*"/g, '$1"baby"')
.replace(/("rate"\s*:\s*")[^"]+"/g, '$1100%"') });