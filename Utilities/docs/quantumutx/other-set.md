## 10. 其他设置

点击右下角「风车」进入设置 → 最下方「其他设置」

### 10.1 模式

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI6-1.PNG" width="600">

#### 10.1.1 分流模式

- 蓝绿色风车：全部代理，即所有请求均使用PROXY选择的节点访问
- 纯黄色风车：全部直连，即所有请均不使用节点访问
- 三色风车：规则模式，由分流规则及所有策略（内置以及自定义策略）共同決定是否通过节点以及通过什么节点访问。

#### 10.1.2 出站接口

- 默认：当处于 Wi-Fi 网络时使用 Wi-Fi数据，当处于仅蜂窝网时使用蜂窝网数据。
- 强制蜂窝网：当处于 Wi-Fi 网络时仍使用蜂窝网数据。
- Wi-Fi & 蜂窝网：当处于 Wi-Fi 网络时同时使用 Wi-Fi网络及蜂窝网络建立 TCP 连接，使用拥有最佳TCP 握手值的连接来传输数据。
- Wi-Fi &蜂窝网（负载均衡）：当处于 Wi-Fi 网络时，均衡使用 Wi-Fi网络与蜂窝网络，以提升并发任务的出口带宽。



### 10.2 资源

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI6-2.PNG" width="600">

#### 10.2.1 iCloud 云盘

> 建议开启

当启用 iCloud 云盘后，配置相关的本地资源默认路径为“ iCloud 云盘 - Quantumult X ”；否则路径为“ 我的iPhone - Quantumult X ”

Quantumult X 会在此文件夹读取自定义策略图标、配置片段、脚本等资源。您也可以使用“文件”应用查看相关内容。

#### 10.2.2 Apple TV

通过 iCloud 云盘，可将存放于 iCloud 中的配置，同步至 Apple TV

#### 10.2.3 自动更新

该设定仅作用于没有专有更新周期选项的相关资源，例如资源解析器、HTTP 重写以及计划任务等使用的 JavaScript 脚本资源。

例外的是图片资源：图片资源一旦缓存成功则不会自动更新，即使启用了该选项。但仍可点击「删除图片缓存」来重新下载图片资源。



### 10.3 通知

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI6-3.PNG" width="600">

- 显示策略检测通知：策略状态变更等
- 显示网络状态通知：进入Wi-Fi、蜂窝网络等
- 显示脚本通知：HTTP 请求发送的通知等
- 显示节点订阅通知：流量信息、节点增加等

⚠️ 注意：警告信息无法被关闭



### 10.4 VPN

> 该栏目仅作用于 Quantumult X Tunnel

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI7-1.PNG" width="300">

#### 10.4.1 兼容性增强

> 需在 VPN 处于断开的状态下更改此项。

当前设备与家居中枢设备处于同一局域网下且保持 Quantumult X VPN 连接时，如无法正常使用“家庭”应用查看流传输的 HomeKit 实况视频，您可以尝试开启此选项。

但无法使用 IPv6 相关功能时也可尝试开启或关闭该选项

#### 10.4.2 网络活动

> 需在 VPN 处于断开的状态下更改此项。

关闭后，QuantumultX不再记录 TCP与 UDP相关的网络活动，网络活动面板也不会显示更新的网络活动。

#### 10.4.3 排除路由 `0.0.0.0/31`

> 需在 VPN 处于断开的状态下更改此项。

开启后将会因此通知栏中的`VPN`图标，此项与IPv6冲突

开启该选项可能会产生网络异常；如出现异常，建议关闭该选项后重启设备，勿再开启。

更多的路由设置请在配置文件中编辑

#### 10.4.4 分流优化

> 需在 VPN 处于断开的状态下更改此项。

当关闭优化时，`host` 相关类型的规则完全按照规则加载顺序进行匹配；

当开启优化时，`host` 相关类型的规则更趋向于精度匹配，同样精度的规则按照规则加载顺序进行匹配；大致的优先级先后顺序为：
`HOST > HOST-SUFFIX > HOST-WILDCARD > HOST-KEYWORD > USER-AGENT > IP类型规则 (IP-CIDR 等)`

#### 10.4.5 DNS 劫持

当 Quantumult X Tunnel 运行时，绝大多数的 DNS 请求都发往 Quantumult X 的 `DNS模块`由 Quantumult X 处理。极少数自身实现了 DNS 查询功能的应用会将 UDP 查询请求发往其它地址。

劫持功能针对以上极少数应用。当 「DNS 劫持」功能开启后，Quantumult X 会劫持该 UDP 请求，交由 Quantumult X `DNS 模块`处理，否则将按分流规则或运行模式直接转发该 UDP 数据。

#### 10.4.6 始终开启

「始终开启」启用时，仅能通过应用内开关来断开连接

当配置中有定时任务存在时，「始终开启」将默认启用

#### 10.4.7 MPM 温和策略机制

当使用 `MPM`（moderated policymechanism 温和的策略机制）时，切换策略不会打断之前与之相关的 TCP 连接，仅会对之后的网络请求使用新的策略进行连接。

当不使用 `MPM` 时，切换策略会打断与该策略相关的旧有 TCP 连接；例如：打断会使旧有策略相关的连接所进行的下载任务中断。

#### 10.4.8 `HTTP`、`SOCKS5` 代理服务器:「网络共享」

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI7-2.PNG" width="600">


当启用 `HTTP` or `SOCKS5` 代理服务器时，可为同一网络下其它设备提供 `HTTP` or `SOCKS5` 代理服务

点击可查看该服务器IP地址及端口，也可修改端口

其他需要被代理的设备中，应处于同一局域网下，在其 Wi-Fi 设置中填写 Quantumult X 提供的IP和端口

- WI-FI中通常使用 `HTTP` 代理

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI7-3.PNG" width="900">


- Telegram中为`SOCKS5`代理

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI7-4.PNG" width="600">



### 10.5 GeoLite2 & 关于

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI8.PNG" width="300">

#### 10.5.1 GeoLite2 

该数据库为`GEOIP`规则所调用的数据,点击「来源」可进行替换

> 建议替换为以下数据库，并设置自动更新

ⓘ  [Masaiki](https://github.com/Masaiki/GeoIP2-CN)(中国IPv4&v6)：

```
https://github.com/Masaiki/GeoIP2-CN/raw/release/Country.mmdb
```

#### 10.5.2 关于

可在此页面查看 设备ID、收据、iCloud信息 等，长按选项可拷贝相关信息，以用于 macOS 上的验证

可修改应用图标
