---
article: false
timeline: false
sitemap.exclude: true
---
[index](../README.md) / [bundle\_](../modules/bundle_.md) / switch\_scene\_config

# Class: switch\_scene\_config

[bundle_](../modules/bundle_.md).switch_scene_config

switch_scene 配置

## Table of contents

### Constructors

- [constructor](bundle_.switch_scene_config.md#constructor)

### Properties

- [bundle\_s](bundle_.switch_scene_config.md#bundle_s)
- [preload\_b](bundle_.switch_scene_config.md#preload_b)
- [before\_load\_callback\_f](bundle_.switch_scene_config.md#before_load_callback_f)
- [launched\_callback\_f](bundle_.switch_scene_config.md#launched_callback_f)
- [unloaded\_callback\_f](bundle_.switch_scene_config.md#unloaded_callback_f)

### Methods

- [progress\_callback\_f](bundle_.switch_scene_config.md#progress_callback_f)

## Constructors

### constructor

• **new switch_scene_config**(`init_?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_?` | `Partial`<[`switch_scene_config`](bundle_.switch_scene_config.md)\> |

#### Defined in

[assets/@framework/resources/mk_bundle.ts:523](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/resources/mk_bundle.ts#L523)

## Properties

### bundle\_s

• **bundle\_s**: `string`

bundle名

**`Remarks`**

getBundle 时使用

#### Defined in

[assets/@framework/resources/mk_bundle.ts:532](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/resources/mk_bundle.ts#L532)

___

### preload\_b

• `Optional` **preload\_b**: `boolean`

预加载

#### Defined in

[assets/@framework/resources/mk_bundle.ts:534](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/resources/mk_bundle.ts#L534)

___

### before\_load\_callback\_f

• `Optional` **before\_load\_callback\_f**: `OnBeforeLoadScene`

加载前调用的函数

#### Defined in

[assets/@framework/resources/mk_bundle.ts:543](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/resources/mk_bundle.ts#L543)

___

### launched\_callback\_f

• `Optional` **launched\_callback\_f**: `OnSceneLaunched`

启动后调用的函数

#### Defined in

[assets/@framework/resources/mk_bundle.ts:545](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/resources/mk_bundle.ts#L545)

___

### unloaded\_callback\_f

• `Optional` **unloaded\_callback\_f**: `OnUnload`

场景卸载后回调

#### Defined in

[assets/@framework/resources/mk_bundle.ts:547](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/resources/mk_bundle.ts#L547)

## Methods

### progress\_callback\_f

▸ `Optional` **progress_callback_f**(`finish_n`, `total_n`, `item?`): `void`

加载进度回调

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `finish_n` | `number` | 完成数量 |
| `total_n` | `number` | 总数量 |
| `item?` | `RequestItem` | 当前项目 |

#### Returns

`void`

#### Defined in

[assets/@framework/resources/mk_bundle.ts:541](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/resources/mk_bundle.ts#L541)
