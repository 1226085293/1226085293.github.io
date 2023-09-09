[index](../README.md) / [network](../modules/network.md) / [base\_](../modules/network.base_.md) / send\_tide

# Class: send\_tide<CT\>

[network](../modules/network.md).[base_](../modules/network.base_.md).send_tide

发送潮

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`codec_base`](codec_base.md) = [`codec_base`](codec_base.md) |

## Table of contents

### Constructors

- [constructor](network.base_.send_tide.md#constructor)

### Methods

- [send](network.base_.send_tide.md#send)
- [trigger](network.base_.send_tide.md#trigger)

## Constructors

### constructor

• **new send_tide**<`CT`\>(`network_`, `interval_ms_n_`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`codec_base`](codec_base.md) = [`codec_base`](codec_base.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network_` | [`base`](network.base.md)<[`codec_base`](codec_base.md)\> | 网络实例 |
| `interval_ms_n_` | `number` | 发送间隔 - -1：手动触发 - 0-n：自动发送间隔毫秒 |

#### Defined in

[assets/@framework/network/mk_network_base.ts:711](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/network/mk_network_base.ts#L711)

## Methods

### send

▸ **send**(`data_`): `void`

发送

#### Parameters

| Name | Type |
| :------ | :------ |
| `data_` | `Parameters`<`CT`[``"encode"``]\>[``0``] |

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:733](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/network/mk_network_base.ts#L733)

___

### trigger

▸ **trigger**(): `void`

触发发送

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:755](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/network/mk_network_base.ts#L755)
