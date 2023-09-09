[index](../README.md) / [ui\_manage\_](../modules/ui_manage_.md) / regis\_config

# Class: regis\_config<CT\>

[ui_manage_](../modules/ui_manage_.md).regis_config

模块注册配置

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends `cc.Constructor`<[`view_base`](view_base.md)\> |

## Hierarchy

- **`regis_config`**

  ↳ [`regis_data`](ui_manage_.regis_data.md)

## Table of contents

### Constructors

- [constructor](ui_manage_.regis_config.md#constructor)

### Properties

- [repeat\_b](ui_manage_.regis_config.md#repeat_b)
- [parent](ui_manage_.regis_config.md#parent)
- [load\_config](ui_manage_.regis_config.md#load_config)
- [pool\_fill\_n](ui_manage_.regis_config.md#pool_fill_n)
- [pool\_max\_hold\_n](ui_manage_.regis_config.md#pool_max_hold_n)
- [pool\_init\_fill\_n](ui_manage_.regis_config.md#pool_init_fill_n)

## Constructors

### constructor

• **new regis_config**<`CT`\>(`init_?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends `Constructor`<[`view_base`](view_base.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_?` | `Partial`<[`regis_config`](ui_manage_.regis_config.md)<`CT`\>\> |

#### Defined in

[assets/@framework/mk_ui_manage.ts:742](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_ui_manage.ts#L742)

## Properties

### repeat\_b

• **repeat\_b**: `boolean` = `false`

重复打开

**`Default Value`**

```ts
false
```

#### Defined in

[assets/@framework/mk_ui_manage.ts:759](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_ui_manage.ts#L759)

___

### parent

• **parent**: `undefined` \| `Node`

默认父节点

**`Default Value`**

```ts
Canvas 节点
```

#### Defined in

[assets/@framework/mk_ui_manage.ts:765](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_ui_manage.ts#L765)

___

### load\_config

• `Optional` **load\_config**: [`get_config`](../interfaces/asset_.get_config.md)<`Prefab`, `Prefab`\>

加载配置

#### Defined in

[assets/@framework/mk_ui_manage.ts:767](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_ui_manage.ts#L767)

___

### pool\_fill\_n

• **pool\_fill\_n**: `number`

对象池数量不足时扩充数量

**`Default Value`**

```ts
this.repeat_b ? 8 : 1
```

#### Defined in

[assets/@framework/mk_ui_manage.ts:773](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_ui_manage.ts#L773)

___

### pool\_max\_hold\_n

• **pool\_max\_hold\_n**: `number` = `-1`

对象池最大保留数量

**`Default Value`**

```ts
-1: 不启用
```

#### Defined in

[assets/@framework/mk_ui_manage.ts:779](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_ui_manage.ts#L779)

___

### pool\_init\_fill\_n

• **pool\_init\_fill\_n**: `number` = `1`

对象池初始化扩充数量

**`Default Value`**

```ts
1
```

#### Defined in

[assets/@framework/mk_ui_manage.ts:785](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_ui_manage.ts#L785)
