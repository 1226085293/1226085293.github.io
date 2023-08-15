---
title: C++原子性加减
# 时间
date: 2020-05-04 05:09:02
# 分类
category:
  - 笔记
  - 编程语言
# 标签
tag:
  - C++
  - 多线程
  - 原子操作
---

<!-- more -->

```cpp
​
long count = 0;
_InterlockedIncrement(&count);    //自增
_InterlockedDecrement(&count);    //自减

宏
#include <xatomic.h>
_MT_INCR(count);     //自增
_MT_DECR(count);     //自减

​
```

可以直接使用 xatomic 头文件之中的宏， 很多官方头文件中都包含了这个头文件，可以直接试试，不行就加一行
#include <xatomic.h>
