# 2.节点

一个节点表示一个代理服务器，你可以手动添加单个节点，也可以通过链接下载订阅节点。**Loon 本身不提供任何的节点**

### 2.1 代理服务协议

代理服务协议指的是在进行网络传输的过程中客户端和服务端需要遵循的一种数据组装格式，只有服务端和客户端使用相同的协议，两者才能进行正常的数据交互，我们每天在网络中接触到的协议有HTTP，HTTPS等

#### Loon协议

- ShadowSocks
- ShadowSocksR
- VMESS
    - VMESS + TLS
    - VMESS + WebSocket
    - VMESS + WebSocket + TLS
    - VMESS + HTTP
    - VMESS + HTTP + TLS
- VLESS
    - VLESS + WebSocket
    - VLESS + HTTP
- Trojan
    - Trojan + WebSocket
    - Trojan + HTTP
- HTTP
- HTTPS
- Wireguard
- Hysteria2
- Custom by JS

同时，Loon也支持使用JavaScript进行自定义代理协议，可参考[使用JS自定义HTTP代理](https://github.com/Loon0x00/LoonExampleConfig/blob/master/Script/http.js)

### 2.2 添加本地节点


#### 内置 PROXY 

指向本地节点或者订阅节点中的任何一个（有本地节点默认指向第一个本地节点，当没有本地节点但有订阅节点时，指向第一个订阅的第一个节点，本地节点和订阅节点都不存在时指向DIRECT）

#### 2.2.1 配置文件添加

!> 以下主要讲的是 `[Proxy]` 区块下的内容，所以示例都以 `[Proxy]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[Proxy]`。

如果要在配置文件中手动添加、修改单个节点，请遵从下面的格式


##### ss 类型

- SS

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，加密方式，密码，fast-open=是否开启fast open（需要节点支持），udp=是否在UDP中使用（需要节点支持）
ss1 = Shadowsocks,example.com,443,aes-128-gcm,"password",fast-open=false,udp=true
ss2 = Shadowsocks,example2.com,443,chacha20,"password",fast-open=true,udp=true
```


- ss+simple obfs


```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，加密方式，密码，混淆方式=http|tls，obfs-host=混淆host，obfs-uri=混淆路径，fast-open=是否开启fast open（需要节点支持），udp=是否在UDP中使用（需要节点支持）
ssObfs1 = Shadowsocks,example.com,80,aes-128-gcm,"password",obfs-name=http,obfs-host=www.micsoft.com,obfs-uri=/,fast-open=true,udp=true
ssObfs2 = Shadowsocks,example.com,443,aes-128-gcm,"password",obfs-name=tls,obfs-host=www.micsoft.com,obfs-uri=/,fast-open=true,udp=true
```


##### ssr

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，加密方式，密码，protocol = 协议，protocol-param = 协议参数，obfs=混淆，obfs-param=混淆参数，fast-open=是否开启fast open（需要节点支持），udp=是否在UDP中使用（需要节点支持）
ssr1 = ShadowsocksR,example.com,443,aes-256-cfb,"password",protocol=origin,obfs=http_simple,obfs-param=download.windows.com,fast-open=false,udp=true
ssr2 = ShadowsocksR,example.com,10076,aes-128-cfb,"password",protocol=auth_chain_a,protocol-param=9555:loon,obfs=http_post,obfs-param=download.windows.com,fast-open=false,udp=true
ssr3 = ShadowsocksR,example.com,10076,chacha20,"password",protocol=auth_aes128_md5,protocol-param=9555:loon,obfs=tls1.2_ticket_auth,obfs-param=download.windows.com,fast-open=false,udp=true
ssr4 = ShadowsocksR,example.com,10076,chacha20-ietf,"password",protocol=auth_aes128_sha1,protocol-param=9555:loon,obfs=plain,fast-open=false,udp=true
```


##### http

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，加密方式，密码
http1 = http,example.com,80
http2 = http,example.com,80,username,"password"
```


##### https

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，加密方式，密码，skip-cert-verify=是否跳过证书校验（默认否），tls-name=SNI
https1 = https,example.com,443
https2 = https,example.com,443,username,"password"
https3 = https,example.com,443,username,"password",skip-cert-verify=true,tls-name=example.com
```

##### vmess 类型

- vmess+tcp

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，加密方式，UUID，transport(传输方式)=tcp，alterId=alterId（默认0，表示开启aead）
vmess1 = vmess,example.com,10086,aes-128-gcm,"52396e06-041a-4cc2-be5c-8525eb457809",transport=tcp,alterId=0,over-tls=false
```


- vmess+tcp+tls

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，加密方式，UUID，transport(传输方式)=tcp，alterId=alterId（默认0，表示开启aead），over-tls=是否启用TLS，tls-name=SNI，skip-cert-verify=是否跳过证书校验（默认否）
vmess2 = vmess,example.com,10086,aes-128-gcm,"52396e06-041a-4cc2-be5c-8525eb457809",transport=tcp,alterId=0,path=/,host=v3-dy-y.ixigua.com,over-tls=true,tls-name=example.com,skip-cert-verify=true
```

- vmess+ws

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，加密方式，UUID，transport(传输方式)=ws，alterId=alterId（默认0，表示开启aead），path=websocket握手header中的path，host=websocket握手header中的host
vmess3 = vmess,example.com,10086,aes-128-gcm,"52396e06-041a-4cc2-be5c-8525eb457809",transport=ws,alterId=0,path=/,host=v3-dy-y.ixigua.com,over-tls=false
```


- vmess+wss

```
[Proxy]
v# 节点名称 = 协议，服务器地址，端口，加密方式，UUID，transport(传输方式)=ws，alterId=alterId（默认0，表示开启aead），path=websocket握手header中的path，host=websocket握手header中的host，over-tls=是否启用TLS，tls-name=SNI，skip-cert-verify=是否跳过证书校验（默认否）
vmess4 = vmess,example.com,10086,aes-128-gcm,"52396e06-041a-4cc2-be5c-8525eb457809",transport=ws,alterId=0,path=/,host=v3-dy-y.ixigua.com,over-tls=true,tls-name=example.com,skip-cert-verify=true
```


- vmess+http

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，加密方式，UUID，transport(传输方式)=http，alterId=alterId（默认0，表示开启aead），path=httpheader中的path，host=httpheader的host
vmess5 = vmess,example.com,10086,aes-128-gcm,"52396e06-041a-4cc2-be5c-8525eb457809",transport=http,alterId=0,path=/,host=v3-dy-y.ixigua.com,over-tls=false
```

- vmess+http+tls

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，加密方式，UUID，transport(传输方式)=http，alterId=alterId（默认0，表示开启aead），path=httpheader中的path，host=httpheader的host，over-tls=是否启用TLS，tls-name=SNI，skip-cert-verify=是否跳过证书校验（默认否）
vmess6 = vmess,example.com,10086,aes-128-gcm,"52396e06-041a-4cc2-be5c-8525eb457809",transport=http,alterId=0,path=/,host=v3-dy-y.ixigua.com,over-tls=true,tls-name=example.com,skip-cert-verify=true
```

##### VLESS 类型


- VLESS+tcp

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，UUID，transport(传输方式)=tcp
VLESS1 = VLESS,example.com,10086,"52396e06-041a-4cc2-be5c-8525eb457809",transport=tcp,over-tls=false
```

- VLESS+tcp+tls

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，UUID，transport(传输方式)=tcp，over-tls=是否启用TLS，tls-name=SNI，skip-cert-verify=是否跳过证书校验（默认否）
VLESS2 = VLESS,example.com,10086,"52396e06-041a-4cc2-be5c-8525eb457809",transport=tcp,path=/,host=v3-dy-y.ixigua.com,over-tls=true,tls-name=example.com,skip-cert-verify=true
```


- VLESS+ws

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，UUID，transport(传输方式)=ws，path=websocket握手header中的path，host=websocket握手header中的host
VLESS3 = VLESS,example.com,10086,"52396e06-041a-4cc2-be5c-8525eb457809",transport=ws,path=/,host=v3-dy-y.ixigua.com,over-tls=false
```

- VLESS+wss

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，UUID，transport(传输方式)=ws，path=websocket握手header中的path，host=websocket握手header中的host，over-tls=是否启用TLS，tls-name=SNI，skip-cert-verify=是否跳过证书校验（默认否）
VLESS4 = VLESS,example.com,10086,"52396e06-041a-4cc2-be5c-8525eb457809",transport=ws,path=/,host=v3-dy-y.ixigua.com,over-tls=true,tls-name=example.com,skip-cert-verify=true
```

- VLESS+http

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，UUID，transport(传输方式)=http，path=httpheader中的path，host=httpheader的host
VLESS5 = VLESS,example.com,10086,"52396e06-041a-4cc2-be5c-8525eb457809",transport=http,path=/,host=v3-dy-y.ixigua.com,over-tls=false
```

- VLESS+http+tls

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，UUID，transport(传输方式)=http，path=httpheader中的path，host=httpheader的host，over-tls=是否启用TLS，tls-name=SNI，skip-cert-verify=是否跳过证书校验（默认否）
VLESS6 = VLESS,example.com,10086,"52396e06-041a-4cc2-be5c-8525eb457809",transport=http,path=/,host=v3-dy-y.ixigua.com,over-tls=true,tls-name=example.com,skip-cert-verify=true
```

##### trojan 类型

- trojan

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，alpn=tls扩展，skip-cert-verify=是否跳过证书校验（默认否），tls-name=SNI，udp=是否在UDP中使用（需要节点支持）
trojan1 = trojan,example.com,443,"password",alpn=http1.1,skip-cert-verify=false,tls-name=example.com,udp=true
```

- trojan+ws

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，alpn=tls扩展，transport(传输方式)=ws，path=websocket握手header中的path，host=websocket握手header中的host，skip-cert-verify=是否跳过证书校验（默认否），tls-name=SNI，udp=是否在UDP中使用（需要节点支持）
trojan2 = trojan,example.com,443,"password",transport=ws,path=/,host=micsoft.com,alpn=http1.1,skip-cert-verify=true,tls-name=example.com,udp=true
```

- trojan+http

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，alpn=tls扩展，transport(传输方式)=http，path=httpheader中的path，host=httpheader的host，skip-cert-verify=是否跳过证书校验（默认否），tls-name=SNI，udp=是否在UDP中使用（需要节点支持）
trojan2 = trojan,example.com,443,"password",transport=ws,path=/,host=micsoft.com,alpn=http1.1,skip-cert-verify=true,tls-name=example.com,udp=true
```

##### Wireguard

```
[Proxy]
wireguardNode = wireguard,interface-ip=192.168.2.2,interface-ipV6=2402:4e00:1200:ed00:0:9089:6dac:96b6,private-key="qF22B3ezOhWGJA4SHwQSsgMa9d6mPGHyFdZMaDTae2E=",mtu=1280,dns=192.168.2.1,dnsV6=2402:4e00:1200:ed00:0:9089:6dac:96b6,keeyalive=45,peers=[{public-key="JFuTIJEcFnt8R04UnAE5o2WfIPJUsumSxsD2ayXzoWY=",preshared-key="yVNv5K05AwVnWaR4OB8BlMX3jJlkS74aKlYC3PD95IE=",reserved=[1,2,3],allowed-ips="0.0.0.0/0",endpoint=192.168.3.17:51820}]
```


##### Hysteria2

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，密码，skip-cert-verify=是否跳过证书校验（默认否），tls-name=SNI，udp=是否在UDP中使用（需要节点支持），fast-open=是否开启fast open
hysteria2Node = Hysteria2,example.com,9898,"password",skip-cert-verify=true,tls-name=example.com,udp=true,fast-open=true
```

##### js custom

```
[Proxy]
# 节点名称 = 协议，服务器地址，端口，script-path=脚本路径（本地脚本直接为文件名，远端脚本为url）
jsHTTP = custom,192.168.1.139,6152,script-path=http.js
```


#### 2.2.2 UI 添加

1. 「仪表标签页」-「节点」 → 点击右上角`＋` → 选择`本地节点`，选择对应协议后填写参数

2. 「配置标签页」-「节点」区域 - `节点` → 点击右上角`＋` → 选择`本地节点`，选择对应协议后填写参数

在添加节点页面也可通过扫码添加

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/2.2.2.PNG" width="900">


### 2.3 添加远程订阅

除了可以解析官方定义的节点格式，Loon也可以解析大部分服务提供商所提供的订阅节点，如遇到不支持的情况可以使用节点订阅解析脚本进行解析，目前常用的解析脚本由[SubStore](https://github.com/sub-store-org)提供，可在配置文件的general模块下进行如下配置，在之后的添加订阅节点页面开启解析器即可。


```
[General]
resource-parser = https://gitlab.com/sub-store/Sub-Store/-/releases/permalink/latest/downloads/sub-store-parser.loon.min.js
```


#### 2.3.1 配置文件添加

!> 以下主要讲的是 `[Remote Proxy]` 区块下的内容，所以示例都以 `[Remote Proxy]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[Remote Proxy]`。



`<别名> = <资源路径>,<是否开启解析器>,<UDP开关>,<Fast Open 开关>,<Vmess Aead 开关>,<是否启用>,<图标>`

- <别名>：可以填写机场名称
- <是否开启解析器>：`parser-enabled = true`，当不使用解析器时，可省略该字段
- <UDP开关>：`udp=true`
- <Fast Open 开关>：`fast-open=false`
- <Vmess Aead 开关>：`vmess-aead=true`
- <是否启用>：`enabled=true`
- <图标>：`img-url=`


```
[Remote Proxy]

别名 = 订阅URL,parser-enabled = true,udp=true,fast-open=false,vmess-aead=true,enabled=true,img-url=图标地址
```

#### 2.3.2 UI 添加


1. 「仪表标签页」-「节点」 → 点击右上角`＋` → 选择`添加订阅`

2. 「配置标签页」-「节点」区域 - `节点` → 点击右上角`＋` → 选择`添加订阅`


<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/2.3.2.PNG" width="900">


### 2.4 节点延迟

> 需在 Loon 开启时，才可对节点进行延迟测试

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/2.4.1.PNG" width="1200">

由于Loon采用了自己的时延统计方法，所以可能与其他同类工具的测得的时延有所差异：

前面的时延是建立 **TCP** 连接时的三次握手时间总和。需在更多设置中开启；

后面的时延是发出 **HTTP HEADER** 请求后第一次获得响应的时间，它的响应成功与否决定了服务器是否可用。

⚠️ 注意：
- 自动策略组是对其策略组里配置的`url = `地址做测试(在UI里显示为`Test-URL`)。
- 手动选择策略组的延迟则是针对`[General]`里的`proxy-test-url = `地址做测试
- 直连延迟则是针对`[General]`里的`internet-test-url = `地址做测试


```
[General]
# 测速所用的测试链接，如果策略组没有自定义测试链接就会使用这里配置的
proxy-test-url = http://cp.cloudflare.com/generate_204

# 测试直连时使用的测试连接，用于判断网络连通性
internet-test-url = http://wifi.vivo.com.cn/generate_204

# 节点测速时的超时秒数
test-timeout = 3
```

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/2.4.2.PNG" width="1500">



### 2.5 筛选节点

> 功能上类似于其他代理软件的策略组正则筛选，但是更加灵活

在App中添加了多个节点或者多个订阅节点后，如果需要将所有的节点进行分类时（比如需要将所有香港区域的节点进行分类，或者手动选择一些节点作为一个组），那么可以使用筛选节点功能。



#### 参数

!> 以下主要讲的是 `[Remote Filter]` 区块下的内容，所以示例都以 `[Remote Filter]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[Remote Filter]`。


- NodeSelect：手动选择需要组合的节点
    - 远程订阅为可选参数,可省略
    - 此参数建议使用 UI 添加


```
<别名> = NodeSelect,<远程订阅1>,<远程订阅2>
```

eg:

```
[Remote Filter]
Select = NodeSelect,Lᴜᴄʏ Cʟᴏᴜᴅ,花云
```

当 `包含的订阅` 有内容时，只会从这些订阅中筛选；没有内容时显示 `All`，并从所有节点中筛选。

当 筛选类型 为 `NodeSelect`，必须使用 UI 勾选节点。

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/2.5.PNG" width="900">


- NameKeyword：根据节点名字中是否包含相关关键词进行筛选


```
[Remote Filter]
🇺🇸 = NameKeyword, FilterKey = "🇺🇸"
```


- NameRegex：使用正则表达式对节点的名字进行筛选

    - [常用节点筛选正则表达式](regex/use.md)

```
[Remote Filter]
HK = NameRegex, FilterKey = "^(?=.*((?i)🇭🇰|香港|(\b(HK|Hong)\b)))(?!.*((?i)回国|校园|游戏|(\b(GAME)\b))).*$"
```




