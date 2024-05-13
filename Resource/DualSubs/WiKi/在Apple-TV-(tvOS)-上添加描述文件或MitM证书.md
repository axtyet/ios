# 创建配置文件
1. 在macOS上下载安装[Apple Configurator](https://apps.apple.com/cn/app/apple-configurator-2/id1037126344?mt=12)
> * 如您没有macOS环境，可以从已有描述文件文本模式下修改得到，详情见：[快速创建拥有代理服务器设置及MitM证书的描述文件](https://github.com/DualSubs/DualSubs/wiki/快速创建拥有代理服务器设置及MitM证书的描述文件)
2. 在Apple Configurator菜单栏 -> **文件** -> **新建描述文件**
3. 右侧**通用**中填写必要的信息（名称，标识符，组织等信息）
4. 右侧**证书**中导入MitM用的证书(通常为*.crt或*.p12)格式
5. （如您使用的是`代理服务器`方案）右侧**Wi-Fi**中填写您的Wi-Fi信息（`服务集标识符SSID`和`密码`）以及您的代理服务器信息（`代理服务器和端口`）
6. 保存

***

# 连接到Apple TV
## 无线连接
[使用 Wi-Fi 或以太网准备 Apple TV HD 或 Apple TV 4K](https://support.apple.com/zh-cn/guide/apple-configurator-2/cada1ba9dab1/mac)
1. Apple Configurator菜单栏 -> **Apple Configurator** -> **配对的设备…**
2. tvOS设置 -> **遥控器与设备** -> **“遥控器”App与设备**
3. 在Apple Configurator的“已配对设备”列表中选择 Apple TV，然后点按“配对”。
4. 输入 Apple TV 屏幕上显示的六位个人身份号码 (PIN)。
## 有线链接
[使用 Apple Configurator 通过 USB 连接 Apple TV](https://support.apple.com/zh-cn/HT202577)

***

# 将配置文件安装到Apple TV
## 通过Apple Configurator安装
1. Apple Configurator主界面中双击Apple TV图片打开详情页面
2. 右上角*添加** -> **描述文件**
## 通过Apple TV安装
1. tvOS设置 -> **通用** -> **隐私**
2. 将选择移至**共享Apple TV分析**上，单击遥控器的`播放`按钮
3. 在出现的**描述文件**页面

***

# 在Apple TV上信任描述文件
1. tvOS设置 -> **通用** -> **关于** -> **证书信任设置**
2. 单击对应的描述文件，将状态变更为`可信`