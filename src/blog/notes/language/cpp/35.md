---
title: std::swap不是std的成员解决
# 时间
date: 2020-05-25 23:02:05
# 分类
category:
  - 笔记
  - 编程语言
# 标签
tag:
  - C++
---

<!-- more -->

其实 swap 的定义在 utility 头文件中，我们只需要 **#include <**utility**>** 就好了。
