# 7. 插件

> 以下搬运至 [Loon官方文档 ](https://loon0x00.github.io/LoonManual/#/loon/plugin)，不定时更新


插件是规则、复写、脚本的集合，相当于一个子配置，常常用来代表一个扩展功能。

> 此区域对应「配置标签页」-「插件」区域 - `插件`


点击顶部搜索栏可对 Name、Author、Describe 进行搜索

- 点击右上角🔄，可更新

- 拖动右上角 `≡`，可进行排序

- 点击右上角 `＋`，可添加插件

点击插件可查看详情，部分插件可对参数进行调整

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/1.7.PNG" width="900">


### 7.1 插件可包含的配置模块

```
#!name= 插件名称
#!desc= 这是一个带有配置项的插件，input代表输入，select代表选择（select的第一项为名称，后面为可选值），用户所填或者选择的值都可以在脚本中用$persistentStore.read进行读取，如$persistentStore.read(appName)
#!author= 插件作者
#!homepage= 插件首页，可在插件页面进行跳转
#!icon= 插件的图标
#!author = Loon0x00
#!input = appName
#!input = author
#!select = appType,tool,social,health,sport
#!select = price,0.99,1.99,4.99


[General]
bypass-tun =
skip-proxy =
real-ip =
dns-server =

[rule]

[rewrite]

[host]

[script]

[mitm]

```

### 7.2 插件中规则的策略

插件内的规则指向的策略只能有如下三种，当规则不指定策略时，会默认使用DIRECT

1. `DIRECT`：流量不经过任何节点，直接发送到目标地址
2. [`REJECT`](loon/policy.md?id=_422-拒绝)：不将流量发送到任何服务器，一般用于去广告
3. `PROXY`：代表用户在进行插件配置时手动选择的策略组。如果用户指定了PROXY，但插件却没有进行配置，那最终将按照无法找到策略组的逻辑进行处理（即使用App全局模式下全局策略中第一个节点）

### 7.3 配置文件添加插件

!> 以下主要讲的是 `[Plugin]` 区块下的内容，所以示例都以 `[Plugin]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[Plugin]`。


```
[Plugin]
https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Tool/Loon/Plugin/LoonGallery.plugin, policy=手动切换, enabled=true

```

`<插件资源链接>, <策略偏好>, <是否启用>`

- `policy= `<策略偏好>：取决于插件内是否存在相关字段
- `enabled =` <是否启用>: 若不使用可改为 `false`


### 7.4 插件推荐

- [可莉插件大全](https://getupnote.com/share/notes/zSn1ShBmzNYISKcTgjXE5oHMrNf2/4a3b6152-3dd3-46da-b479-8c30ef6ef8d1)
