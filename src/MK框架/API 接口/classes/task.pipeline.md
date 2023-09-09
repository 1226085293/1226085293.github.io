[index](../README.md) / [task](../modules/task.md) / pipeline

# Class: pipeline

[task](../modules/task.md).pipeline

任务管线

**`Remarks`**

顺序执行任务

## Table of contents

### Constructors

- [constructor](task.pipeline.md#constructor)

### Properties

- [event](task.pipeline.md#event)

### Accessors

- [pause\_b](task.pipeline.md#pause_b)

### Methods

- [add](task.pipeline.md#add)

## Constructors

### constructor

• **new pipeline**()

## Properties

### event

• **event**: [`event_target`](event_target.md)<`event_protocol`\>

事件

#### Defined in

[assets/@framework/task/mk_task_pipeline.ts:29](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/task/mk_task_pipeline.ts#L29)

## Accessors

### pause\_b

• `get` **pause_b**(): `boolean`

暂停状态

#### Returns

`boolean`

#### Defined in

[assets/@framework/task/mk_task_pipeline.ts:31](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/task/mk_task_pipeline.ts#L31)

• `set` **pause_b**(`value_b_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_b_` | `boolean` |

#### Returns

`void`

#### Defined in

[assets/@framework/task/mk_task_pipeline.ts:35](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/task/mk_task_pipeline.ts#L35)

## Methods

### add

▸ **add**(`task_f_`): `Promise`<`void`\>

添加任务

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `task_f_` | `Function` | 任务函数 |

#### Returns

`Promise`<`void`\>

当前任务 Promise

#### Defined in

[assets/@framework/task/mk_task_pipeline.ts:57](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/task/mk_task_pipeline.ts#L57)
