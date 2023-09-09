[index](../README.md) / [audio\_](../modules/audio_.md) / \_unit

# Class: \_unit

[audio_](../modules/audio_.md)._unit

音频单元

## Table of contents

### Constructors

- [constructor](audio_._unit.md#constructor)

### Properties

- [clip](audio_._unit.md#clip)
- [type](audio_._unit.md#type)
- [\_event](audio_._unit.md#_event)
- [group\_ns](audio_._unit.md#group_ns)
- [stop\_group\_n](audio_._unit.md#stop_group_n)
- [state](audio_._unit.md#state)
- [wait\_play\_n](audio_._unit.md#wait_play_n)
- [real\_volume\_n](audio_._unit.md#real_volume_n)
- [use\_play\_b](audio_._unit.md#use_play_b)
- [\_init\_b](audio_._unit.md#_init_b)

### Accessors

- [init\_b](audio_._unit.md#init_b)
- [volume\_n](audio_._unit.md#volume_n)
- [loop\_b](audio_._unit.md#loop_b)
- [total\_time\_s\_n](audio_._unit.md#total_time_s_n)
- [curr\_time\_s\_n](audio_._unit.md#curr_time_s_n)
- [event](audio_._unit.md#event)
- [wait\_play\_b](audio_._unit.md#wait_play_b)
- [audio\_source](audio_._unit.md#audio_source)

### Methods

- [update\_volume](audio_._unit.md#update_volume)
- [\_clone](audio_._unit.md#_clone)
- [clone](audio_._unit.md#clone)

## Constructors

### constructor

• **new _unit**(`init_?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_?` | `Partial`<[`_unit`](audio_._unit.md)\> |

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:382](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L382)

## Properties

### clip

• **clip**: ``null`` \| `AudioClip` = `null`

音频资源

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:389](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L389)

___

### type

• **type**: `type` = `global_config.audio.type.effect`

音频类型

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:393](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L393)

___

### \_event

• `Optional` **\_event**: [`event_target`](event_target.md)<`event_protocol`\>

事件对象

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:397](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L397)

___

### group\_ns

• **group\_ns**: `number`[] = `[]`

分组

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:399](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L399)

___

### stop\_group\_n

• **stop\_group\_n**: ``null`` \| `number` = `null`

当前停止分组

**`Remarks`**

停止时优先级最大的分组

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:405](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L405)

___

### state

• **state**: [`state`](../enums/audio_.state.md) = `state.stop`

播放状态

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:407](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L407)

___

### wait\_play\_n

• **wait\_play\_n**: `number` = `-1`

等待播放次数

**`Remarks`**

-1：关闭，0-n：等待播放次数

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:413](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L413)

___

### real\_volume\_n

• **real\_volume\_n**: `number` = `0`

真实音量

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:415](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L415)

___

### use\_play\_b

• `Optional` **use\_play\_b**: `boolean`

使用 play 接口，默认使用 playOneShot

**`Remarks`**

common 使用

- play 接口存在最大并发数限制 cc.AudioSource.maxAudioChannel

- playOneShot 接口不能暂停

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:425](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L425)

___

### \_init\_b

• `Protected` **\_init\_b**: `boolean` = `false`

初始化状态

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:502](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L502)

## Accessors

### init\_b

• `get` **init_b**(): `boolean`

初始化状态

#### Returns

`boolean`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:428](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L428)

• `set` **init_b**(`value_b_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_b_` | `boolean` |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:432](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L432)

___

### volume\_n

• `get` **volume_n**(): `number`

音量

#### Returns

`number`

**`Remarks`**

- common：use_play_b 为 false 的情况下修改只能在下次 play 时生效

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:442](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L442)

• `set` **volume_n**(`value_n_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_n_` | `number` |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:446](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L446)

___

### loop\_b

• `get` **loop_b**(): `boolean`

循环

#### Returns

`boolean`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:451](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L451)

• `set` **loop_b**(`value_b_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_b_` | `boolean` |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:455](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L455)

___

### total\_time\_s\_n

• `get` **total_time_s_n**(): `number`

总时长（秒）

#### Returns

`number`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:460](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L460)

___

### curr\_time\_s\_n

• `get` **curr_time_s_n**(): `number`

当前时间（秒）

#### Returns

`number`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:465](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L465)

• `set` **curr_time_s_n**(`value_n_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_n_` | `number` |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:469](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L469)

___

### event

• `get` **event**(): [`event_target`](event_target.md)<`event_protocol`\>

事件对象

#### Returns

[`event_target`](event_target.md)<`event_protocol`\>

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:474](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L474)

___

### wait\_play\_b

• `get` **wait_play_b**(): `boolean`

等待播放开关

#### Returns

`boolean`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:479](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L479)

• `set` **wait_play_b**(`value_b_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_b_` | `boolean` |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:483](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L483)

___

### audio\_source

• `get` **audio_source**(): ``null`` \| `AudioSource`

音频组件

#### Returns

``null`` \| `AudioSource`

**`Remarks`**

common 使用

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:492](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L492)

• `set` **audio_source**(`value_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | ``null`` \| `AudioSource` |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:496](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L496)

## Methods

### update\_volume

▸ `Abstract` **update_volume**(): `void`

更新音量

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:505](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L505)

___

### \_clone

▸ `Protected` `Abstract` **_clone**(): [`_unit`](audio_._unit.md)

克隆

#### Returns

[`_unit`](audio_._unit.md)

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:507](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L507)

___

### clone

▸ **clone**(): [`_unit`](audio_._unit.md)

克隆

#### Returns

[`_unit`](audio_._unit.md)

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:510](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L510)

▸ **clone**(`value_n_`): [`_unit`](audio_._unit.md)[]

克隆

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_n_` | `number` | 克隆数量 |

#### Returns

[`_unit`](audio_._unit.md)[]

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:515](https://github.com/1226085293/MKFramework/blob/2cca83f/assets/@framework/audio/mk_audio_base.ts#L515)
