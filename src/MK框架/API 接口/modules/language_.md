---
article: false
timeline: false
sitemap.exclude: true
---
[index](../README.md) / language\_

# Namespace: language\_

## Table of contents

### Classes

- [label\_config](../classes/language_.label_config.md)
- [base\_data](../classes/language_.base_data.md)
- [texture\_data](../classes/language_.texture_data.md)
- [label\_data](../classes/language_.label_data.md)

### Type Aliases

- [data\_struct](language_.md#data_struct)

## Type Aliases

### data\_struct

Ƭ **data\_struct**<`T`\>: `Record`<`T`, { [k in keyof typeof global\_config.language.type\_tab]: string }\>

多语言数据结构

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `_mk_language_manage.type_type` = `any` |

#### Defined in

[assets/@framework/language/mk_language_manage.ts:171](https://github.com/1226085293/MKFramework/blob/4107a6f/assets/@framework/language/mk_language_manage.ts#L171)
