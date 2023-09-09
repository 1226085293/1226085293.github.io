[index](../README.md) / [network](../modules/network.md) / http

# Class: http

[network](../modules/network.md).http

http 模块

**`Remarks`**

- post/get 支持

- 支持任意类型的返回数据解析

- 支持自定义编解码器

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`http`**

## Table of contents

### Methods

- [open](network.http.md#open)
- [get](network.http.md#get)
- [post](network.http.md#post)

## Methods

### open

▸ **open**(`type_s_`, `url_s_`, `config_?`): `Promise`<`void`\>

通用方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `type_s_` | ``"GET"`` \| ``"POST"`` |
| `url_s_` | `string` |
| `config_?` | `Partial`<[`config`](network.http_.config.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/network/mk_http.ts:19](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/network/mk_http.ts#L19)

___

### get

▸ **get**(`url_s_`, `config_`): `Promise`<`void`\>

GET方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `url_s_` | `string` |
| `config_` | `Partial`<[`config`](network.http_.config.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/network/mk_http.ts:120](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/network/mk_http.ts#L120)

___

### post

▸ **post**(`url_s_`, `config_`): `Promise`<`void`\>

POST方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `url_s_` | `string` |
| `config_` | `Partial`<[`config`](network.http_.config.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/network/mk_http.ts:125](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/network/mk_http.ts#L125)
