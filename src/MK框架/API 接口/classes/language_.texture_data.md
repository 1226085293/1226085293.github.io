[index](../README.md) / [Exports](../modules.md) / [language\_](../modules/language_.md) / texture\_data

# Class: texture\_data<CT\>

[language_](../modules/language_.md).texture_data

多语言纹理数据

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`data_struct`](../modules/language_.md#data_struct) |

## Hierarchy

- [`base_data`](language_.base_data.md)<`CT`\>

  ↳ **`texture_data`**

## Table of contents

### Constructors

- [constructor](language_.texture_data.md#constructor)

### Properties

- [key](language_.texture_data.md#key)
- [data](language_.texture_data.md#data)

## Constructors

### constructor

• **new texture_data**<`CT`\>(`type_`, `init_`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`data_struct`](../modules/language_.md#data_struct)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type_` | `string` |
| `init_` | `CT` |

#### Overrides

[base_data](language_.base_data.md).[constructor](language_.base_data.md#constructor)

#### Defined in

[assets/@framework/language/mk_language_manage.ts:205](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/language/mk_language_manage.ts#L205)

## Properties

### key

• **key**: { [k in string \| number \| symbol]: k }

多语言键

#### Inherited from

[base_data](language_.base_data.md).[key](language_.base_data.md#key)

#### Defined in

[assets/@framework/language/mk_language_manage.ts:195](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/language/mk_language_manage.ts#L195)

___

### data

• **data**: [`data_struct`](../modules/language_.md#data_struct)<`Exclude`<keyof `CT`, `symbol`\>\>

多语言数据

#### Inherited from

[base_data](language_.base_data.md).[data](language_.base_data.md#data)

#### Defined in

[assets/@framework/language/mk_language_manage.ts:200](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/language/mk_language_manage.ts#L200)
