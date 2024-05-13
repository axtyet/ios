## 4. 策略
Loon的流量走向机制：

**请求 → 匹配规则 → 查询规则指定的策略 → 根据策略获取到相应的节点**

上述流程阐述了规则、策略、节点三者的关系，规则指向策略，策略决定使用的节点

在Loon中，策略可以使以下四种：**一个节点、内置策略、策略组、代理链**

### 4.1 节点类型策略
当一个策略是一个节点时，就表示使用这个节点进行流程转发；你可以将规则直接指向一个节点策略，如：

```
# 假设节点名为 🇺🇸 𝗦𝗮𝗹𝘁𝘆𝗙𝗶𝘀𝗵
[Rule]
DOMAIN,google.com,🇺🇸 𝗦𝗮𝗹𝘁𝘆𝗙𝗶𝘀𝗵

[Remote Rule]
https://github.com/Repcz/Tool/raw/X/Loon/Rules/Google.list, policy = 🇺🇸 𝗦𝗮𝗹𝘁𝘆𝗙𝗶𝘀𝗵, tag = Google, enabled = true

```

### 4.2 内置策略

内置策略分为两种类型，直连和拒绝

#### 4.2.1 直连
流量不经过任何节点，直接发送到目的地，使用大写的`DIRECT`表示
```
DOMAIN,apple.com,DIRECT
```
#### 4.2.2 拒绝

不将流量发送到任何服务器，一般用于去广告

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


### 4.3 代理链策略

当一个策略是为代理链时，就表示使用这个代理链进行流程转发；你可以将规则直接指向一个代理链，如：

```
# 假设代理链名为 🇺🇸 𝗦𝗮𝗹𝘁𝘆𝗙𝗶𝘀𝗵 𝗖𝗵𝗮𝗶𝗻
[Proxy Chain]
🇺🇸 𝗦𝗮𝗹𝘁𝘆𝗙𝗶𝘀𝗵 𝗖𝗵𝗮𝗶𝗻 = 美国节点,🇺🇸 𝗦𝗮𝗹𝘁𝘆𝗙𝗶𝘀𝗵 𝗔𝗻𝗻𝗶𝘃ᵀ, udp=true

[Rule]
DOMAIN,google.com,🇺🇸 𝗦𝗮𝗹𝘁𝘆𝗙𝗶𝘀𝗵 𝗖𝗵𝗮𝗶𝗻

[Remote Rule]
https://github.com/Repcz/Tool/raw/X/Loon/Rules/Google.list, policy = 🇺🇸 𝗦𝗮𝗹𝘁𝘆𝗙𝗶𝘀𝗵 𝗖𝗵𝗮𝗶𝗻, tag = Google, enabled = true
```


### 4.4 策略组

策略组是一系列策略、策略组的集合，手动或自动的决定使用策略组中的哪一个策略，可以在配置文件的`[Proxy Group]`区块下声明，策略组是可以相互嵌套的

以下主要讲的是 `[Proxy Group]` 区块下的内容，所以示例都以 `[Proxy Group]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[Proxy Group]`。



策略组有以下类型：

#### 4.4.1 `select`:「手动选择」

需要手动选择想要的节点/策略组

```
[Remote Filter]
All = NameRegex, FilterKey = .

[Proxy Group]
手动切换 = select,香港节点,美国节点,狮城节点,日本节点,台湾节点,All,url = http://1.1.1.1/generate_204,img-url = https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/chxm1023/Loon_9.png

[Remote Rule]
https://github.com/Repcz/Tool/raw/X/Loon/Rules/Google.list, policy=手动切换, tag=Google, enabled=true

```

- 策略组参数`select`：手动选择策略组参数
- `香港节点,美国节点,狮城节点,日本节点,台湾节点`：表示引用的策略组
- 筛选节点`All`：当筛选节点下的 [筛选器](loon/nodefilter.md) 作为被引用对象时，此 筛选器 筛选的所有节点，都会被引用到该策略组下
- 测试链接`url = `：测速的url，loon会向该url发起header请求
- 策略组图标`img-url = `：策略组图标，支持动图


UI 添加方法如下

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/4.4.1.PNG" width="1200">




#### 4.4.2 `url-test`：「最优延迟」

根据提供的url，每隔一段时间对该策略组下的所有节点/策略组进行测速，根据容差参数，选择延迟最优的节点/策略组

```
[Remote Filter]
HK = NameRegex, FilterKey = "^(?=.*((?i)🇭🇰|香港|(\b(HK|Hong)\b)))(?!.*((?i)回国|校园|游戏|(\b(GAME)\b))).*$"

[Proxy Group]
香港节点 = url-test,HK,url = http://1.1.1.1/generate_204,interval = 600,tolerance = 50,img-url = https://raw.githubusercontent.com/Toperlock/Quantumult/main/icon/FlagGif/hong-kong.gif

[Remote Rule]
https://github.com/Repcz/Tool/raw/X/Loon/Rules/Google.list, policy=香港节点, tag=Google, enabled=true

```

- 策略组参数`url-test`：自动选择延迟最优策略组参数
- 筛选节点`HK`：当筛选节点下的 [筛选器](loon/nodefilter.md) 作为被引用对象时，此 筛选器 筛选的所有节点，都会被引用到该策略组下
- 测试链接`url = `：测速的url，loon会向该url发起header请求
- 策略组图标`img-url = `：策略组图标，支持动图
- 测试间隔`interval =`：测速间隔时间，单位秒(s)
- 容差`tolerance =`：如果当前测速后的最优节点和之前最优节点的测速相差小于`tolerance`，将不会进行节点切换，单位毫秒(ms)

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/4.4.2.PNG" width="900">



#### 4.4.3 `fallback`：「故障转移」

根据提供的url，每隔一段时间对该策略组下的所有节点/策略组进行测速，将按顺序选择你列表中第一个可用的节点。

```
[Remote Filter]
HK = NameRegex, FilterKey = "^(?=.*((?i)🇭🇰|香港|(\b(HK|Hong)\b)))(?!.*((?i)回国|校园|游戏|(\b(GAME)\b))).*$"

[Proxy Group]
香港节点 = fallback,HK,url = http://1.1.1.1/generate_204,interval = 600,max-timeout = 1000,img-url = https://raw.githubusercontent.com/Toperlock/Quantumult/main/icon/FlagGif/hong-kong.gif

[Remote Rule]
https://github.com/Repcz/Tool/raw/X/Loon/Rules/Google.list, policy=香港节点, tag=Google, enabled=true

```

- 策略组参数`fallback`：自动回退节点/策略组参数
- 筛选节点`HK`：当筛选节点下的 [筛选器](loon/nodefilter.md) 作为被引用对象时，此 筛选器 筛选的所有节点，都会被引用到该策略组下
- 测试链接`url = `：测速的url，loon会向该url发起header请求
- 策略组图标`img-url = `：策略组图标，支持动图
- 测试间隔`interval =`：测速间隔时间，单位秒(s)
- 最大超时时间`max-timeout =`：如果一个节点测速超过了这个值，就将该节点认作为不可用节点，不会进行排序，单位毫秒(ms)


#### 4.4.4 `load-balance`：「负载均衡」

负载均衡，根据所选的负载均衡算法，自动选择子策略


```
[Remote Filter]
HK = NameRegex, FilterKey = "^(?=.*((?i)🇭🇰|香港|(\b(HK|Hong)\b)))(?!.*((?i)回国|校园|游戏|(\b(GAME)\b))).*$"
US = NameRegex, FilterKey = "^(?=.*((?i)🇺🇸|美国|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|(\b(US|United States)\b)))(?!.*((?i)回国|校园|游戏|(\b(GAME)\b))).*$"
SG = NameRegex, FilterKey = "^(?=.*((?i)🇸🇬|新加坡|狮|(\b(SG|Singapore)\b)))(?!.*((?i)回国|校园|游戏|(\b(GAME)\b))).*$"


[Proxy Group]
香港节点 = load-balance,HK,url = http://1.1.1.1/generate_204,interval = 600,max-timeout = 1000,algorithm = pcc,img-url = https://raw.githubusercontent.com/Toperlock/Quantumult/main/icon/FlagGif/hong-kong.gif
美国节点 = load-balance,US,url = http://1.1.1.1/generate_204,interval = 600,max-timeout = 1000,algorithm = random,img-url = https://raw.githubusercontent.com/Toperlock/Quantumult/main/icon/FlagGif/united-states.gif
狮城节点 = load-balance,SG,url = http://1.1.1.1/generate_204,interval = 600,max-timeout = 1000,algorithm = round-robin,img-url = https://raw.githubusercontent.com/Toperlock/Quantumult/main/icon/FlagGif/singapore.gif

[Remote Rule]
https://github.com/Repcz/Tool/raw/X/Loon/Rules/Google.list, policy=香港节点, tag=Google, enabled=true

```

- 策略组参数`load-balance`：自动回退节点/策略组参数
- 筛选节点`HK`：当筛选节点下的 [筛选器](loon/nodefilter.md) 作为被引用对象时，此 筛选器 筛选的所有节点，都会被引用到该策略组下
- 测试链接`url = `：测速的url，loon会向该url发起header请求
- 测试间隔`interval =`：测速间隔时间，单位秒(s)
- 最大超时时间`max-timeout =`：如果一个节点测速超过了这个值，就将该节点认作为不可用节点，不会进行排序，单位毫秒(ms)
- 负载均衡算法`algorithm =`
    - `Random`：随机选择子策略
    - `PCC`：基于Random，不同于Random，PCC会让相同主机名的请求锁定同一节点
    - `Round-Robin`：轮询选择子策略
- 策略组图标`img-url = `：策略组图标，支持动图

#### 4.4.5 `ssid`

```
[Proxy Group]

🇭🇰香港SSID = ssid,default=香港节点,cellular=香港节点,"Wi-Fi SSID"=DIRECT,url = http://1.1.1.1/generate_204

香港节点 = url-test,HK,url = http://1.1.1.1/generate_204,interval = 600,tolerance = 50,img-url = https://raw.githubusercontent.com/Toperlock/Quantumult/main/icon/FlagGif/hong-kong.gif
```

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/4.4.5.PNG" width="900">

- 策略组参数`ssid`：根据WiFi的SSID，选择对应的策略
- 默认策略`default= `：非指定WiFi下的策略选择
- 蜂窝数据`cellular= `：蜂窝数据下的策略选择
- `"Wi-Fi SSID"=DIRECT`：指定WiFi下的策略选择，可添加多个




