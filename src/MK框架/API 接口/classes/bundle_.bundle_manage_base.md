[index](../README.md) / [bundle\_](../modules/bundle_.md) / bundle\_manage\_base

# Class: bundle\_manage\_base

[bundle_](../modules/bundle_.md).bundle_manage_base

bundle 管理器基类

**`Remarks`**

注意生命周期函数 open、close 会自动执行父类函数再执行子类函数，不必手动 super.xxx 调用

## Implements

- `follow_release_object`

## Table of contents

### Constructors

- [constructor](bundle_.bundle_manage_base.md#constructor)

### Properties

- [name\_s](bundle_.bundle_manage_base.md#name_s)
- [event](bundle_.bundle_manage_base.md#event)
- [valid\_b](bundle_.bundle_manage_base.md#valid_b)
- [node\_pool\_tab](bundle_.bundle_manage_base.md#node_pool_tab)
- [network](bundle_.bundle_manage_base.md#network)
- [data](bundle_.bundle_manage_base.md#data)
- [\_release\_manage](bundle_.bundle_manage_base.md#_release_manage)

### Methods

- [init](bundle_.bundle_manage_base.md#init)
- [open](bundle_.bundle_manage_base.md#open)
- [close](bundle_.bundle_manage_base.md#close)
- [follow\_release](bundle_.bundle_manage_base.md#follow_release)
- [cancel\_release](bundle_.bundle_manage_base.md#cancel_release)

## Constructors

### constructor

• **new bundle_manage_base**()

#### Defined in

[assets/@framework/resources/mk_bundle.ts:557](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L557)

## Properties

### name\_s

• `Abstract` **name\_s**: `string`

bundle 名

#### Defined in

[assets/@framework/resources/mk_bundle.ts:592](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L592)

___

### event

• `Abstract` **event**: [`event_target`](event_target.md)<`any`\>

事件对象

#### Defined in

[assets/@framework/resources/mk_bundle.ts:594](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L594)

___

### valid\_b

• **valid\_b**: `boolean` = `false`

管理器有效状态

#### Defined in

[assets/@framework/resources/mk_bundle.ts:596](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L596)

___

### node\_pool\_tab

• **node\_pool\_tab**: `Record`<`string`, `NodePool`\>

节点池表

#### Defined in

[assets/@framework/resources/mk_bundle.ts:598](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L598)

___

### network

• `Optional` **network**: [`base`](network.base.md)<[`codec_base`](codec_base.md)\>

网络对象

#### Defined in

[assets/@framework/resources/mk_bundle.ts:600](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L600)

___

### data

• `Optional` **data**: [`data_sharer`](data_sharer.md)<`any`\>

数据获取器

#### Defined in

[assets/@framework/resources/mk_bundle.ts:602](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L602)

___

### \_release\_manage

• `Protected` **\_release\_manage**: [`release`](release.md)

释放管理器

#### Defined in

[assets/@framework/resources/mk_bundle.ts:605](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L605)

## Methods

### init

▸ `Optional` **init**(): `void` \| `Promise`<`void`\>

初始化

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

从其他 bundle 的场景切换到此 bundle 的场景之前调用

#### Defined in

[assets/@framework/resources/mk_bundle.ts:612](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L612)

___

### open

▸ **open**(): `void` \| `Promise`<`void`\>

打开回调

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

从其他 bundle 的场景切换到此 bundle 的场景时调用

#### Defined in

[assets/@framework/resources/mk_bundle.ts:619](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L619)

___

### close

▸ **close**(): `void` \| `Promise`<`void`\>

关闭回调

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

从此 bundle 的场景切换到其他 bundle 的场景时调用

#### Defined in

[assets/@framework/resources/mk_bundle.ts:637](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L637)

___

### follow\_release

▸ **follow_release**<`T`\>(`object_`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `release_param_type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object_` | `T` |

#### Returns

`T`

#### Implementation of

mk\_release\_.follow\_release\_object.follow\_release

#### Defined in

[assets/@framework/resources/mk_bundle.ts:665](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L665)

___

### cancel\_release

▸ **cancel_release**<`T`\>(`object_`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `release_param_type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object_` | `T` |

#### Returns

`T`

#### Implementation of

mk\_release\_.follow\_release\_object.cancel\_release

#### Defined in

[assets/@framework/resources/mk_bundle.ts:681](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/resources/mk_bundle.ts#L681)
