---
title: JavaScript(ES 6)统计数组内符合条件数据的简洁方法
# 时间
date: 2020-07-01 23:48:01
# 分类
category:
  - 笔记
  - 编程语言
# 标签
tag:
  - Javascript
---

<!-- more -->

数组示例

let users = [ {"name":"张三","age": 10},
{"name":"李四",age: 14},
{"name":"王五",age: 9},
...
]
要求统计出数组里年龄大于 10 的人数。

方法一：使用 filter 和 length

const result = users.filter(u => u.aage > 10 ).length;
方法二：使用 reduce

const result = users.reduce((c, u) => u + (u.age > 10), 0)
