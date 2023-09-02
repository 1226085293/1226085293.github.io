---
title: 资源副本生成（自动替换 uuid）
index: true
article: true
timeline: true
sidebar: false
# 时间
date: 2023-09-02 17:30:00
# 分类
category:
  - 实用工具
# 标签
tag:
  - CocosCreator 插件
---

在项目中，经常可能遇到二次开发一个子游戏/模块的时候
但是 creator 的生成副本并不能自动替换资源的引用，以及脚本名/ccclass 名，如果你需要，可以看看我的插件

<!-- more -->

### :sparkles: 插件优势

除了基本的 uuid 替换功能，相比较其他插件有哪些优势呢？

- :pencil2: 替换 脚本名/ ccclass 名（可自定义命名）
  > 使用正则匹配全文内容，替换后也会自动修改 import 路径

- :clipboard: 经过商业项目验证
  > 我所在公司的中小项目，且已经使用多次

- :thumbsup: 未上架就已获好评
  > 注：群友提前私下购买的

- :muscle: 售后保障：全天候在线，24 小时内给出解决方案

## :loudspeaker: 功能介绍

<!-- >  -->

- [x] 替换所有文件的 uuid （存在 `.meta` 文件）

- [x] 替换 `.prefab, .scene, .anim, .mtl` 文件中的 uuid 引用关系和 db 路径引用关系

- [x] 替换 脚本/ ccclass 名（可选功能，可自定义命名）

- [x] 自定义输出目录

## :circus_tent: 商店传送门

等待上架中...

## :pushpin: 目录

- :surfer: [快速使用](#快速使用)

- :package: [自定义配置](#自定义配置)

## :surfer: 快速使用

1. 选中文件夹
1. 单击右键
1. 生成副本（扩展） 

![](https://gitee.com/muzzik/images/raw/master/%E9%A1%B9%E7%9B%AE%E6%A1%88%E4%BE%8B/cc-plugin-asset-copy/1.gif)

## :package: 自定义配置

### 可配置选项

- 输出目录名

- 新的脚本名（避免热更错误）

- 新的类 / ccclass 名（避免编辑器报错，引擎不支持）

配置文件路径：`项目根目录/extensions/cc-plugin-protobufjs/.config.js`

包含了以下内容:
```javascript
/** 获取输出目录名 */
function get_output_name_f(old_name_s) {
    return old_name_s + "-copy";
};

/** 获取新脚本名（避免热更错误） */
function get_new_script_name_f(old_name_s) {
    return old_name_s + (old_name_s[0] === old_name_s[0].toUpperCase() ? "Copy" : "_copy");
};

/** 获取新的 class 名（ccclass 装饰器参数如果存在且不和 class 名相同则不会替换） */
function get_new_class_name_f(old_name_s) {
    return old_name_s + (old_name_s[0] === old_name_s[0].toUpperCase() ? "Copy" : "_copy");
};

module.exports = {
    get_output_name_f,
    get_new_script_name_f,
    get_new_class_name_f
}
```

## 购买须知
本产品为付费虚拟商品，一经购买成功概不退款，请支付前谨慎确认购买内容

## 联系作者
QQ 群：200351945