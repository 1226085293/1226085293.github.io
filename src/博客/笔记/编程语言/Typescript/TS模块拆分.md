---
title: TS模块拆分
# 时间
date: 2020-07-14 14:37:33
# 分类
category:
  - 笔记
  - 编程语言
# 标签
tag:
  - Typescript
---

<!-- more -->

```javascript
// 原模块
// test.ts
export module test {
    export class1 {...};
    export class2 {...};
};

//----------------拆分后

// class1.ts
export class1 {...};

// class2.ts
export class2 {...};

// test_export.ts
export { class1 } from "./class1";
export { class2 } from "./class2";

// test.ts
import * as test from "./test";
export default test;
```

// 使用：

```javascript
外部使用;
import test from "./test";

// test.class1
// test.class2
```
