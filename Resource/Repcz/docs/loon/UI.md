# 1. 交互界面(UI)

### 1.1 Loon 开关 & 分流模式

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.1.PNG" width="600">


点击 LOON 下方的 自动分流/全局直连/全局代理 可进行切换：


- 全局直连，即所有请均不使用节点访问，此时分流模式区域为蓝色
- 自动分流，由分流规则及所有策略（内置以及自定义策略）共同決定是否通过节点以及通过什么节点访问，此时分流模式区域为黄色。
- 全部代理，即所有请求均使用 「策略标签页」的 `全局策略` 选择的节点/策略访问，此时分流模式区域为红色。


### 1.2 快捷方式：「编辑」

点击「节点」可对「仪表标签页」所展示的快捷方式进行编辑

拖动右侧 `≡`，可进行排序

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.2.PNG">


### 1.3 快捷方式：「节点」

> 此区域对应「配置标签页」-「节点」区域 - `全部节点`


点击可查看当前所有节点数目，点击「节点」或右下角图标 可查看

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.3.PNG">

- 点击右上角🔄，可更新

- 拖动右上角 `≡`，可进行排序

- 点击右上角 `＋`，可添加节点


### 1.4 快捷方式：「请求记录」

点击顶部搜索栏可对 Host、URL、Rule、Rewrite、Script、UserAgent 进行搜索


- 蓝色表示当前请求状态为已完成

- 绿色表示当前请求状态为未完成

- 红色表示当前请求状态为失败


#### TCP/CONNCT


可在概述中查看请求时间、状态、目标地址、流量大小、MITM、规则、策略等信息

点击概述页右上角 `···` 可快捷添加规则

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.4.1.PNG" width="900">


当开启`SNI辅助规则匹配`后，当请求 Host 是 IP 时，会使用 TLS证书 中的 SNI 进行规则匹配，如果匹配不到规则的话会继续用 Host 匹配

长按 SNI 可复制

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.4.2.PNG" width="300">



当状态为失败时，会根据策略返回相应的数据(例如去广告规则使用的 REJECT 返回 HTTP 404)，或是当前请求连接失败，点击可查看概述(详情)


<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.4.3.PNG" width="900">


#### POST/GET

在客户机和服务器之间进行请求-响应时，两种最常被用到的方法是：GET 和 POST。

- GET：从指定的资源请求数据。
- POST：向指定的资源提交要被处理的数据。


当 MITM 了对应的主机名，此时POST/GET右侧会有蓝色的🔒

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.4.4.PNG" width="600">

当使用脚本对请求进行处理时，🔒的右侧会有绿色文件夹📁图标


<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.4.5.PNG" width="600">


当使用复写规则对请求进行处理时，🔒的右侧会有紫色文件夹📁图标

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.4.6.PNG" width="600">

### 1.5 快捷方式：「DNS记录」

点击顶部搜索栏可对 IP、Domain、Server 进行搜索

点击可查看记录对应的 域名、DNS服务器、查询结果、查询日期、TTL、状态

`A`记录 表示 IPv4 ，`AAAA`记录 表示 IPv6

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.5.PNG" width="900">

### 1.6 快捷方式：「配置文件」

> 此区域对应「配置标签页」-「编辑」区域 - `配置文件`

点击可编辑配置

### 1.7 快捷方式：「插件」

> 此区域对应「配置标签页」-「插件」区域 - `插件`


插件是规则、复写、脚本的集合，相当于一个子配置，常常用来代表一个扩展功能。

点击顶部搜索栏可对 Name、Author、Describe 进行搜索

- 点击右上角🔄，可更新

- 拖动右上角 `≡`，可进行排序

- 点击右上角 `＋`，可添加插件

点击插件可查看详情，部分插件可对参数进行调整

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.7.PNG" width="900">

### 1.8 快捷方式：「网络共享」


点击右上角灰色「●」，以开启网络共享，此时应变为绿色「●」

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.8.PNG" width="600">


#### 代理服务

当启用 `HTTP` or `SOCKS5` 代理服务器时，可为同一网络下其它设备提供 `HTTP` or `SOCKS5` 代理服务

仪表页可查看本机IP

点击可查看端口，也可修改端口

其对应的配置文件语法：

```
[General]
# 是否开启局域网代理访问
allow-wifi-access = true

# 开启局域网访问后的http代理端口
wifi-access-http-port = 8899

# 开启局域网访问后的socks5代理端口
wifi-access-socks5-port = 8898
```


其他需要被代理的设备中，应处于同一局域网下，在其 Wi-Fi 设置中填写 Loon 的IP和设置的端口

- WI-FI中通常使用 `HTTP` 代理

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI7-3.PNG" width="900">


- Telegram中为`SOCKS5`代理

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI7-4.PNG" width="600">


#### MITM 选项

开启后来自局域网中其他设备的请求也会进行MITM

⚠️注意：若要进行MITM，访问设备需要正确的安装Loon所配置的根证书，并获得该设备的信任

### 1.9 快捷方式：「规则」

> 此区域对应「配置标签页」-「规则」区域 - `规则`


仪表页可查看当前规则总数

- 点击右上角🔄，可更新

- 拖动右上角 `≡`，可进行排序

- 点击右上角 `＋`，可添加规则


点击可查看规则详情，左滑规则可对已有规则进行编辑、禁用、删除

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.9.1.PNG" width="900">


<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.9.3.PNG" width="300">


右上角`＋`，可添加远程或本地规则

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.9.2.PNG" width="600">


### 1.10 快捷方式：「MitM」

> 此区域对应「配置标签页」-「MitM」区域 - `域名`


点击右上角灰色「●」，以开启此功能，此时应变为绿色「●」

开启后，Loon 会使用中间人攻击的方式解密HTTPS流量

仪表页可查看当前MitM主机名总数

点击可查看插件或本地所包含的主机名详情

右上角`＋`，可添加本地主机名

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.10.PNG" width="900">



### 1.11 快捷方式：「复写」

> 此区域对应「配置标签页」-「复写」区域 - `复写`


复写是专门用来处理HTTP/HTTPS类型的请求，在请求未发出前，根据所设定的复写类型来修改请求数据，目前可修改URL和Header，所有的复写仅针对http请求或者经过解密后的https请求有效

**复写的处理会在规则匹配之前**

点击右上角灰色「●」，以开启此功能，此时应变为绿色「●」

此功能依赖 根证书

仪表页可查看当前复写规则总数

点击可查看插件或本地所包含的复写规则详情

右上角`＋`，可添加本地复写规则

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.11.PNG" width="1200">

### 1.12 快捷方式：「脚本」

> 此区域在功能上对应「配置标签页」-「脚本」区域 - `脚本`，但 UI 上并不一致

Loon支持在HTTP/HTTPS请求的每个阶段执行响应的JavaScript脚本，同时也可以定时的执行一些JavaScript脚本

仪表页可查看当前脚本数(不包含插件中的脚本)

点击可查看插件或本地所包含的复写规则详情

- [脚本类型](https://loon0x00.github.io/LoonManual/#/cn/script)
- [脚本API](https://loon0x00.github.io/LoonManual/#/cn/script_api)



### 1.13 快捷方式：「脚本任务」

此功能展示的是脚本的执行状态及日志

点击可查看详情

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.13.PNG" width="1200">


### 1.14 快捷方式：「抓包记录」


### 1.15 「策略」标签页

此页面展示当前策略组详情及策略走向

点击`＋`，可添加策略组

点击右上角编辑，可对当前策略组进行排序或删除(不可编辑单独的策略组)，此页面下可点击右上角`＋`，可添加策略组

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.15.1.PNG" width="900">


长按策略组进行编辑或修改图标

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.15.2.PNG" width="900">


#### 顶部策略组分组(标签)

需在「配置标签页」- 右上角 `···` → 「界面」- `策略配置` - `策略分组`进行添加

同时在「界面」- `策略配置` 页，可隐藏自动策略组（仅作用于All标签），可隐藏策略组类型标识，并添加图标集

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.15.3.PNG" width="900">

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.15.4.PNG" width="900">
