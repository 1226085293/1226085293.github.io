[index](../README.md) / audio

# Class: audio

音频基类

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`audio`**

## Table of contents

### Constructors

- [constructor](audio.md#constructor)

### Properties

- [\_log](audio.md#_log)
- [\_group\_map](audio.md#_group_map)

### Methods

- [pause](audio.md#pause)
- [stop](audio.md#stop)
- [\_get\_audio\_unit](audio.md#_get_audio_unit)
- [get\_group](audio.md#get_group)
- [add](audio.md#add)
- [play](audio.md#play)
- [pause\_all](audio.md#pause_all)
- [resume\_all](audio.md#resume_all)
- [stop\_all](audio.md#stop_all)

## Constructors

### constructor

• **new audio**()

#### Overrides

[instance_base](instance_base.md).[constructor](instance_base.md#constructor)

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:18](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L18)

## Properties

### \_log

• `Protected` `Abstract` **\_log**: [`logger`](logger.md)

日志

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:25](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L25)

___

### \_group\_map

• `Protected` **\_group\_map**: `Map`<`number`, [`group`](audio_.group.md)\>

音频组

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:27](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L27)

## Methods

### pause

▸ `Abstract` **pause**(`audio_`): `void`

暂停

#### Parameters

| Name | Type |
| :------ | :------ |
| `audio_` | [`unit`](../modules/audio_.md#unit) |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:30](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L30)

___

### stop

▸ `Abstract` **stop**(`audio_`): `void`

停止

#### Parameters

| Name | Type |
| :------ | :------ |
| `audio_` | [`unit`](../modules/audio_.md#unit) |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:32](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L32)

___

### \_get\_audio\_unit

▸ `Protected` `Abstract` **_get_audio_unit**<`T`\>(`init_?`): `T`

获取音频实例

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`_unit`](audio_._unit.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_?` | `Partial`<[`_unit`](audio_._unit.md)\> |

#### Returns

`T`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:34](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L34)

___

### get\_group

▸ **get_group**(`group_n_`): [`group`](audio_.group.md)

获取音频组

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_n_` | `number` | 组类型 |

#### Returns

[`group`](audio_.group.md)

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:41](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L41)

___

### add

▸ **add**(`url_s_`, `target_`, `config_?`): `Promise`<``null`` \| [`unit`](../modules/audio_.md#unit) & [`unit`](../modules/audio_.md#unit)[]\>

添加音频单元

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url_s_` | `string` | 音频资源路径 |
| `target_` | [`follow_release_object`](../modules/asset_.md#follow_release_object) | 跟随释放对象 |
| `config_?` | [`add_config`](../interfaces/audio_.add_config.md) | 添加配置 |

#### Returns

`Promise`<``null`` \| [`unit`](../modules/audio_.md#unit) & [`unit`](../modules/audio_.md#unit)[]\>

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:57](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L57)

▸ **add**(`url_ss_`, `target_`, `config_?`): `Promise`<``null`` \| [`unit`](../modules/audio_.md#unit)[]\>

添加音频单元

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url_ss_` | `string`[] | 音频资源路径列表 |
| `target_` | [`follow_release_object`](../modules/asset_.md#follow_release_object) | 跟随释放对象 |
| `config_?` | [`add_config`](../interfaces/audio_.add_config.md) | 添加配置 |

#### Returns

`Promise`<``null`` \| [`unit`](../modules/audio_.md#unit)[]\>

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:68](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L68)

___

### play

▸ **play**(`audio_`, `config_?`): `boolean`

播放音效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `audio_` | [`unit`](../modules/audio_.md#unit) | 音频单元 |
| `config_?` | `Partial`<[`play_config`](../interfaces/audio_.play_config.md)\> | 播放配置 |

#### Returns

`boolean`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:139](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L139)

___

### pause\_all

▸ **pause_all**(): `void`

暂停所有音频

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:166](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L166)

___

### resume\_all

▸ **resume_all**(): `void`

恢复所有音频

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:175](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L175)

___

### stop\_all

▸ **stop_all**(): `void`

停止所有音频

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:186](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/audio/mk_audio_base.ts#L186)
