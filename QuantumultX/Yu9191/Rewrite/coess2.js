$done({
    body: $response.body
        .replace(/("isFree"\s*:\s*)\d+/g, '$11')
        .replace(/("isBuy"\s*:\s*)\d+/g, '$11')
    .replace(/("isEncrypt"\s*:\s*)null/g, '$12')
    .replace(/("isWatched"\s*:\s*)0/g, '$11')
        .replace(/("isPreview"\s*:\s*)\d+/g, '$11')
    .replace(/("isEffective"\s*:\s*)false/g, '$1true')
        .replace(/("del"\s*:\s*)false/g, '$1true')
        .replace(/("status"\s*:\s*)null/g, '$11')
});
