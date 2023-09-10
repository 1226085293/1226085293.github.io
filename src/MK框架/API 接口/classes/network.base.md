---
article: false
timeline: false
---
[index](../README.md) / [network](../modules/network.md) / base

# Class: base<CT\>

[network](../modules/network.md).base

网络系统基类

**`Remarks`**

- 支持多实例

- (心跳/断线重连)支持

- 网络消息接口事件化

- 支持消息潮

- 网络消息模拟

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`codec_base`](codec_base.md) = [`codec_base`](codec_base.md) |

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`base`**

  ↳↳ [`websocket`](network.websocket.md)

  ↳↳ [`websocket_wx`](network.websocket_wx.md)

## Table of contents

### Constructors

- [constructor](network.base.md#constructor)

### Properties

- [event](network.base.md#event)
- [message](network.base.md#message)
- [config](network.base.md#config)
- [\_socket](network.base.md#_socket)
- [\_log](network.base.md#_log)
- [\_state](network.base.md#_state)
- [\_addr\_s](network.base.md#_addr_s)
- [\_write\_as](network.base.md#_write_as)

### Accessors

- [state](network.base.md#state)
- [codec](network.base.md#codec)

### Methods

- [\_reset\_socket](network.base.md#_reset_socket)
- [connect](network.base.md#connect)
- [close](network.base.md#close)
- [\_open](network.base.md#_open)
- [\_message](network.base.md#_message)
- [\_error](network.base.md#_error)
- [\_close](network.base.md#_close)
- [\_timer\_send](network.base.md#_timer_send)
- [\_timer\_reconnect](network.base.md#_timer_reconnect)
- [\_cancel\_reconnect](network.base.md#_cancel_reconnect)
- [\_trigger\_wait\_task](network.base.md#_trigger_wait_task)
- [\_start\_heartbeat](network.base.md#_start_heartbeat)
- [\_set\_write\_sleep\_b](network.base.md#_set_write_sleep_b)
- [\_event\_restart](network.base.md#_event_restart)

## Constructors

### constructor

• **new base**<`CT`\>(`init_?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`codec_base`](codec_base.md) = [`codec_base`](codec_base.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_?` | `Partial`<[`init_config`](network.base_.init_config.md)<`CT`\>\> |

#### Overrides

[instance_base](instance_base.md).[constructor](instance_base.md#constructor)

#### Defined in

[assets/@framework/network/mk_network_base.ts:212](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L212)

## Properties

### event

• **event**: [`event_target`](event_target.md)<`event_protocol`<`CT`\>\>

网络事件

#### Defined in

[assets/@framework/network/mk_network_base.ts:225](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L225)

___

### message

• **message**: `message_event`<`CT`\>

消息事件

#### Defined in

[assets/@framework/network/mk_network_base.ts:227](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L227)

___

### config

• **config**: `Readonly`<[`init_config`](network.base_.init_config.md)<`CT`\>\>

配置信息

#### Defined in

[assets/@framework/network/mk_network_base.ts:229](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L229)

___

### \_socket

• `Protected` `Abstract` **\_socket**: `any`

socket

#### Defined in

[assets/@framework/network/mk_network_base.ts:247](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L247)

___

### \_log

• `Protected` **\_log**: [`logger`](logger.md)

日志

#### Defined in

[assets/@framework/network/mk_network_base.ts:249](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L249)

___

### \_state

• `Protected` **\_state**: [`status`](../enums/network.base_.status.md) = `mk_network_base_.status.closed`

socket 状态

#### Defined in

[assets/@framework/network/mk_network_base.ts:251](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L251)

___

### \_addr\_s

• `Protected` **\_addr\_s**: `string`

地址

#### Defined in

[assets/@framework/network/mk_network_base.ts:253](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L253)

___

### \_write\_as

• `Protected` **\_write\_as**: `any`[] = `[]`

写入队列

#### Defined in

[assets/@framework/network/mk_network_base.ts:260](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L260)

## Accessors

### state

• `get` **state**(): [`status`](../enums/network.base_.status.md)

socket 状态

#### Returns

[`status`](../enums/network.base_.status.md)

#### Defined in

[assets/@framework/network/mk_network_base.ts:232](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L232)

___

### codec

• `get` **codec**(): `undefined` \| `CT`

编解码器

#### Returns

`undefined` \| `CT`

#### Defined in

[assets/@framework/network/mk_network_base.ts:237](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L237)

• `set` **codec**(`value_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | `undefined` \| `CT` |

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:241](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L241)

## Methods

### \_reset\_socket

▸ `Protected` `Abstract` **_reset_socket**(): `void`

重置 socket

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:281](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L281)

___

### connect

▸ **connect**(`addr_s_`): `void`

连接

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr_s_` | `string` |

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:284](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L284)

___

### close

▸ **close**(): `void`

断开

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:291](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L291)

___

### \_open

▸ `Protected` **_open**(`event_`): `void`

socket 准备完成

#### Parameters

| Name | Type |
| :------ | :------ |
| `event_` | `any` |

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:351](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L351)

___

### \_message

▸ `Protected` **_message**(`event_`): `Promise`<`void`\>

socket 消息

#### Parameters

| Name | Type |
| :------ | :------ |
| `event_` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/network/mk_network_base.ts:366](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L366)

___

### \_error

▸ `Protected` **_error**(`event_`): `void`

socket 错误

#### Parameters

| Name | Type |
| :------ | :------ |
| `event_` | `any` |

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:391](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L391)

___

### \_close

▸ `Protected` **_close**(`event_`): `void`

socket 关闭

#### Parameters

| Name | Type |
| :------ | :------ |
| `event_` | `any` |

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:398](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L398)

___

### \_timer\_send

▸ `Protected` **_timer_send**(): `Promise`<`void`\>

定时发送

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/network/mk_network_base.ts:428](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L428)

___

### \_timer\_reconnect

▸ `Protected` **_timer_reconnect**(): `void`

定时重连

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:447](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L447)

___

### \_cancel\_reconnect

▸ `Protected` **_cancel_reconnect**(`status_b_`): `void`

取消重连

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status_b_` | `boolean` | 成功 \| 失败 |

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:462](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L462)

___

### \_trigger\_wait\_task

▸ `Protected` **_trigger_wait_task**(`data_`): `void`

触发等待任务

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data_` | `any` | 收到的消息 |

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:485](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L485)

___

### \_start\_heartbeat

▸ `Protected` **_start_heartbeat**(): `void`

初始化心跳

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:511](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L511)

___

### \_set\_write\_sleep\_b

▸ `Protected` **_set_write_sleep_b**(`value_b_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_b_` | `boolean` |

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:576](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L576)

___

### \_event\_restart

▸ `Protected` **_event_restart**(): `void`

#### Returns

`void`

#### Defined in

[assets/@framework/network/mk_network_base.ts:594](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/network/mk_network_base.ts#L594)
