[index](../README.md) / [network](../modules/network.md) / websocket

# Class: websocket<CT\>

[network](../modules/network.md).websocket

通用 websocket

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`codec_base`](codec_base.md) = [`codec_base`](codec_base.md) |

## Hierarchy

- [`base`](network.base.md)<`CT`\>

  ↳ **`websocket`**

## Table of contents

### Constructors

- [constructor](network.websocket.md#constructor)

### Properties

- [config](network.websocket.md#config)
- [\_socket](network.websocket.md#_socket)

### Methods

- [\_reset\_socket](network.websocket.md#_reset_socket)

## Constructors

### constructor

• **new websocket**<`CT`\>(`config_?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`codec_base`](codec_base.md) = [`codec_base`](codec_base.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config_?` | `Partial`<[`init_config`](network.websocket_.init_config.md)<`CT`\>\> |

#### Overrides

[base](network.base.md).[constructor](network.base.md#constructor)

#### Defined in

[assets/@framework/network/websocket/mk_websocket.ts:9](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/network/websocket/mk_websocket.ts#L9)

## Properties

### config

• **config**: `Readonly`<[`init_config`](network.websocket_.init_config.md)<`CT`\>\>

配置信息

#### Overrides

[base](network.base.md).[config](network.base.md#config)

#### Defined in

[assets/@framework/network/websocket/mk_websocket.ts:15](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/network/websocket/mk_websocket.ts#L15)

___

### \_socket

• `Protected` **\_socket**: `WebSocket`

socket

#### Overrides

[base](network.base.md).[_socket](network.base.md#_socket)

#### Defined in

[assets/@framework/network/websocket/mk_websocket.ts:17](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/network/websocket/mk_websocket.ts#L17)

## Methods

### \_reset\_socket

▸ `Protected` **_reset_socket**(): `void`

重置socket

#### Returns

`void`

#### Overrides

[base](network.base.md).[_reset_socket](network.base.md#_reset_socket)

#### Defined in

[assets/@framework/network/websocket/mk_websocket.ts:20](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/network/websocket/mk_websocket.ts#L20)
