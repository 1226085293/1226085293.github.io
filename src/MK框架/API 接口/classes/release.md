[index](../README.md) / release

# Class: release

对象释放器

**`Remarks`**

- 统一 (cc.Node/cc.Asset) 资源的释放逻辑

- 可以通过 function 或继承添加自定义释放逻辑

## Table of contents

### Constructors

- [constructor](release.md#constructor)

### Methods

- [add](release.md#add)
- [release](release.md#release)
- [release\_all](release.md#release_all)

## Constructors

### constructor

• **new release**()

## Methods

### add

▸ **add**<`T`\>(`object_`): `T`

添加释放对象

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `release_param_type` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object_` | `T` | 要跟随模块释放的对象或列表 |

#### Returns

`T`

#### Defined in

[assets/@framework/mk_release.ts:26](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/mk_release.ts#L26)

___

### release

▸ **release**(`object_?`): `Promise`<`void`\>

释放对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object_?` | `release_param_type` | 指定对象 |

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/mk_release.ts:55](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/mk_release.ts#L55)

___

### release\_all

▸ **release_all**(): `Promise`<`void`\>

释放所有对象

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/mk_release.ts:75](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/mk_release.ts#L75)
