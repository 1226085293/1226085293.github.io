[index](../README.md) / [network](../modules/network.md) / [http\_](../modules/network.http_.md) / config

# Class: config

[network](../modules/network.md).[http_](../modules/network.http_.md).config

配置信息

## Table of contents

### Constructors

- [constructor](network.http_.config.md#constructor)

### Properties

- [timeout\_n](network.http_.config.md#timeout_n)
- [return\_type](network.http_.config.md#return_type)
- [codec](network.http_.config.md#codec)
- [body](network.http_.config.md#body)
- [header](network.http_.config.md#header)
- [open\_callback\_f](network.http_.config.md#open_callback_f)

## Constructors

### constructor

• **new config**(`init_?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_?` | `Partial`<[`config`](network.http_.config.md)\> |

#### Defined in

[assets/@framework/network/mk_http.ts:133](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/network/mk_http.ts#L133)

## Properties

### timeout\_n

• **timeout\_n**: `number` = `5000`

超时时间(ms)

#### Defined in

[assets/@framework/network/mk_http.ts:138](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/network/mk_http.ts#L138)

___

### return\_type

• `Optional` **return\_type**: `XMLHttpRequestResponseType`

返回数据类型

#### Defined in

[assets/@framework/network/mk_http.ts:140](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/network/mk_http.ts#L140)

___

### codec

• `Optional` **codec**: [`codec_base`](codec_base.md)

编解码器

#### Defined in

[assets/@framework/network/mk_http.ts:142](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/network/mk_http.ts#L142)

___

### body

• `Optional` **body**: `string` \| `Document` \| `Blob` \| `BufferSource` \| `FormData` \| `URLSearchParams`

内容

#### Defined in

[assets/@framework/network/mk_http.ts:144](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/network/mk_http.ts#L144)

___

### header

• `Optional` **header**: `Record`<`string`, `string`\>

标头

#### Defined in

[assets/@framework/network/mk_http.ts:146](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/network/mk_http.ts#L146)

___

### open\_callback\_f

• `Optional` **open\_callback\_f**: (`http`: `XMLHttpRequest`) => `void`

#### Type declaration

▸ (`http`): `void`

open 后回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `http` | `XMLHttpRequest` |

##### Returns

`void`

**`Remarks`**

可在函数内注册回调，设置请求数据

#### Defined in

[assets/@framework/network/mk_http.ts:152](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/network/mk_http.ts#L152)
