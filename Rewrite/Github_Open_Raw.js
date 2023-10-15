// ==UserScript==
// @name         GitHub"打开URL链接"
// @namespace    ios151
// @version      1.5
// @description  适用于addons,stay扩展Js,更好的体验Github
// @author       baby
// @match        https://github.com/*
// @grant        可搭配Github汉化：https://github.com/maboloshi/github-chinese/raw/gh-pages/main.user.js

// ==/UserScript==

(function() {
    'use strict';

    function openRawLink() {
        var rawUrl = window.location.href.replace('/blob', '').replace('github.com', 'raw.githubusercontent.com');
        window.location.href = rawUrl;
    }

    var rawButton = document.createElement('button');
    rawButton.innerHTML = '<i class="fas fa-external-link-alt"></i> 打开 Raw'; // 添加图标和文本
    rawButton.style.position = 'fixed';
    rawButton.style.right = '20px'; // 右侧距离
    rawButton.style.bottom = '20px'; // 底部距离
    rawButton.style.backgroundColor = '#333'; // 背景颜色
    rawButton.style.color = '#fff'; // 文本颜色
    rawButton.style.border = 'none';
    rawButton.style.padding = '8px 16px';
    rawButton.style.borderRadius = '5px';
    rawButton.style.cursor = 'pointer';
    rawButton.addEventListener('click', openRawLink);

    document.body.appendChild(rawButton);
})();
