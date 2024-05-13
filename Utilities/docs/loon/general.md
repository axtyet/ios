## 11. 其他设置

### 11.1 高级配置

> 该部分主要包含配置文件中 `[general]`区域下的参数解释以及对应的UI

> 以下搬运至 [Loon官方文档 ](https://loon0x00.github.io/LoonManual/#/cn/general)，不定时更新


以下主要讲的是 `[General]` 区块下的内容，所以示例都以 `[General]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[General]`。

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/11.1.PNG" >


#### 11.1.1 启用IPv6

是否允许IPV6的请求，开启后会进行DNS `AAAA`记录查询，并且优先使用IPV6的IP


```
[General]
ipv6 = true
```


#### 11.1.2 网络接口 `interface-mode`

指定流量使用哪个网络接口进行转发，目前包含三种模式:
- Auto: 系统自动分配
- Cellular: 在WiFi和蜂窝数据都开启的情况下指定使用蜂窝网络
- Performace: 在WiFi和蜂窝数据都开启的情况下使用最优的网络接口
- Balance: 在WiFi和蜂窝数据都开启的情况下，均衡使用网络接口


```
[General]
interface-mode = Performace
```

#### 11.1.3 GeoIP 数据库

自定义geoip数据库的url，可通过UI更改自动更新时间

不填写此参数时，使用 MaxMind 数据库

```
[General]
geoip-url = https://gitlab.com/Masaiki/GeoIP2-CN/-/raw/release/Country.mmdb
```

####  11.1.4 绕过路由 `bypass-tun`

目前iOS设备上的流量有两种方式传递给Loon，分别是 **HTTP Proxy** 和 **TUN**（可以简单理解为虚拟网卡），`bypass-tun`则和 **TUN** 有关，如果配置了该参数，那么所配置的这些IP段、域名就会不交给Loon来处理，系统直接处理

```
[General]
bypass-tun = 192.168.0.0/16,localhost,*.local
```


#### 11.1.5 绕过代理 `skip-proxy`
和上面类似，skip-proxy则和HTTP Proxy有关，如果配置了该参数，那么所配置的这些IP段、域名将不会转发到Loon，而是由系统处理

不作为默认路由 仅可通过 UI 开启

```
[General]
skip-proxy = 192.168.0.0/16
```

#### 11.1.6 策略切换时关闭连接

启用后，切换策略将会断开使用当前策略的连接。否则，连接将继续使用先前的策略，直到其自行断开

仅可通过 UI 开启

#### 11.1.7 快速切换

启用后，网络切换将不再刷新VPN配置，如遇到WiFi和蜂窝不切换或者其他网络问题请关闭该功能

仅可通过 UI 开启


#### 11.1.8 SNI 辅助规则匹配

开启后，当请求 Host是IP时，会使用TLS证书中的SNI进行规则匹配，如果匹配不到规则的话会继续用Host匹配。

```
[General]
sni-sniffing = true
```

#### 11.1.9 排除路由 `0.0.0.0/31`

开启后隐藏 VPN 图标，可能会与某些设置参数冲突

#### 11.1.10 延迟测试

见[节点延迟](loon/node.md?id=_24-节点延迟)

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/11.1.10.PNG" width="600">


```
[General]
# 测速所用的测试链接，如果策略组没有自定义测试链接就会使用这里配置的
proxy-test-url = http://cp.cloudflare.com/generate_204

# 测试直连时使用的测试连接，用于判断网络连通性
internet-test-url = http://wifi.vivo.com.cn/generate_204

# 节点测速时的超时秒数
test-timeout = 3
```


#### 11.1.11 资源解析器

见[资源解析器](loon/node.md?id=_23-添加远程订阅) 

```
[General]
resource-parser = https://gitlab.com/sub-store/Sub-Store/-/releases/permalink/latest/downloads/sub-store-parser.loon.min.js
```

#### 11.1.12 真实 IP

有些app会自己去请求DNS获取IP，这样导致有些域名类型的规则无法进行匹配，所以Loon是用了FakeIP来解决这个问题，原理是截取这些DNS请求，返回一个假的IP响应，然后在获取到这个假的IP的请求时将相关域名映射到请求中；但是有时候系统的一些域名会缓存这些假IP，导致关闭Loon后会用这个假的IP直接发起请求，这就会导致一些问题，针对这种情况可以配置`real-ip`来使这些域名返回真实的ip

```
real-ip = *.apple.com,*.icloud.com
```

#### 11.1.13 UDP 设置

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/11.1.13.PNG" width="600">

```
[General]

# 禁用stun是否禁用stun协议的udp数据，禁用后可以有效解决webrtc的ip泄露
disable-stun = true

# 禁用udp协议的一些端口
disable-udp-ports = 443,80
```

#### 11.1.14 代理模式

此选项目前仅能通过 UI 或 URL Scheme 修改

设置代理模式为 TUN Only
- https://www.nsloon.com/openloon/proxymode=tun

设置代理模式为 HTTP Proxy & TUN
- https://www.nsloon.com/openloon/proxymode=mix


#### 11.1.15 网络共享设置

此项需在「仪表页」开启：点击右上角灰色「●」，以开启网络共享，此时应变为绿色「●」

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.8.PNG" width="600">

「仪表页」可查看本机IP

点击可查看端口，也可修改端口

其他需要被代理的设备中，应处于同一局域网下，在其 Wi-Fi 设置中填写 Loon 的IP和设置的端口


```
[General]
# 是否开启局域网代理访问
allow-wifi-access = true

# 开启局域网访问后的http代理端口
wifi-access-http-port = 8899

# 开启局域网访问后的socks5代理端口
wifi-access-socks5-port = 8898
```



#### 11.1.16 连接失败切换 `switch-node-after-failure-times`

一个节点连接失败几次后会进行节点切换，默认3次

```
[General]
switch-node-after-failure-times = 3
```



#### 11.1.17 SSID工作模式 `ssid-trigger`

当切换到某一特定的WiFi下时改变Loon的流量模式
- `"loon-wifi5g":DIRECT`，表示在loon-wifi5g这个wifi网络下使用直连模式，
- `"cellular":PROXY`，表示在蜂窝网络下使用代理模式
- `"default":RULE`，默认使用分流模式


```
[General]
ssid-trigger = "loon-wifi5g":DIRECT,"cellular":PROXY,"default":RULE
```





#### 11.1.18 `force-http-engine-hosts`
有些app使用原始的tcp来进行http请求，这些流量就会走TUN，为了性能考虑，Loon默认只会解析80端口的这些http请求，如果一些请求的端口不是80，则可以在这里指定相关的域名或者端口，从而让Loon对这些http请求进行解析

```
[General]
# :8080，表示解析所有8080端口，0表示解析所有端口
# 通配符域名，解析所有端口下的相关域名
force-http-engine-hosts = *.baid.com,:8080
```

### 11.2 外部资源

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/11.2.PNG" width="600">

可在此处查看并更新所有外部资源

也可点击 URL Scheme 一键更新

- https://www.nsloon.com/openloon/update?sub=all

### 11.3 Apple TV

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/11.3.PNG" width="600">

可在此处通过 iCloud 共享配置文件，并为 Apple TV 安装证书
