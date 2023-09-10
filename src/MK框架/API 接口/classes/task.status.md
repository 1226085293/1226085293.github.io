---
article: false
timeline: false
sitemap.exclude: true
---
[index](../README.md) / [task](../modules/task.md) / status

# Class: status<CT\>

[task](../modules/task.md).status

状态任务（类型安全）

**`Remarks`**

封装 promise，防止重复调用 resolve 函数报错以及添加超时功能，可重复使用

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | `void` |

## Table of contents

### Constructors

- [constructor](task.status.md#constructor)

### Properties

- [task](task.status.md#task)

### Accessors

- [finish\_b](task.status.md#finish_b)

### Methods

- [finish](task.status.md#finish)

## Constructors

### constructor

• **new status**<`CT`\>(`finish_b_`, `init_config_?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | `void` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `finish_b_` | `boolean` | 完成状态 |
| `init_config_?` | `init_config`<`CT`\> | 初始化配置 |

#### Defined in

[assets/@framework/task/mk_status_task.ts:12](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/task/mk_status_task.ts#L12)

## Properties

### task

• **task**: `Promise`<`CT`\>

异步任务

#### Defined in

[assets/@framework/task/mk_status_task.ts:27](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/task/mk_status_task.ts#L27)

## Accessors

### finish\_b

• `get` **finish_b**(): `boolean`

完成状态

#### Returns

`boolean`

**`Remarks`**

- true：任务结束

- false：任务进行中

#### Defined in

[assets/@framework/task/mk_status_task.ts:36](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/task/mk_status_task.ts#L36)

## Methods

### finish

▸ **finish**<`T`\>(`finish_b_`): `void`

完成任务

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``false`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `finish_b_` | `T` | 完成状态 |

#### Returns

`void`

#### Defined in

[assets/@framework/task/mk_status_task.ts:54](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/task/mk_status_task.ts#L54)

▸ **finish**<`T`\>(`finish_b_`, `data_`): `void`

完成任务

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``true`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `finish_b_` | `T` | 完成状态 |
| `data_` | `CT` | 完成数据 |

#### Returns

`void`

#### Defined in

[assets/@framework/task/mk_status_task.ts:60](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/task/mk_status_task.ts#L60)
