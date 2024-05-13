# 12. 配置文件相关

### 12.1 配置文件导入

  - 下载配置:下载远程文件
  >　注意：此操作会覆盖原有配置，注意做好备份
  
<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI11-1.PNG" width="600">
  
  - 导入配置:从本地文件导入

### 12.2 配置片段

配置片段可将本地片段写入本地文件，再作为远程文件进行引用

- [节点配置片段](quantumutx/node.md?id=_222-配置片段添加)
- [分流配置片段](quantumutx/filter.md?id=_325-配置片段方式添加)
- [重写配置片段](quantumutx/rewrite.md?id=_713-配置片段添加)

### 12.3 设置关联配置

非 iCloud 云盘、非本地配置 每24小时检查更新。

关联新配置前，建议在 iCloud 云盘或 本地 创建一份当前配置的副本。

如所关联的配置为 iCloud 云盘中的配置，那么用户对该配置所做的修改会通过 iCloud 同步到其他（如有）或当前设备。（即多个设备关联同一份配置，即可通过 iCloud 同步做到多端同步）

如所关联的配置既不属于 iCloud 云盘 也不是 本地配置，那么用户无法在 Quantumult X 中对其进行修改。

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI11-2.PNG" width="1500">

当存在存在多份关联配置后，可以先取消当前关联配置，再关联其他配置，即可达到 切换多配置 的操作

<img src="https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/Photo/UI11-3.PNG" width="900">

