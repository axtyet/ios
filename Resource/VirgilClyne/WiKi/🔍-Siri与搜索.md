# 简介
  * 保持模块启用,即可正常使用「来自APPLE的内容\来自APPLE的建议\Siri建议」  

  * 注:
    * 「询问Siri」(“Hey Siri.”)的搜索结果直接来源于`guzzoni.apple.com`,无法MitM改写请求
    * 「询问Siri」(“Hey Siri.”)的版本可被[`📍定位服务`](./📍-定位服务)模块修改切换至海外版

# 使用说明
## 标准（首次）激活流程
* 如启用本模块后未立刻生效，可按照下列步骤激活「来自APPLE的内容\来自APPLE的建议\Siri建议」:
  1. 启用[`📍定位服务`](./📍-定位服务)模块（地区不可以设置为`🇨🇳CN`，可辅以`全局代理`确保稳定）
  2. 开启`✈️飞行模式`的同时，保持`Wi-Fi`或`有线网络`连接
    * 未装有SIM卡的iOS/iPadOS/macOS设备，可略过此步骤
  4. 重新冷启动一次`地图`app
    * 后台无`地图`应用时重开`地图`app
  5. 此时应在`Loon`的`仪表`-`最近请求`或`Surge`的`工具`-`最近请求`或`Quantumult X`的`网络活动`中观察到:
     1. `基于网络的地区检测`的`https://gspe1-ssl.ls.apple.com/pep/gcc`链接
     2. 获取`Siri建议`配置下发的`https://api.smoot.apple.com/bag`或`https://api.smoot.apple.cn/bag`链接
  6. 执行一次Spotlight搜索，测试「来自APPLE的内容\来自APPLE的建议\Siri建议」是否正常工作
  7. 关闭`✈️飞行模式`
    * 未装有SIM卡的iOS/iPadOS/macOS设备，可略过此步骤
  8. 关闭[`📍定位服务`](./📍-定位服务)模块
    * 非必需步骤，取决于是否还需要激活 [📰 News](./%F0%9F%93%B0-%EF%A3%BFNews) 等功能
  9. 正常使用
  * 注:
    * 功能开启和变更，需要等待Siri搜索下一次获取下发配置文件时生效，等待时间1-12小时不等
    * 重启设备必定触发一次Siri配置文件下发检测
      * 注意开启VPN的“开机自启”等相关功能，以便第一时间截取到下发的配置文件链接，如错过链接只能重试
    * 切换国家地区设置、飞行模式全局触发定位监测有概率触发Siri配置下发检测
## 其他激活/刷新配置文件方式
* 不同地区的服务器提供的功能、搜索结果、建议有所不同，可通过下列手段触发配置文件下发从而刷新分配的服务器
  * macOS上关闭再开启`系统偏好设置`-`聚焦`-`Siri建议`
  * iOS上关闭再开启`设置`-`Siri与搜索`-`来自APPLE的内容`和`来自APPLE的建议`
  * 更改`设置`-`通用`-`语言与地区`-`地区`  
  * 等待约半小时，「Siri建议」会根据`基于网络的地区检测`结果向服务器`*.smoot.apple.com/bag`请求刷新区域设置与功能可用状态
  * 激活过程中修改[`📍定位服务`](./📍-定位服务)来模拟不同地区的`基于网络的地区检测`结果

# 功能列表
* 在以下位置及功能中可用:
  - [x] 聚焦搜索(Spotlight)
  - [x] 查询(Look Up)
  - [x] Safari浏览器(Safari)
    - [x] 视觉搜索(Visual Look Up)
    - [x] 智能历史记录
  - [x] 地图(Apple Maps)
  - [x] 新闻(Apple News)
  - [ ] 询问Siri(Ask Siri)
    - [x] 无SIM卡设备可被[`📍定位服务`](./📍-定位服务)模块修改切换至海外版(维基百科)
    - [ ] SIM卡设备会因「MCC / MNC」检测回退至国内版(百度百科)
  - [x] 照片
    - [x] 视觉搜索(Visual Look Up)
  - [x] 电话
  - [x] 家庭
  - [x] 日历
  - [x] 提醒事项
  - [x] 通讯录
  - [x] 信息
  - [x] 邮件
* 启用的功能:
  - [x] 来自APPLE的内容(CONTENT FROM APPLE)
  - [x] 来自APPLE的建议(SUGGESTIONS FROM APPLE)
  - [x] Siri建议(Siri Suggestions)
* 已知可用的信息卡片:
  - [x] 天气 (已在`🆕新版Siri_Suggestions.*`中修复，搜索关键词`城市名 天气`或`天气 城市名`，例如`天气 上海`，不是所有城市都有天气搜索结果)
  - [x] Siri资料(Siri Knowledge)  截图:[macOS](../blob/main/ScreenShots/Siri%20Knowledge%20-%20Spotlight%20-%20macOS.png?raw=true "Siri Knowledge - Spotlight - macOS")
  - [x] Siri建议的网站(Siri Suggested Websites)
  - [x] 维基百科 (macOS端需要Surge启用“增强模式”)
  - [ ] 地图 (当地图为中国区时不显示内容，有知道解决方法或成因的请联系我)
  - [x] 体育  截图:[macOS](../blob/main/ScreenShots/Sports%20-%20Spotlight%20-%20macOS.png?raw=true "Sports - Spotlight - macOS") / [iOS](./ScreenShots/Sports%20-%20Spotlight%20-%20iOS.jpeg?raw=true "Sports - Spotlight - iOS")
  - [x] 股票  截图:[macOS](../blob/main/ScreenShots/Stock%20-%20Spotlight%20-%20macOS.png?raw=true "Stock - Spotlight - macOS")
  - [x] 航班  截图:[macOS](../blob/main/ScreenShots/Flights%20-%20Spotlight%20-%20macOS.png?raw=true "Flights - Spotlight - macOS")
  - [x] App Store\Mac App Store  截图:[macOS](../blob/main/ScreenShots/Mac%20App%20Store%20-%20Spotlight%20-%20macOS.png?raw=true "Mac App Store - Spotlight - macOS") / [iOS](../blob/main/ScreenShots/App%20Store%20-%20Spotlight%20-%20iOS.jpeg?raw=true "App Store - Spotlight - iOS")
  - [x] 电影 & 电视节目
    - [x] tv  截图:[macOS](../blob/main/ScreenShots/tv%20-%20Spotlight%20-%20macOS.png?raw=true "tv - Spotlight - macOS")
    - [x] iTunes
  - [x] 音乐
    - [x] Apple Music  截图:[macOS](../blob/main/ScreenShots/Apple%20Music%20-%20Spotlight%20-%20macOS.png?raw=true "Apple Music - Spotlight - macOS") / [iOS](../blob/main/ScreenShots/Apple%20Music%20-%20Spotlight%20-%20iOS.jpeg?raw=true "Apple Music - Spotlight - iOS")
    - [x] iTunes
  - [x] 新闻
  - [ ] Twitter集成 (官方功能列表中有此功能，有知道解决方法或成因的请联系我)

# 配置方法
  * 方法1: 直接使用
    * 默认开启所有功能，地区设置为`🇸🇬新加坡`，语言自动跟随系统语言。
  * 方法2: 配合`BoxJs`及订阅使用
    * 安装方法及下载链接详见: [🧰 BoxJs](./🧰-BoxJs)
  * 方法3: 配合`argument`字段使用:
    * 此方法可以将相关脚本及配置固化到Loon、Surge或Stash的配置文件中
    * Loon与Surge可以使用[@baranwang](https://github.com/baranwang)的[Surge模块Argument代理](https://sgmodule-argument-proxy.vercel.app/)直接生成带配置的专属模块
      * [Surge模块Argument代理](https://sgmodule-argument-proxy.vercel.app/)的[使用说明](https://github.com/baranwang/sgmodule-argument-proxy#readme)
    * `argument`内容如下:
```
🆕V2版:
Switch=true&CountryCode=TW&Domains="web,itunes,app_store,movies,restaurants,maps"&Functions="flightutilities,lookup,mail,messages,news,safari,siri,spotlight,visualintelligence"&Safari_Smart_History=true
```

# 安装链接
## 🆕V3版
* V3版，支持通过BoxJs面板控制具体功能，并且开启更多地区限制性功能，随数据挖掘工作进展，未来会增加更多功能
* Loon:
  * 需要2.1.18(377)及以上版本
  * `插件`内置代理规则
  * 🆕点击一键安装: [Siri.plugin](https://api.boxjs.app/loon/import?plugin=https://github.com/VirgilClyne/iRingo/raw/main/plugin/Siri.plugin " iRingo: 🔍 Siri & Search") 
  * `插件`链接: [Siri.plugin](../raw/main/plugin/Siri.plugin " iRingo: 🔍 Siri & Search")
* Quantumult X:
  * 需要1.0.29(656)及以上版本
  * 不含`规则集`，需要自行添加`规则集`至`设置`-`分流`-`引用`并设置`策略偏好`
  * 🆕点击一键安装: [Siri.snippet](https://api.boxjs.app/quanx/add-resource?remote-resource=%7B%22rewrite_remote%22%3A%5B%22https%3A%2F%2Fgithub.com%2FVirgilClyne%2FiRingo%2Fraw%2Fmain%2Fsnippet%2FSiri.snippet%2Ctag%3D%EF%A3%BF%20iRingo%3A%20Siri%20%26%20Search%22%5D%7D " iRingo: 🔍 Siri & Search")
  * `重写`链接: [Siri.snippet](../raw/main/snippet/Siri.snippet " iRingo: 🔍 Siri & Search")
    * macOS用`规则集`:[Look_Up.Wikipedia.list](../raw/main/RuleSet/Look_Up.Wikipedia.list "Wikipedia for Look Up")
    * 此域名集只作用于macOS的`词典`和维基百科搜索集成，iOS/iPadOS不需要此域名集，运行于M1处理器的Mac设备上的Loon与Quantumult X可能有效。
* Surge:
  * 🆕点击一键安装: [Siri.sgmodule](https://api.boxjs.app/surge/install-module?url=https://github.com/VirgilClyne/iRingo/raw/main/sgmodule/Siri.sgmodule " iRingo: 🔍 Siri & Search")
  * iOS 专用`模块`链接: [Siri.sgmodule](../raw/main/sgmodule/Siri.sgmodule " iRingo: 🔍 Siri & Search")
      * 需要5.9.0及以上版本
  * macOS 专用`模块`链接:[Siri.macOS.sgmodule](../raw/main/sgmodule/Siri.macOS.sgmodule " iRingo: 🔍 Siri & Search")
      * 需要5.5.0(2589)及以上版本
      * 可通过`模块`的`编辑参数…`功能自定义内置`策略组`名称
      * 默认`策略组`名为`🌑Proxy`
      * 内置 macOS 用`域名集`:[Look_Up.Wikipedia.list](../raw/main/RuleSet/Look_Up.Wikipedia.list "Wikipedia for Look Up")
        * 此`域名集`只作用于macOS的`词典`的维基百科与`查询`的维基百科搜索集成
      * 需要开启Surge的`增强模式`
* Stash:
  * 需要1.6.2(309)及以上版本
  * `覆写`内置代理规则
  * 🆕点击一键安装: [Siri.stoverride](https://link.stash.ws/install-override/github.com/VirgilClyne/iRingo/raw/main/stoverride/Siri.stoverride " iRingo: 🔍 Siri & Search")
  * `覆写`链接: [Siri.stoverride](../raw/main/stoverride/Siri.stoverride " iRingo: 🔍 Siri & Search")
* Shadowrocket:
  * 🆕点击一键安装(Shadowrocket): [Siri.srmodule](https://api.boxjs.app/shadowrocket/install?module=https://github.com/VirgilClyne/iRingo/raw/main/modules/Siri.srmodule " iRingo: 🔍 Siri & Search")
  * `模块`链接: [Siri.srmodule](../raw/main/modules/Siri.srmodule " iRingo: 🔍 Siri & Search")

## V1.5版
* V1.5版，用脚本(Script)功能自动自动修改「来自APPLE的内容\来自APPLE的建议\Siri建议」的地区与语言设置为`设置`-`通用`-`语言与地区`相同设置的语言及地区（中国大陆地区无此服务，所以默认修改为台湾地区）。
<details> <summary>已归档，不再更新</summary>

* Loon:
  * 1.5版:[Siri_Suggestions.plugin](../raw/main/Archive/plugin/Siri_Suggestions.plugin " Enable Siri Suggestions")
* Quantumult X:
  * 1.5版:[Siri_Suggestions.qxrewrite](../raw/main/Archive/qxrewrite/Siri_Suggestions.qxrewrite " Enable Siri Suggestions")
* Surge (Shadowrocket):
  * 适用于iOS/iPadOS,不含macOS规则集的模块:
  * 1.5版:[Siri_Suggestions.sgmodule](../raw/main/Archive/sgmodule/Siri_Suggestions.sgmodule " Enable Siri Suggestions")
    * macOS用域名集:[Wikipedia_for_Look_Up.list](../raw/main/RuleSet/Wikipedia_for_Look_Up.list "Wikipedia for Look Up")
    * 此域名集只作用于macOS的`词典`和维基百科搜索集成，且需要开启Surge的`增强模式`，iOS/iPadOS不需要此域名集，运行于M1处理器的Mac设备上的Loon与Quantumult X可能有效。
  * macOS/iOS通用模块:
    * 针对策略组为`PROXY`的模块:[Siri_Suggestions_for_Uppercase_PROXY.sgmodule](../raw/main/Archive/sgmodule/Siri_Suggestions_for_Uppercase_PROXY.sgmodule " Enable Siri Suggestions")
    * 针对策略组为`Proxy`的模块:[Siri_Suggestions_for_Proxy.sgmodule](../raw/main/Archive/sgmodule/Siri_Suggestions_for_Proxy.sgmodule " Enable Siri Suggestions") 
    * 针对策略组为`🌑Proxy`的模块(如:DivineEngine):[Siri_Suggestions_for_DivineEngine.sgmodule](../raw/main/Archive/sgmodule/archive/Siri_Suggestions_for_DivineEngine.sgmodule " Enable Siri Suggestions") 
    * 针对策略组为`Apple`的模块:[Siri_Suggestions_for_Apple.sgmodule](../raw/main/Archive/sgmodule/Siri_Suggestions_for_Apple.sgmodule " Enable Siri Suggestions") 
    * 针对策略组为`🍎Apple`的模块:[Siri_Suggestions_for_Apple_icon.sgmodule](../raw/main/Archive/sgmodule/Siri_Suggestions_for_Apple_icon.sgmodule " Enable Siri Suggestions")
    * 针对策略组为`🍎 Apple`的模块(如:Surgio):[Siri_Suggestions_for_Surgio.sgmodule](../raw/main/Archive/sgmodule/Siri_Suggestions_for_Surgio.sgmodule " Enable Siri Suggestions")
    * 针对策略组为`🍎 苹果服务`的模块(如:ACL4SSR):[Siri_Suggestions_for_ACL4SSR.sgmodule](../raw/main/Archive/sgmodule/Siri_Suggestions_for_ACL4SSR.sgmodule " Enable Siri Suggestions") 
* Stash:
  * 1.5版:[Siri_Suggestions.stoverride](../raw/main/Archive/stoverride/Siri_Suggestions.stoverride " Enable Siri Suggestions")
* Clash:
  * 规则组:[Wikipedia_for_Look_Up.yaml](../raw/main/RuleSet/Wikipedia_for_Look_Up.yaml "Wikipedia for Look Up")
  * 此规则组只作用于启用macOS的`词典`和维基百科搜索集成(此功能独立于Siri建议，所以可由Clash激活)。

</details>

## V1版
* V1版，用重写(Rewrite)功能修改为固定地区
<details> <summary>已归档，不再更新</summary>

* Loon:
  * 旧版，用重写修改地区为🇹🇼TW:[Siri_Suggestions_TW.plugin](../raw/main/Archive/plugin/Siri_Suggestions_TW.plugin " Enable Siri Suggestions 🇹🇼TW")
  * 旧版，用重写修改地区为🇯🇵JP:[Siri_Suggestions_JP.plugin](../raw/main/Archive/plugin/Siri_Suggestions_JP.plugin " Enable Siri Suggestions 🇯🇵JP")
  * 旧版，用重写修改地区为🇺🇸US:[Siri_Suggestions_US.plugin](../raw/main/Archive/plugin/Siri_Suggestions_US.plugin " Enable Siri Suggestions 🇺🇸US")
* Quantumult X:
  * 旧版，用重写修改地区为🇹🇼TW:[Siri_Suggestions_TW.qxrewrite](../raw/main/Archive/qxrewrite/Siri_Suggestions_TW.qxrewrite " Enable Siri Suggestions 🇹🇼TW") (Author:@edgexyz)
  * 旧版，用重写修改地区为🇯🇵JP:[Siri_Suggestions_JP.qxrewrite](../raw/main/Archive/qxrewrite/Siri_Suggestions_JP.qxrewrite " Enable Siri Suggestions 🇯🇵JP")
  * 旧版，用重写修改地区为🇺🇸US:[Siri_Suggestions_US.qxrewrite](../raw/main/Archive/qxrewrite/Siri_Suggestions_US.qxrewrite " Enable Siri Suggestions 🇺🇸US") (Author:@edgexyz)
* Surge (Shadowrocket):
  * 适用于iOS/iPadOS,不含macOS规则集的模块:
  * 旧版，用重写修改地区为🇹🇼TW:[Siri_Suggestions_TW.sgmodule](../raw/main/Archive/sgmodule/Siri_Suggestions_TW.sgmodule " Enable Siri Suggestions 🇹🇼TW")
  * 旧版，用重写修改地区为🇯🇵JP:[Siri_Suggestions_JP.sgmodule](../raw/main/Archive/sgmodule/Siri_Suggestions_JP.sgmodule " Enable Siri Suggestions 🇯🇵JP")
  * 旧版，用重写修改地区为🇺🇸US:[Siri_Suggestions_US.sgmodule](../raw/main/Archive/sgmodule/Siri_Suggestions_US.sgmodule " Enable Siri Suggestions 🇺🇸US")
    * macOS用域名集:[Wikipedia_for_Look_Up.list](../raw/main/RuleSet/Wikipedia_for_Look_Up.list "Wikipedia for Look Up")
    * 此域名集只作用于macOS的`词典`和维基百科搜索集成，且需要开启Surge的`增强模式`，iOS/iPadOS不需要此域名集，运行于M1处理器的Mac设备上的Loon与Quantumult X可能有效。

</details>

# 已知「Siri建议」服务器列表
* 可通过Surge的`工具`-`最近请求`或`请求查看器`或`Quantumult X`的`网络活动`查看最近的*.smoot.apple.com前缀判断当前服务器   

|  域名前缀  | 对应地区 | MitM |
|   :-:   |   :-:   |   :-:   |
|api|未知|有效|
|api-aka|未知|有效|
|api-glb|未知|有效|
|api-glb-apne|亚太东北|有效|
|api-glb-apse|亚太东南|有效|
|api-glb-usw|西美|有效|
|api-glb-euc|中欧|有效|
|api-glb-euw|西欧|有效|
|api-glb-nyc|纽约|未知|
|api-glb-ash|Nashua(US)|未知|
|api-glb-sjc|圣何塞|未知|
|api-glb-ams|阿姆斯特丹|未知|
|api-glb-fra|法兰克福|未知|
|api-glb-man|曼彻斯特|未知|
|api-glb-jnb|约翰内斯堡|未知|
|api-chi|芝加哥|未知|

# 更新日志
* v3.1.0
  * 优化与修复
    1. 移除 NanoCat-Me 的 URL polyfill, 改为 Web API 的 URL 
* v3.0.0
  * 优化与修复
    1. 重构代码
    2. 修复bug
* v2.1.5
  * 优化与修复
    1. 更新环境设置(setENV)功能，增加配置文件和缓存读取方法
    2. 修复argument配置方法
    3. 更新数据库(DataBase)格式
    4. 更新脚本结束($done)方式
* v2.1.2
  * 优化与修复
    1. 修复「国家或地区代码」的“自动”选项在某些地区设置下不生效的问题
* v2.1.1
  * 优化与修复
    1. 增加兼容方案，Quantumult X商店版现在可以使用
* v2.1.0
  * 优化与修复
    1. 更新环境设置(setENV)功能
    2. 修复Surge的argument配置方法
* v2.0.0
  * 更新功能
    1. 新增BoxJs面板支持，可以精确控制Siri功能
    2. 增加开启Safari智能历史记录功能
    3. 增加开启 [视觉搜索](https://support.apple.com/zh-cn/guide/iphone/iph37fdd714b/ios)(看图查询) 功能([效果预览1](https://t.me/GetSomeFriesChannel/65), [效果预览2](https://t.me/GetSomeFriesChannel/96))
    4. 其他新增设置项，详见BoxJs设置面板
    5. 兼容系统设置中的自定义地区设置(自定义货币，计量单位等）
  * 优化与修复
    1. 同步来自🍿️ [DualSubs](https://t.me/GetSomeFriesChannel/61) 的代码结构和逻辑
