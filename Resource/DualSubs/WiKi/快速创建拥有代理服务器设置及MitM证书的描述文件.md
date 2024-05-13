# 使用流程
1. 首先下载描述文件模板
> * *.crt证书请使用此模版: [Proxy & crt MitM for tvOS.mobileconfig](https://github.com/DualSubs/DualSubs/blob/main/mobileconfig/Proxy%20%26%20crt%20MitM%20for%20tvOS.mobileconfig?raw=true)
> * *.p12证书请使用此模版: [Proxy & p12 MitM for tvOS.mobileconfig](https://github.com/DualSubs/DualSubs/blob/main/mobileconfig/Proxy%20%26%20p12%20MitM%20for%20tvOS.mobileconfig?raw=true)
2. 用VS Code（推荐）或其他文本编辑器打开此配置文件模板
3. (仅限*.p12证书) 将`<string>替换为您的证书的密码</string>`中的`替换为您的证书的密码`文字部分替换为您的证书密码
> * 此密码对应Loon配置文件中`ca-passphrase`的内容
> * 此密码对应Quantumult X配置文件中`passphrase`的内容
> * 此密码对应Surge配置文件中`ca-passphrase`的内容
> * 此密码对应Stash配置文件中`ca-passphrase`的内容
4. 将`<data>替换为您的证书的内容</data>`中的`替换为您的证书的内容`文字部分替换为您的证书的内容（不要删除文本上下的换行！！！）
> * (仅限*.p12证书)此内容对应Loon配置文件中`ca-p12`的内容
> * (仅限*.p12证书)此内容对应Quantumult X配置文件中`p12`的内容
> * (仅限*.p12证书)此内容对应Surge配置文件中`ca-p12`的内容
> * (仅限*.p12证书)此内容对应Stash配置文件中`ca`的内容
> * 其余*.cer *.crt证书为文本模式下打开的文本内容，证书文本通常为`MII`开头，`==`结尾
5. 将`<string>替换为您的WiFi网络的密码</string>`中的`替换为您的WiFi网络的密码`文字部分替换为您的WiFi网络的密码
6. 将`<string>替换为您的代理服务器IP地址</string>`中的`替换为您的代理服务器IP地址`文字部分替换为您的代理服务器IP地址
> * 此IP地址通常对应您运行Shadowrocket, Loon, Quantumult X, Surge, Stash的设备IP地址
> * 此IP地址对应Loon`仪表`-`网络共享`显示的IP地址
> * 此IP地址对应Quantumult X`设置`-`更多设置`-`VPN`-`HTTP代理服务器`时提示的IP地址
7. 将`<string>替换为您的代理服务器HTTP代理端口</string>`中的`替换为您的代理服务器HTTP代理端口`文字部分替换为您的代理服务器HTTP代理端口
> * 此端口对应Loon`仪表`-`网络共享`-`HTTP代理端口`
> * 此端口对应Quantumult X`设置`-`更多设置`-`VPN`-`HTTP代理服务器`时提示或修改的端口
> * 此端口对应Surge`更多设置`-`HTTP代理服务端口`
> * 此端口对应Stash`设置`-`网络设置`-`允许局域网访问`下方小字提示的端口
8. 将`<string>替换为您的WiFi网络名称</string>`中的`替换为您的WiFi网络名称`文字部分替换为您的WiFi网络名称

***

# 描述文件样例
一份带有代理服务器设置及MitM证书的配置文件内容如下：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>ConsentText</key>
	<dict>
		<key>default</key>
		<string>请确认此配置文件的证书及代理服务器地址及端口与您的Shadowrocket, Loon, Quantumult X, Surge 或 Stash的设置相同后再安装,安装后请在本Apple TV的设置-&gt;通用-&gt;关于-&gt;证书信任设置中,将此描述文件中的证书状态变更为“可信”</string>
	</dict>
	<key>PayloadContent</key>
	<array>
		<dict>
			<key>Password</key>
			<string>替换为您的证书的密码</string>
			<key>PayloadCertificateFileName</key>
			<string>root CA for MitM.p12</string>
			<key>PayloadContent</key>
			<data>
			替换为您的证书的内容
			</data>
			<key>PayloadDescription</key>
			<string>添加 PKCS#12 格式的证书</string>
			<key>PayloadDisplayName</key>
			<string>root CA for MitM.p12</string>
			<key>PayloadIdentifier</key>
			<string>com.apple.security.pkcs12.6136134F-4EE5-4A44-9BE9-4CDB82C6A053</string>
			<key>PayloadType</key>
			<string>com.apple.security.pkcs12</string>
			<key>PayloadUUID</key>
			<string>6136134F-4EE5-4A44-9BE9-4CDB82C6A053</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
		</dict>
		<dict>
			<key>AutoJoin</key>
			<true/>
			<key>CaptiveBypass</key>
			<false/>
			<key>DisableAssociationMACRandomization</key>
			<false/>
			<key>EncryptionType</key>
			<string>Any</string>
			<key>HIDDEN_NETWORK</key>
			<false/>
			<key>IsHotspot</key>
			<false/>
			<key>Password</key>
			<string>替换为您的WiFi网络的密码</string>
			<key>PayloadDescription</key>
			<string>配置 Wi-Fi 设置</string>
			<key>PayloadDisplayName</key>
			<string>Wi-Fi</string>
			<key>PayloadIdentifier</key>
			<string>com.apple.wifi.managed.6A7E9224-E17E-40AC-890A-F3679D5E7FDC</string>
			<key>PayloadType</key>
			<string>com.apple.wifi.managed</string>
			<key>PayloadUUID</key>
			<string>6A7E9224-E17E-40AC-890A-F3679D5E7FDC</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>ProxyServer</key>
			<string>替换为您的代理服务器IP地址</string>
			<key>ProxyServerPort</key>
			<integer>替换为您的代理服务器HTTP代理端口</integer>
			<key>ProxyType</key>
			<string>Manual</string>
			<key>SSID_STR</key>
			<string>替换为您的WiFi网络名称</string>
		</dict>
	</array>
	<key>PayloadDescription</key>
	<string>设置tvOS的代理服务器及MitM证书</string>
	<key>PayloadDisplayName</key>
	<string>Proxy &amp; MitM for tvOS</string>
	<key>PayloadIdentifier</key>
	<string>DualSubs.Profile</string>
	<key>PayloadOrganization</key>
	<string>DualSubs</string>
	<key>PayloadRemovalDisallowed</key>
	<false/>
	<key>PayloadType</key>
	<string>Configuration</string>
	<key>PayloadUUID</key>
	<string>EC05DA41-4A75-4083-B574-C8389C7266FE</string>
	<key>PayloadVersion</key>
	<integer>1</integer>
</dict>
</plist>
```