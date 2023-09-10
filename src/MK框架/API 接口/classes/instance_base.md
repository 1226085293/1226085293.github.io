---
article: false
timeline: false
sitemap.exclude: true
---
[index](../README.md) / instance\_base

# Class: instance\_base

继承单例（类型安全）

## Hierarchy

- **`instance_base`**

  ↳ [`audio`](audio.md)

  ↳ [`language_manage`](language_manage.md)

  ↳ [`http`](network.http.md)

  ↳ [`base`](network.base.md)

  ↳ [`bundle`](bundle.md)

  ↳ [`asset`](asset.md)

  ↳ [`data_sharer`](data_sharer.md)

  ↳ [`logger`](logger.md)

  ↳ [`monitor`](monitor.md)

  ↳ [`ui_manage`](ui_manage.md)

  ↳ [`dynamic_module`](dynamic_module.md)

  ↳ [`game`](game.md)

## Table of contents

### Constructors

- [constructor](instance_base.md#constructor)

### Methods

- [instance](instance_base.md#instance)

## Constructors

### constructor

• **new instance_base**()

## Methods

### instance

▸ `Static` **instance**<`T`\>(`this`, `...args_as_`): `InstanceType`<`T`\>

单例方法

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args_as`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...args_as_` | `ConstructorParameters`<`T`\> |

#### Returns

`InstanceType`<`T`\>

#### Defined in

[assets/@framework/mk_instance_base.ts:4](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/mk_instance_base.ts#L4)
