---
article: false
timeline: false
sitemap:
  exclude: true
---
[index](../README.md) / [bundle\_](../modules/bundle_.md) / load\_config

# Class: load\_config

[bundle_](../modules/bundle_.md).load_config

load 配置

## Table of contents

### Constructors

- [constructor](bundle_.load_config.md#constructor)

### Properties

- [bundle\_s](bundle_.load_config.md#bundle_s)
- [progress\_callback\_f](bundle_.load_config.md#progress_callback_f)

## Constructors

### constructor

• **new load_config**(`init_`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_` | [`load_config`](bundle_.load_config.md) |

#### Defined in

[assets/@framework/resources/mk_bundle.ts:507](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/resources/mk_bundle.ts#L507)

## Properties

### bundle\_s

• **bundle\_s**: `string`

bundle名

**`Remarks`**

getBundle 时使用

#### Defined in

[assets/@framework/resources/mk_bundle.ts:516](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/resources/mk_bundle.ts#L516)

___

### progress\_callback\_f

• `Optional` **progress\_callback\_f**: (`curr_n`: `number`, `total_n`: `number`) => `void`

#### Type declaration

▸ (`curr_n`, `total_n`): `void`

加载回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `curr_n` | `number` |
| `total_n` | `number` |

##### Returns

`void`

#### Defined in

[assets/@framework/resources/mk_bundle.ts:518](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/resources/mk_bundle.ts#L518)
