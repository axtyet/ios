## 5. DNS 相关设置

以 `;` 或 `#` 或 `//` 开头的行为注释行。

以下主要讲的是 `[dns]` 区块下的内容，所以示例都以 `[dns]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[dns]`。

DNS 查询结果仅用于分流规则或通过直接策略连接，通过服务器连接时不会使用该结果，Quantumult 永远不会知道相关域名的目的 IP。

### 5.1 推荐 DNS 设置

```
[dns]
no-system
no-ipv6
server = 119.29.29.29
server = 223.5.5.5:53
```
此 DNS 设置适合绝大多数国内用户

### 5.2 传统 DNS 设置

```
[dns]
server = 119.29.29.29
server = 223.5.5.5:53
server = [2402:4e00::]
server = [2400:3200::1]
```
可以如上第二条那样指定端口


### 5.3 禁用系统 DNS

```
[dns]
no-system
```
如果你并不想使用系统 (通过 DHCP) 自动获取的 DNS 设置，可以如上设置，但需要注意应该设置至少一条自定义 DNS，如上述的 `server = 119.29.29.29`

### 5.4 禁用 IPv6

```
[dns]
no-ipv6
```
当设置 `no-ipv6` 时，Quantumult X Tunnel 的 DNS 模块将直接让 AAAA 查询失败，但仍然允许从 IPv6的 DNS 服务器查询 A 记录。

### 5.5 启用 IPv6

```
[dns]
no-system
server = 119.29.29.29
server = 223.5.5.5
server = [2402:4e00::]
server = [2400:3200::1]
```
同时需要在右下角风车「设置」→「其他设置」→「VPN」区域-开启/关闭「兼容性增强」


### 5.6 加密 DNS 设置

#### 5.6.1 DNS over HTTPS

```
[dns]
;doh-server = https://exmaple1.com/dns-query, https://exmaple2.com/dns-query
doh-server = https://dns.alidns.com/dns-query
```
当设置 `doh-server` (DNS over HTTPS) 或 `doq-server` (DNS over QUIC)时，`system` 和所有其他未加密的常规 (没有特定的域与之绑定) 服务器将被忽略。

多个 (并发查询) `doh-server` 应配置在一行中，URLs 应以逗号分开。

如果 iOS 版本小于 iOS 13.0，最大的 `doh-server` 数量将被限制为 1；如果 iOS 版本小于iOS 15.0，最大的 `doh-server` 数量将被限制为 2。

当使用的 `doh-server` 不是基于 HTTP/2 时，DoH 将被暂时禁用，普通的服务器将被使用，直到下次启动 VPN 连接。

#### 5.6.2 HTTP/3 的 DoH

```
[dns]
prefer-doh3
```
当 `prefer-doh3` 被设置时，DoH 将尝试通过 HTTP/3 的查询，如果失败，查询连接将退回到 HTTP/2。

由于 HTTP/2 和 HTTP/3 连接都支持复用，当改变该设置时它可能不会立即生效，但可以通过重新连接Quantumult X 隧道或手动改变当前网络环境，让它立即生效。

#### 5.6.3 自定义 DoH 的 User Agent
DoH 的 `User Agent` 需要在 `[general]` 设置：见 [节点延迟](quantumutx/node.md?id=_23-节点延迟)

#### 5.6.4 DNS over QUIC

```
[dns]
;doq-server = quic://dns1.example.com, quic://dns2.example.com
doq-server = quic://dns.adguard.com
```

当设置 `doh-server` (DNS over HTTPS) 或 `doq-server` (DNS over QUIC)时，`system` 和所有其他未加密的常规 (没有特定的域与之绑定) 服务器将被忽略。

多个(并发查询) `doq-server` 应配置在一行中，URLs 应以逗号分隔。

DoQ 的默认端口是 853，如果双方同意使用其他端口，如 456，你可以设置为 `quic://dns.example.com:456。`

### 5.7 国内 DNS 推荐

#### 5.7.1 腾讯DNS

- IPv4 UDP：`119.29.29.29`
- IPv6 UDP：`[2402:4e00::]`
- DoH：`https://1.12.12.12/dns-query`, `https://120.53.53.53/dns-query`, `https://doh.pub/dns-query`

#### 5.7.2 阿里云DNS
- IPv4 UDP：`223.5.5.5`, `223.6.6.6`
- IPv6 UDP：`[2400:3200::1]`, `[2400:3200:baba::1]`
- DoH：`https://dns.alidns.com/dns-query`
- DoQ：`quic://dns.alidns.com:853`, `quic://223.5.5.5:853`, `quic://223.6.6.6:853`

### 5.8 指定 DNS 查询指定域名

```
[dns]
; 使用系统 DNS 解析 example.com
server = /example.com/system

; 使用 119.29.29.29 查询 qq.com 及其子域名
server = /qq.com/119.29.29.29
server = /*.qq.com/119.29.29.29:53

; 使用 [2001:4860:4860::8888] 的 53 端口解析 example.com
server = /example.com/[2001:4860:4860::8888]:53

; 使用 doh 服务 解析 example.com
doh-server = /*.example3.com/https://doh.pub/dns-query

; 使用 doq 服务 解析 example.com
doq-server = /*.example4.com/quic://dns.adguard.com
```
可以如上指定 DNS 查询特定域名，如需要指定端口号，可以在 DNS 后面加上英文冒号及端口号。

### 5.9 本地 DNS 映射

```
[dns]
; 指定域名到特定 IP 地址
;address = /example5.com/192.168.16.18
;address = /example6.com/[2001:8d3:8d3:8d3:8d3:8d3:8d3:8d3]

; 别名
alias = /example7.com/another-example.com
```
这里不允许直接为某个域设置 `127.0.0.1`。

如果想让某个域 (例如 example.com) 为 `127.0.0.1`，只需在 `[filter_local]` 区块添加 `host, example.com, reject`，REJECT 操作将向查询返回具有 `127.0.0.1` 的 DNS 响应。

### 5.10 在指定 SSID 下生效或失效
在 SSID 为 `SSID1` 时不使用 `8.8.8.8`：

```
[dns]
server = 8.8.8.8, excluded_ssids=SSID1
```

在 SSID 为 `SSID2` 时使用 `8.8.4.4`：

```
[dns]
server = 8.8.4.4:53, included_ssids=SSID2
```

### 5.11 规避指定结果

```
[dns]
circumvent-ipv4-answer = 127.0.0.1, 0.0.0.0
circumvent-ipv6-answer = ::
```
用于指定 DNS 服务器返回的 A 及 AAAA 记录中哪些属于无效结果

可使用通配符 `?` 与 `*`

⚠️ 注意：

> 当并发向多个上游 DNS 进行查询时，如响应最快的上游 DNS 抢答的结果命中了该条目，则 Quantumult X Tunnel DNS 模块会等待其他 DNS 服务器的响应结果（如抢答的结果中至少有一个不属于该条目，则不会等待其他 DNS 的响应，此时有效结果采用不属于该条目的所有记录）；

> 如所有上游 DNS 返回的所有结果均命中该条目，则判定为 DNS 查询失败；

> 如配置的上游 DNS 包含有去广告功能的 DNS 服务器，请勿使用该参数；