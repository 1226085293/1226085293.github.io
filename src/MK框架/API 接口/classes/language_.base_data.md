[index](../README.md) / [language\_](../modules/language_.md) / base\_data

# Class: base\_data<CT\>

[language_](../modules/language_.md).base_data

多语言数据

## Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`data_struct`](../modules/language_.md#data_struct) |

## Hierarchy

- **`base_data`**

  ↳ [`texture_data`](language_.texture_data.md)

  ↳ [`label_data`](language_.label_data.md)

## Table of contents

### Constructors

- [constructor](language_.base_data.md#constructor)

### Properties

- [key](language_.base_data.md#key)
- [data](language_.base_data.md#data)

## Constructors

### constructor

• **new base_data**<`CT`\>(`init_`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CT` | extends [`data_struct`](../modules/language_.md#data_struct)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_` | `CT` |

#### Defined in

[assets/@framework/language/mk_language_manage.ts:190](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/language/mk_language_manage.ts#L190)

## Properties

### key

• **key**: { [k in string \| number \| symbol]: k }

多语言键

#### Defined in

[assets/@framework/language/mk_language_manage.ts:195](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/language/mk_language_manage.ts#L195)

___

### data

• **data**: [`data_struct`](../modules/language_.md#data_struct)<`Exclude`<keyof `CT`, `symbol`\>\>

多语言数据

#### Defined in

[assets/@framework/language/mk_language_manage.ts:200](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/language/mk_language_manage.ts#L200)
