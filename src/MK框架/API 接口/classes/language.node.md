---
article: false
timeline: false
sitemap:
  exclude: true
---
[index](../README.md) / [language](../modules/language.md) / node

# Class: node

[language](../modules/language.md).node

多语言节点

## Hierarchy

- [`life_cycle`](life_cycle.md)

  ↳ **`node`**

## Table of contents

### Properties

- [language\_s](language.node.md#language_s)
- [node\_as](language.node.md#node_as)
- [layout\_adaptation\_b](language.node.md#layout_adaptation_b)
- [\_use\_layer\_b](language.node.md#_use_layer_b)

### Accessors

- [language](language.node.md#language)
- [current\_node](language.node.md#current_node)

### Methods

- [create](language.node.md#create)
- [open](language.node.md#open)

## Properties

### language\_s

• **language\_s**: ``"zh_cn"`` \| ``"en_us"`` = `global_config.language.default_type_s`

语言

#### Defined in

[assets/@framework/language/component/mk_language_node.ts:53](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/language/component/mk_language_node.ts#L53)

___

### node\_as

• **node\_as**: `node`[] = `[]`

语言节点列表

#### Defined in

[assets/@framework/language/component/mk_language_node.ts:100](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/language/component/mk_language_node.ts#L100)

___

### layout\_adaptation\_b

• **layout\_adaptation\_b**: `boolean` = `false`

layout 适配

#### Defined in

[assets/@framework/language/component/mk_language_node.ts:107](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/language/component/mk_language_node.ts#L107)

___

### \_use\_layer\_b

• `Protected` **\_use\_layer\_b**: `boolean` = `false`

#### Overrides

mk\_life\_cycle.\_use\_layer\_b

#### Defined in

[assets/@framework/language/component/mk_language_node.ts:116](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/language/component/mk_language_node.ts#L116)

## Accessors

### language

• `get` **language**(): `number`

语言

#### Returns

`number`

#### Defined in

[assets/@framework/language/component/mk_language_node.ts:60](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/language/component/mk_language_node.ts#L60)

• `set` **language**(`value_n_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_n_` | `number` |

#### Returns

`void`

#### Defined in

[assets/@framework/language/component/mk_language_node.ts:64](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/language/component/mk_language_node.ts#L64)

___

### current\_node

• `get` **current_node**(): ``null`` \| `Node`

当前语言节点

#### Returns

``null`` \| `Node`

#### Defined in

[assets/@framework/language/component/mk_language_node.ts:111](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/language/component/mk_language_node.ts#L111)

## Methods

### create

▸ `Protected` **create**(): `void` \| `Promise`<`void`\>

创建

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

可在此处初始化视图状态

- 静态模块：onLoad 时调用

- 动态模块：addChild 后调用

#### Overrides

[life_cycle](life_cycle.md).[create](life_cycle.md#create)

#### Defined in

[assets/@framework/language/component/mk_language_node.ts:121](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/language/component/mk_language_node.ts#L121)

___

### open

▸ `Protected` **open**(): `void` \| `Promise`<`void`\>

打开

#### Returns

`void` \| `Promise`<`void`\>

**`Remarks`**

init 后执行，在此处执行无需 init_data 支持的模块初始化操作

#### Overrides

[life_cycle](life_cycle.md).[open](life_cycle.md#open)

#### Defined in

[assets/@framework/language/component/mk_language_node.ts:125](https://github.com/1226085293/MKFramework/blob/7cc97f0/assets/@framework/language/component/mk_language_node.ts#L125)
