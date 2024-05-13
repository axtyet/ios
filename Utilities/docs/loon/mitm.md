## 9. MitM

开启后，Loon 会使用 [中间人攻击](https://zh.wikipedia.org/wiki/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB) 的方式解密 HTTPS 流量

### 9.1 域名 

Loon 仅仅会解密以下域名的流量（来自 http代理和原始TCP 中的https），可以使用通配符 `*` 和 `？` 来表示域名，以` -` 开头来排除一些域名。

有些应用只信任特定的证书，针对这些应用所使用的域名进行解密将会导致问题。（例如某些破解插件、重写会导致商店无法登录，某臭名昭著的 `*.*.*.*` 会导致很多软件无法正常使用）

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/9.1.PNG" >

对应配置文件语法

```
[Mitm]

# 域名
hostname = 

# 证书
ca-p12 = 
ca-passphrase = 

# 跳过服务端证书验证
skip-server-cert-verify = false
```




### 9.2 证书管理

安装并信任证书可参考以下操作

#### 为配置文件生成证书
* 点击 **设置** ，在下方 **MitM** 区域，点击 **证书管理**
* 点击 **生成新的CA证书** -**安装CA证书**
* 弹出提示后，在Safari中 **允许** 下载配置文件
![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/IMG_2112.PNG) 

#### 设置中安装描述文件
* 在 **系统设置** 中，点击 **已下载描述文件** ，并 **安装**
![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/%E8%AE%BE%E7%BD%AE-%E5%AE%89%E8%A3%85%E8%AF%81%E4%B9%A6.jpg)

#### 设置中信任描述文件
* 在 **系统设置** - **通用** - **关于本机** - **证书信任设置** 中，勾选已安装的描述文件
* 安装完成后，返回Loon，勾选以启用 **MitM** 和 **复写** 和 **脚本**
![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/%E8%AE%BE%E7%BD%AE-%E4%BF%A1%E4%BB%BB%E8%AF%81%E4%B9%A6.jpg)


