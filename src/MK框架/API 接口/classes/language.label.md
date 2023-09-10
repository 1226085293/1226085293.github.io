---
article: false
timeline: false
---
[index](../README.md) / [language](../modules/language.md) / label

# Class: label

[language](../modules/language.md).label

多语言文本

## Hierarchy

- `mk_language_base`

  ↳ **`label`**

## Table of contents

### Properties

- [direction\_adaptation\_b](language.label.md#direction_adaptation_b)
- [\_type\_s](language.label.md#_type_s)

### Accessors

- [type](language.label.md#type)
- [args\_ss](language.label.md#args_ss)

### Methods

- [\_reset\_data](language.label.md#_reset_data)
- [\_update\_content](language.label.md#_update_content)
- [\_update\_mark](language.label.md#_update_mark)
- [\_set\_type](language.label.md#_set_type)
- [\_set\_type\_s](language.label.md#_set_type_s)
- [\_init\_data](language.label.md#_init_data)
- [\_init\_event](language.label.md#_init_event)
- [\_event\_switch\_language](language.label.md#_event_switch_language)

## Properties

### direction\_adaptation\_b

• **direction\_adaptation\_b**: `boolean` = `false`

label 适配

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:30](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L30)

___

### \_type\_s

• `Protected` **\_type\_s**: `string` = `""`

#### Overrides

mk\_language\_base.\_type\_s

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:55](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L55)

## Accessors

### type

• `get` **type**(): `number`

#### Returns

`number`

#### Overrides

mk\_language\_base.type

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:32](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L32)

• `set` **type**(`value_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | `number` |

#### Returns

`void`

#### Overrides

mk\_language\_base.type

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:36](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L36)

___

### args\_ss

• `get` **args_ss**(): `string`[]

参数

#### Returns

`string`[]

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:45](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L45)

• `set` **args_ss**(`value_ss_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_ss_` | `string`[] |

#### Returns

`void`

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:49](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L49)

## Methods

### \_reset\_data

▸ `Protected` **_reset_data**(): `void`

重置数据

#### Returns

`void`

#### Overrides

mk\_language\_base.\_reset\_data

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:66](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L66)

___

### \_update\_content

▸ `Protected` **_update_content**(): `void`

#### Returns

`void`

#### Overrides

mk\_language\_base.\_update\_content

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:83](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L83)

___

### \_update\_mark

▸ `Protected` **_update_mark**(): `void`

#### Returns

`void`

#### Overrides

mk\_language\_base.\_update\_mark

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:89](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L89)

___

### \_set\_type

▸ `Protected` **_set_type**(`value_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | `number` |

#### Returns

`void`

#### Overrides

mk\_language\_base.\_set\_type

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:93](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L93)

___

### \_set\_type\_s

▸ `Protected` **_set_type_s**(`value_s_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_s_` | `string` |

#### Returns

`void`

#### Overrides

mk\_language\_base.\_set\_type\_s

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:98](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L98)

___

### \_init\_data

▸ `Protected` **_init_data**(): `void`

#### Returns

`void`

#### Overrides

mk\_language\_base.\_init\_data

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:111](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L111)

___

### \_init\_event

▸ `Protected` **_init_event**(`state_b_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state_b_` | `boolean` |

#### Returns

`void`

#### Overrides

mk\_language\_base.\_init\_event

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:154](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L154)

___

### \_event\_switch\_language

▸ `Protected` **_event_switch_language**(): `void`

#### Returns

`void`

#### Overrides

mk\_language\_base.\_event\_switch\_language

#### Defined in

[assets/@framework/language/component/mk_language_label.ts:227](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/language/component/mk_language_label.ts#L227)
