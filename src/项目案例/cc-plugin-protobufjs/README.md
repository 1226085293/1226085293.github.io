---
title: cc-plugin-protobufjs
index: true
article: true
timeline: true
sidebar: false
# 时间
date: 2023-08-20 16:08:00
# 分类
category:
  - 实用工具
# 标签
tag:
  - CocosCreator 插件
  - protobufjs
---

你是否遇到了 protobufjs 安装的问题？或者每次更新 pb 都要去手动执行？来看看这个插件吧！

<!-- more -->

## :loudspeaker: 功能介绍

- :hammer: 构建：只编译变更的 proto 文件，让你更快速

- :headphones: 监听构建：当 proto 文件变更时，自动构建

- :briefcase: pb 包装：可以将单个目录下的多个 package 包装到一个对象内

- :hamburger: 自定义构建参数：满足你裁剪代码缩小代码体积的需求！

- :hamburger: 自定义构建：构建代码全可自定义，还怕不能适配你现在的项目？

为了支持任意方式的热更，直接将 proto 编译为 ts 和 d.ts 脚本

## :pushpin: 目录

- :blush: [已经安装 protobufjs](#已经安装-protobufjs)

- :flushed: [未安装 protobufjs](#未安装-protobufjs)

## :green_book: 使用说明

### :blush: 已经安装 protobufjs

在你安装完插件后，项目根目录会出现一个 `.protobufjs.js` 文件，这是插件的配置文件，不能移动位置，插件每次启动都会检测此文件是否存在，不存在则会新建一个

#### 配置里面有什么，让我看看！:eyes:

```javascript
module.exports = {
	/**
	 * 协议列表
	 * @type {proto_list[]}
	 */
	proto_list: [],
	/**
		自动构建开关
		- true: 递归监听 dir_path_ss 内的文件添加/删除/修改，并触发构建指令
		- false：需要手动点击 `protobuf/构建` 才会触发构建菜单
	*/
	automatic_build_b: true,

	/** 自动构建延迟（秒），防止短时间内频繁触发构建 */
	automatic_build_delay_s_n: 2,

	/**
	 * 构建函数
	 * @param {proto_list} config_ proto 配置
	 * @returns 成功状态
	 */
	async build_f(config_) {
		// ...
	},
};
```

#### 参数讲解

- proto_list：proto 生成配置列表
  <details>
  <summary>详情（点击展开）
  </summary>

  ```javascript
  /**
   * @typedef {Object} proto_list
   * @property {string | undefined} namespace_s 命名空间
   * @property {string[]} proto_ss 协议文件(生成为脚本的协议文件)
   * @property {string} ts_output_path_s ts 输出路径(带脚本名)
   * @property {string} dts_output_path_s d.ts 输出路径(带脚本名)
   * @property {string[] | undefined} pbjs_parameters pbjs 生成时参数(可用于裁剪代码, 命令行`npx pbjs`查看具体参数)
   */
  ```

  - namespace_s：包装后的对象名
    <details>
    <summary>示例（点击展开）
    </summary>

    如果 `a.proto` 和 `b.proto` 中的 package 分别为 a、b

    - 设置 namespace_s 为 pb 后

      ```typescript
      import { pb } from "./proto/test";

      pb.a;
      pb.b;
      ```

    - 不设置 namespace_s

      ```typescript
      import { a, b } from "./proto/test";
      ```

    </details>

  - proto_ss：协议文件路径（支持相对/绝对路径）
    <details>
    <summary>示例（点击展开）
    </summary>

    - "./a/\*.proto"
      代表 `当前目录/a` 文件夹下的所有 proto 文件，不包含子文件夹

    - "./a/\*\*/\*.proto"
      代表 `当前目录/a` 文件夹下的所有 proto 文件，包含子文件夹

    - "./a/a.proto"
    代表 `当前目录/a/a.proto` 单文件
    </details>

  - ts_output_path_s：输出的协议 ts 文件

  - dts_output_path_s：输出的协议 d.ts 文件（所在目录必须和 ts 文件相同）

  - pbjs_parameters：生成时参数
    > 控制台执行 `npx pbjs` 就可以看到有哪些参数了

  </details>

- automatic_build_b：自动构建开关

- automatic_build_delay_s_n：自动构建延迟（秒）

  > 监听到 proto 文件修改后，延迟多久开始构建

- build_f：构建函数，你可以在这里修改构建逻辑，方便适配多个项目

### :flushed: 未安装 protobufjs

- 如果你想通过 bundle 方式热更，点击 `protobufjs/安装/导入文件方式`

- 如果你想通过 apk 更新或者 manifest 热更，点击 `protobufjs/安装/NPM 方式`

> 注：个人推荐尽可能使用 NPM 方式，因为导入文件方式是直接导入 protobufjs 库的 ts 文件，有可能存在加载顺序问题

![](/图片/产品文档/cc-plugin-protobufjs/菜单.png)

在安装完成后，点击跳转阅读 [已经安装 protobufjs](#已经安装-protobufjs) 章节
