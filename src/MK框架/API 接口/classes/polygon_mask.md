[index](../README.md) / polygon\_mask

# Class: polygon\_mask

多边形遮罩

**`Remarks`**

- 多边形图片遮罩

- 多边形触摸屏蔽

## Hierarchy

- `Component`

  ↳ **`polygon_mask`**

## Table of contents

### Properties

- [mask](polygon_mask.md#mask)
- [shield\_touch\_b](polygon_mask.md#shield_touch_b)

### Accessors

- [track\_node](polygon_mask.md#track_node)
- [offset\_v3](polygon_mask.md#offset_v3)

### Methods

- [onLoad](polygon_mask.md#onload)
- [start](polygon_mask.md#start)
- [onEnable](polygon_mask.md#onenable)
- [onDisable](polygon_mask.md#ondisable)
- [update](polygon_mask.md#update)
- [onDestroy](polygon_mask.md#ondestroy)
- [update\_mask](polygon_mask.md#update_mask)

## Properties

### mask

• **mask**: ``null`` \| `Mask` = `null`

遮罩组件

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:27](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L27)

___

### shield\_touch\_b

• **shield\_touch\_b**: `boolean` = `true`

屏蔽触摸

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:31](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L31)

## Accessors

### track\_node

• `get` **track_node**(): `Node`

跟踪节点

#### Returns

`Node`

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:39](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L39)

• `set` **track_node**(`value_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | `Node` |

#### Returns

`void`

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:43](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L43)

___

### offset\_v3

• `get` **offset_v3**(): `Vec3`

偏移坐标

#### Returns

`Vec3`

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:49](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L49)

• `set` **offset_v3**(`value_v3_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_v3_` | `Vec3` |

#### Returns

`void`

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:53](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L53)

## Methods

### onLoad

▸ `Protected` **onLoad**(): `void`

#### Returns

`void`

#### Overrides

cc.Component.onLoad

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:99](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L99)

___

### start

▸ `Protected` **start**(): `void`

#### Returns

`void`

#### Overrides

cc.Component.start

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:161](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L161)

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

#### Overrides

cc.Component.onEnable

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:165](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L165)

___

### onDisable

▸ `Protected` **onDisable**(): `void`

#### Returns

`void`

#### Overrides

cc.Component.onDisable

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:180](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L180)

___

### update

▸ `Protected` **update**(`dt_n_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dt_n_` | `number` |

#### Returns

`void`

#### Overrides

cc.Component.update

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:189](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L189)

___

### onDestroy

▸ `Protected` **onDestroy**(): `void`

#### Returns

`void`

#### Overrides

cc.Component.onDestroy

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:197](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L197)

___

### update\_mask

▸ **update_mask**(): `void`

更新遮罩

#### Returns

`void`

#### Defined in

[assets/@framework/@component/mk_polygon_mask.ts:204](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/@component/mk_polygon_mask.ts#L204)
