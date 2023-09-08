[index](../README.md) / asset

# Class: asset

资源管理器

**`Remarks`**

- 统一加载接口为 get、get_dir

- 支持 EDITOR 环境加载资源

- 加载图片无需后缀，通过类型自动添加

- 加载路径扩展，例：db://xxx.prefab

- 资源默认引用为 2，引用为 1 时将在 global_config.resources.cache_lifetime_ms_n 时间后自动释放

- 通过 cache_lifetime_ms_n 修复短时间内(释放/加载)同一资源导致加载资源是已释放后的问题

- 解决同时加载同一资源多次导致返回的资源对象不一致的问（对象不一致会导致引用计数不一致）

- 增加强制性资源跟随释放对象

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`asset`**

## Table of contents

### Constructors

- [constructor](asset.md#constructor)

### Properties

- [config](asset.md#config)

### Methods

- [get](asset.md#get)
- [get\_dir](asset.md#get_dir)
- [release](asset.md#release)

## Constructors

### constructor

• **new asset**()

#### Overrides

[instance_base](instance_base.md).[constructor](instance_base.md#constructor)

#### Defined in

[assets/@framework/resources/mk_asset.ts:72](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/resources/mk_asset.ts#L72)

## Properties

### config

▪ `Static` **config**: `global_config`

全局配置

#### Defined in

[assets/@framework/resources/mk_asset.ts:130](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/resources/mk_asset.ts#L130)

## Methods

### get

▸ **get**<`T`\>(`path_s_`, `type_`, `target_`, `config_?`): `Promise`<``null`` \| `T`\>

获取资源

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Asset` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path_s_` | `string` | 资源路径 |
| `type_` | `Constructor`<`T`\> | 资源类型 |
| `target_` | ``null`` \| [`follow_release_object`](../modules/asset_.md#follow_release_object) | 跟随释放对象 |
| `config_?` | [`get_config`](../interfaces/asset_.get_config.md)<`T`, `T`\> | 获取配置 |

#### Returns

`Promise`<``null`` \| `T`\>

#### Defined in

[assets/@framework/resources/mk_asset.ts:152](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/resources/mk_asset.ts#L152)

___

### get\_dir

▸ **get_dir**<`T`\>(`path_s_`, `type_`, `target_`, `config_?`): `Promise`<``null`` \| `T`[]\>

获取文件夹资源

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Asset` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path_s_` | `string` | 资源路径 |
| `type_` | `Constructor`<`T`\> | 资源类型 |
| `target_` | ``null`` \| [`follow_release_object`](../modules/asset_.md#follow_release_object) | 跟随释放对象 |
| `config_?` | [`get_dir_config`](../modules/asset_.md#get_dir_config)<`T`\> | 获取配置 |

#### Returns

`Promise`<``null`` \| `T`[]\>

#### Defined in

[assets/@framework/resources/mk_asset.ts:318](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/resources/mk_asset.ts#L318)

___

### release

▸ **release**(`asset_`): `void`

释放资源

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset_` | `Asset` \| `Asset`[] | 释放的资源 |

#### Returns

`void`

#### Defined in

[assets/@framework/resources/mk_asset.ts:459](https://github.com/1226085293/MKFramework/blob/4086fa5/assets/@framework/resources/mk_asset.ts#L459)
