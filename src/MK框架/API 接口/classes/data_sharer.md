[index](../README.md) / data\_sharer

# Class: data\_sharer<CT\>

数据共享器

**`Remarks`**

用以模块间共享数据

- 支持请求数据返回

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | `any` |

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`data_sharer`**

## Table of contents

### Properties

- [key](data_sharer.md#key)

### Methods

- [delete](data_sharer.md#delete)
- [set](data_sharer.md#set)
- [get](data_sharer.md#get)
- [clear](data_sharer.md#clear)

## Properties

### key

• **key**: { [k in string \| number \| symbol]: k }

#### Defined in

[assets/@framework/mk_data_sharer.ts:14](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_data_sharer.ts#L14)

## Methods

### delete

▸ **delete**<`T`\>(`key_`): `void`

删除数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T` | 注册键 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_data_sharer.ts:28](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_data_sharer.ts#L28)

___

### set

▸ **set**<`T`, `T2`\>(`key_`, `data_`): `void`

设置数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `T2` | `CT`[`T`] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T` | 注册键 |
| `data_` | `T2` | 数据 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_data_sharer.ts:47](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_data_sharer.ts#L47)

___

### get

▸ **get**<`T`, `T2`\>(`key_`): ``null`` \| `T2`

获取数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `T2` | `CT`[`T`] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T` | 注册键 |

#### Returns

``null`` \| `T2`

#### Defined in

[assets/@framework/mk_data_sharer.ts:65](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_data_sharer.ts#L65)

▸ **get**<`T`, `T2`, `T3`\>(`key_`, `request_`): `T2` extends ``true`` ? `Promise`<`T3`\> : ``null`` \| `T3`

获取数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `T2` | extends `boolean` |
| `T3` | `CT`[`T`] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T` | 注册键 |
| `request_` | `T2` | 请求数据，若不存在则等待 set 后返回 |

#### Returns

`T2` extends ``true`` ? `Promise`<`T3`\> : ``null`` \| `T3`

#### Defined in

[assets/@framework/mk_data_sharer.ts:71](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_data_sharer.ts#L71)

___

### clear

▸ **clear**(): `void`

清空

#### Returns

`void`

#### Defined in

[assets/@framework/mk_data_sharer.ts:92](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/mk_data_sharer.ts#L92)
