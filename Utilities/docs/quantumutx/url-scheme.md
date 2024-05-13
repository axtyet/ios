## URL Scheme

### [官方文档](https://github.com/crossutility/Quantumult-X/blob/master/url-scheme.md)

### 参数

#### 替换所有现有资源

- `quantumult-x:///update-configuration?remote-resource=url-encoded-json`

> 会覆盖现有配置

假设资源如下：

```
{
    "server_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server.snippet, tag=Sample-01",
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.snippet, tag=Sample-02"
    ],
    "filter_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/filter.snippet, tag=Sample, force-policy=your-policy-name"
    ],
    "rewrite_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-import-rewrite.snippet, tag=Sample"
    ]
}
```

[URL Encode](https://www.jyshare.com/front-end/695/) 后得到如下:

```
%7B%0A%20%20%20%20%22server_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver.snippet%2C%20tag%3DSample-01%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver-complete.snippet%2C%20tag%3DSample-02%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22filter_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Ffilter.snippet%2C%20tag%3DSample%2C%20force-policy%3Dyour-policy-name%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22rewrite_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fsample-import-rewrite.snippet%2C%20tag%3DSample%22%0A%20%20%20%20%5D%0A%7D
```

将其与 `quantumult-x:///update-configuration?remote-resource=` 拼接：

```
quantumult-x:///update-configuration?remote-resource=%7B%0A%20%20%20%20%22server_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver.snippet%2C%20tag%3DSample-01%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver-complete.snippet%2C%20tag%3DSample-02%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22filter_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Ffilter.snippet%2C%20tag%3DSample%2C%20force-policy%3Dyour-policy-name%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22rewrite_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fsample-import-rewrite.snippet%2C%20tag%3DSample%22%0A%20%20%20%20%5D%0A%7D
```


#### 保留所有现有资源并添加新资源

- `quantumult-x:///add-resource?remote-resource=url-encoded-json`

```
{
    "rewrite_remote": [
        "https://github.com/limbopro/Adblock4limbo/raw/main/Adblock4limbo.conf, tag=Adblock4limbo, update-interval=172800, opt-parser=false, enabled=true",
        "https://mirror.ghproxy.com/https://raw.githubusercontent.com/RuCu6/QuanX/main/Rewrites/WebPage.conf, tag=网页去广告@RuCu6, update-interval=172800, opt-parser=false, enabled=true",
        "https://mirror.ghproxy.com/https://raw.githubusercontent.com/RuCu6/QuanX/main/Rewrites/MyBlockAds.conf, tag=MyBlockAds@RuCu6, update-interval=172800, opt-parser=false,  enabled=true",
        "https://mirror.ghproxy.com/https://raw.githubusercontent.com/RuCu6/QuanX/main/Rewrites/Cube/zhihu.snippet, tag=知乎去广告@RuCu6, update-interval=172800, opt-parser=false, enabled=true"        
        ]
}
```


[URL Encode](https://www.jyshare.com/front-end/695/) 后得到如下:

```
%7B%0A%20%20%20%20%22rewrite_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fgithub.com%2Flimbopro%2FAdblock4limbo%2Fraw%2Fmain%2FAdblock4limbo.conf%2C%20tag%3DAdblock4limbo%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20enabled%3Dtrue%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fmirror.ghproxy.com%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FRuCu6%2FQuanX%2Fmain%2FRewrites%2FWebPage.conf%2C%20tag%3D%E7%BD%91%E9%A1%B5%E5%8E%BB%E5%B9%BF%E5%91%8A%40RuCu6%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20enabled%3Dtrue%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fmirror.ghproxy.com%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FRuCu6%2FQuanX%2Fmain%2FRewrites%2FMyBlockAds.conf%2C%20tag%3DMyBlockAds%40RuCu6%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20%20enabled%3Dtrue%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fmirror.ghproxy.com%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FRuCu6%2FQuanX%2Fmain%2FRewrites%2FCube%2Fzhihu.snippet%2C%20tag%3D%E7%9F%A5%E4%B9%8E%E5%8E%BB%E5%B9%BF%E5%91%8A%40RuCu6%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20enabled%3Dtrue%22%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%5D%0A%7D
```


将其与 `quantumult-x:///add-resource?remote-resource=` 拼接：

```
quantumult-x:///add-resource?remote-resource=%7B%0A%20%20%20%20%22rewrite_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fgithub.com%2Flimbopro%2FAdblock4limbo%2Fraw%2Fmain%2FAdblock4limbo.conf%2C%20tag%3DAdblock4limbo%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20enabled%3Dtrue%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fmirror.ghproxy.com%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FRuCu6%2FQuanX%2Fmain%2FRewrites%2FWebPage.conf%2C%20tag%3D%E7%BD%91%E9%A1%B5%E5%8E%BB%E5%B9%BF%E5%91%8A%40RuCu6%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20enabled%3Dtrue%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fmirror.ghproxy.com%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FRuCu6%2FQuanX%2Fmain%2FRewrites%2FMyBlockAds.conf%2C%20tag%3DMyBlockAds%40RuCu6%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20%20enabled%3Dtrue%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fmirror.ghproxy.com%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FRuCu6%2FQuanX%2Fmain%2FRewrites%2FCube%2Fzhihu.snippet%2C%20tag%3D%E7%9F%A5%E4%B9%8E%E5%8E%BB%E5%B9%BF%E5%91%8A%40RuCu6%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20enabled%3Dtrue%22%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%5D%0A%7D
```

#### 添加脚本任务仓库

- `quantumult-x:///ui?module=gallery&type=task&action=add&content=url-encoded-json`


```
[
    "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/gallery.json"
]
```


```
quantumult-x:///ui?module=gallery&type=task&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fgallery.json%22%0A%5D
```


#### 添加图标集仓库

- `quantumult-x:///ui?module=gallery&type=icon&action=add&content=url-encoded-json`


```
[
     "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/icon-gallery.json"
]
```


```
quantumult-x:///ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Ficon-gallery.json%22%0A%5D
```

### 通用链接

Quantumult X 通用链接以 `https://quantumult.app/x/open-app/` 开头，链接的其余部分应与 Quantumult X URL 类似。

`quantumult-x:///add-resource?remote-resource=url-encoded-json`

↓↓↓↓↓↓↓↓↓↓↓

`https://quantumult.app/x/open-app/add-resource?remote-resource=url-encoded-json`


eg:

```
https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%0A%20%20%20%20%22rewrite_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fgithub.com%2Flimbopro%2FAdblock4limbo%2Fraw%2Fmain%2FAdblock4limbo.conf%2C%20tag%3DAdblock4limbo%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20enabled%3Dtrue%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fmirror.ghproxy.com%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FRuCu6%2FQuanX%2Fmain%2FRewrites%2FWebPage.conf%2C%20tag%3D%E7%BD%91%E9%A1%B5%E5%8E%BB%E5%B9%BF%E5%91%8A%40RuCu6%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20enabled%3Dtrue%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fmirror.ghproxy.com%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FRuCu6%2FQuanX%2Fmain%2FRewrites%2FMyBlockAds.conf%2C%20tag%3DMyBlockAds%40RuCu6%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20%20enabled%3Dtrue%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fmirror.ghproxy.com%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FRuCu6%2FQuanX%2Fmain%2FRewrites%2FCube%2Fzhihu.snippet%2C%20tag%3D%E7%9F%A5%E4%B9%8E%E5%8E%BB%E5%B9%BF%E5%91%8A%40RuCu6%2C%20update-interval%3D172800%2C%20opt-parser%3Dfalse%2C%20enabled%3Dtrue%22%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%5D%0A%7D
```

