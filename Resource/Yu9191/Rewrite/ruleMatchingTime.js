/*
 * 原P佬基础增加当前时间
 * 
*/
let initial = {
    numberOfRequests: 0,
    totalMatchingTime: 0,
    latestRecordTime: 0,
};

let history = JSON.parse(
    $persistentStore.read("RULEMATCHINGTIME") || JSON.stringify(initial)
);

$httpAPI("GET", "/v1/requests/recent", null, (body) => {
    if (!body || !body.requests || body.requests.length === 0) {
        $done({
            title: "Rule Matching Time",
            content: `No recent requests found.\nTime: ${new Date().toLocaleString()}`,
            icon: "bolt.horizontal.circle.fill",
        });
        return;
    }

    body.requests.forEach((request) => {
        if (
            request.timingRecords &&
            request.setupCompletedDate > history.latestRecordTime &&
            request.timingRecords[0].name == "Rule Evaluating"
        ) {
            history.totalMatchingTime += request.timingRecords[0].duration;
            history.numberOfRequests += 1;
        }
    });

    history.latestRecordTime = body.requests[0].setupCompletedDate;
    $persistentStore.write(JSON.stringify(history), "RULEMATCHINGTIME");

    let avgMatchingTime = history.numberOfRequests > 0
        ? (history.totalMatchingTime * 1000 / history.numberOfRequests).toFixed(2)
        : "N/A";

    $done({
        title: "Rule Matching Time",
        content: `统计数量: ${history.numberOfRequests}\n平均时间: ${avgMatchingTime} ms\n总匹配时间: ${(history.totalMatchingTime * 1000).toFixed(2)} ms\n获取时间: ${new Date().toLocaleString()}`,
        icon: "bolt.horizontal.circle.fill",
    });
});

