# 3. 规则系统

以 `;` 或 `#` 或 `//` 开头的行为注释行。

以下主要讲的是 `[filter_local]`、`[filter_remote]` 或 `[policy]`  区块下的内容，所以示例都以 `[filter_local]`、`[filter_remote]` 或 `[policy]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[filter_local]`、`[filter_remote]` 或 `[policy]`。

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI2.JPEG" width="900">


### 3.1 「Filter」参数

「Filter」即分流规则，规则由四个部分组成：

```
<规则类型>, <内容条件>, <策略>, 「参数」
```

Quantumult X 默认有 3 个自带策略：

- `DIRECT` 直连
- `PROXY` 代理 (需添加节点订阅使用)
- `REJECT` 阻止


### 3.2 添加 **本地规则** 

添加本地规则方法如图：

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI2-1.JPEG" width="600">

或直接按照下文里所示格式，写入配置文件的 `[filter_local]`

- 直接点击顶部「分流规则」按钮，即可查看所有规则及其顺序(包括本地和远程规则里面的每一条)

- 也可以点击 右下角风车 → 「分流」区域-「分流规则」 进行查看


#### 3.2.1 域名类型规则

首先需要弄明白，URL 中域名是哪些？以一条 URL 为例：

`http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument`

其中 `www.example.com` 为域名，或者说是第二个 / 之后以及第三个 / 之间的内容（不包括冒号和端口）。

##### `HOST`规则

当请求的域名完全匹配时，则执行该规则：

```
[filter_local]
# 屏蔽百度首页
host, www.baidu.com, reject

# 屏蔽百度百科
host, baike.baidu.com, reject
```

如上，对于「百度」的一些域名使用了「阻止请求」策略

⚠️ 注意：

> 如果你是从 Surge 过来的用户可能会这么使用 HOST 规则：`host, 1.1.1.1, proxy`，但这并不适用于 Quantumult X

##### `HOST-SUFFIX`规则

当请求的域名的后缀匹配，则执行该规则：

```
[filter_local]
host-suffix, doubleclick.net, reject
```

如上示例，相比使用 hosts 需要一条条的阻止域名，如：

```
127.0.0.1 ad.doubleclick.net
127.0.0.1 adx.g.doubleclick.net
127.0.0.1 pubads.g.doubleclick.net
```

Quantumult X 仅使用一条 `HOST-SUFFIX` 类型规则，就可以对 `doubleclick.net` 及其子域名都做出了阻止。

💡 再看两条关于 `HOST-SUFFIX` 的例子：

`ads.example.com` 本身及其子域名是广告，而 `example.com` 本身及其他子域名是正常内容就可以使用： `host-suffix, ads.example.com, reject`，所以并不是只能将一级域名用于 `HOST-SUFFIX`；

可以对域名后缀使用，如想对所有 `.cn` 后缀的域名做出直连策略，那么可以：`host-suffix, cn, direct`

##### `HOST-KEYWORD`规则

当请求的域名包含关键词时，执行该规则：

```
[filter_local]
host-keyword, adservice, reject
```

顾名思义就是匹配到域名中的关键词，这条规则对于以下域名都会生效：

```
adservice.google.com
adservice.google.com.hk
googleadservice.com
adservice-google.com
```


##### `HOST-WILDCARD`规则

当请求的域名的匹配通配符时，执行该规则：

```
[filter_local]
host-wildcard, ad*.example.com, reject
```

`HOST-WILDCARD` 类型规则用于通配符 `*` 与 `?` 匹配，如上示例可以匹配如下域名：

```
ads.example.com
adx.example.com
advert.example.com
```




#### 3.2.2 IP 类型规则

##### `IPv4`规则

```
ip-cidr, 8.8.8.8/32, direct
```

##### `IPv6`规则

```
ip6-cidr, 2001:4860:4860::8888/64, direct
```

如果不清楚这里的 /32 与 /64，需要自行了解「CIDR」与「子网掩码」，还可以搜索「子网掩码计算器」获取帮助。

可以参考：[IP地址、子网掩码、网络号、主机号、网络地址、主机地址以及ip段/CIDR含义](https://limbopro.com/archives/23707.html)


##### `GEOIP`规则

当 IP 归属地地区符合时，执行该规则：

```
[filter_local]
geoip, cn, direct
```

如上示例，当 IP 为中国地区时走直连。

##### `IP-ASN`规则

当 IP 属于 ASN 号时，执行该规则：

```
ip-asn, 13335, direct
```


#### 3.2.3 其它类型规则

##### `USER-AGENT`规则

当请求的 User Agent 匹配时，执行该规则：

```
[filter_local]
user-agent, TIM*, direct
```

可使用通配符 `*` 与 `?`

> 在 iOS 15 系统后，系统出于隐私保护考虑，不再于 CONNECT 请求中提供 User-Agent，这意味着对于所有 HTTPS 请求，在未开启 MITM 时，User-Agent 均不可见且规则无法生效。

##### `FINAL`规则

在规则的末尾始终有一个 FINAL 类型规则兜底

```
host-suffix, baidu.com, reject
final, direct
```

它作用于 **除了已有规则以外** 的网络活动策略。

如上示例只有两条规则，这表示除了 baidu.com 及其子域名使用阻止策略外，其他网络活动都使用直连策略。

  - 注意：由于规则存在优先级，查看规则时，本地规则会显示在远程(引用)规则上方，`FINAL`规则会默认(强制)显示在本地规则的末尾，但仅仅只是显示，实际上优先级还是在最后！
  - 本地规则中，所有写在`FINAL`规则后的规则都是无效的！！

#### 3.2.4 规则参数

默认情况下，即不带上参数时，则当处于 Wi-Fi 网络时使用 Wi-Fi 数据，当处于仅蜂窝网络时使用网络数据，

```
[filter_local]
host-suffix, qq.com, direct, force-cellular
host-suffix, qq.com, direct, multi-interface
host-suffix, qq.com, direct, multi-interface-balance
host-suffix, qq.com, direct, via-interface=pdp_ip0
```

可以使用几个参数来指定规则的出站接口：

`force-cellular`：当处于 Wi-Fi 网络时仍使用蜂窝网络数据；

`multi-interface`：当处于 Wi-Fi网络时，同时使用 Wi-Fi 网络与蜂窝网络建立 TCP 连接，使用拥有最佳 TCP 握手值的连接来传输数据。

`multi-interface-balance`：当处于 Wi-Fi 网络时，均衡使用 Wi-Fi 网络与蜂窝网络，以提升并发任务的出口贷款。

`via-interface`：指定出站接口

另外，还可以直接在「设置」底部的「其他设置」中，全局设置「出站接口」。

#### 3.2.5 配置片段方式添加

 此方法是将本地规则写入本地文件，将该本地文件作为引用资源的方式进行添加(类似于添加远程规则，只不过远程规则的位置是本地文件)

 `设置`→`配置文件`区域-`配置片段`→`分流`,一样可进行添加。

 ⚠️ 注意：添加配置片段时，无需带有`[server_local]`、`[server_remote]`、`[filter_local]`、`[filter_remote]` 等字段

 规则格式参考 [添加本地规则](quantumutx/filter.md?id=_32-添加-本地规则)

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI2-4.jpg" width="600">



### 3.3 添加 **远程(引用)规则**

远程规则即许多条单独规则组成的合集，每条单独的规则同样遵从<规则类型>, <内容条件>, <策略>的格式

#### 3.3.1 配置文件添加

远程分流在 配置文件`[filter_remote]` 下添加：

```
[filter_remote]
https://example.com/reject.txt, tag=🛡️ Block Ads, force-policy=reject, update-interval=86400, opt-parser=true, inserted-resource=true, enabled=true
```
也就是说一条完整的远程分流规则配置是这么组成的：

`<资源路径>, <资源标签>, <策略偏好>, <自动更新时间间隔>, <是否使用资源解析器>, <插入资源>, <是否启用>`

- `tag` 资源标签：相当于名称，标识这条远程分流文件的作用；

- `force-policy` 策略偏好：可选，此处明确设置为 REJECT 策略，如果远程分流文件中已经指明则此处可忽略；

- `update-interval` 自动更新的时间间隔，单位为秒；

- `opt-parser` 是否使用资源解析器，若关闭则改为 `false`；

- `inserted-resource` 插入资源，将分流文件中的规则放置于本地规则之前；

- `enabled` 是否启用该分流文件，若不使用可改为 `false`；



!> 资源路径，需要填写**raw格式**

<details>
  <summary> 点此查看raw格式教程</summary>

以下方的链接举例(这是个网页，不是真正能使用的资源链接)：

```
https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/QuantumultX/12306/12306.list
```

例如在末尾添加`?raw=ture`：

```
https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/QuantumultX/12306/12306.list?raw=ture
```

或者直接点击`raw`或者`view`，⁠使用跳转后的链接：

```
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/12306/12306.list
```

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/raw1.jpg" >

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/raw2.png" >



或者将链接里的`blob`⁠修改为`raw`：

```
https://github.com/blackmatrix7/ios_rule_script/raw/master/rule/QuantumultX/12306/12306.list
```



</details>


#### 3.3.2 UI添加

默认UI情况下，长按顶部「分流规则」按钮，即可进入**添加远程(引用)规则**页面

也可点击右下角风车 → 找到「分流」区域-「资源规则」

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI2-2.jpg" width="900">



!> 资源路径，需要填写**raw格式**

<details>
  <summary> 点此查看raw格式教程</summary>


以下方的链接举例(这是个网页，不是真正能使用的资源链接)：

```
https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/QuantumultX/12306/12306.list
```

例如在末尾添加`?raw=ture`：

```
https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/QuantumultX/12306/12306.list?raw=ture
```

或者直接点击`raw`或者`view`，⁠使用跳转后的链接：

```
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/12306/12306.list
```

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/raw1.jpg" >

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/raw2.png" >

或者将链接里的`blob`⁠修改为`raw`：

```
https://github.com/blackmatrix7/ios_rule_script/raw/master/rule/QuantumultX/12306/12306.list
```


</details>


- 「资源解析器」：是对引用的资源文件内容(远程or配置片段)，进行解析/转换/修改，变成 Quantumult X 支持的内容，可用在Quantumult X 的三个主要模块：①节点 ②分流 ③重写，具体使用说明见解析器下方教程；

  - 如果你的解析器是空的，「节点页」点击左下角编辑，需要在 `[general]` 下添加：

```
resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js 
```

- 「策略偏好」：**建议开启**，如上文所述，分流规则需要带有一个 <策略>，开启策略偏好，即可强制指定远程规则集的策略，而不是使用规则集内的策略：

  - 当不开启「策略偏好」时，恰好配置文件中不存在远程(引用)规则集内指定的策略，QX将会自动补全一个`与规则集内置策略同名的策略组`

  - 当不开启「策略偏好」时，且开启「资源解析器」，「资源解析器」会将规则集的策略设置为`Shawn`，QX将会自动补全一个同名策略组(即名为`Shawn`的策略组)


#### 3.3.3 内置规则集

在添加远程规则时，资源路径填写`FILTER_REGION`；此时这条规则将会在「iCloud云盘 ▸ Quantumult X ▸ Profiles 文件夹」下生成一个`FILTER_REGION`文件，内容如下：
```
geoip, cn ,direct
```

相当于将这条规则作为远程规则进行引用，只不过规则地址是本地(iCloud)。

同样的，资源路径填写`FILTER_LAN`，这条规则将会在「iCloud云盘 ▸ Quantumult X ▸ Profiles 文件夹」下生成一个`FILTER_LAN`文件，即局域网地址，内容如下：

```
ip-cidr, 10.0.0.0/8, direct
ip-cidr, 127.0.0.0/8, direct
ip-cidr, 172.16.0.0/12, direct
ip-cidr, 192.168.0.0/16, direct
ip-cidr, 224.0.0.0/24, direct
```

其对应的配置文件写法：
```
[filter_remote]
FILTER_LAN, tag=LAN, force-policy=direct, enabled=true
FILTER_REGION, tag=CN, force-policy=direct, enabled=true

```

#### 3.3.4 远程分流资源更新与分流细则查看

- 默认自动更新时间为48小时，需打开QX才可自动更新
  - 可以更改配置文件中的`update-interval`参数，单位为秒(S)，修改为`-1`即为不更新

- 左滑规则集可以单独更新，并查看其细则

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/filter_remote.jpg" width="900">



### 3.4 注意 **规则类型优先级** 问题

在默认情况下，Quantumult X 会启用 **「分流匹配优化」**，大致的优先级先后顺序为：
`HOST > HOST-SUFFIX > HOST-WILDCARD > HOST-KEYWORD > USER-AGENT > IP类型规则 (IP-CIDR 等)`

如此可能会产生什么问题？来看一个示例：

```
[filter_local]
host-keyword, qq, direct
host-suffix, qq.com, reject
```

一般来说规则是按照  **先后顺序** 进行匹配，但开启 **「分流匹配优化」** 后是第二条生效，因为前面说了 `HOST-SUFFIX` 的优先级高于 `HOST-KEYWORD`。

不过这样的问题并不是特别常见，可以先不去管它，如果你遇到这样的问题，可以：

* 写一条与优先级高的规则一样的规则，在本地覆盖掉它；
* 或者想要完全按照规则的顺序匹配，可以在「设置」底部的「其他设置」的「VPN」下，将「分流匹配优化」关闭；



### 3.5 注意 **远程(引用)规则 先后顺序** 问题

通常，远程规则可以按照以下顺序进行放置

`修正规则`(例如苹果推送服务、不能被去广告分流REJECT的、与其他规则有冲突需要单独分流的)，此类规则的策略通常是`DIRECT`



`广告屏蔽规则`，此类规则的策略通常是`REJECT`



`需要单独分流的规则`（容易被包含在大合集里面，但是有单独分流的需求）



`各种合集规则`（国外网站合集、国外媒体合集，按需添加）



`FILTER_LAN`（内置的局域网规则集）



`国内IP集/域名集/ASN集` 或 `FILTER_REGION`(内置的`geoip, cn ,direct`，国内规则通常有这一个就够了)

长按远程规则待右侧出现`≡`即可拖动摆放顺序

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/filter_remote_change.jpg" width="300">




### 3.6 注意 **本地与远程(引用)规则 先后顺序** 问题

默认情况下，Quantumult X 的 *本地规则* 总是位于 *远程规则* 的前面(Final除外，默认所有规则最后面)。

如此可能会产生什么问题？？来看一个示例，假设你的本地规则有一条规则：

```
[filter_local]
geoip, cn, direct
```

但**远程(引用)规则**中有一条这样的规则：

`ip-cidr, 180.76.76.76/32, reject`

此时远程规则并不会生效，因为顺序上来说**本地规则** `geoip, cn ,direct` (表示中国大陆的 IP 直连)位于**远程(引用)规则** `ip-cidr, 180.76.76.76/32, reject` 的前面，而 `180.76.76.76` 是中国大陆地区的 IP，所以先匹配到了如上**本地规则**，所以就没法执行如上**远程(引用)规则**了。

要解决这个问题，可以在该 **远程(引用)规则** 的分流配置中添加参数 `inserted-resource=true`，或在图形界面的远程分流文件的设置中，打开 **「插入资源」** 开关。

  - 开启「插入资源」的远程规则，优先级会高于本地，同时会显示在本地规则上方，启用图标也会变化成弯箭头

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/%E6%8F%92%E5%85%A5%E8%B5%84%E6%BA%90.jpg" width="600">

以上只是例子；

实际上，`geoip, cn ,direct`规则的最佳放置位置，应该是远程规则的最后面，有以下方法：

> 填写前建议先在 `设置`→最下方`其他设置`，找到并开启`资源`-`iCloud云盘`；


- 在添加远程规则时，资源路径填写`FILTER_REGION`；此时这条规则将会在「iCloud云盘 ▸ Quantumult X ▸ Profiles 文件夹」下生成一个`FILTER_REGION`文件，内容是`geoip, cn ,direct`。相当于将这条规则当成远程规则进行引用，只不过规则地址是本地(iCloud)。

- 或者可以如下图所示操作，通过配置片段，新建本地文件，将`geoip, cn ,direct`填入，文件名可自定义；此时资源路径会自动填充。
<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI2-3.JPEG" width="1200">

- 或者从 `设置`→`配置文件`区域-`配置片段`→`分流`,一样可进行添加。

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI2-4.jpg" width="600">
