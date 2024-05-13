# Surge

## Surge iOS 下载地址

<a href="https://apps.apple.com/app/id1442620678"><img width="200px" alt="Download on App Store" src="https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo.png"/></a>  


## 导入配置

### 添加 **配置文件** 
> 配置参数解释见：_[GetSomeCats/Surge](https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/SurgePro.conf)_

```
https://raw.githubusercontent.com/Repcz/Tool/X/Surge/Surge.conf
```
* 运行 **Surge** ，在 **首页** ， 点击 **顶部区域**
* 弹出的 **设置** 菜单中，在下方 **导入** 区域，点击 **从URL下载配置**
* 将配置文件链接填入并保存

<img width="600px"  src="https://raw.githubusercontent.com/Repcz/Tool/X/Surge/Photo/1.PNG"/>

### 添加机场订阅
> 机场订阅本地转换可参考[Sub-Store 教程](https://getupnote.com/share/notes/8SiMnOcwXxZ3xEtK4k2v9Gr3pv32/7522F394-6D73-414E-BE04-1455EDB15B9F)

*  在 **首页**  —— **通用** 中， 点击 **代理服务器** 
* 弹出的菜单中，在 **策略组** 最下方 ，点击 **新的策略组**
* **组名称** 填写为 机场名称，并下拉至最下方
* 勾选 **使用外部代理列表** ，并填写 **机场订阅**

![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/Surge/Photo/2.PNG) 

### 将 机场订阅策略组 导入 手动选择策略组

*  在 **首页**  —— **通用** ， 点击 **代理服务器** 
* 弹出的菜单中，在 **策略组** 最上方 ，点击 **手动选择**，并在弹出的菜单中，下拉至最下方
* 点击 **包含另一个策略组的策略** ，在弹出的页面中，勾选刚才生成的 包含机场订阅的策略组

> 此时，`手动选择`策略组 即为显示所有节点的策略组；如果要添加多个机场，重复 2、3 步骤即可


![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/Surge/Photo/3.PNG) 

## 证书设置

### 生成证书
* 在 **首页**  —— **修改** ，点击 **MitM** 区域的 **配置根证书** 
* 弹出的菜单中，点击 **生成新的CA证书**
* 在弹出的菜单中，点击 **安装证书**

![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/Surge/Photo/4.PNG) 

* **确定** 提示后，在Safari中 **允许** 下载配置文件
* 并勾选 **MitM** 、**Rewrite** 、**脚本** 的开关

### 安装描述文件

> 此处借用QX的图

* 在 **系统设置** 中，点击 **已下载描述文件** ，并 **安装**

![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/%E8%AE%BE%E7%BD%AE-%E5%AE%89%E8%A3%85%E8%AF%81%E4%B9%A6.jpg)

### 信任描述文件
* 在 **系统设置** - **通用** - **关于本机** - **证书信任设置** 中，勾选已安装的描述文件

![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/%E8%AE%BE%E7%BD%AE-%E4%BF%A1%E4%BB%BB%E8%AF%81%E4%B9%A6.jpg)

## 导入模块
* **首页** —— **通用** —— **模块** 中，点击 **模块** 按钮
* 弹出的页面中，下滑至 **安装的模块** 最下方，点击 **安装新模块**
* 将模块链接(raw链接)填入并保存，等待下载外部资源
* 下载完成后，点击最下方的 **调整生效顺序**，按需调整模块生效顺序（按需）

![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/Surge/Photo/5.PNG) 

!> 注意：新安装模块不会自动启用，需自行勾选