## Clash Verge 在线订阅转换配置
> 在线订阅转换可能出现订阅泄露,不推荐！

### 1. 打开[ACL4SSR](https://acl4ssr-sub.github.io/) 
### 2. 填入 **机场订阅** 和 **远程配置**

**_自用 多流媒体分组 自动测速 配置_**
```
https://raw.githubusercontent.com/Repcz/Tool/X/Clash/Meta/Online_Full_Auto.ini
```
**_自用 多流媒体分组 手动选择 配置_**
```
https://raw.githubusercontent.com/Repcz/Tool/X/Clash/Meta/Online_Full_NoAuto.ini
```

### 3. 选择后端地址并生成订阅
* 强烈建议使用自建后端，自建后端订阅转换可以有效防止订阅泄露以及规则下载不全等问题，具体方法见[自建subconverter订阅转换](https://github.com/Repcz/Tool/tree/X/subconverter)

![4](https://github.com/Repcz/Tool/blob/X/Clash/Meta/Photo/4.PNG)

### 导入Clash Verge

* 打开Clash Verge，点击左侧 **配置/订阅**，点击右上角**新建**
* 类型选择**Remote**，订阅链接输入转换后的链接
* 选中导入的配置，并点击右键 → **启用/使用**
* 等待右上角提示 **Refresh clash config** 后, 点击左侧 **设置** → 勾选 **系统代理** （左下角托盘里右键图标亦可更改）
* 点击左侧 **代理** ，按需设置对应的分流
