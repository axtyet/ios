## 3. 规则系统

> 此区域对应「配置标签页」-「规则」区域 - `规则`


仪表页可查看当前规则总数

- 点击右上角🔄，可更新

- 拖动右上角 `≡`，可进行排序

- 点击右上角 `＋`，可添加规则

点击可查看规则详情，左滑规则可对已有规则进行编辑、禁用、删除

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.9.1.PNG" width="900">

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.9.3.PNG" width="300">

### 3.1 规则优先级

由于一般将 `geoip` 的规则放在本地规则中，多个订阅规则中混合使用 `IP类型` 的规则，并且有部分 `IP类型` 的规则没有配置`no-resolve`，导致很多不必要的 DNS查询，所以
- **如果一个请求的目标地址是`域名`，会优先匹配`域名类型`的规则**
- 若**匹配到了`域名类规则`将不会再进行 `IP类规则` 匹配**
- 若**未匹配到`域名类型`的规则，则会在本地进行 DNS查询，根据查询结果去匹配 `IP类规则`**


除了 `域名` 和 `IP类型` 的规则有优先级，其他所有规则会按照配置文件中的顺序来决定优先级，即：
- **排在前面的优先级高于排在后面的**
- **同时本地规则 > 插件中的规则 > 订阅规则，未匹配到任何规则后会使用 `Final规则`**


### 3.2 添加**本地规则**

以下主要讲的是 `[Rule]` 区块下的内容，所以示例都以 `[Rule]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[Rule]`。

「配置标签页」-「规则」区域 - `规则` → 右上角`＋`，可添加远程或本地规则

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/3.2.PNG" width="900">

其配置参数如下：

```
[Rule]
<规则类型>,<内容条件>,<策略>,「参数」
```

Loon 3.1.5(657) 目前内置两种类型策略：直连和拒绝（共计 12 种）

- 直连：流量不经过任何代理服务器，直接发送到目的地，使用大写的 `DIRECT` 表示
- 拒绝：不将流量发送到任何服务器，一般用于去广告
    > REJECT 类型的策略只有在HTTP或者解密后的HTTPS中有效，其他情況下除了 `REJECT-DROP` 之外直接断开连接
    - `REJECT`：HTTP 404，响应体为空
    - `REJECT-DROP`：丟弃请求，不做处理
    - `REJECT-NO-DROP`：HTTP 404，响应体为空，不会升级到 `REJECT-DROP`
    - `REJECT-IMG`：HTTP 200，响应体为1像素的gif
    - `REJECT-IMG-NO-DROP`：HTTP 200，响应体为1像素的gif，不会升级到 `REJECT-DROP`
    - `REJECT-VIDEO`：HTTP 200，响应体为空白视频
    - `REJECT-VIDEO-NO-DROP`：HTTP 200，响应体为空白视频，不会升级到 `REJECT-DROP`
    - `REJECT-DICT`：HTTP 200，响应体为空json字符串
    - `REJECT-DICT-NO-DROP`：HTTP 200，响应体为空json字符串，不会升级到 `REJECT-DROP`
    - `REJECT-ARRAY`：HTTP 200，响应体为空数组字符串
    - `REJECT-ARRAY-NO-DROP`：HTTP 200，响应体为空数组字符串，不会升级到 `REJECT-DROP`


「参数」`no-resolve`：可选，当设置`no-resolve`后表示该规则只会对目标地址类型是IP类型的生效，域名类型的目标地址不会进行dns解析后再去匹配这个规则，为了防止域名类的目标地址做无效的DNS请求，请在给纯IP类型的域名制定的规则中加上`no-resolve`。


#### 3.2.1 域名类型规则

首先需要弄明白，URL 中域名是哪些？以一条 URL 为例：

`http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument`

其中 `www.example.com` 为域名，或者说是第二个 / 之后以及第三个 / 之间的内容（不包括冒号和端口）。

##### `DOMAIN`规则

当请求的域名完全匹配时，则执行该规则：

```
[Rule]
# 屏蔽百度首页
DOMAIN,www.baidu.com,REJECT

# 屏蔽百度百科
DOMAIN,baike.baidu.com,REJECT
```

如上，对于「百度」的一些域名使用了「阻止请求」策略


##### `DOMAIN-SUFFIX`规则

当请求的域名的后缀匹配，则执行该规则：

```
[Rule]
DOMAIN-SUFFIX,doubleclick.net,REJECT
```

如上示例，相比使用 DOMAINs 需要一条条的阻止域名，如：

```
127.0.0.1 ad.doubleclick.net
127.0.0.1 adx.g.doubleclick.net
127.0.0.1 pubads.g.doubleclick.net
```

Loon 仅使用一条 `DOMAIN-SUFFIX` 类型规则，就可以对 `doubleclick.net` 及其子域名都做出了阻止。

💡 再看两条关于 `DOMAIN-SUFFIX` 的例子：

`ads.example.com` 本身及其子域名是广告，而 `example.com` 本身及其他子域名是正常内容就可以使用： `DOMAIN-SUFFIX,ads.example.com,REJECT`，所以并不是只能将一级域名用于 `DOMAIN-SUFFIX`；

可以对域名后缀使用，如想对所有 `.cn` 后缀的域名做出直连策略，那么可以：`DOMAIN-SUFFIX,cn,DIRECT`

##### `DOMAIN-KEYWORD`规则

当请求的域名包含关键词时，执行该规则：

```
[Rule]
DOMAIN-keyword,adservice,REJECT
```

顾名思义就是匹配到域名中的关键词，这条规则对于以下域名都会生效：

```
adservice.google.com
adservice.google.com.hk
googleadservice.com
adservice-google.com
```


#### 3.2.2 IP 类型规则

##### `IPv4`规则

```
IP-CIDR,118.89.204.198/32,DIRECT,no-resolve
```

##### `IPv6`规则

```
IP-CIDR6,2402:4e00:1200:ed00:0:9089:6dac:96b6/128,DIRECT
```

如果不清楚这里的 /32 与 /64，需要自行了解「CIDR」与「子网掩码」，还可以搜索「子网掩码计算器」获取帮助。

可以参考：[IP地址、子网掩码、网络号、主机号、网络地址、主机地址以及ip段/CIDR含义](https://limbopro.com/archives/23707.html)


##### `GEOIP`规则

当 IP 归属地地区符合时，执行该规则：

```
[Rule]
GEOIP,cn,DIRECT
```

如上示例，当 IP 为中国地区时走直连。

##### `IP-ASN`规则

当 IP 属于 ASN 号时，执行该规则：

```
IP-ASN,13335,DIRECT,no-resolve
```


#### 3.2.3 HTTP 类型规则

HTTP类型的规则只会对HTTP、HTTPS类型的请求进行匹配

##### `USER-AGENT`规则

当请求的 User Agent 匹配时，执行该规则：

```
[Rule]
USER-AGENT,TIM*,DIRECT
```

可使用通配符 `*` 与 `?`

> 在 iOS 15 系统后，系统出于隐私保护考虑，不再于 CONNECT 请求中提供 User-Agent，这意味着对于所有 HTTPS 请求，在未开启 MITM 时，User-Agent 均不可见且规则无法生效。

##### `URL-REGEX`规则

根据提供的正则表达式对请求的 url 进行匹配

```
URL-REGEX,^http://google\.com,DIRECT
```


#### 3.2.4 `FINAL`规则

在本地规则的末尾始终有一个 `FINAL` 类型规则兜底

```
DOMAIN-SUFFIX,baidu.com,REJECT
FINAL,DIRECT
```

它作用于 **除了已有规则以外** 的网络活动策略。


### 3.3 添加订阅规则

订阅规则是一系列规则的集合，只要是满足Loon类型的规则都可以放入规则集中，Loon目前可以承载百万级别数量的规则，无须担心性能和耗时问题。



以下主要讲的是 `[Remote Rule]` 区块下的内容，所以示例都以 `[Remote Rule]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[Remote Rule]`。


「配置标签页」-「规则」区域 - `规则` → 右上角`＋`，可添加远程或本地规则

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/3.3.PNG" width="900">


配置参数如下：

```
[Remote Rule]
https://github.com/Repcz/Tool/raw/X/Loon/Rules/APNs.list, policy = DIRECT, tag = ApplePushService, enabled = true
```

`<资源路径>, <策略>, <别名>, <是否启用>`


- <资源路径>：需使用 `raw` 格式

以下方的Github链接举例(这是个网页，不是真正能使用的资源链接)：
`https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/QuantumultX/12306/12306.list`

例如在末尾添加`?raw=ture`：
`https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/QuantumultX/12306/12306.list?raw=ture`

或者直接点击`raw`或者`view`，⁠使用跳转后的链接：
`https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/12306/12306.list`

或者将链接里的`blob`⁠修改为`raw`：
`https://github.com/blackmatrix7/ios_rule_script/raw/master/rule/QuantumultX/12306/12306.list`


- `policy =` <策略>：除 Loon 内置的策略外，还可选择 本地节点、策略组、代理链等
- `tag =` <别名>：自定义的名称，分别记忆理解
- `enabled =` <是否启用>: 若不使用可改为 `false`
