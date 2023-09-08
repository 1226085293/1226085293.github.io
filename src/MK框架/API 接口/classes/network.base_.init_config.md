[index](../README.md) / [Exports](../modules.md) / [network](../modules/network.md) / [base\_](../modules/network.base_.md) / init\_config

# Class: init\_config<CT\>

[network](../modules/network.md).[base_](../modules/network.base_.md).init_config

初始化配置

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`codec_base`](codec_base.md) = [`codec_base`](codec_base.md) |

## Hierarchy

- **`init_config`**

  ↳ [`init_config`](network.websocket_.init_config.md)

## Table of contents

### Constructors

- [constructor](network.base_.init_config.md#constructor)

### Properties

- [codec](network.base_.init_config.md#codec)
- [send\_interval\_ms\_n](network.base_.init_config.md#send_interval_ms_n)
- [reconnect\_interval\_ms\_n](network.base_.init_config.md#reconnect_interval_ms_n)
- [max\_reconnect\_n](network.base_.init_config.md#max_reconnect_n)
- [wait\_timeout\_ms\_n](network.base_.init_config.md#wait_timeout_ms_n)
- [heartbeat\_config](network.base_.init_config.md#heartbeat_config)

### Methods

- [parse\_message\_id\_f](network.base_.init_config.md#parse_message_id_f)
- [parse\_message\_sequence\_f](network.base_.init_config.md#parse_message_sequence_f)

## Constructors

### constructor

• **new init_config**<`CT`\>(`init_?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`codec_base`](codec_base.md) = [`codec_base`](codec_base.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_?` | `Partial`<[`init_config`](network.base_.init_config.md)<`CT`\>\> |

#### Defined in

[assets/@framework/network/mk_network_base.ts:632](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/network/mk_network_base.ts#L632)

## Properties

### codec

• `Optional` **codec**: `CT`

编解码器

#### Defined in

[assets/@framework/network/mk_network_base.ts:637](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/network/mk_network_base.ts#L637)

___

### send\_interval\_ms\_n

• **send\_interval\_ms\_n**: `number` = `0`

发送间隔

**`Remarks`**

单位：毫秒

#### Defined in

[assets/@framework/network/mk_network_base.ts:643](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/network/mk_network_base.ts#L643)

___

### reconnect\_interval\_ms\_n

• **reconnect\_interval\_ms\_n**: `number` = `1000`

重连间隔

**`Remarks`**

单位：毫秒

#### Defined in

[assets/@framework/network/mk_network_base.ts:649](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/network/mk_network_base.ts#L649)

___

### max\_reconnect\_n

• **max\_reconnect\_n**: `number` = `5`

最大重连次数

#### Defined in

[assets/@framework/network/mk_network_base.ts:651](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/network/mk_network_base.ts#L651)

___

### wait\_timeout\_ms\_n

• **wait\_timeout\_ms\_n**: `number` = `5000`

等待消息超时时间

**`Remarks`**

单位：毫秒

#### Defined in

[assets/@framework/network/mk_network_base.ts:657](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/network/mk_network_base.ts#L657)

___

### heartbeat\_config

• `Optional` **heartbeat\_config**: `Object`

心跳配置

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `interval_ms_n?` | `number` | 发送间隔 **`Remarks`** 单位：毫秒 |
| `timeout_ms_n` | `number` | 超时时间 **`Remarks`** 单位：毫秒 |
| `init_f` | (`done_f`: () => `void`) => ``null`` \| () => `any` | 初始化 |

#### Defined in

[assets/@framework/network/mk_network_base.ts:659](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/network/mk_network_base.ts#L659)

## Methods

### parse\_message\_id\_f

▸ **parse_message_id_f**(`data`): `string` \| `number`

解析消息 id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | 接收的消息 |

#### Returns

`string` \| `number`

消息号

#### Defined in

[assets/@framework/network/mk_network_base.ts:685](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/network/mk_network_base.ts#L685)

___

### parse\_message\_sequence\_f

▸ **parse_message_sequence_f**(`data`): `undefined` \| `string` \| `number`

解析消息序列号

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | 接收的消息 |

#### Returns

`undefined` \| `string` \| `number`

消息序列号

#### Defined in

[assets/@framework/network/mk_network_base.ts:694](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/network/mk_network_base.ts#L694)
