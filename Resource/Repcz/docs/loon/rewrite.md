# 5. 复写

> 以下搬运至 [Loon官方文档 ](https://loon0x00.github.io/LoonManual/#/loon/rewrite)，不定时更新

复写是专门用来处理 HTTP/HTTPS 类型的请求，在请求未发出前，根据所设定的复写类型来修改请求数据，目前可修改 URL 和Header，所有的复写仅针对**http请求**或者**经过解密后的https请求**.


<img src="https://raw.githubusercontent.com/Repcz/Tool/X/Loon/Photo/5.PNG" width="900">


!> 以下主要讲的是 `[Rewrite]` 区块下的内容，所以示例都以 `[Rewrite]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[Rewrite]`。

>复写的处理会在规则匹配之前

### 5.1 URL 类型复写
此类复写会修改请求的URL

- `header`：修改请求头，客户端不会感知到重定向

```
[Rewrite]
^http://www\.google\.cn header http://www.google.com
```

### 5.2 直接响应类复写
此类复写直接返回一个code位30x的重定向response

- `302`：返回一个302响应

```
[Rewrite]
^http://example.com 302 https://example.com
```

- `307`:返回一个307响应

```
[Rewrite]
^http://example.com 307 https://example.com
```

### 5.3 reject 类型

- `reject`: 直接断开连接
- `reject-200`: 返回一个200响应，响应体内容为空
- `reject_img`: 返回一个200响应，响应体内容一像素的gif
- `reject_dict`: 返回一个200响应，响应体内容为`"{}"`的空json对象字符串
- `reject_array`: 返回一个200响应，响应体内容为`"[]"`的空json数组字符串
- `reject_video`: 返回一个200响应，响应体内容为空白视频

```
[Rewrite]
^http://example.com reject
^http://example.com reject-200
^http://example.com reject-img
^http://example.com reject-dict
^http://example.com reject-array
^http://example.com reject-video
```

### 5.4 Header 类型复写
此类复写会修改请求的Header

- `header-replace`：替换 header 中指定的字段
- `header-add`：在 header 中添加一組字段
- `header-del`:删除 header 中指定的字段
- `header-replace-regex`:替换 header 中正则匹配到的字段

```
[Rewrite]
^http://example.com header-add Connection keep-alive
^http://example.com header-del Cookie
^http://example.com header-replace User-Agent Unknown
^http://example.com header-replace-regex Cookie regex Unknown
```