[index](../README.md) / [codec\_base\_](../modules/codec_base_.md) / config

# Class: config

[codec_base_](../modules/codec_base_.md).config

配置信息

## Table of contents

### Constructors

- [constructor](codec_base_.config.md#constructor)

### Properties

- [encryption\_f](codec_base_.config.md#encryption_f)
- [decrypt\_f](codec_base_.config.md#decrypt_f)

## Constructors

### constructor

• **new config**()

## Properties

### encryption\_f

• `Optional` **encryption\_f**: (`data`: `any`) => `any`

#### Type declaration

▸ (`data`): `any`

加密函数

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

##### Returns

`any`

#### Defined in

[assets/@framework/mk_codec_base.ts:40](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_codec_base.ts#L40)

___

### decrypt\_f

• `Optional` **decrypt\_f**: (`data`: `any`) => `any`

#### Type declaration

▸ (`data`): `any`

解密函数

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

##### Returns

`any`

#### Defined in

[assets/@framework/mk_codec_base.ts:42](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_codec_base.ts#L42)
