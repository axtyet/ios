# 8. DNS 相关设置

### 8.1 DNS 相关逻辑

#### 查询逻辑

所有DNS查询分为两类：
- 第一类是常规DNS查询
- 第二类是加密DNS查询（DoH/DoQ/DoH3），在同时配置了加密DNS和常规DNS服务器时，只会进行加密DNS查询，会并发向所有有效的DNS服务器发起查询，使用响应最快的查询结果。

#### 缓存逻辑

两种DNS缓存：
- 第一种是内存缓存，采用LRU算法缓存100条数据（iOS15后增加到200），在Loon启动过程中有效，关闭后缓存全部清除;
- 第二种是磁盘缓存，根据TTL是否过期进行自动删除。同时允许关闭磁盘缓存逻辑。

#### 查询、缓存命中逻辑

在对一个域名进行查询前，会在内存缓存中查询：
- 如果命中缓存，会直接使用缓存结果；如果缓存IP的TTL过期，会进行一次查询，并使用查询结果更新缓存；
- 如果没有命中内存缓存，会进一步查询磁盘缓存，磁盘缓存命中逻辑和内存缓存命中逻辑一致；
- 如果没有缓存，会根据配置的DNS服务器并发查询，使用最先响应的结果，并更新缓存。

#### 查询回落

在使用加密的DNS查询IP时，如果查询失败将会使用常规的DNS进行查询，可以在App的DNS服务器页面进行关闭

### 8.2 DNS 服务器

「配置标签页」-「DNS」区域 - `DNS服务器`

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/8.2.PNG" >

!> 以下主要讲的是 `[General]` 区块下的内容，所以示例都以 `[General]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[General]`。


- 包含系统 DNS 地址

开启后，将会在常规 DNS 服务器中添加 `system`参数，表示系统服务器；

Loon会优先使用自定义 DNS 服务器，但当自定义服务器丢包严重时，会切回系统自带 DNS

```
[General]
# dns服务，system 表示系统自带dns服务器
dns-server = system,119.29.29.29,223.5.5.5
```

- 查询回落

开启后，如果加密 DNS 查询失败，将会回落到　DNS over UDP(常规DNS) 再次查询

#### 加密 DNS

> 如果配置了 DNS-over-HTTPS, DNS-over-QUIC, DNS-over-HTTP3服务器，将不会进行传统的DNS查询，Loon会并发查询，并使用最快的响应


- DNS over HTTPS

> DoH server，标准的 url 格式，以`,`分割多个地址


```
[General]
doh-server = https://223.5.5.5/dns-query,https://1.12.12.12/dns-query
```

- DNS over QUIC

> DNS-over-QUIC 服务地址必须以`quic://`开头，默认端口784

```
[General]
doq-server = quic://dns.alidns.com:853
```

- DNS over HTTP3

> DNS-over-HTTP3 服务地址可以以 `https://` 或者 `h3://` 开头，默认端口 443

```
[General]
doh3-server = h3://223.5.5.5/dns-query
```

#### 常规 DNS

```
[General]
# system 表示系统自带dns服务器
dns-server = system,119.29.29.29,223.5.5.5
```

### 8.3 DNS映射


当需要对特定域名指定 DNS 服务或者固定 IP 时，可以使用此功能

「配置标签页」-「DNS」区域 - `DNS映射`

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/8.3.PNG" >


!> 以下主要讲的是 `[Host]` 区块下的内容，所以示例都以 `[Host]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[Host]`。


#### 域名映射 IP

支持域名/通配符

```
[Host]
example.com = 192.168.1.20

```

#### 域名映射域名

```
[Host]
example.com = example.com.cn

```

#### 域名指定查询DNS服务器

`system`表示系统 DNS 服务器

```
[Host]
*.testflight.apple.com = server:8.8.4.4
*.apple.com = server:system
*.google.com = server:https://dns.google/dns-query

```

#### 特定SSID环境下指定DNS查询的服务器

ssid类型: `ssid:WiFi SSID`

```
[Host]
ssid:LOON's WIFI = server:system
ssid:LOON WIFI = server:https://example.com/dns-query

```