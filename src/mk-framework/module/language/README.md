---
title: 多语言
article: false
timeline: false
dir:
  order: 2
  index: true
---

多语言是针对不同地区的游戏用户做的展示语言控制，而框架内的多语言和其他框架的不同之处在于

- 多语言资源放在模块下（模块自治，防止堆积无用资源，随模块删除）

- 支持（文本/图片/节点）

- 支持编辑器预览

- 多语言键配置简单，支持模糊匹配，不必自己校验

<!-- more -->

## 全局配置

`global_config.ts > language`

## 切换语言

```ts
mk.language_manage.type_s = global_config.language.type.zh_cn;
```

<AutoCatalog />