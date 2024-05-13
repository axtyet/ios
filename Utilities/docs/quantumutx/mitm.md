## 6. MitM & 证书

以 `;` 或 `#` 或 `//` 开头的行为注释行。

以下主要讲的是 `[mitm]` 区块下的内容，所以示例都以 `[mitm]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[mitm]`。

所有的HTTPS解密、重写(rewrite)和[中间人攻击](https://zh.wikipedia.org/wiki/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)(MitM)，均依赖于根证书

### 6.1 安装并信任证书

> 建议先导入配置

- 点击右下角风车进入「设置」 → 在「MitM」区域，点击「生成证书」

- 点击「配置证书」 → 跳转Safari，点击允许 → 点击「iPhone」

> 注意使用 Safari 浏览器打开，第三方浏览器无法下载证书

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/MITM1.jpg" width="1500">

- 进入「系统设置」 → 「已下载描述文件」 → 输入密码并安装

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/MITM2.jpg" width="900">

- 进入「系统设置」 → 「通用」 → 「关于本机」 → 最下方「证书信任设置」 → 勾选刚才安装的证书

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/MITM3.jpg" width="900">

- 返回QX，点击右下角风车进入「设置」 → 在「MitM」区域，勾选「MitM」开关

### 6.2 备份证书

当完成上面的步骤后，会在配置文件 `[mitm]` 区域，生成对应的`passphrase`和`p12`数据

```
[mitm]
passphrase = 
p12 = 

```

当需要替换其他配置时，只需要将对应的`passphrase`和`p12`数据复制粘贴到新的配置中去，就无需再次安装证书

### 6.3 主机名

```
[mitm]
hostname = abc.com

```

- 可使用通配符 `*` 和 `?` ；
- 可使用前缀 `-` 将特定主机名排除；
- 配置文件中，多个主机名可用 `,` 分割
- 单独的`*`符合作为主机名参数会匹配所有主机名

#### 6.3.1 UI 查看 & 添加

点击右下角风车进入「设置」 → 「MitM」区域-「主机名」

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/HOSTNAME.jpg" width="900">

### 6.4 `[mitm]` 其他参数

```
[mitm]
# 跳过验证证书
skip_validating_cert = false
# 强制嗅探域名
force_sni_domain_name = false

# 当使用 Quantumult X 在 M 芯片的 Mac 设备上作为局域网网关时，使用下面的参数来 跳过某些特定设备的 mitm 需求
;skip_src_ip = 192.168.4.50, 92.168.4.51
# 当多个不同的 TCP 连接（非域名类请求）的目标 IP 不同，但这些连接的 TSL 握手 SNI 字段相同时，如需跳过其中某些连接的 MitM hostname 匹配过程，可使用参数。
;skip_dst_ip = 123.44.55.4

```
