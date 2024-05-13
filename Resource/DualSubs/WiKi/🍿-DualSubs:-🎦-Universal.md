## 简介
  * 安装后无需任何额外配置，即可为支持的平台添加双语字幕及对应的字幕选项
  * 默认字幕语言首选`中文（自动）`，次选`英文（自动）`
  * 默认采用Google翻译，将字幕按127句为单位划分，进行整段翻译。

## 功能列表
  1. 官方播放器内提供自定义字幕选项
     * 对于不兼容的播放器，提供了一个字幕选项，用来强制替换字幕为指定字幕类型。
  2. 自定义启用的第三方字幕种类
  3. 双语官方字幕
  4. 双语翻译字幕
     1. Google 翻译
     2. [Google Cloud Translate API](https://cloud.google.com/translate)
        1. V2版
        2. V3版
     3. Microsoft Translator
        1. [国际版](https://azure.microsoft.com/zh-cn/services/cognitive-services/translator/)
        2. [中国版](https://www.azure.cn)
        3. [美国政府版](https://azure.microsoft.com/zh-cn/explore/global-infrastructure/government)
        4. Edge Translator
     4. DeepL
        1. Free
        2. [Pro](https://www.deepl.com/pro-api)
  5. 双语外挂字幕
  6. 中文，英文，西班牙文自动回退
     * `中文（自动）`回退顺序为`中文（简体）`-`中文（繁體）`-`中文（香港）/粤语（廣東話）`
     * `英文（自动）`回退顺序为`English (US) [CC]`-`English (US)`-`English (UK)`
     * `西班牙文（自动）`回退顺序为`Español (Latinoamérica) [CC]`-`Español (Latinoamérica)`-`Español (España) [CC]`-`Español (España)`
  7. 自定义字幕匹配时间戳容差值
  8. 自定义外挂字幕时间戳偏移量
  9. 翻译字幕模式支持`逐段翻译`（默认）和`逐行翻译`
     * `逐段翻译`对于大分段的字幕文件的平台（如：HBO Max）响应更快，翻译效果更好，利于限制使用频率的翻译API。

## 使用说明
### 配置方法
  * 方法1: 直接使用
    * 采用默认配置
      * 默认主语言`中文（自动）`，副语言`英文（自动）`
      * 提供官方中文的平台的语言选项为`官方字幕`和`Google翻译`
      * 未提供中文的平台的语言选项为`Google翻译`
      * 不兼容[^4]平台的替换语言选项为`Google翻译`
  * 方法2: 配合`BoxJs`及订阅使用
    1. 安装`BoxJs`插件并更新引用资源或脚本:
       * 安装方法及下载链接详见: [🧰 BoxJs](./🧰-BoxJs)
    2. 在`BoxJs`的配置面板中进行个性化设置:
      1. 浏览器访问[BoxJs.com](http://boxjs.com)
      2. 在[`应用`](http://boxjs.com/#/app)页面点开`DualSubs`折叠
      3. 根据需要配置每个流媒体平台的设置
         1. `字幕类型`为多选框，多选保存后，对应APP中的`字幕`选项也会增加对应的字幕选项
         2. `首选语言`为主语言，对应第一行字幕语言
         3. `次选语言`为副语言，对应第二行字幕语言
         4. 需在`字幕类型`中勾选`外部字幕`,`外部字幕文件URL`中填写的字幕文件才会生效（需要为绝对路径，支持WebVTT, SRT）
         5. `外部字幕偏移量`为内置字幕时间轴矫正功能，时间单位为毫秒，正负整数，可以用来省略第三方字幕转换器
         6. `播放记录缓存数量`提供设置数量的复数缓存空间，当你的设备同时为局域网内多个设备提供流媒体平台字幕增强功能时，保证字幕数据不会错乱，同时对于`Disney+`这种自带长期缓存的流媒体平台，提供更好的兼容性
         7. `时间戳公差`为`官方字幕`或`外部字幕`匹配时，每句字幕匹配时的时间容差，因同平台同视频不同语言字幕往往交付不同翻译人员进行翻译，相同台词的时间戳可能有0.5秒-1.5秒乃至更多的误差，或者一句台词对应另外一种语言多句台词的情况，`时间戳公差`值会将此误差范围的台词视为同一句台词进行合并，且支持一句台词对多句台词合并
      4. (可选)在`DualSubs: Verify`中配置第三方API验证信息
      5. (可选)在`DualSubs: Advanced Options`中配置高级设置

## 安装链接
### 🆕V1.3版
  * 因v0.8版结构升级，旧版用户请清空[`DualSubs在BoxJs的全部设置`](./wiki/在BoxJs中清除DualSubs的储存数据#清除全部储存数据)后重新设置
  * 因iOS16.4起`MitM`政策变更，TV及Fitness平台，需要配合[` iRingo: 📺 TV app`](https://github.com/VirgilClyne/iRingo/wiki/📺-TV)恢复支持
  * 本模块不包含YouTube平台支持，如需要请单独下载[`🍿 DualSubs: ▶ YouTube`](../../YouTube/wiki/🍿-DualSubs:-▶-YouTube)
  * 本模块不包含Netflix平台支持，如需要请单独下载[`🍿 DualSubs: 🇳 Netflix`](../../Netflix/wiki/🍿-DualSubs:-🇳-Netflix)
  * 本模块不包含Spotify平台支持，如需要请单独下载[`🍿 DualSubs: 🎵 Spotify `](../../Spotify/wiki/🍿-DualSubs:-🎵-Spotify)
  * `🍿 DualSubs: 🎦 Universal`
    * Loon:
      * 🆕点击一键安装: [DualSubs.Universal.plugin](https://api.boxjs.app/loon/import?plugin=https://github.com/DualSubs/Universal/raw/main/modules/DualSubs.Universal.plugin "🍿 DualSubs: 🎦 Universal") 
      * `插件`链接: [DualSubs.Universal.plugin](../raw/main/modules/DualSubs.Universal.plugin "🍿 DualSubs: 🎦 Universal")
    * Quantumult X:
      * 🆕点击一键安装: [DualSubs.Universal.snippet](https://api.boxjs.app/quanx/add-resource?remote-resource=%7B%22rewrite_remote%22%3A%5B%22https%3A%2F%2Fgithub.com%2FDualSubs%2FUniversal%2Fraw%2Fmain%2Fmodules%2FDualSubs.Universal.snippet%2Ctag%3D%F0%9F%8D%BF%20DualSubs%3A%20%F0%9F%8E%A6%20Universal%22%5D%7D "🍿 DualSubs: 🎦 Universal")
      * `重写`链接: [DualSubs.Universal.snippet](../raw/main/modules/DualSubs.Universal.snippet "🍿 DualSubs: 🎦 Universal")
    * Surge(Shadowrocket):
      * 🆕点击一键安装(Shadowrocket): [DualSubs.Universal.sgmodule](https://api.boxjs.app/shadowrocket/install?module=https://github.com/DualSubs/Universal/raw/main/modules/DualSubs.Universal.sgmodule "🍿 DualSubs: 🎦 Universal")
      * 🆕点击一键安装(Surge): [DualSubs.Universal.sgmodule](https://api.boxjs.app/surge/install-module?url=https://github.com/DualSubs/Universal/raw/main/modules/DualSubs.Universal.sgmodule "🍿 DualSubs: 🎦 Universal")
      * `模块`链接: [DualSubs.Universal.sgmodule](../raw/main/modules/DualSubs.Universal.sgmodule "🍿 DualSubs: 🎦 Universal")
    * Stash:
      * 🆕点击一键安装: [DualSubs.Universal.stoverride](https://link.stash.ws/install-override/github.com/DualSubs/DualSubs/raw/main/modules/DualSubs.Universal.stoverride "🍿 DualSubs: 🎦 Universal")
      * `覆写`链接: [DualSubs.Universal.stoverride](../raw/main/modules/DualSubs.Universal.stoverride "🍿 DualSubs: 🎦 Universal")
    * Egern:
      * `模块`链接: [DualSubs.Universal.yaml](../raw/main/modules/DualSubs.Universal.yaml "🍿 DualSubs: 🎦 Universal")
### V0.7版
  * 已替代`🍿 DualSubs: 🎦 Streaming Media`
    * 详见: [🍿 DualSubs: 🎦 Streaming Media](./🍿-DualSubs:-🎦-Streaming-Media)

## 更新日志
  * V1.1.x
    * 增加 Spotify 歌词翻译功能
  * V0.9.x ~ V1.0.x
    * 增加 文件格式判断功能
    * 增加 Google Translate V3 翻译接口
    * 增加 Microsoft Translate 翻译接口
    * 更改 URL Query
    * 重构 字幕选项写入功能
    * 修复 播放器内字幕选项
    * 更新 EXTM3U 解析器
    * 更新 WebVTT 解析器
  * V0.8.x
    * 同步新的环境架构
    * 分离翻译器（翻译字幕脚本）与合成器（合成字幕脚本）
    * 增加 Google 翻译接口
    * 增加 Azure 美国政府版 翻译接口
    * 简化 BoxJs 设置面板
    * 重构 官方字幕缓存架构
    * 修复 DeepL 翻译接口
    * 更新 EXTM3U 解析器
    * 更新 WebVTT 解析器
