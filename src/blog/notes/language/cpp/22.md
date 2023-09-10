---
title: C++模板使用记录
# 时间
date: 2020-07-13 01:46:54
# 分类
category:
  - 笔记
  - 编程语言
# 标签
tag:
  - C++
  - C++ 模板
---

<!-- more -->

- 设置默认模板参数

```cpp
template<class T, typename = **这里写模板参数**>
void func(T a) {
	// ...
}
```

- 模板返回类型限制

```cpp
// 这里限制了只能T只能为int和bool两种类型
template<class T, typename = std::enable_if_t<std::is_same<int, T>::value || std::is_same<bool, T>::value, T>>
void func(T a) {
	// ...
}
```
