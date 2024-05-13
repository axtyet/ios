# 1. 交互界面(UI)

### 1.1 首页UI(节点)
<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI1.JPEG">

#### 1.1.1 「风车」按钮

单击「风车」按钮进入「设置」页面

长按「风车」按钮，进入设置分流模式与资源更新界面

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI2.PNG" width="900">

- 设置分流模式
  - 蓝绿色风车：全部代理，即所有请求均使用PROXY选择的节点访问
  - 纯黄色风车：全部直连，即所有请均不使用节点访问
  - 三色风车：规则模式，由分流规则及所有策略（内置以及自定义策略）共同決定是否通过节点以及通过什么节点访问。

- 资源更新
  - 点击🔁圆形按钮更新所有外部资源，包括节点、分流、重写及其引用的脚本
  - 如果只需要更新节点或重写，可以进入设置-分流/重写-资源规则，对指定的资源左滑，点击🔁单独更新；或点击右上角全部更新
  - 如果需要更新重写内的脚本，可以左滑指定重写资源，点击「🔍」→「全部更新」

  <img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI3.PNG" width="300">

  - 当左上角出现红色🔺警告时，表示有资源出现问题，可能是引用了错误的资源或不符合QX的资源格式，点击该🔺警告按钮，即可查看出现问题的资源


#### 1.1.2 节点 GEO 信息显示

左上角的节点显示区域，可以修改配置文件(点左下角的编辑)，修改`geo_location_checker`参数，可以显示不同样式的信息

例如：

```
[general]
geo_location_checker=disabled
;geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://mirror.ghproxy.com/https://raw.githubusercontent.com/ConnersHua/RuleGo/master/Quantumult/Script/geo_location_checker.js
```
`disabled`表示关闭；

`#`或`;`或`//`表示注释，即起说明作用或者不生效，删除则表示启用，注意不要同时启用两个`geo_location_checker`

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/geochecker.jpg" width="300">


以下是搜集的`geo_location_checker`
```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://jexxagn.netlify.app/IP-API.js
```

```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/GeoLocationChecker/QuantumultX/IP-API.js
```

```
geo_location_checker = http://ip-api.com/json, https://raw.githubusercontent.com/kiksong/qsc/master/qx/script/IPInfo.js
```

```
geo_location_checker = http://ip-api.com/json/?fields=8450015&lang=zh-CN,https://raw.githubusercontent.com/deezertidal/QuantumultX-Rewrite/master/rewrite/ip-api.js
```


```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://github.com/KOP-XIAO/QuantumultX/raw/master/Scripts/IP_API.js
```

```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/ConnersHua/RuleGo/master/Quantumult/Script/geo_location_checker.js
```

### 1.2 网络活动

顶部4个按钮分别代表：

TCP请求、UDP请求、DNS组织域名、脚本记录

其中 TCP、UDP 请求 为深色时 表示展示当前请求

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI5-1.jpg" >


#### 1.2.1 TCP 请求

- 主要UI

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI5-2.PNG" >

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI5-2-F.jpg" width="300">

- 详细信息

  点击对应条目，可查看主机名、命中的规则&使用策略、分流走向、流量大小、使用节点信息、重写修改等

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI5-6.JPG" >


- DNS 错误

  当遇见DNS查询不到的域名时，会有如下 `🌐N/A` 显示，且右侧没有`红🔒`
<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI5-3.jpg" >

- MitM

  MitM成功会有`绿🔒`

  使用重写对请求进行修改，会有`红🖊`

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI5-4.jpg" >

- MitM 失败

  当遇见MitM失败时，会有如下 `N/A` 显示，且右侧有`红🔒`

  此时建议查询是对应的主机名，如果波及正常域名，建议查询对应的重写资源并将其关闭

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI5-5.JPG" >

#### 1.2.2 UDP 请求

- 主要UI

  `PORT,BLOCK` 通常是 [UDP相关设置](quantumutx/general.md?id=_119-udp相关设置) 导致

  例如 用来阻止 油管 HTTP/3 请求的 `udp_drop_list=443`，使其回退至可以被 MitM 的请求，用于去广告
  
  其余细节参考 TCP 请求


<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI5-7.jpg" >

#### 1.2.3 搜索请求


  点击左下角🔍即可对请求数据进行筛选或搜索

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI5-8.JPG" width="600">


#### 1.2.4 脚本记录

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/JS.JPG" width="900">

#### 1.2.5 DNS 查询记录

点击下方 「🌐DNS 查询记录」按钮　即可查看

长按该按钮即可弹出　「DNS阻止的域名」

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/DNS_F.JPG" width="900">


### 1.3 分流规则

见后文[规则系统](quantumutx/filter.md)



### 1.4 重写规则


### 1.5 流量统计 & 流速统计 

#### 1.5.1 流量统计

点击底部「流量统计」按钮，查看本次启动VPN后使用的总流量统计及各节点流量统计；

点击底部右侧按钮，可切换至流速统计

点击右上角按钮，查看已完成的流量统计及各请求流量统计

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI4-1.jpg" width="900">

#### 1.5.2 流速统计

长按底部「流量统计」按钮，查看本次启动VPN后的使用时间及各节点实时流速及最大流速；

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI4-2.jpg" width="600">


### 1.6 调整UI

点击右下角「风车」→ 进入最下方「面板&工具栏」调整

> 部分UI设置在iPadOS上不可用

- 可对 首页顶部按钮进行排序
- 面板样式可进行调整
- 页面样式可进行调整
- 底部工具栏按钮&样式可进行调整

#### 1.6.1 调整图标

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/ICON.jpg" width="600">

- 长按策略组/节点资源 → 图标
- QX节点资源区域的图标只支持单色，策略组区域支持彩色；
- 图标分辨率限制144x144、108x108；
- 修改配置文件的 `img-url` 即可自定义图标
- 点此查看[图标集](quantumutx/icon.md)