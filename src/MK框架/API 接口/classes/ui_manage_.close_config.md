[index](../README.md) / [ui\_manage\_](../modules/ui_manage_.md) / close\_config

# Class: close\_config<CT\>

[ui_manage_](../modules/ui_manage_.md).close_config

关闭ui配置

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends `cc.Constructor`<[`view_base`](view_base.md)\> |

## Table of contents

### Constructors

- [constructor](ui_manage_.close_config.md#constructor)

### Properties

- [type](ui_manage_.close_config.md#type)
- [all\_b](ui_manage_.close_config.md#all_b)
- [destroy\_b](ui_manage_.close_config.md#destroy_b)
- [destroy\_children\_b](ui_manage_.close_config.md#destroy_children_b)

## Constructors

### constructor

• **new close_config**<`CT`\>(`init_?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends `Constructor`<[`view_base`](view_base.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_?` | [`close_config`](ui_manage_.close_config.md)<`CT`\> |

#### Defined in

[assets/@framework/mk_ui_manage.ts:704](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/mk_ui_manage.ts#L704)

## Properties

### type

• `Optional` **type**: `CT` extends { `type_s`: `T`  } ? `T` : `never`

类型

#### Defined in

[assets/@framework/mk_ui_manage.ts:713](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/mk_ui_manage.ts#L713)

___

### all\_b

• `Optional` **all\_b**: `boolean`

关闭全部指定类型的模块

#### Defined in

[assets/@framework/mk_ui_manage.ts:715](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/mk_ui_manage.ts#L715)

___

### destroy\_b

• `Optional` **destroy\_b**: `boolean`

销毁节点

#### Defined in

[assets/@framework/mk_ui_manage.ts:717](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/mk_ui_manage.ts#L717)

___

### destroy\_children\_b

• `Optional` **destroy\_children\_b**: `boolean`

销毁动态子节点

**`Default Value`**

```ts
destroy_b
```

#### Defined in

[assets/@framework/mk_ui_manage.ts:723](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/mk_ui_manage.ts#L723)
