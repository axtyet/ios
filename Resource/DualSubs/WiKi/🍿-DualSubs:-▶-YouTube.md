# 简介
* 安装后无需任何配置，即可为移动端启用双语字幕，Web端解锁全部翻译语言选项，选择任一翻译语言，即为原始语言与翻译语言双语字幕

# 功能列表
1. 支持`Web端`和`移动端`的`播放器`全翻译语言选项解锁
2. 支持`Web端`和`移动端`有字幕视频的`自动翻译`及`自动生成`双语
   * 当选择任意语言`普通字幕`时，双语字幕`首选语言`均为BoxJs中设置的`首选语言`且为翻译字幕
   * 当选择`自动翻译`中的`翻译字幕`时，双语字幕分别为`原语言`及`目标语言`
3. 支持默认开启双语字幕
   * 第二语言为上次用户所使用的翻译语言
   * 可通过BoxJs面板关闭此功能或强制指定为某种语言
4. 支持任意两种语言字幕合成
   * 第一语言为上次用户所使用的原语言
5. `自动翻译`语言选项列表现在为双语列表

* 注：本插件不适用于`tvOS`上的YouTube app（无法MitM`tvOS`上的`www.youtube.com`）

# 使用说明
## 配置方法
* 方法1: 直接使用
  * 采用默认配置
    * 在播放器`字幕`-`自动翻译`中任选一种语言，即为此语言与原语言双语字幕
    * 支持默认开启双语字幕
      * 第二语言为上次用户所使用的翻译语言
      * 可通过BoxJs面板关闭此功能或强制指定为某种语言
    * 支持任意两种语言字幕合成
      * 第一语言为上次用户所使用的原语言
* 方法2: 配合`BoxJs`及订阅使用
  1. 安装`BoxJs`插件并更新引用资源或脚本:
     * 安装方法及下载链接详见: [🧰 BoxJs](../../DualSubs/wiki/🧰-BoxJs)
  2. 在`BoxJs`的配置面板中进行个性化设置:
    1. 浏览器访问[BoxJs.com](http://boxjs.com)
    2. 在[`应用`](http://boxjs.com/#/app)页面点开`DualSubs`折叠
    3. 根据需要配置每个流媒体平台的设置
    4. 功能将会持续增加

# 安装链接
## 🆕V1.3版
* 字幕合成与翻译脚本，现在与 Universal 版共用
* 不再提供`配合去广告版`，将`YouTube去广告模块`优先级高于本字幕插件（Surge为置于本插件下方，Loon为置于本插件上方）即可
* Loon:
  * 🆕点击一键安装: [DualSubs.YouTube.plugin](https://www.nsloon.com/openloon/import?plugin=https%3A%2F%2Fraw.githubusercontent.com%2FDualSubs%2FYouTube%2Fmain%2Fmodules%2FDualSubs.YouTube.plugin "🍿 DualSubs: ▶ YouTube") 
  * `插件`链接: [DualSubs.YouTube.plugin](../raw/main/modules/DualSubs.YouTube.plugin "🍿 DualSubs: ▶ YouTube")
* Quantumult X:
  * 🆕点击一键安装: [DualSubs.YouTube.snippet](https://api.boxjs.app/quanx/add-resource?remote-resource=%7B%22rewrite_remote%22%3A%5B%22https%3A%2F%2Fgithub.com%2FDualSubs%2FYouTube%2Fraw%2Fmain%2Fmodules%2FDualSubs.YouTube.snippet%2Ctag%3D%F0%9F%8D%BF%20DualSubs%3A%20%E2%96%B6%20YouTube%22%5D%7D "🍿 DualSubs: ▶ YouTube")
  * `重写`链接: [DualSubs.YouTube.snippet](../raw/main/modules/DualSubs.YouTube.snippet "🍿 DualSubs: ▶ YouTube")
* Surge:
  * 🆕点击一键安装: [DualSubs.YouTube.sgmodule](https://api.boxjs.app/surge/install-module?url=https://github.com/DualSubs/YouTube/raw/main/modules/DualSubs.YouTube.sgmodule "🍿 DualSubs: ▶ YouTube")
  * `模块`链接: [DualSubs.YouTube.sgmodule](../raw/main/modules/DualSubs.YouTube.sgmodule "🍿 DualSubs: ▶ YouTube")
* Stash:
  * 🆕点击一键安装: [DualSubs.YouTube.stoverride](https://link.stash.ws/install-override/raw.githubusercontent.com/DualSubs/YouTube/main/modules/DualSubs.YouTube.stoverride "🍿 DualSubs: ▶ YouTube") 
  * `覆写`链接: [DualSubs.YouTube.stoverride](../raw/main/modules/DualSubs.YouTube.stoverride "🍿 DualSubs: ▶ YouTube")
* Egern:
  * `模块`链接: [DualSubs.YouTube.yaml](../raw/main/modules/DualSubs.YouTube.yaml "🍿 DualSubs: ▶ YouTube")
* Shadowrocket:
  * 🆕点击一键安装: [DualSubs.YouTube.srmodule](https://api.boxjs.app/shadowrocket/install?module=https://raw.githubusercontent.com/DualSubs/YouTube/main/modules/DualSubs.YouTube.srmodule "🍿 DualSubs: ▶ YouTube")
  * `模块`链接: [DualSubs.YouTube.srmodule](../raw/main/modules/DualSubs.YouTube.srmodule "🍿 DualSubs: ▶ YouTube")

## V0.7版
<details>
<summary>已移除，不再提供</summary>

* 因v0.4版结构升级，旧版用户请清空[`DualSubs在BoxJs的全部设置`](../../DualSubs/wiki/在BoxJs中清除DualSubs的储存数据#清除全部储存数据)后重新设置
* Loon:
  * 🆕点击一键安装: 
    * 普通版: [DualSubs.YouTube.plugin](https://api.boxjs.app/loon/import?plugin=https://raw.githubusercontent.com/DualSubs/YouTube/main/plugin/DualSubs.YouTube.plugin "🍿 DualSubs: ▶ YouTube") 
    * 配合去广告版: [DualSubs.YouTube.feat.ADs.plugin](https://api.boxjs.app/loon/import?plugin=https://raw.githubusercontent.com/DualSubs/YouTube/main/plugin/DualSubs.YouTube.feat.ADs.plugin "🍿 DualSubs: ▶ YouTube feat.ADs")
  * `插件`链接: 
    * 普通版: [DualSubs.YouTube.plugin](../raw/main/plugin/DualSubs.YouTube.plugin "🍿 DualSubs: ▶ YouTube")
    * 配合去广告版: [DualSubs.YouTube.feat.ADs.plugin](../raw/main/plugin/DualSubs.YouTube.feat.ADs.plugin "🍿 DualSubs for ▶ YouTube feat.ADs")
* Quantumult X:
  * 🆕点击一键安装: 
    * 普通版: [DualSubs.YouTube.qxrewrite](https://api.boxjs.app/quanx/add-resource?remote-resource=%7B%22rewrite_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FDualSubs%2FYouTube%2Fraw%2Fmain%2Fqxrewrite%2FDualSubs.YouTube.qxrewrite%2Ctag%3D%EF%BF%BD%EF%BF%BD%20DualSubs%20for%20%E2%96%B6%20YouTube%22%5D%7D "🍿 DualSubs: ▶ YouTube")
    * 配合去广告版: [DualSubs.YouTube.feat.ADs.qxrewrite](https://api.boxjs.app/quanx/add-resource?remote-resource=%7B%22rewrite_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FDualSubs%2FYouTube%2Fraw%2Fmain%2Fqxrewrite%2FDualSubs.YouTube.feat.ADs.qxrewrite%2Ctag%3D%EF%BF%BD%EF%BF%BD%20DualSubs%20for%20%E2%96%B6%20YouTube%20feat.ADs%22%5D%7D "🍿 DualSubs: ▶ YouTube feat.ADs")
  * `重写`链接: 
    * 普通版: [DualSubs.YouTube.qxrewrite](../raw/main/qxrewrite/DualSubs.YouTube.qxrewrite "🍿 DualSubs: ▶ YouTube")
    * 配合去广告版: [DualSubs.YouTube.feat.ADs.qxrewrite](../raw/main/qxrewrite/DualSubs.YouTube.feat.ADs.qxrewrite "🍿 DualSubs: ▶ YouTube feat.ADs")
* Surge(Shadowrocket):
  * 🆕点击一键安装(Shadowrocket): 
    * 普通版: [DualSubs.YouTube.sgmodule](https://api.boxjs.app/shadowrocket/install?module=https://raw.githubusercontent.com/DualSubs/YouTube/main/sgmodule/DualSubs.YouTube.sgmodule "🍿 DualSubs: ▶ YouTube")
    * 配合去广告版: [DualSubs.YouTube.feat.ADs.sgmodule](https://api.boxjs.app/shadowrocket/install?module=https://raw.githubusercontent.com/DualSubs/YouTube/main/sgmodule/DualSubs.YouTube.feat.ADs.sgmodule "🍿 DualSubs: ▶ YouTube feat.ADs")
  * `模块`链接: 
    * 普通版: [DualSubs.YouTube.sgmodule](../raw/main/sgmodule/DualSubs.YouTube.sgmodule "🍿 DualSubs: ▶ YouTube")
    * 配合去广告版: [DualSubs.YouTube.feat.ADs.sgmodule](../raw/main/sgmodule/DualSubs.YouTube.feat.ADs.sgmodule "🍿 DualSubs: ▶ YouTube feat.ADs")
* Stash:
  * `覆写`链接: 
    * 普通版: [DualSubs.YouTube.stoverride](../raw/main/stoverride/DualSubs.YouTube.stoverride "🍿 DualSubs: ▶ YouTube")
    * 配合去广告版: [DualSubs.YouTube.feat.ADs.stoverride](../raw/main/stoverride/DualSubs.YouTube.feat.ADs.stoverride "🍿 DualSubs: ▶ YouTube feat.ADs")
</details>

## V0.5版
<details>
<summary>因v0.4版结构升级，旧版用户请清空`DualSubs在BoxJs的全部设置`后重新设置</summary>

* Loon:
  * 点击一键安装: [DualSubs.YouTube.plugin](https://api.boxjs.app/loon/import?plugin=https://raw.githubusercontent.com/DualSubs/YouTube/releases/v0.5.16/plugin/DualSubs.YouTube.plugin "🍿 DualSubs: ▶ YouTube") 
  * `插件`链接: [DualSubs.YouTube.plugin](../raw/releases/v0.5.16/plugin/DualSubs.YouTube.plugin "🍿 DualSubs: ▶ YouTube")
* Quantumult X:
  * 点击一键安装: [DualSubs.YouTube.qxrewrite](https://api.boxjs.app/quanx/add-resource?remote-resource=%7B%22rewrite_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FDualSubs%2FYouTube%2Freleases%2Fv0.5.16%2Fqxrewrite%2FDualSubs.YouTube.qxrewrite%3Fraw%3Dtrue%2Ctag%3D%EF%BF%BD%EF%BF%BD%20DualSubs%20for%20%E2%96%B6%20YouTube%22%5D%7D "🍿 DualSubs: ▶ YouTube")
  * `重写`链接: [DualSubs.YouTube.qxrewrite](../raw/releases/v0.5.16/qxrewrite/DualSubs.YouTube.qxrewrite "🍿 DualSubs: ▶ YouTube")
* Surge(Shadowrocket):
  * 点击一键安装(Shadowrocket): [DualSubs.YouTube.sgmodule](https://api.boxjs.app/shadowrocket/install?module=https://raw.githubusercontent.com/DualSubs/YouTube/releases/v0.5.16/sgmodule/DualSubs.YouTube.sgmodule "🍿 DualSubs: ▶ YouTube")
  * `模块`链接: [DualSubs.YouTube.sgmodule](../raw/releases/v0.5.16/sgmodule/DualSubs.YouTube.sgmodule "🍿 DualSubs: ▶ YouTube")
* Stash:
  * `覆写`链接: [DualSubs.YouTube.stoverride](../raw/releases/v0.5.16/stoverride/DualSubs.YouTube.stoverride "🍿 DualSubs: ▶ YouTube")
</details>

# 更新日志
* V0.9.x
  * 

* V0.8.x
  * 支持 Loon 插件内快捷选项
  * 支持默认开启字幕选项
  * 相同语言（代码）的字幕不会合成（为两行相同的）字幕
  * 分离翻译器（翻译字幕脚本）与合成器（合成字幕脚本）
  * 字幕合成脚本现在与 Universal 版共用(DualSubs.Subtitles.Composite.response)
  * 字幕翻译脚本现在与 Universal 版共用(DualSubs.Subtitles.Translate.response)

* V0.7.x
  * 同步新的环境架构
  * 简化 BoxJs 设置面板
  * 重构官方字幕缓存架构
  * 更新 EXTM3U 解析器
  * 更新 WebVTT 解析器
