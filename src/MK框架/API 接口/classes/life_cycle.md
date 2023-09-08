[index](../README.md) / life\_cycle

# Class: life\_cycle

生命周期

**`Remarks`**

用于模块生命周期控制，注意所有生命周期函数 onLoad、open ... 等都会自动执行父类函数再执行子类函数，不必手动 super.xxx 调用

- open 顺序: 子 -> 父

- close 顺序: 父 -> 子

## Hierarchy

- [`layer`](layer.md)

  ↳ **`life_cycle`**

  ↳↳ [`node`](language.node.md)

  ↳↳ [`scene_drive`](scene_drive.md)

  ↳↳ [`view_base`](view_base.md)

## Implements

- [`follow_release_object`](../modules/asset_.md#follow_release_object)

## Table of contents

### Constructors

- [constructor](life_cycle.md#constructor)

### Properties

- [init\_data](life_cycle.md#init_data)
- [event\_target\_as](life_cycle.md#event_target_as)
- [\_static\_b](life_cycle.md#_static_b)
- [\_load\_task](life_cycle.md#_load_task)
- [\_open\_task](life_cycle.md#_open_task)
- [\_state](life_cycle.md#_state)

### Accessors

- [valid\_b](life_cycle.md#valid_b)
- [static\_b](life_cycle.md#static_b)
- [config](life_cycle.md#config)
- [\_log](life_cycle.md#_log)

### Methods

- [onLoad](life_cycle.md#onload)
- [create](life_cycle.md#create)
- [init](life_cycle.md#init)
- [open](life_cycle.md#open)
- [close](life_cycle.md#close)
- [late\_close](life_cycle.md#late_close)
- [follow\_release](life_cycle.md#follow_release)
- [cancel\_release](life_cycle.md#cancel_release)

## Constructors

### constructor

• **new life_cycle**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Overrides

mk\_layer.constructor

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:84](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L84)

## Properties

### init\_data

• `Optional` **init\_data**: `any`

初始化数据

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:120](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L120)

___

### event\_target\_as

• `Readonly` **event\_target\_as**: { `targetOff`: (`target`: `any`) => `any`  }[] \| { `target_off`: (`target`: `any`) => `any`  }[] = `[]`

事件对象列表

**`Remarks`**

模块关闭后自动清理事件

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:127](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L127)

___

### \_static\_b

• `Protected` **\_static\_b**: `boolean` = `true`

静态模块

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:158](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L158)

___

### \_load\_task

• `Protected` **\_load\_task**: [`status`](task.status.md)<`void`\>

load任务

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:160](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L160)

___

### \_open\_task

• `Protected` **\_open\_task**: [`status`](task.status.md)<`void`\>

open任务

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:162](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L162)

___

### \_state

• `Protected` **\_state**: `run_state` = `_mk_life_cycle.run_state.close`

运行状态

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:164](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L164)

## Accessors

### valid\_b

• `get` **valid_b**(): `boolean`

有效状态

#### Returns

`boolean`

**`Remarks`**

表示模块未在(关闭/关闭中)状态

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:134](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L134)

___

### static\_b

• `get` **static_b**(): `boolean`

静态模块

#### Returns

`boolean`

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:145](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L145)

___

### config

• `set` **config**(`config_`): `void`

设置模块配置

#### Parameters

| Name | Type |
| :------ | :------ |
| `config_` | `create_config` |

#### Returns

`void`

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:150](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L150)

___

### \_log

• `Protected` `get` **_log**(): [`logger`](logger.md)

日志

#### Returns

[`logger`](logger.md)

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:172](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L172)

## Methods

### onLoad

▸ `Protected` **onLoad**(): `void`

#### Returns

`void`

#### Overrides

[layer](layer.md).[onLoad](layer.md#onload)

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:180](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L180)

___

### create

▸ `Protected` `Optional` **create**(): `void` \| `Promise`<`void`\>

创建

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

可在此处初始化视图状态

- 静态模块：onLoad 时调用

- 动态模块：addChild 后调用

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:204](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L204)

___

### init

▸ **init**(`data_?`): `void` \| `Promise`<`void`\>

初始化

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data_?` | `any` | 初始化数据 |

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

所有依赖 init_data 初始化的逻辑都应在此进行

- 静态模块：外部自行调用，常用于更新 item 或者静态模块

- 动态模块：onLoad 后，open 前调用

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:217](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L217)

___

### open

▸ `Protected` `Optional` **open**(): `void` \| `Promise`<`void`\>

打开

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

init 后执行，在此处执行无需 init_data 支持的模块初始化操作

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:230](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L230)

___

### close

▸ `Optional` **close**(): `void` \| `Promise`<`void`\>

关闭

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

内部调用：生命周期
外部调用：自动回收模块

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:238](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L238)

___

### late\_close

▸ `Protected` `Optional` **late_close**(): `void` \| `Promise`<`void`\>

关闭后

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

在子模块 close 和 late_close 后执行

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:247](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L247)

___

### follow\_release

▸ **follow_release**<`T`\>(`object_`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object_` | `T` |

#### Returns

`T`

#### Implementation of

mk\_asset\_.follow\_release\_object.follow\_release

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:267](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L267)

___

### cancel\_release

▸ **cancel_release**<`T`\>(`object_`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object_` | `T` |

#### Returns

`T`

#### Implementation of

mk\_asset\_.follow\_release\_object.cancel\_release

#### Defined in

[assets/@framework/module/mk_life_cycle.ts:290](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/module/mk_life_cycle.ts#L290)
