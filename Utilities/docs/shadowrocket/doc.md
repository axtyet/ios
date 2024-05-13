# Shadowrocket

## Shadowrocket 下载地址

<a href="https://apps.apple.com/app/id932747118"><img width="200px" alt="Download on App Store" src="https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo.png"/></a>  

## 导入配置

### 1. 手动导入配置文件

* 复制以下配置链接，打开 **Shadowrocket**

**_自用配置_**
```
https://raw.githubusercontent.com/Repcz/Tool/X/Shadowrocket/Shadowrocket.conf
```

* 点击底部工具栏 **配置** - **添加配置** - 填入链接并下载
* 点击 **本地文件** - **Shadowrocket.conf** - **使用配置**
![1](https://raw.githubusercontent.com/Repcz/Tool/X/Shadowrocket/Photo/1.jpg)

### 2. 设置分流分组
* ~点击 **Shadowrocket.conf** 右边的 **ⓘ** 图标~

* ~点击 **代理分组**~

* 首页下拉即可进入 **代理分组** , 根据自己需求选择分流模式(无特殊需求可不更改，首页选择节点即可)


默认`国外流媒体`、`Telegram`、`推特`、`谷歌`、`微软`、`常见的国外网站`以及`不在规则内的网站`走proxy，即底部工具栏 **首页** 中选择的节点；

`国内网站`、`苹果`走直连。

![2](https://raw.githubusercontent.com/Repcz/Tool/X/Shadowrocket/Photo/2.jpg)
图片懒得修改了🤣


### 3. 检查规则集URL
* 点击 **Shadowrocket.conf** 右边的 **ⓘ** 图标
* 点击 **规则集URL** ，确保都下载成功（有绿色的√）
![3](https://raw.githubusercontent.com/Repcz/Tool/X/Shadowrocket/Photo/3.jpg)

<details>
   <summary>添加GeoLite2订阅（非必须）</summary> 

### 4. 添加**GeoLite2**订阅
* 点击底部工具栏 **设置** ，点击下方 **Geolite2数据库**
* 在 **国家** 模块中的URL填入以下地址 ，并更新
ⓘ  [Masaiki](https://github.com/Masaiki/GeoIP2-CN)(中国IPv4&v6)：

```
https://github.com/Masaiki/GeoIP2-CN/raw/release/Country.mmdb
```

![4](https://raw.githubusercontent.com/Repcz/Tool/X/Shadowrocket/Photo/4.jpg)

</details>

### 5. 安装并信任根证书
> 安装证书后，如更换配置文件，须重新执行以下步骤

* 点击底部工具栏 **配置** ，点击刚才下载的配置右边的 **ⓘ** 图标
* 点击 **HTTPS解密** ，开启 **HTTPS解密** ，生成 **新的CA证书**
![5-1](https://raw.githubusercontent.com/Repcz/Tool/X/Shadowrocket/Photo/5-1.jpg)

* 点击 **安装证书** ，点击 **允许** ，选择 iPhone
![5-2](https://raw.githubusercontent.com/Repcz/Tool/X/Shadowrocket/Photo/5-2.jpg)

* 系统设置中，点击 **已下载描述文件** ，点击 **安装** 
![5-3](https://raw.githubusercontent.com/Repcz/Tool/X/Shadowrocket/Photo/5-3.jpg)

* 系统设置→通用中，点击最下方 **证书信任设置** ，勾选刚才安装的证书 
![5-4](https://raw.githubusercontent.com/Repcz/Tool/X/Shadowrocket/Photo/5-4.jpg)

### 6. 安装模块
> 模块功能大多依赖于 第5步 的 证书安装与信任

* 点击底部工具栏 **配置** ，点击 **模块**
* 点击右上角 ➕ 安装模块
![6](https://raw.githubusercontent.com/Repcz/Tool/X/Shadowrocket/Photo/6.jpg)
