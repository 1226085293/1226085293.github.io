[index](../README.md) / [bundle\_](../modules/bundle_.md) / bundle\_info

# Class: bundle\_info

[bundle_](../modules/bundle_.md).bundle_info

bundle 信息

## Hierarchy

- **`bundle_info`**

  ↳ [`bundle_data`](bundle_.bundle_data.md)

## Table of contents

### Constructors

- [constructor](bundle_.bundle_info.md#constructor)

### Properties

- [bundle\_s](bundle_.bundle_info.md#bundle_s)
- [version\_s](bundle_.bundle_info.md#version_s)
- [origin\_s](bundle_.bundle_info.md#origin_s)

## Constructors

### constructor

• **new bundle_info**(`init_`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_` | [`bundle_info`](bundle_.bundle_info.md) |

#### Defined in

[assets/@framework/resources/mk_bundle.ts:465](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/resources/mk_bundle.ts#L465)

## Properties

### bundle\_s

• **bundle\_s**: `string`

bundle名

**`Remarks`**

getBundle 时使用

#### Defined in

[assets/@framework/resources/mk_bundle.ts:478](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/resources/mk_bundle.ts#L478)

___

### version\_s

• `Optional` **version\_s**: `string`

版本

#### Defined in

[assets/@framework/resources/mk_bundle.ts:480](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/resources/mk_bundle.ts#L480)

___

### origin\_s

• `Optional` **origin\_s**: `string`

资源路径

**`Default Value`**

```ts
this.bundle_s
```

**`Remarks`**

loadBundle 时使用

#### Defined in

[assets/@framework/resources/mk_bundle.ts:488](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/resources/mk_bundle.ts#L488)
