[index](../README.md) / [language\_](../modules/language_.md) / label\_data

# Class: label\_data<CT\>

[language_](../modules/language_.md).label_data

多语言文本数据

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`data_struct`](../modules/language_.md#data_struct) |

## Hierarchy

- [`base_data`](language_.base_data.md)<`CT`\>

  ↳ **`label_data`**

## Table of contents

### Constructors

- [constructor](language_.label_data.md#constructor)

### Properties

- [key](language_.label_data.md#key)
- [data](language_.label_data.md#data)

## Constructors

### constructor

• **new label_data**<`CT`\>(`type_`, `init_`)

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

[assets/@framework/language/mk_language_manage.ts:213](https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/language/mk_language_manage.ts#L213)

## Properties

### key

• **key**: { [k in string \| number \| symbol]: k }

多语言键

#### Inherited from

[base_data](language_.base_data.md).[key](language_.base_data.md#key)

#### Defined in

[assets/@framework/language/mk_language_manage.ts:195](https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/language/mk_language_manage.ts#L195)

___

### data

• **data**: [`data_struct`](../modules/language_.md#data_struct)<`Exclude`<keyof `CT`, `symbol`\>\>

多语言数据

#### Inherited from

[base_data](language_.base_data.md).[data](language_.base_data.md#data)

#### Defined in

[assets/@framework/language/mk_language_manage.ts:200](https://github.com/1226085293/MKFramework/blob/271662f/assets/@framework/language/mk_language_manage.ts#L200)
