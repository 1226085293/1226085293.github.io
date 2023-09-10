---
article: false
timeline: false
sitemap:
  exclude: true
---
[index](../README.md) / obj\_pool

# Class: obj\_pool<CT\>

异步对象池

## Type parameters

| Name |
| :------ |
| `CT` |

## Table of contents

### Constructors

- [constructor](obj_pool.md#constructor)

### Accessors

- [valid\_b](obj_pool.md#valid_b)

### Methods

- [put](obj_pool.md#put)
- [get](obj_pool.md#get)
- [clear](obj_pool.md#clear)
- [destroy](obj_pool.md#destroy)

## Constructors

### constructor

• **new obj_pool**<`CT`\>(`init_`)

#### Type parameters

| Name |
| :------ |
| `CT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_` | `config`<`CT`\> |

#### Defined in

[assets/@framework/mk_obj_pool.ts:87](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/mk_obj_pool.ts#L87)

## Accessors

### valid\_b

• `get` **valid_b**(): `boolean`

有效状态

#### Returns

`boolean`

#### Defined in

[assets/@framework/mk_obj_pool.ts:96](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/mk_obj_pool.ts#L96)

## Methods

### put

▸ **put**(`obj_`): `Promise`<`void`\>

导入对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj_` | `any` | 添加对象 |

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/mk_obj_pool.ts:113](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/mk_obj_pool.ts#L113)

___

### get

▸ **get**(): `Promise`<`CT`\>

获取对象

#### Returns

`Promise`<`CT`\>

#### Defined in

[assets/@framework/mk_obj_pool.ts:137](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/mk_obj_pool.ts#L137)

___

### clear

▸ **clear**(): `Promise`<`void`\>

清空数据

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/mk_obj_pool.ts:160](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/mk_obj_pool.ts#L160)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

销毁对象池

#### Returns

`Promise`<`void`\>

**`Remarks`**

销毁后将无法 get/put

#### Defined in

[assets/@framework/mk_obj_pool.ts:173](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/mk_obj_pool.ts#L173)
