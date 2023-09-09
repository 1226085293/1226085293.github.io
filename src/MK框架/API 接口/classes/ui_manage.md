[index](../README.md) / ui\_manage

# Class: ui\_manage

模块管理器

**`Remarks`**

- 支持模块(注册/打开/关闭/取消注册)

- 内置模块对象池

- 模块栈

- 全屏 UI 展示优化

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`ui_manage`**

## Table of contents

### Constructors

- [constructor](ui_manage.md#constructor)

### Properties

- [get\_regis\_data\_f](ui_manage.md#get_regis_data_f)

### Methods

- [regis](ui_manage.md#regis)
- [unregis](ui_manage.md#unregis)
- [get](ui_manage.md#get)
- [open](ui_manage.md#open)
- [close](ui_manage.md#close)

## Constructors

### constructor

• **new ui_manage**()

#### Overrides

[instance_base](instance_base.md).[constructor](instance_base.md#constructor)

#### Defined in

[assets/@framework/mk_ui_manage.ts:34](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_ui_manage.ts#L34)

## Properties

### get\_regis\_data\_f

• `Optional` **get\_regis\_data\_f**: <T\>(`key`: `T`) => [`regis_data`](ui_manage_.regis_data.md)<`T`\>

#### Type declaration

▸ <`T`\>(`key`): [`regis_data`](ui_manage_.regis_data.md)<`T`\>

获取模块注册数据

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Constructor`<[`view_base`](view_base.md)\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T` |

##### Returns

[`regis_data`](ui_manage_.regis_data.md)<`T`\>

**`Remarks`**

open 未注册模块时会使用此函数获取注册数据自动注册

#### Defined in

[assets/@framework/mk_ui_manage.ts:47](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_ui_manage.ts#L47)

## Methods

### regis

▸ **regis**<`T`\>(`key_`, `source_`, `target_`, `config_?`): `Promise`<`void`\>

注册模块

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Constructor`<[`view_base`](view_base.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T` | 模块键 |
| `source_` | `source_type`<`T`\> | 模块来源 |
| `target_` | ``null`` \| `follow_release_object`<`release_call_back_type`\> | 跟随释放对象 |
| `config_?` | `Partial`<[`regis_config`](ui_manage_.regis_config.md)<`T`\>\> | 模块配置 |

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/mk_ui_manage.ts:84](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_ui_manage.ts#L84)

___

### unregis

▸ **unregis**<`T`\>(`key_`): `Promise`<`void`\>

取消注册模块

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Constructor`<[`view_base`](view_base.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T` | 模块键 |

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/mk_ui_manage.ts:231](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_ui_manage.ts#L231)

___

### get

▸ **get**(): readonly [`view_base`](view_base.md)[]

获取所有模块

#### Returns

readonly [`view_base`](view_base.md)[]

#### Defined in

[assets/@framework/mk_ui_manage.ts:263](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_ui_manage.ts#L263)

▸ **get**<`T`, `T2`, `T3`\>(`key_`, `type_?`): ``null`` \| `T3`

获取指定模块

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Constructor`<[`view_base`](view_base.md)\> & `Function` |
| `T2` | `T` extends { `type_s`: `T2`  } ? `T2` : `never` |
| `T3` | `T`[``"prototype"``] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T` | 模块键 |
| `type_?` | `T2` | 模块类型 |

#### Returns

``null`` \| `T3`

#### Defined in

[assets/@framework/mk_ui_manage.ts:269](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_ui_manage.ts#L269)

▸ **get**<`T`, `T2`, `T3`\>(`key_`, `type_?`): readonly `T3`[]

获取指定模块列表

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Constructor`<[`view_base`](view_base.md)\> & `Function` |
| `T2` | `T` extends { `type_s`: `T2`  } ? `T2` : `never` |
| `T3` | `T`[``"prototype"``] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T`[] | 模块键列表 [type] |
| `type_?` | `T2` | 模块类型 |

#### Returns

readonly `T3`[]

#### Defined in

[assets/@framework/mk_ui_manage.ts:278](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_ui_manage.ts#L278)

___

### open

▸ **open**<`T`, `T2`\>(`key_`, `config_?`): `Promise`<``null`` \| `T2`\>

打开模块

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Constructor`<[`view_base`](view_base.md)\> & `Function` |
| `T2` | `T`[``"prototype"``] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T` | 模块键，必须经过 [regis](ui_manage.md#regis) 接口注册过 |
| `config_?` | [`open_config`](ui_manage_.open_config.md)<`T`\> | 打开配置 |

#### Returns

`Promise`<``null`` \| `T2`\>

#### Defined in

[assets/@framework/mk_ui_manage.ts:316](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_ui_manage.ts#L316)

___

### close

▸ **close**<`T`, `T2`\>(`args_`, `config_?`): `Promise`<`boolean`\>

关闭模块

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Constructor`<[`view_base`](view_base.md)\> |
| `T2` | extends [`view_base`](view_base.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args_` | `Node` \| `T` \| `T2` | 节点/模块键/模块实例 |
| `config_?` | [`close_config`](ui_manage_.close_config.md)<`T`\> | 关闭配置 |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[assets/@framework/mk_ui_manage.ts:479](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_ui_manage.ts#L479)
