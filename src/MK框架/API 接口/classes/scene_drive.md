---
article: false
timeline: false
---
[index](../README.md) / scene\_drive

# Class: scene\_drive

场景驱动

**`Remarks`**

场景加载完成后自动执行生命周期函数，驱动模块系统

## Hierarchy

- [`life_cycle`](life_cycle.md)

  ↳ **`scene_drive`**

## Table of contents

### Methods

- [onLoad](scene_drive.md#onload)
- [onDestroy](scene_drive.md#ondestroy)

## Methods

### onLoad

▸ **onLoad**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[life_cycle](life_cycle.md).[onLoad](life_cycle.md#onload)

#### Defined in

[assets/@framework/module/mk_scene_drive.ts:21](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_scene_drive.ts#L21)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Overrides

mk\_life\_cycle.onDestroy

#### Defined in

[assets/@framework/module/mk_scene_drive.ts:38](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/module/mk_scene_drive.ts#L38)
