[index](../README.md) / guide\_step\_base

# Class: guide\_step\_base<CT\>

引导步骤基类

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends `Record`<`string`, [`operate_cell`](../interfaces/guide_manage_.operate_cell.md)\> = `any` |

## Hierarchy

- `Component`

  ↳ **`guide_step_base`**

## Table of contents

### Properties

- [step\_n](guide_step_base.md#step_n)
- [scene\_s](guide_step_base.md#scene_s)
- [guide\_manage](guide_step_base.md#guide_manage)
- [operate\_ss](guide_step_base.md#operate_ss)
- [operate\_tab](guide_step_base.md#operate_tab)
- [init\_data](guide_step_base.md#init_data)
- [step\_update\_data](guide_step_base.md#step_update_data)
- [describe\_s](guide_step_base.md#describe_s)
- [next\_step\_ns](guide_step_base.md#next_step_ns)

### Methods

- [pre\_load](guide_step_base.md#pre_load)
- [load](guide_step_base.md#load)
- [unload](guide_step_base.md#unload)
- [\_next](guide_step_base.md#_next)

## Properties

### step\_n

• `Abstract` **step\_n**: `number`

步骤序号

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:15](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L15)

___

### scene\_s

• `Optional` **scene\_s**: `string`

所属场景

**`Remarks`**

格式：bundle.scene

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:21](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L21)

___

### guide\_manage

• **guide\_manage**: [`guide_manage`](guide_manage.md)

引导管理器

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:23](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L23)

___

### operate\_ss

• **operate\_ss**: `Exclude`<keyof `CT`, `symbol`\>[] = `[]`

操作键列表

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:25](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L25)

___

### operate\_tab

• **operate\_tab**: { [k in string \| number \| symbol]: undefined \| ReturnType<Awaited<CT[k]["load"]\>\> }

操作表返回值

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:27](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L27)

___

### init\_data

• **init\_data**: `any`

初始化数据

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:29](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L29)

___

### step\_update\_data

• **step\_update\_data**: `any`

步骤更新返回数据

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:31](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L31)

___

### describe\_s

• `Optional` **describe\_s**: `string`

步骤描述

**`Remarks`**

用于日志打印

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:37](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L37)

___

### next\_step\_ns

• `Optional` **next\_step\_ns**: `number`[]

下个步骤

**`Remarks`**

- length == 1：预加载及 this._next 跳转

- length > 1：预加载

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:46](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L46)

## Methods

### pre\_load

▸ `Optional` **pre_load**(): `void` \| `Promise`<`void`\>

预加载

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

上个步骤 load 后执行

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:53](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L53)

___

### load

▸ `Abstract` **load**(`jump_b_`): `void` \| `Promise`<`void`\>

加载

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jump_b_` | `boolean` | 跳转状态 |

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

进入当前步骤

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:61](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L61)

___

### unload

▸ `Optional` **unload**(): `void` \| `Promise`<`void`\>

卸载

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

退出当前步骤

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:68](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L68)

___

### \_next

▸ `Protected` **_next**(`init_data_?`): `void`

跳转到下个步骤

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `init_data_?` | `any` | 下个步骤初始化数据 |

#### Returns

`void`

#### Defined in

[assets/@framework/guide/mk_guide_step_base.ts:75](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/guide/mk_guide_step_base.ts#L75)
