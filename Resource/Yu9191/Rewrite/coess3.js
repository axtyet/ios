$done({
    body: $response.body
        .replace(/("isFree"\s*:\s*)\d+/g, '$11')
        .replace(/("isBuy"\s*:\s*)\d+/g, '$11')
        .replace(/("isPreview"\s*:\s*)\d+/g, '$11')
        .replace(/("hasBuy"\s*:\s*)\d+/g, '$11')
});
