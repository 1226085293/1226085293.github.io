---
article: false
timeline: false
---
[index](../README.md) / view\_base

# Class: view\_base

视图基类

**`Remarks`**

- 添加编辑器快捷操作

- 添加弹窗动画配置

- 独立展示配置

## Hierarchy

- [`life_cycle`](life_cycle.md)

  ↳ **`view_base`**

## Table of contents

### Properties

- [config](view_base.md#config)
- [show\_alone\_b](view_base.md#show_alone_b)
- [animation\_config](view_base.md#animation_config)
- [data](view_base.md#data)
- [\_reset\_data\_b](view_base.md#_reset_data_b)
- [\_view\_config](view_base.md#_view_config)

### Accessors

- [auto\_mask\_b](view_base.md#auto_mask_b)
- [auto\_widget\_b](view_base.md#auto_widget_b)
- [auto\_block\_input\_b](view_base.md#auto_block_input_b)
- [type\_s](view_base.md#type_s)
- [config](view_base.md#config-1)

### Methods

- [onLoad](view_base.md#onload)
- [open](view_base.md#open)
- [close](view_base.md#close)
- [late\_close](view_base.md#late_close)
- [\_init\_editor](view_base.md#_init_editor)

## Properties

### config

▪ `Static` **config**: `global_config`

#### Overrides

mk\_life\_cycle.config

#### Defined in

[assets/@framework/module/mk_view_base.ts:117](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L117)

___

### show\_alone\_b

• **show\_alone\_b**: `boolean` = `false`

#### Defined in

[assets/@framework/module/mk_view_base.ts:137](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L137)

___

### animation\_config

• **animation\_config**: `animation_config`

#### Defined in

[assets/@framework/module/mk_view_base.ts:144](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L144)

___

### data

• `Optional` **data**: `any`

视图数据

**`Remarks`**

如果是 class 类型数据会在 close 后自动重置，根据 this._reset_data_b 控制

#### Defined in

[assets/@framework/module/mk_view_base.ts:191](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L191)

___

### \_reset\_data\_b

• `Protected` **\_reset\_data\_b**: `boolean` = `true`

重置 data

**`Remarks`**

close 后重置 this.data，data 必须为 class 类型

#### Defined in

[assets/@framework/module/mk_view_base.ts:216](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L216)

___

### \_view\_config

• `Protected` **\_view\_config**: [`view_config`](view_base_.view_config.md)

视图配置

#### Defined in

[assets/@framework/module/mk_view_base.ts:218](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L218)

## Accessors

### auto\_mask\_b

• `get` **auto_mask_b**(): `boolean`

#### Returns

`boolean`

#### Defined in

[assets/@framework/module/mk_view_base.ts:151](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L151)

• `set` **auto_mask_b**(`value_b_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_b_` | `boolean` |

#### Returns

`void`

#### Defined in

[assets/@framework/module/mk_view_base.ts:155](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L155)

___

### auto\_widget\_b

• `get` **auto_widget_b**(): `boolean`

#### Returns

`boolean`

#### Defined in

[assets/@framework/module/mk_view_base.ts:164](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L164)

• `set` **auto_widget_b**(`value_b_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_b_` | `boolean` |

#### Returns

`void`

#### Defined in

[assets/@framework/module/mk_view_base.ts:168](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L168)

___

### auto\_block\_input\_b

• `get` **auto_block_input_b**(): `boolean`

#### Returns

`boolean`

#### Defined in

[assets/@framework/module/mk_view_base.ts:177](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L177)

• `set` **auto_block_input_b**(`value_b_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_b_` | `boolean` |

#### Returns

`void`

#### Defined in

[assets/@framework/module/mk_view_base.ts:181](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L181)

___

### type\_s

• `get` **type_s**(): `string`

视图类型

#### Returns

`string`

#### Defined in

[assets/@framework/module/mk_view_base.ts:194](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L194)

___

### config

• `set` **config**(`config_`): `void`

模块配置

#### Parameters

| Name | Type |
| :------ | :------ |
| `config_` | `create_config` |

#### Returns

`void`

#### Overrides

mk\_life\_cycle.config

#### Defined in

[assets/@framework/module/mk_view_base.ts:199](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L199)

## Methods

### onLoad

▸ `Protected` **onLoad**(): `void`

#### Returns

`void`

#### Overrides

[life_cycle](life_cycle.md).[onLoad](life_cycle.md#onload)

#### Defined in

[assets/@framework/module/mk_view_base.ts:221](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L221)

___

### open

▸ `Protected` **open**(): `void` \| `Promise`<`void`\>

打开

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

init 后执行，在此处执行无需 init_data 支持的模块初始化操作

#### Overrides

[life_cycle](life_cycle.md).[open](life_cycle.md#open)

#### Defined in

[assets/@framework/module/mk_view_base.ts:243](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L243)

___

### close

▸ **close**(`config_?`): `void` \| `Promise`<`void`\>

关闭

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config_?` | `Omit`<[`close_config`](ui_manage_.close_config.md)<`any`\>, ``"type"`` \| ``"all_b"``\> | 关闭配置 |

#### Returns

`void` \| `Promise`<`void`\>

#### Overrides

[life_cycle](life_cycle.md).[close](life_cycle.md#close)

#### Defined in

[assets/@framework/module/mk_view_base.ts:261](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L261)

___

### late\_close

▸ `Protected` `Optional` **late_close**(): `void` \| `Promise`<`void`\>

关闭后

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

在子模块 close 和 late_close 后执行

#### Overrides

[life_cycle](life_cycle.md).[late_close](life_cycle.md#late_close)

#### Defined in

[assets/@framework/module/mk_view_base.ts:271](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L271)

___

### \_init\_editor

▸ `Protected` **_init_editor**(): `void`

初始化编辑器

#### Returns

`void`

#### Overrides

mk\_life\_cycle.\_init\_editor

#### Defined in

[assets/@framework/module/mk_view_base.ts:293](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_view_base.ts#L293)
