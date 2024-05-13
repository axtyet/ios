### 2.5 筛选节点

> 功能上类似于其他代理软件的策略组正则筛选，但是更加灵活

在App中添加了多个节点或者多个订阅节点后，如果需要将所有的节点进行分类时（比如需要将所有香港区域的节点进行分类，或者手动选择一些节点作为一个组），那么可以使用筛选节点功能。



#### 参数

以下主要讲的是 `[Remote Filter]` 区块下的内容，所以示例都以 `[Remote Filter]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[Remote Filter]`。


- NodeSelect：手动选择需要组合的节点

`<别名> = NodeSelect,<远程订阅1>,<远程订阅2>`

    - 远程订阅为可选参数,可省略
    - 此参数建议使用 UI 添加

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




