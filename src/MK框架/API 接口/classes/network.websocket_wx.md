[index](../README.md) / [Exports](../modules.md) / [network](../modules/network.md) / websocket\_wx

# Class: websocket\_wx<CT\>

[network](../modules/network.md).websocket_wx

微信 websocket

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`codec_base`](codec_base.md) = [`codec_base`](codec_base.md) |

## Hierarchy

- [`base`](network.base.md)<`CT`\>

  ↳ **`websocket_wx`**

## Table of contents

### Constructors

- [constructor](network.websocket_wx.md#constructor)

### Properties

- [config](network.websocket_wx.md#config)
- [\_socket](network.websocket_wx.md#_socket)

### Methods

- [\_reset\_socket](network.websocket_wx.md#_reset_socket)

## Constructors

### constructor

• **new websocket_wx**<`CT`\>(`config_?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`codec_base`](codec_base.md) = [`codec_base`](codec_base.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config_?` | `Partial`<`init_config`<`CT`\>\> |

#### Overrides

[base](network.base.md).[constructor](network.base.md#constructor)

#### Defined in

[assets/@framework/network/websocket/mk_websocket_wx.ts:9](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/network/websocket/mk_websocket_wx.ts#L9)

## Properties

### config

• **config**: `Readonly`<`init_config`<`CT`\>\>

配置信息

#### Overrides

[base](network.base.md).[config](network.base.md#config)

#### Defined in

[assets/@framework/network/websocket/mk_websocket_wx.ts:15](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/network/websocket/mk_websocket_wx.ts#L15)

___

### \_socket

• `Protected` **\_socket**: `SocketTask`

socket

#### Overrides

[base](network.base.md).[_socket](network.base.md#_socket)

#### Defined in

[assets/@framework/network/websocket/mk_websocket_wx.ts:17](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/network/websocket/mk_websocket_wx.ts#L17)

## Methods

### \_reset\_socket

▸ `Protected` **_reset_socket**(): `void`

重置socket

#### Returns

`void`

#### Overrides

[base](network.base.md).[_reset_socket](network.base.md#_reset_socket)

#### Defined in

[assets/@framework/network/websocket/mk_websocket_wx.ts:20](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/network/websocket/mk_websocket_wx.ts#L20)
