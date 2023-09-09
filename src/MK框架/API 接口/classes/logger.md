[index](../README.md) / logger

# Class: logger

日志打印器

**`Remarks`**

单例对象打印名为 default

- 支持多实例

- 打印等级控制

- 打印屏蔽控制

- 报错日志 http 上传

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`logger`**

## Table of contents

### Constructors

- [constructor](logger.md#constructor)

### Properties

- [config](logger.md#config)

### Methods

- [only](logger.md#only)
- [limit](logger.md#limit)
- [debug](logger.md#debug)
- [log](logger.md#log)
- [warn](logger.md#warn)
- [error](logger.md#error)
- [time\_start](logger.md#time_start)
- [time\_log](logger.md#time_log)
- [time\_end](logger.md#time_end)

## Constructors

### constructor

• **new logger**(`name_s_`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name_s_` | `string` |

#### Overrides

[instance_base](instance_base.md).[constructor](instance_base.md#constructor)

#### Defined in

[assets/@framework/mk_logger.ts:63](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_logger.ts#L63)

## Properties

### config

▪ `Static` **config**: `global_config`

全局配置

#### Defined in

[assets/@framework/mk_logger.ts:151](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_logger.ts#L151)

## Methods

### only

▸ `Static` **only**(`module_ss_`): `void`

只限模块打印

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `module_ss_` | `string`[] | 模块名列表 |

#### Returns

`void`

**`Remarks`**

调用时会覆盖 [mk_logger.limit](logger.md#limit) 的规则

#### Defined in

[assets/@framework/mk_logger.ts:197](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_logger.ts#L197)

___

### limit

▸ `Static` **limit**(`module_ss_`): `void`

限制模块打印

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `module_ss_` | `string`[] | 模块名列表 |

#### Returns

`void`

**`Remarks`**

调用时会覆盖 [mk_logger.only](logger.md#only) 的规则

#### Defined in

[assets/@framework/mk_logger.ts:208](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_logger.ts#L208)

___

### debug

▸ **debug**(`...args_as_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args_as_` | `any`[] |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_logger.ts:263](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_logger.ts#L263)

___

### log

▸ **log**(`...args_as_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args_as_` | `any`[] |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_logger.ts:267](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_logger.ts#L267)

___

### warn

▸ **warn**(`...args_as_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args_as_` | `any`[] |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_logger.ts:271](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_logger.ts#L271)

___

### error

▸ **error**(`...args_as_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args_as_` | `any`[] |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_logger.ts:275](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_logger.ts#L275)

___

### time\_start

▸ **time_start**(`name_s_`, `...args_as_`): `void`

计时开始

#### Parameters

| Name | Type |
| :------ | :------ |
| `name_s_` | `string` |
| `...args_as_` | `any`[] |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_logger.ts:280](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_logger.ts#L280)

___

### time\_log

▸ **time_log**(`name_s_`, `...args_as_`): `void`

打印耗时

#### Parameters

| Name | Type |
| :------ | :------ |
| `name_s_` | `string` |
| `...args_as_` | `any`[] |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_logger.ts:297](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_logger.ts#L297)

___

### time\_end

▸ **time_end**(`name_s_`, `...args_as_`): `void`

总耗时

#### Parameters

| Name | Type |
| :------ | :------ |
| `name_s_` | `string` |
| `...args_as_` | `any`[] |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_logger.ts:316](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_logger.ts#L316)
