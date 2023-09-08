[index](../README.md) / [Exports](../modules.md) / language\_manage

# Class: language\_manage

多语言管理器

**`Remarks`**

- 多语言资源单位为模块，防止无用多语言资源堆积

- 支持多语言(文本/图片/节点)，三种方式满足任何需求

- 支持编辑器预览

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`language_manage`**

## Table of contents

### Properties

- [event](language_manage.md#event)
- [label\_data\_tab](language_manage.md#label_data_tab)
- [texture\_data\_tab](language_manage.md#texture_data_tab)

### Accessors

- [type\_s](language_manage.md#type_s)
- [data](language_manage.md#data)

### Methods

- [get\_label](language_manage.md#get_label)
- [get\_texture](language_manage.md#get_texture)
- [add\_label](language_manage.md#add_label)
- [add\_texture](language_manage.md#add_texture)

## Properties

### event

• **event**: [`event_target`](event_target.md)<`event_protocol`\>

事件

#### Defined in

[assets/@framework/language/mk_language_manage.ts:38](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/language/mk_language_manage.ts#L38)

___

### label\_data\_tab

• **label\_data\_tab**: `Record`<`type_type`, [`data_struct`](../modules/language_.md#data_struct)<`any`\>\>

文本数据

#### Defined in

[assets/@framework/language/mk_language_manage.ts:40](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/language/mk_language_manage.ts#L40)

___

### texture\_data\_tab

• **texture\_data\_tab**: `Record`<`type_type`, [`data_struct`](../modules/language_.md#data_struct)<`any`\>\>

纹理数据

#### Defined in

[assets/@framework/language/mk_language_manage.ts:42](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/language/mk_language_manage.ts#L42)

## Accessors

### type\_s

• `get` **type_s**(): ``"zh_cn"`` \| ``"en_us"``

当前语言类型

#### Returns

``"zh_cn"`` \| ``"en_us"``

#### Defined in

[assets/@framework/language/mk_language_manage.ts:45](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/language/mk_language_manage.ts#L45)

• `set` **type_s**(`value_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | ``"zh_cn"`` \| ``"en_us"`` |

#### Returns

`void`

#### Defined in

[assets/@framework/language/mk_language_manage.ts:49](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/language/mk_language_manage.ts#L49)

___

### data

• `get` **data**(): `type_data`

获取语言数据

#### Returns

`type_data`

#### Defined in

[assets/@framework/language/mk_language_manage.ts:54](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/language/mk_language_manage.ts#L54)

## Methods

### get\_label

▸ **get_label**(`type_`, `mark_s_`, `config_?`): `string`

获取文本

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type_` | `type_type` | 类型 |
| `mark_s_` | `string` | 标识 |
| `config_?` | `Partial`<[`label_config`](language_.label_config.md)\> | 配置 |

#### Returns

`string`

#### Defined in

[assets/@framework/language/mk_language_manage.ts:72](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/language/mk_language_manage.ts#L72)

___

### get\_texture

▸ **get_texture**(`type_`, `mark_s_`, `target_`, `language_?`): `Promise`<``null`` \| `SpriteFrame`\>

获取纹理

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type_` | `type_type` | 类型 |
| `mark_s_` | `string` | 标记 |
| `target_` | [`follow_release_object`](../modules/asset_.md#follow_release_object) | 跟随释放对象 |
| `language_` | ``"zh_cn"`` \| ``"en_us"`` | 语言 |

#### Returns

`Promise`<``null`` \| `SpriteFrame`\>

#### Defined in

[assets/@framework/language/mk_language_manage.ts:101](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/language/mk_language_manage.ts#L101)

___

### add\_label

▸ **add_label**(`type_`, `data_`): `void`

添加文本数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type_` | `type_type` | 类型 |
| `data_` | [`data_struct`](../modules/language_.md#data_struct)<`any`\> | 数据 |

#### Returns

`void`

#### Defined in

[assets/@framework/language/mk_language_manage.ts:137](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/language/mk_language_manage.ts#L137)

___

### add\_texture

▸ **add_texture**(`type_`, `data_`): `void`

添加纹理数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type_` | `type_type` | 类型 |
| `data_` | [`data_struct`](../modules/language_.md#data_struct)<`any`\> | 数据 |

#### Returns

`void`

#### Defined in

[assets/@framework/language/mk_language_manage.ts:149](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/language/mk_language_manage.ts#L149)
