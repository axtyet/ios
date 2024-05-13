## 13. 资源解析器使用方法

> 以下内容参考 [解析器作者的使用教程](https://www.notion.so/Quantumult-X-6bd13c1adc174debb80ebd3f5dfdd744)，更详细的示例请移步该教程。

### 13.1 主要功能

- 将其它格式的「服务器订阅」解析成 𝐐𝐮𝐚𝐧𝐭𝐮𝐦𝐮𝐥𝐭 𝐗 格式
  - 支持 𝐕2𝐫𝐚𝐲𝐍/𝗦𝗦(𝗥/𝗗)/𝗛𝗧𝗧𝗣(𝗦)/𝗧𝗿𝗼𝗷𝗮𝗻/𝗤𝘂𝗮𝗻𝘁𝘂𝗺𝘂𝗹𝘁(𝗫)/𝗦𝘂𝗿𝗴𝗲/𝐂𝐥𝐚𝐬𝐡/𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭/𝐋𝐨𝐨𝐧 格式
  - 提供的可选个性化参数(筛选、重命名等)
- 𝗿𝗲𝘄𝗿𝗶𝘁𝗲(重写) & 𝗳𝗶𝗹𝘁𝗲𝗿(分流) 的 转换 & 筛选 
  - 用于禁用/修改远程引用中某(几)项 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲/𝗳𝗶𝗹𝘁𝗲𝗿
  - 𝐒𝐮𝐫𝐠𝐞/𝐂𝐥𝐚𝐬𝐡 类型规则 𝗹𝗶𝘀𝘁 与 模块 module 的解析使用


### 13.2 添加解析器

如果开启资源解析器时，提示无自定义资源解析器，则需要在配置文件`[general]`下添加以下代码：

```
resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
```

### 13.3 使用方法

1.在添加的资源链接后增加配置参数

在 ⟦引用链接⟧ 后加 `#` 并添加参数（如有）, 不同参数用 `&` 连接

eg:

`http://your-service-provider#emoji=1&tfo=1&in=香港+台湾 `

- 本地资源片段引用, 请将参数如 `#in=xxx&out=yyy` 填入资源片段的第 1 行
- 支持中文, "操作" 以下特殊字符时请先替换[URL-Encode](https://www.jyshare.com/front-end/695/)
  - `+` → `%2B`
  - 空格 → `%20`
  - `@` → `%40`
  - `&` → `%26`
  - `.` → `\.`
  - `,` → `%2C`

2.开启解析器

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI10-1.PNG" width="300">

### 13.4 参数说明

#### 13.4.1 节点参数

1.`emoji=1`(国行设备用`2`)/`-1`, 添加/删除节点名内地区旗帜;

2.`udp=1`/`-1`, `tfo=1`/`-1`, 分别强制开启(关闭) `𝐮𝐝𝐩-𝐫𝐞𝐥𝐚𝐲`/`𝐟𝐚𝐬𝐭-𝐨𝐩𝐞𝐧`;

3.`uot=1`, 开启 `udp-over-tcp=true`选项（仅限SS(R)）

4.`cert=1`/`-1`, 分别开启/关闭 tls 证书验证(默认关闭);

  - `csha/psha`,  `tls-cert-sha256` 以及 `tls-pubkey-sha256` 参数

5.`in`, `out`, `regex`, `regout` 分别为 `保留`、`删除`、`正则保留`、`正则删除` 节点;

  - `in`, `out` 中多参数(逻辑`或`)用 `+`, 逻辑`与`用 `.` 表示;
  - `in`/`out` 仅对「节点名」匹配生效
  - `regex`/`regout` 对节点的「完整信息」进行匹配(类型、端口、加密等);
  - eg: `http://your-service-provider#in=🇺🇸&out=02&regout=\[home\]`：保留美国节点并排除02号节点，并使用正则排除带有`[home]`字段的节点：
  <img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI10-2.PNG" width="600">


6.`rename` 重命名, `旧名@新名`, `前缀@`, `@后缀`, 用 `+` 连接多个参数;
  - 删除字段: `字段1.字段2☠️`, 想删除 `.` 时用 `\.` 替代
  - eg: `http://your-service-provider#in=🇭🇰+🇸🇬&rename=Hong%20Kong@香港+0\.2☠️`：保留香港、新加坡节点，并替换 `Hong Kong` 为`香港`，并删除`0.2`的字段
  - 默认 emoji 先生效, 如想调换顺序, 请用 rrname 参数

  <img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI10-3.PNG" width="600">

7.`replace` 正则替换节点中字段, 可用于重命名/更改加密方式等
  - `replace=regex1@𝘀𝘁𝗿1+regex2@𝘀𝘁𝗿2`

8.`占位符`，可用于 `rename`/`replace` 等操作
  - `$type0/1/2/3/4/5/6/7` 占位符，将节点类型(ss/ssr/vmess 等)作为可操作参数，如
    - `rename=@|$type2`
    - 样式分别为 `𝐬𝐬`,`𝐒𝐒`,`🅢🅢`,`🆂🆂`,`ⓢⓢ`,`🅂🅂`,`𝕊𝕊`,`ˢˢ`
  - `$index0/1/2/3/4/5/6/7/8` 占位符，将节点的序号作为可操作参数，如
    - `rename=@「$index1」`
    - 样式分别为 `1\①\❶\⓵\𝟙\¹\₁\𝟏\𝟷`
  - `$emoji1/2` 占位符, 将emoji(🇭🇰 等)作为可操作参数
    - `rename=@「$emoji1」`
  - `$tag` 占位符，将订阅的 `tag` 作为可操作参数，如
    - 可接数字以单独给 `tag` 添加字母/数字样式
    - `rename=@「$tag34」`, 样式同下边的 `ptn/npt`

9.`ptn=1-8`, 将节点名英文替换成样式 ⇒ `🅰/🄰/𝐀/𝗮/𝔸/𝕒/ᵃ/ᴬ`

10.`npt=1-8`, 将节点名数字替换成样式 ⇒ `①\❶\⓵\𝟙\¹\₁\𝟏\𝟷`

11.`delreg`, 利用正则表达式来删除 `节点名` 中的字段(⚠️ 慎用)

12.`aead=-1`, 关闭 Vmess 的 AEAD 参数

13.`host=xxx` , 修改 `host` 参数（如有）

14.`checkurl=xxx` , 指定`server_check_ur`l 参数

15.`sort=1`/`-1`/`x`/参数规则, 按节点名 `正`/`逆`/`随机`/参数规则 排序
  - 参数规则是正则表达式或简单关键词, 用`<` 或 `>` 连接
  - `sort=🇭🇰>🇸🇬>🇯🇵>🇺🇸` , 靠前排序
  - `sort=IEPL<IPLC<BGP` , 靠后排序

16.`info=1`, 开启通知提示机场 ✈️ 流量信息(如有提供);

17.`del=1`, 有重名节点时用此参数删除重复节点(默认改名保留)

18.`flow=2022-06-02:1000:54`, 订阅到期时间:总流量:已用流量

19. 「进阶参数」`𝘀𝗳𝗶𝗹𝘁𝗲𝗿`/`𝘀𝗿𝗲𝗻𝗮𝗺𝗲`, 传入一段 base64 编码的脚本, 可用于更为复杂的[过滤/重命名] 需求
  - 说明: https://github.com/KOP-XIAO/QuantumultX/pull/9


#### 13.4.2「rewrite 重写」/「filter 分流」参数
1.`in`/`out`, 根据关键词 `保留`/`禁用` 相关分流、重写规则;
  - eg:`http://your-filter-provider#out=youku`：排除所有带有`youku`字段的分流
  <img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI10-5.PNG" width="600">

2.`inhn`/`outhn`, `保留`/`删除` 主机名(`hostname`);
  - eg: `http://your-rewrite-provider#out=baidu-index.js+baidu-zhidao.js&outhn=baidu`：禁用网页去广告中带有 "baidu-index.js" 及 "baidu-zhidao.js" 的 重写 及带有`baidu`的主机名
  <img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI10-4.PNG" width="600">

3.`regex`/`regout`, 正则保留/删除, 请自行折腾正则表达式;
  - 可与 `in(hn)`/`out(hn)` 一起使用，`in(hn)`/`out(hn)` 会优先执行;
  - 对 𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆 & 𝐫𝐞𝐰𝐫𝐢𝐭𝐞/𝐟𝐢𝐥𝐭𝐞𝐫 同时生效(⚠️ 慎用)
4.`policy` 参数, 用于直接指定策略组，或为 𝐒𝐮𝐫𝐠𝐞 类型 rule-set 生成策略组(默认`𝐒𝐡𝐚𝐰𝐧`策略组);
5.`pset=regex1@policy1+regex2@policy2`, 为同一分流规则中不同关键词(允许正则表达式)指定不同策略组;
6.`replace` 参数, 正则替换 𝐟𝐢𝐥𝐭𝐞𝐫/𝐫𝐞𝐰𝐫𝐢𝐭𝐞 内容, `regex@newregex`;
  - 将淘宝比价中脚本替换成 lite 版本, tiktok 中 JP 换成 KR
    - eg: `replace=(price)(.*)@$1_lite$2+jp@kr `
7.`dst=rewrite`/`filter`，分别为将 `module`&`rule-set` 转换成 重写/分流;
  - ⚠️ 默认将 module 转换到重写, rule-set 转成分流
  - ⚠️ 把 rule-set 中 url-regex 转成重写时, 必须要加 `dst=rewrite`;
  - ⚠️ 把 module 中的分流规则转换时, 必须要加 `dst=filter`
8.`cdn=1`, 将 github 脚本的地址转换成免翻墙`cdn.jsdelivr.net`
- `fcr=1`/`2`/`3`, 为分流规则添加 `force-cellular`/`multi-interface`/`multi-interface-balance` 参数，强制`移动数据`/`混合数据`/`负载均衡`
- `via=接口`, 为分流规则添加 `via-interface` 参数, `0` 表示 `via-interface=%TUN%`
- `relay=目标策略名`, 批量将节点订阅转换为`ip`/`host`规则，用于实现代理链

#### 13.4.3 其他参数

1.通知参数 `ntf=0`/`1`, 用于 `关闭`/`打开` 资源解析器的提示通知
  - rewrite/filter 默认`开启`通知提示, 以防规则误删除
  - server 资源解析则默认`关闭`通知提示
2.类型参数 `type=domain-set`/`rule`/`module`/`list`/`nodes`
  - 当解析器未能正确识别类型时, 可尝试使用此参数强制指定
3.隐藏参数 `hide=0`, 禁用筛除的分流/重写，默认方式为`删除`
