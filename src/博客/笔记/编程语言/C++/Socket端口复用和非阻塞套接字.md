---
title: Socket端口复用和非阻塞套接字
# 时间
date: 2020-05-26 15:42:39
# 分类
category:
  - 笔记
  - 编程语言
# 标签
tag:
  - C++
  - 网络
  - Socket
---

<!-- more -->

```cpp
​
BOOL optval = TRUE;
// 端口复用
if (SOCKET_ERROR == setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, (char*)&optval, sizeof(optval))) {
}


// 非阻塞套接字
if (SOCKET_ERROR == ioctlsocket(sock, FIONBIO, (u_long FAR*) & optval)) {
}

​
```
