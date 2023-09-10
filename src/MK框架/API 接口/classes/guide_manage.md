---
article: false
timeline: false
---
[index](../README.md) / guide\_manage

# Class: guide\_manage

引导管理器

**`Remarks`**

- 支持多实例

- 支持任意步骤的(插入/删除)

- 支持(暂停/完成)引导

- 支持任意步骤跳转后的状态还原(操作单元)

- 引导步骤脚本分离，支持组件式挂载

## Table of contents

### Constructors

- [constructor](guide_manage.md#constructor)

### Properties

- [event](guide_manage.md#event)
- [step\_map](guide_manage.md#step_map)

### Accessors

- [pause\_b](guide_manage.md#pause_b)
- [finish\_b](guide_manage.md#finish_b)
- [end\_step\_n](guide_manage.md#end_step_n)

### Methods

- [regis](guide_manage.md#regis)
- [run](guide_manage.md#run)
- [set\_step](guide_manage.md#set_step)
- [get\_step](guide_manage.md#get_step)
- [finish](guide_manage.md#finish)

## Constructors

### constructor

• **new guide_manage**(`init_`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_` | [`init_config`](../interfaces/guide_manage_.init_config.md) |

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:23](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L23)

## Properties

### event

• **event**: [`event_target`](event_target.md)<[`event_protocol`](../interfaces/guide_manage_.event_protocol.md)\>

事件

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:35](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L35)

___

### step\_map

• **step\_map**: `Map`<`number`, [`guide_step_base`](guide_step_base.md)<`any`\>\>

步骤表

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:37](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L37)

## Accessors

### pause\_b

• `get` **pause_b**(): `boolean`

暂停状态

#### Returns

`boolean`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:39](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L39)

• `set` **pause_b**(`value_b_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_b_` | `boolean` |

#### Returns

`void`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:43](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L43)

___

### finish\_b

• `get` **finish_b**(): `boolean`

完成状态

#### Returns

`boolean`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:48](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L48)

___

### end\_step\_n

• `get` **end_step_n**(): `number`

结束步骤

#### Returns

`number`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:53](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L53)

## Methods

### regis

▸ **regis**(`step_`): `void`

注册步骤

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `step_` | [`guide_step_base`](guide_step_base.md)<`any`\> \| [`guide_step_base`](guide_step_base.md)<`any`\>[] | 步骤实例 |

#### Returns

`void`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:77](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L77)

___

### run

▸ **run**(): `Promise`<`void`\>

运行引导

#### Returns

`Promise`<`void`\>

**`Remarks`**

自动取消暂停状态，且更新当前步骤视图

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:94](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L94)

___

### set\_step

▸ **set_step**(`step_n_`, `init_data_?`): `Promise`<`void`\>

设置当前步骤

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `step_n_` | `number` | 步骤 |
| `init_data_?` | `any` | 初始化数据 |

#### Returns

`Promise`<`void`\>

**`Remarks`**

- 暂停状态：更新步骤数据

- 正常状态：更新步骤数据，执行步骤生命周期

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:212](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L212)

___

### get\_step

▸ **get_step**(): `number`

获取步骤

#### Returns

`number`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:254](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L254)

___

### finish

▸ **finish**(): `void`

完成引导

#### Returns

`void`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:259](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/guide/mk_guide_manage.ts#L259)
