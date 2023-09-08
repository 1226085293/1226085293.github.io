[index](../README.md) / [obj\_pool](../modules/obj_pool-1.md) / sync

# Class: sync<CT\>

[obj_pool](../modules/obj_pool-1.md).sync

同步对象池

## Type parameters

| Name |
| :------ |
| `CT` |

## Table of contents

### Constructors

- [constructor](obj_pool-1.sync.md#constructor)

### Accessors

- [valid\_b](obj_pool-1.sync.md#valid_b)

### Methods

- [put](obj_pool-1.sync.md#put)
- [get](obj_pool-1.sync.md#get)
- [clear](obj_pool-1.sync.md#clear)
- [destroy](obj_pool-1.sync.md#destroy)

## Constructors

### constructor

• **new sync**<`CT`\>(`init_?`)

#### Type parameters

| Name |
| :------ |
| `CT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_?` | `config`<`CT`\> |

#### Defined in

[assets/@framework/mk_obj_pool.ts:205](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/mk_obj_pool.ts#L205)

## Accessors

### valid\_b

• `get` **valid_b**(): `boolean`

有效状态

#### Returns

`boolean`

#### Defined in

[assets/@framework/mk_obj_pool.ts:214](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/mk_obj_pool.ts#L214)

## Methods

### put

▸ **put**(`obj_`): `void`

导入对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj_` | `CT` |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_obj_pool.ts:227](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/mk_obj_pool.ts#L227)

___

### get

▸ **get**(): `CT`

获取对象

#### Returns

`CT`

#### Defined in

[assets/@framework/mk_obj_pool.ts:246](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/mk_obj_pool.ts#L246)

___

### clear

▸ **clear**(): `void`

清空数据

#### Returns

`void`

#### Defined in

[assets/@framework/mk_obj_pool.ts:262](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/mk_obj_pool.ts#L262)

___

### destroy

▸ **destroy**(): `void`

销毁对象池

#### Returns

`void`

**`Remarks`**

销毁后将无法 get/put

#### Defined in

[assets/@framework/mk_obj_pool.ts:275](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/mk_obj_pool.ts#L275)
