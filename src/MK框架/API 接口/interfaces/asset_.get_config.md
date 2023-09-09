[index](../README.md) / [asset\_](../modules/asset_.md) / get\_config

# Interface: get\_config<T, T2\>

[asset_](../modules/asset_.md).get_config

加载配置

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `cc.Asset` = `cc.Asset` |
| `T2` | `T` |

## Table of contents

### Properties

- [bundle\_s](asset_.get_config.md#bundle_s)
- [progress\_f](asset_.get_config.md#progress_f)
- [completed\_f](asset_.get_config.md#completed_f)
- [remote\_option](asset_.get_config.md#remote_option)

## Properties

### bundle\_s

• `Optional` **bundle\_s**: `string`

bundle 名

**`Default Value`**

```ts
resources
```

#### Defined in

[assets/@framework/resources/mk_asset.ts:587](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/resources/mk_asset.ts#L587)

___

### progress\_f

• `Optional` **progress\_f**: (`current_n`: `number`, `total_n`: `number`) => `void`

#### Type declaration

▸ (`current_n`, `total_n`): `void`

进度回调

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `current_n` | `number` | 当前进度 |
| `total_n` | `number` | 总进度 |

##### Returns

`void`

#### Defined in

[assets/@framework/resources/mk_asset.ts:589](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/resources/mk_asset.ts#L589)

___

### completed\_f

• `Optional` **completed\_f**: (`error`: ``null`` \| `Error`, `asset`: `T2`) => `void`

#### Type declaration

▸ (`error`, `asset`): `void`

完成回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `asset` | `T2` |

##### Returns

`void`

#### Defined in

[assets/@framework/resources/mk_asset.ts:597](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/resources/mk_asset.ts#L597)

___

### remote\_option

• `Optional` **remote\_option**: `load_remote_option_type`

远程配置，存在配置则为远程资源

#### Defined in

[assets/@framework/resources/mk_asset.ts:599](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/resources/mk_asset.ts#L599)
