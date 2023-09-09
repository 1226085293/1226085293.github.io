[index](../README.md) / storage

# Class: storage<CT\>

存储器（类型安全）

**`Remarks`**

- (原生/web)接口分离，获得更高的性能

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends `Object` |

## Table of contents

### Constructors

- [constructor](storage.md#constructor)

### Properties

- [key](storage.md#key)

### Methods

- [clear](storage.md#clear)
- [set](storage.md#set)
- [get](storage.md#get)
- [del](storage.md#del)
- [clear](storage.md#clear-1)

## Constructors

### constructor

• **new storage**<`CT`\>(`init_`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_` | `init_config`<`CT`\> |

#### Defined in

[assets/@framework/mk_storage.ts:18](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_storage.ts#L18)

## Properties

### key

• **key**: { [k in string \| number \| symbol]: k }

存储数据键

#### Defined in

[assets/@framework/mk_storage.ts:29](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_storage.ts#L29)

## Methods

### clear

▸ `Static` **clear**(): `void`

清空所有存储器数据

#### Returns

`void`

#### Defined in

[assets/@framework/mk_storage.ts:45](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_storage.ts#L45)

___

### set

▸ **set**<`T`\>(`key_`, `data_`): `boolean`

设置存储数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T` | 存储键 |
| `data_` | `any` | 存储数据 |

#### Returns

`boolean`

storage.status

#### Defined in

[assets/@framework/mk_storage.ts:60](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_storage.ts#L60)

___

### get

▸ **get**<`T`, `T2`\>(`key_`): `T2`

获取数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `T2` | `T2` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T` | 存储键 |

#### Returns

`T2`

#### Defined in

[assets/@framework/mk_storage.ts:93](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_storage.ts#L93)

___

### del

▸ **del**<`T`\>(`key_`): `void`

删除数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key_` | `T` | 存储键 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_storage.ts:132](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_storage.ts#L132)

___

### clear

▸ **clear**(): `void`

清空当前存储器数据

#### Returns

`void`

#### Defined in

[assets/@framework/mk_storage.ts:143](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/mk_storage.ts#L143)
