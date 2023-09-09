[index](../README.md) / codec\_base

# Class: codec\_base

编解码器基类

## Table of contents

### Constructors

- [constructor](codec_base.md#constructor)

### Properties

- [\_config](codec_base.md#_config)

### Accessors

- [\_log](codec_base.md#_log)

### Methods

- [encode](codec_base.md#encode)
- [decode](codec_base.md#decode)

## Constructors

### constructor

• **new codec_base**(`option_?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option_?` | [`config`](codec_base_.config.md) |

#### Defined in

[assets/@framework/mk_codec_base.ts:6](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_codec_base.ts#L6)

## Properties

### \_config

• `Protected` **\_config**: [`config`](codec_base_.config.md)

配置信息

#### Defined in

[assets/@framework/mk_codec_base.ts:14](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_codec_base.ts#L14)

## Accessors

### \_log

• `Protected` `get` **_log**(): [`logger`](logger.md)

日志

#### Returns

[`logger`](logger.md)

#### Defined in

[assets/@framework/mk_codec_base.ts:17](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_codec_base.ts#L17)

## Methods

### encode

▸ **encode**(`...args_as_`): `any`

编码

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args_as_` | `any`[] |

#### Returns

`any`

#### Defined in

[assets/@framework/mk_codec_base.ts:26](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_codec_base.ts#L26)

___

### decode

▸ **decode**(`...args_as_`): `any`

解码

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args_as_` | `any`[] |

#### Returns

`any`

#### Defined in

[assets/@framework/mk_codec_base.ts:31](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_codec_base.ts#L31)
