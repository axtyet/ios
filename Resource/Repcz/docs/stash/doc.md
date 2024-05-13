# Stash

## 下载地址

<a href="https://apps.apple.com/app/id1596063349"><img width="200px" alt="Download on App Store" src="https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo.png"/></a>  

## 导入配置

> **_Stash_** 自带 **Sub-Store**，机场订阅本地转换可参考[Sub-Store 教程](https://getupnote.com/share/notes/8SiMnOcwXxZ3xEtK4k2v9Gr3pv32/7522F394-6D73-414E-BE04-1455EDB15B9F)

### 1. 导入并修改配置


[点击链接](https://link.stash.ws/install-config/raw.githubusercontent.com/Repcz/Tool/X/Stash/Stash.yaml) 导入`Stash.yaml`

<details>
  <summary>点击查看</summary>

- [ ] 使用GeoSITE&GeoIP
- [x] 地区分流（香港、美国、日本、台湾、新加坡）
- [x] 苹果、谷歌、微软、电报、推特分流
- [x] 流媒体（不支持单独分流）
- [x] 自动选择最低延迟
- [ ] 负载均衡
- [ ] 故障转移
- [x] 广告屏蔽

</details>


 [点击链接](https://link.stash.ws/install-config/raw.githubusercontent.com/Repcz/Tool/X/Stash/Stash_lite.yaml) 导入`Stash_lite.yaml`

<details>
  <summary> 点击查看</summary>

- [x] 使用GeoSITE&GeoIP
- [x] 地区分流（香港、美国、日本、台湾、新加坡）
- [x] 苹果、谷歌、微软、电报、推特分流
- [x] 流媒体（不支持单独分流）
- [x] 自动选择最低延迟
- [ ] 负载均衡
- [ ] 故障转移
- [x] 广告屏蔽
- [x] 内存占用更低？

</details>



<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Stash/Photo/s1.PNG" width="900">

导入节点订阅

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Stash/Photo/s2.PNG" width="900">



导入节点订阅信息显示

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Stash/Photo/s3.PNG" width="600">



或者自行替换 `subscribe-url` 和 `proxy-providers` 中的`http://your-service-provider`

```
# > 订阅的信息展示
subscribe-url: 

proxy-providers:
# > 远程服务器
 Subscribe: {interval: 86400, benchmark-timeout: 3, benchmark-url: 'http://www.gstatic.com/generate_204', url: http://your-service-provider}

```

### 2. 更新远程资源

* 启动 Stash
*  **策略组** 页面，左上角 **远程资源** - **更新**

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Stash/Photo/s4.PNG" width="900">

### 3. 更新 **GeoIP数据库**


* 点击底部工具栏 **设置** ，点击配置模块中的 **更多设置**
* 在 **GEOIP数据库** 模块中的URL填入以下地址 ，并更新

ⓘ  [Masaiki](https://github.com/Masaiki/GeoIP2-CN)(中国IPv4&v6)：

```
https://github.com/Masaiki/GeoIP2-CN/raw/release/Country.mmdb
```

!> 如使用`Stash_lite.yaml`配置，需使用下方的数据库

ⓘ  [MetaCubeX](https://github.com/MetaCubeX/meta-rules-dat)：

```
https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country-lite.mmdb
```

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Stash/Photo/s5.PNG" width="600">


## 证书设置

### 生成证书

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Stash/Photo/s5.1.PNG" width="900">


### 安装证书


<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Stash/Photo/s6.PNG" width="900">

### 信任证书

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Stash/Photo/s7.PNG" width="600">

## 安装覆写

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Stash/Photo/s8.PNG" width="600">


!> 需安装覆写的raw格式链接

<details>
  <summary> 点此查看raw格式教程</summary>


以下方的链接举例(这是个网页，不是真正能使用的资源链接)：
`https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/QuantumultX/12306/12306.list`

例如在末尾添加`?raw=ture`：
`https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/QuantumultX/12306/12306.list?raw=ture`

或者直接点击`raw`或者`view`，⁠使用跳转后的链接：
`https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/12306/12306.list`

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/raw1.jpg" >


或者将链接里的`blob`⁠修改为`raw`：
`https://github.com/blackmatrix7/ios_rule_script/raw/master/rule/QuantumultX/12306/12306.list`


</details>


