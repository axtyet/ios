# 简介
  * 保持模块启用，即可正常使用「News」并自定义部分设置与参数。

  * 注:
    * 需要同时启用[`📍定位服务`](./📍-定位服务)模块配合使用。
    * 加载「News」内容需`gateway.icloud.com`走`🇺🇸美国`代理线路（已包含在“预置`策略组`的模块”中）。

# 使用说明
## 🆕V3版
  * 未装有SIM卡的iOS/iPadOS/macOS设备，可省略`✈️飞行模式`相关步骤
  1. 启用[`📍定位服务`](./📍-定位服务) + [`📰News`](./📰-News)两个模块
  2. 根据您所使用的代理APP不同，指定相关分流策略为`🇺🇸美国`（或其他`News`可用地区）代理线路，无分流配置的可以`全局模式`并采用`🇺🇸美国`代理线路
  3. 打开`✈️飞行模式`
  4. 重新打开一次`地图`（指清除`地图`后台进程）
  5. 此时应在`Loon`的`仪表`-`最近请求`或`Surge`的`工具`-`最近请求`或`Quantumult X`的`网络活动`中观察到:
     1. `检测设备信息`的`https://configuration.ls.apple.com/config/defaults`链接
     2. `基于网络的地区检测`的`https://gspe1-ssl.ls.apple.com/pep/gcc`链接，且流量抓取结果不是`CN`
  6. （首次加载`News`需保证`gateway.icloud.com`为海外线路）
  7. 打开`News`，此时应是[解锁状态说明](#解锁状态说明)中的`解锁成功`状态
  8. 关闭`✈️飞行模式`
  9. 正常使用
  * 注:
    * 关闭`✈️飞行模式`后，如再次触发了基于SIM卡的[移动设备网络代码](https://zh.wikipedia.org/wiki/移动设备网络代码)「MCC / MNC」检测，则Apple News会回到[解锁状态说明](#解锁状态说明)中的`解锁失效`状态。

## V1版
<details> <summary>已归档，不再更新</summary>

  * 未装有SIM卡的iOS/iPadOS/macOS设备，可省略`✈️飞行模式`相关步骤
  1. 启用`修改地区检测为🇺🇸US` + `修改Apple Maps为🇨🇳CN` + `修改Apple News为🇺🇸US`三个模块
  2. 指定相关代理线路为🇺🇸美国或其他可用地区,或者`全局模式`
  3. 打开`✈️飞行模式`
  4. 重新打开一次`地图`应用
  5. 此时应在`Surge`的`最近请求`或`Quantumult X`的`网络活动`中观察到:
     1. `检测设备信息`的`configuration.ls.apple.com`链接
     2. `基于网络的地区检测`的`gspe1-ssl.ls.apple.com`链接，且流量抓取结果不是`CN`
  6. 首次加载`Apple News`需保证`gateway.icloud.com`为海外线路
  7. 打开`Apple News`，此时应是[解锁状态说明](#解锁状态说明)中的`解锁成功`状态
  8. 关闭`✈️飞行模式`
  9. 正常使用
  * 注:
    * 关闭`✈️飞行模式`后，如再次触发了基于SIM卡的[移动设备网络代码](https://zh.wikipedia.org/wiki/移动设备网络代码)「MCC / MNC」检测，则Apple News会回到[解锁状态说明](#解锁状态说明)中的`解锁失效`状态。

</details>

# 解锁状态说明
|  锁定状态  | 解锁成功 | 解锁失效 | 
| :---: | :---: | :---: |
| 未通过地区检测  | 已成功通过地区检测 | 通过检测后，再次触发检测时未通过检测  |
| 请在`✈️飞行模式`下通过`Wi-Fi`或`有线网络`再次执行解锁步骤  | `gateway.icloud.com`需走代理才能完整加载内容 | 请在`✈️飞行模式`下通过`Wi-Fi`或`有线网络`再次执行解锁步骤  |
|<p> Apple News isn't supported in your current region. </p>|<p> **Feed Unavailable**  <br> There may be a problem with the sever or network. Plase try again later. </p>|<p> **Feed Unavailable** <br> Apple News isn't supported in your current region. </p>|
|![🔒锁定状态截图](../blob/main/ScreenShots/Apple%20News%20-%20Locked%20-%20iOS.jpeg?raw=true "Apple News - Locked - iOS")|![🔓解锁成功截图](../blob/main/ScreenShots/Apple%20News%20-%20Unlock%20Success%20-%20iOS.jpeg?raw=true "Apple News - Unlock Success - iOS")|![🔒解锁失效截图](../blob/main/ScreenShots/Apple%20News%20-%20Unlock%20Invalid%20-%20iOS.jpeg?raw=true "Apple News - Unlock Invalid - iOS")|

# 关于新闻小组件
  * 新闻小组件`parsecd/1.0 ({Device}; {Version} {Build}) News/1`没有地区限制，可以任意区域环境下使用
  * 新闻小组件内容由`Siri建议`服务`api*.smoot.apple.com`提供，而不是`新闻`服务`news-*.apple.com`，已在`🆕新版Siri_Suggestions.*`中修复
# 关于体育比分与赛事关注
  * 关注的球队与赛事内容由`体育`服务`WatchListKit.framework`提供，而不是`新闻`服务`news-*.apple.com`，已在`🆕V3版`中修复

# 安装链接
## 🆕V3版
* Loon:
  * `插件`内置代理规则
  * 🆕点击一键安装: [News.plugin](https://api.boxjs.app/loon/import?plugin=https://raw.githubusercontent.com/VirgilClyne/iRingo/main/plugin/News.plugin " iRingo: 📰 News") 
  * `插件`链接: [News.plugin](../raw/main/plugin/News.plugin " iRingo: 📰 News")
* Quantumult X:
  * 不含`规则集`，需要自行添加`规则集`至`设置`-`分流`-`引用`并设置`策略偏好`
    * 规则集:[News.snippet](../raw/main/RuleSet/News.snippet "News") 
  * 🆕点击一键安装: [News.snippet](https://api.boxjs.app/quanx/add-resource?remote-resource=%7B%22rewrite_remote%22%3A%5B%22https%3A%2F%2Fgithub.com%2FVirgilClyne%2FiRingo%2Fraw%2Fmain%2Fsnippet%2FNews.snippet%2Ctag%3D%EF%A3%BF%20iRingo%3A%20%EF%A3%BFNews%22%5D%7D " iRingo: 📰 News")
  * `重写`链接: [News.snippet](../raw/main/snippet/News.snippet " iRingo: 📰 News")
* Surge:
  * 需要 iOS 5.9.0及以上版本
  * 需要 macOS 5.5.0(2589)及以上版本
  * `模块`内置代理规则
  * 🆕点击一键安装: [News.sgmodule](https://api.boxjs.app/surge/install-module?url=https://raw.githubusercontent.com/VirgilClyne/iRingo/main/sgmodule/News.sgmodule " iRingo: 📰 News")
  * `模块`链接: [News.sgmodule](../raw/main/sgmodule/News.sgmodule " iRingo: 📰 News")
    * 可通过`模块`的`编辑参数…`功能自定义内置`策略组`名称
    * 默认`策略组`名为`🇺🇸美国`
    * `域名集`:[News.list](../raw/main/RuleSet/News.list "News")
* Stash:
  * `覆写`内置代理规则
  * 🆕点击一键安装: [News.stoverride](https://link.stash.ws/install-override/github.com/VirgilClyne/iRingo/raw/main/stoverride/News.stoverride " iRingo: 📰 News")
  * `覆写`链接: [News.stoverride](../raw/main/stoverride/News.stoverride " iRingo: 📰 News")
* Shadowrocket:
  * 🆕点击一键安装: [News.srmodule](https://api.boxjs.app/shadowrocket/install?module=https://raw.githubusercontent.com/VirgilClyne/iRingo/main/modules/News.srmodule " iRingo: 📰 News")
  * `模块`链接(不含`规则集`): [News.srmodule](../raw/main/modules/News.srmodule " iRingo: 📰 News")

## V1版
<details> <summary>已归档，不再更新</summary>

* Loon:
  * 预置策略组的模块:[Apple_News.plugin](../raw/main/Archive/plugin/Apple_News.plugin " Unlock Apple News 🇺🇸US") (Author:@Tartarus2014) (该插件需要匹配代理策略组)
* Quantumult X:
  * 不含规则集的模块:[Apple_News.qxrewrite](../raw/main/Archive/qxrewrite/Apple_News.qxrewrite " Unlock Apple News 🇺🇸US")
    * 规则集:[Apple_News_for_Quantumult_X.list](../raw/main/Archive/ruleset/Apple_News_for_Quantumult_X.list "Apple_News") (需要自行添加至`设置`-`分流`-`引用`并设置`策略偏好`)
* Surge (Shadowrocket):
  * 不含规则集的模块:[Apple_News.sgmodule](../raw/main/Archive/sgmodule/Apple_News.sgmodule " Unlock Apple News 🇺🇸US")
    * 域名集:[Apple_News.list](../raw/main/Archive/ruleset/Apple_News.list "Apple_News")
  * 预置策略组的模块:
    * 针对策略组为`PROXY`的模块:[Apple_News_for_Uppercase_PROXY.sgmodule](../raw/main/Archive/sgmodule/Apple_News_for_Uppercase_PROXY.sgmodule " Unlock Apple News 🇺🇸US")
    * 针对策略组为`Proxy`的模块:[Apple_News_for_Proxy.sgmodule](../raw/main/Archive/sgmodule/Apple_News_for_Proxy.sgmodule " Unlock Apple News 🇺🇸US")
    * 针对策略组为`🌑Proxy`的模块(如:DivineEngine):[Apple_News_for_DivineEngine.sgmodule](../raw/main/Archive/sgmodule/Apple_News_for_DivineEngine.sgmodule " Unlock Apple News 🇺🇸US")
    * 针对策略组为`Apple`的模块:[Apple_News_for_Apple.sgmodule](../raw/main/Archive/sgmodule/Apple_News_for_Apple.sgmodule " Unlock Apple News 🇺🇸US")
    * 针对策略组为`🍎Apple`的模块:[Apple_News_for_Apple_icon.sgmodule](../raw/main/Archive/sgmodule/Apple_News_for_Apple_icon.sgmodule " Unlock Apple News 🇺🇸US")
    * 针对策略组为`🍎 Apple`的模块(如:Surgio):[Apple_News_for_Apple_blank_icon.sgmodule](../raw/main/Archive/sgmodule/Apple_News_for_Apple_blank_icon.sgmodule " Unlock Apple News 🇺🇸US")
    * 针对策略组为`📡 Apple 地区限制`的模块(如:Surgio):[Apple_News_for_Surgio.sgmodule](../raw/main/Archive/sgmodule/Apple_News_for_Surgio.sgmodule " Unlock Apple News 🇺🇸US")
    * 针对策略组为`🍎 苹果服务`的模块(如:ACL4SSR):[Apple_News_for_ACL4SSR.sgmodule](../raw/main/Archive/sgmodule/Apple_News_for_ACL4SSR.sgmodule " Unlock Apple News 🇺🇸US")
    * 针对策略组为`Apple News`的模块:[Apple_News_for_Apple_News.sgmodule](../raw/main/Archive/sgmodule/Apple_News_for_Apple_News.sgmodule " Unlock Apple News 🇺🇸US")
    * 针对策略组为`🇺🇸美国`的模块:[Apple_News_for_US_icon.sgmodule](../raw/main/Archive/sgmodule/Apple_News_for_US_icon.sgmodule " Unlock Apple News 🇺🇸US")

</details>

# 更新日志
* v3.1.0
  * 优化与修复
    1. 移除 NanoCat-Me 的 URL polyfill, 改为 Web API 的 URL 
  * v2.0.0
    * 功能更新
      1. 
    * 优化与修复
      1. 