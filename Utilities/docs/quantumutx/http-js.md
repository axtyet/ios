## 8. HTTP 请求


「HTTP 请求」所执行的功能，可简单的理解为执行脚本

脚本分为 「CRON 定时脚本任务」、「UI交互脚本」、「网络切换脚本」

其对应的配置文件位置为 `[task_local]`

可通过首页下方工具栏进入（默认UI），或　点击右下角「风车」进入设置 → 下方「工具 & 分析」- 「HTTP 请求」

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI12-1.PNG" width="600">

### 8.1 添加 HTTP 请求

以下主要讲的是 `[task_local]`  区块下的内容，所以示例都以 `[task_local]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[task_local]`。


#### 8.1.1 配置文本添加

```
[task_local]
event-network https://raw.githubusercontent.com/xream/scripts/main/surge/modules/network-info/net-lsp-x.js, tag=网络信息变化 𝕏, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png, enabled=true

0 0 1 1 * https://github.com/sub-store-org/Sub-Store/releases/latest/download/cron-sync-artifacts.min.js, tag=SubStore同步, img-url=https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/apps/SubStore.png, enabled=true

event-interaction https://raw.githubusercontent.com/xream/scripts/main/surge/modules/network-info/net-lsp-x.js, tag=网络信息 𝕏, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png, enabled=true

```

其基本格式为

`<脚本参数>, <资源链接>, <资源标签>, <资源图标>, <是否启用>`

- 脚本参数
  - `event-network`：对应「网络切换脚本」，当网络发生变化时自动执行
  - `event-interaction`：对应「UI交互脚本」，须与UI交互执行
  - `5或6位CRON表达式`：对应「CRON 定时脚本任务」，5位表达式从分开始，具体请自行谷歌

- 资源链接：脚本资源位置，可为远程脚本，也可为本地脚本

- `enabled`：是否启用该 HTTP 请求，若不使用可改为 `false`；

Tips：脚本任务需 Quantumult X Tunnel （VPN） 处于运行状态，以及计划任务开关(右上角⏰)为开启状态

#### 8.1.2 UI 添加

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI12-2.PNG" >

- 如果给的是「完整的任务格式」，如：
  
  `event-network https://raw.githubusercontent.com/xream/scripts/main/surge/modules/network-info/net-lsp-x.js, tag=网络信息变化 𝕏, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png, enabled=true`

  可通过右上角 `＋`→ `文本方式添加`，直接粘贴即可 

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI12-3.PNG" width="600">

- 如果给的是「定时任务类型」，且为单独的脚本链接(或本地脚本文件)，请阅读脚本内容，根据其需要，设置 CRON表达式

  可通过右上角 `＋`→ `高级`，填写参数即可 

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI12-4.PNG" width="600">

#### 8.2 执行脚本

Tips：脚本任务需 Quantumult X Tunnel （VPN） 处于运行状态，以及计划任务开关(右上角⏰)为开启状态

- `event-network`：对应「网络切换脚本」，当网络发生变化时自动执行


- `event-interaction`：对应「UI交互脚本」，须与UI交互执行

  启动 VPN 后，长按节点，即可执行

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI12-5.PNG" width="600">


- `5或6位CRON表达式`：对应「CRON 定时脚本任务」，5位表达式从分开始，具体请自行谷歌
  
  也可左滑点击按钮执行或查看执行时的日志

#### 8.3 任务仓库

- 添加任务仓库
  > 注意仓库地址使用 raw 格式

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI12-6.PNG" width="600">

- 从仓库中添加任务

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI12-7.PNG" width="600">

