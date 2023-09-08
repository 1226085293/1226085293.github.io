[index](../README.md) / [Exports](../modules.md) / bundle

# Class: bundle

bundle 管理器

**`Remarks`**

- 封装(加载/预加载)场景为 load_scene

- 支持(远程/本地) bundle

- 支持 bundle 热更

- 封装(bundle/scene)切换事件

- 支持 bundle 管理器，用于子游戏管理

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`bundle`**

## Table of contents

### Constructors

- [constructor](bundle.md#constructor)

### Properties

- [event](bundle.md#event)
- [pre\_bundle\_s](bundle.md#pre_bundle_s)
- [pre\_scene\_s](bundle.md#pre_scene_s)
- [bundle\_map](bundle.md#bundle_map)
- [switch\_scene\_b](bundle.md#switch_scene_b)

### Accessors

- [bundle\_s](bundle.md#bundle_s)
- [scene\_s](bundle.md#scene_s)

### Methods

- [set](bundle.md#set)
- [load](bundle.md#load)
- [load\_scene](bundle.md#load_scene)
- [reload](bundle.md#reload)

## Constructors

### constructor

• **new bundle**()

#### Overrides

[instance_base](instance_base.md).[constructor](instance_base.md#constructor)

#### Defined in

[assets/@framework/resources/mk_bundle.ts:61](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L61)

## Properties

### event

• **event**: [`event_target`](event_target.md)<`event_protocol`\>

事件

#### Defined in

[assets/@framework/resources/mk_bundle.ts:97](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L97)

___

### pre\_bundle\_s

• `Optional` **pre\_bundle\_s**: `string`

上个场景bundle

#### Defined in

[assets/@framework/resources/mk_bundle.ts:99](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L99)

___

### pre\_scene\_s

• **pre\_scene\_s**: `string`

上个场景名

#### Defined in

[assets/@framework/resources/mk_bundle.ts:101](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L101)

___

### bundle\_map

• **bundle\_map**: `Map`<`string`, [`bundle_data`](bundle_.bundle_data.md)\>

bundle列表

#### Defined in

[assets/@framework/resources/mk_bundle.ts:103](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L103)

___

### switch\_scene\_b

• **switch\_scene\_b**: `boolean` = `false`

切换场景状态

#### Defined in

[assets/@framework/resources/mk_bundle.ts:105](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L105)

## Accessors

### bundle\_s

• `get` **bundle_s**(): `string`

当前场景bundle

#### Returns

`string`

#### Defined in

[assets/@framework/resources/mk_bundle.ts:108](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L108)

• `set` **bundle_s**(`value_s_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_s_` | `string` |

#### Returns

`void`

#### Defined in

[assets/@framework/resources/mk_bundle.ts:112](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L112)

___

### scene\_s

• `get` **scene_s**(): `string`

当前场景名

#### Returns

`string`

#### Defined in

[assets/@framework/resources/mk_bundle.ts:117](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L117)

• `set` **scene_s**(`value_s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_s` | `string` |

#### Returns

`void`

#### Defined in

[assets/@framework/resources/mk_bundle.ts:121](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L121)

## Methods

### set

▸ **set**(`bundle_`): `void`

设置 bundle 数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bundle_` | [`bundle_data`](bundle_.bundle_data.md) | bundle 信息 |

#### Returns

`void`

#### Defined in

[assets/@framework/resources/mk_bundle.ts:142](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L142)

___

### load

▸ **load**(`args_`): `Promise`<``null`` \| `Bundle`\>

加载 bundle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args_` | `string` \| [`load_config`](bundle_.load_config.md) | bundle 名 \| 加载配置 |

#### Returns

`Promise`<``null`` \| `Bundle`\>

#### Defined in

[assets/@framework/resources/mk_bundle.ts:160](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L160)

___

### load\_scene

▸ **load_scene**(`scene_s_`, `config_?`): `Promise`<`boolean`\>

切换场景

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scene_s_` | `string` | 场景名 |
| `config_?` | `Partial`<[`switch_scene_config`](bundle_.switch_scene_config.md)\> | 切换配置 |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[assets/@framework/resources/mk_bundle.ts:222](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L222)

___

### reload

▸ **reload**(`bundle_`): `Promise`<``null`` \| `Bundle`\>

重新加载 bundle

#### Parameters

| Name | Type |
| :------ | :------ |
| `bundle_` | [`bundle_info`](bundle_.bundle_info.md) & `Required`<`Pick`<[`bundle_info`](bundle_.bundle_info.md), ``"origin_s"``\>\> |

#### Returns

`Promise`<``null`` \| `Bundle`\>

#### Defined in

[assets/@framework/resources/mk_bundle.ts:341](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/resources/mk_bundle.ts#L341)
