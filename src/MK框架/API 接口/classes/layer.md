[index](../README.md) / layer

# Class: layer

层级管理

**`Remarks`**

- 动态多类型层级划分

- 支持类型层级细粒度划分

## Hierarchy

- `Component`

  ↳ **`layer`**

  ↳↳ [`life_cycle`](life_cycle.md)

## Table of contents

### Properties

- [config](layer.md#config)
- [layer\_type\_n](layer.md#layer_type_n)
- [\_use\_layer\_b](layer.md#_use_layer_b)

### Accessors

- [init\_editor](layer.md#init_editor)
- [child\_layer\_n](layer.md#child_layer_n)

### Methods

- [set\_layer\_refresh\_interval](layer.md#set_layer_refresh_interval)
- [onLoad](layer.md#onload)
- [\_init\_editor](layer.md#_init_editor)

## Properties

### config

▪ `Static` **config**: [`global_config`](../interfaces/layer_.global_config.md)

#### Defined in

[assets/@framework/module/mk_layer.ts:39](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/module/mk_layer.ts#L39)

___

### layer\_type\_n

• **layer\_type\_n**: `number` = `0`

层类型

#### Defined in

[assets/@framework/module/mk_layer.ts:64](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/module/mk_layer.ts#L64)

___

### \_use\_layer\_b

• `Protected` **\_use\_layer\_b**: `boolean` = `true`

使用 layer

**`Default Value`**

```ts
true
```

**`Remarks`**

false：关闭 layer 功能

#### Defined in

[assets/@framework/module/mk_layer.ts:94](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/module/mk_layer.ts#L94)

## Accessors

### init\_editor

• `get` **init_editor**(): `void`

初始化编辑器

#### Returns

`void`

#### Defined in

[assets/@framework/module/mk_layer.ts:49](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/module/mk_layer.ts#L49)

___

### child\_layer\_n

• `get` **child_layer_n**(): `number`

层级

#### Returns

`number`

#### Defined in

[assets/@framework/module/mk_layer.ts:77](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/module/mk_layer.ts#L77)

• `set` **child_layer_n**(`value_n_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_n_` | `number` |

#### Returns

`void`

#### Defined in

[assets/@framework/module/mk_layer.ts:81](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/module/mk_layer.ts#L81)

## Methods

### set\_layer\_refresh\_interval

▸ `Static` **set_layer_refresh_interval**(`node_`, `interval_ms_n_`, `recursion_b_?`): `void`

设置层级刷新间隔

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `node_` | `Node` | `undefined` | 节点 |
| `interval_ms_n_` | `number` | `undefined` | 间隔时间（毫秒） |
| `recursion_b_` | `boolean` | `false` | 递归 |

#### Returns

`void`

**`Remarks`**

设置 node_ 的子节点将延迟 interval_ms_n_ 时间后更新层级

#### Defined in

[assets/@framework/module/mk_layer.ts:109](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/module/mk_layer.ts#L109)

___

### onLoad

▸ `Protected` **onLoad**(): `void`

#### Returns

`void`

#### Overrides

cc.Component.onLoad

#### Defined in

[assets/@framework/module/mk_layer.ts:126](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/module/mk_layer.ts#L126)

___

### \_init\_editor

▸ `Protected` **_init_editor**(): `void`

初始化编辑器

#### Returns

`void`

#### Defined in

[assets/@framework/module/mk_layer.ts:136](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/module/mk_layer.ts#L136)
