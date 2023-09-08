[index](../README.md) / dynamic\_module

# Class: dynamic\_module

动态模块

**`Remarks`**

用以解除循环引用

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`dynamic_module`**

## Table of contents

### Methods

- [default](dynamic_module.md#default)
- [all](dynamic_module.md#all)

## Methods

### default

▸ **default**<`T`\>(`module_`): `Awaited`<`T`\>[``"default"``]

获取模块默认导出

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Promise`<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `module_` | `T` | 动态模块 |

#### Returns

`Awaited`<`T`\>[``"default"``]

#### Defined in

[assets/@framework/mk_dynamic_module.ts:17](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/mk_dynamic_module.ts#L17)

___

### all

▸ **all**<`T`\>(`module_`): `Awaited`<`T`\>

获取模块所有导出

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Promise`<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `module_` | `T` | 动态模块 |

#### Returns

`Awaited`<`T`\>

#### Defined in

[assets/@framework/mk_dynamic_module.ts:55](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/mk_dynamic_module.ts#L55)
