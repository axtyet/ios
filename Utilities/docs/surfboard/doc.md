# Surfboard

## Surfboard 下载地址

<a href="https://play.google.com/store/apps/details?id=com.getsurfboard"><img width="200px" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"/></a> or [Github/releases](https://github.com/getsurfboard/surfboard/releases)


## 导入配置

在线订阅转换
---
> 在线订阅转换可能出现订阅泄露
#### 1. 打开[ACL4SSR](https://acl4ssr-sub.github.io/) 
#### 2. 填入 **机场订阅** 和 **远程配置**

**_自用 自动测速 配置_**
```
https://raw.githubusercontent.com/Repcz/Tool/X/Surfboard/Online_Full_Auto.ini
```

**_自用 多流媒体分组 自动测速 配置_**

```
https://raw.githubusercontent.com/Repcz/Tool/X/Surfboard/Online_Full_NoAuto.ini
```

#### 3.修改客户端为 **Surfboard**
#### 4. 选择后端地址并生成订阅
![Image text](https://raw.githubusercontent.com/Repcz/Tool/X/Surfboard/Photo/IMG_2204.PNG)

#### 5.复制粘贴配置到 **Surfboard**
点击 **配置** -右下角➕ - **URL** - 粘贴订阅转换后的链接
> 理论上点开 右下角➕ ，就会自动识别

手动添加配置
---
#### 复制粘贴配置到 **Surfboard**

[点击链接](https://github.com/Repcz/Tool/raw/X/Surfboard/Surfboard.conf) 打开配置，全选复制

点击 Surfboard  **配置** -右下角➕ - **从零开始** -复制以下配置并粘贴


#### 修改[Proxy Group]部分并保存
将[Proxy Group]中的 `http://your-service-provider` 替换为 机场订阅地址

eg：
```yaml
...

[Proxy Group]

# > 外部节点(在此将"http://your-service-provider"替换为你的机场订阅，推荐使用base64或者node list)
🚀 手动切换 = select,  🇭🇰 香港节点, 🇺🇸 美国节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇨🇳 台湾节点, DIRECT, policy-path=http://your-service-provider, interval=300, update-interval=86400

...


```

#### 添加第二个或更多机场至同一个配置

为第二个机场添加一个策略组：

eg：
```yaml
...

[Proxy Group]

# > 外部节点(在此将"http://your-service-provider"替换为你的机场订阅，推荐使用base64或者node list)
🚀 手动切换 = select,  🇭🇰 香港节点, 🇺🇸 美国节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇨🇳 台湾节点, DIRECT, policy-path=http://your-service-provider, interval=300, update-interval=86400

...
```
👇
```yaml
...

[Proxy Group]

🚀 手动切换 = select,  🇭🇰 香港节点, 🇺🇸 美国节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇨🇳 台湾节点, DIRECT, policy-path=http://your-service-provider, interval=300, update-interval=86400

机场2 = select,  🇭🇰 香港节点, 🇺🇸 美国节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇨🇳 台湾节点, DIRECT, policy-path=http://your-service-provider, interval=300, update-interval=86400
...
```

同时`include-other-group = "🚀 手动切换"`需要修改成`include-other-group = "🚀 手动切换, 机场2"`（这里按需修改）
eg：
```yaml
🇭🇰 香港节点 = url-test, policy-regex-filter=^(?=.*((?i)🇭🇰|香港|(\b(HK|Hong)\b)))(?!.*((?i)回国|校园|游戏|(\b(GAME)\b))).*$, interval=600,update-interval=86400, no-alert=0, hidden=0, include-other-group = "🚀 手动切换"
```
👇
```yaml
🇭🇰 香港节点 = url-test, policy-regex-filter=^(?=.*((?i)🇭🇰|香港|(\b(HK|Hong)\b)))(?!.*((?i)回国|校园|游戏|(\b(GAME)\b))).*$, interval=600,update-interval=86400, no-alert=0, hidden=0, include-other-group = "🚀 手动切换, 机场2"
```