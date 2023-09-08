[index](../README.md) / [Exports](../modules.md) / [audio\_](../modules/audio_.md) / unit

# Interface: unit

[audio_](../modules/audio_.md).unit

安全音频单元

## Table of contents

### Properties

- [init\_b](audio_.unit.md#init_b)
- [group\_ns](audio_.unit.md#group_ns)
- [stop\_group\_n](audio_.unit.md#stop_group_n)
- [state](audio_.unit.md#state)
- [wait\_play\_n](audio_.unit.md#wait_play_n)
- [total\_time\_s\_n](audio_.unit.md#total_time_s_n)
- [event](audio_.unit.md#event)
- [type](audio_.unit.md#type)
- [real\_volume\_n](audio_.unit.md#real_volume_n)
- [audio\_source](audio_.unit.md#audio_source)
- [clip](audio_.unit.md#clip)
- [volume\_n](audio_.unit.md#volume_n)
- [loop\_b](audio_.unit.md#loop_b)
- [curr\_time\_s\_n](audio_.unit.md#curr_time_s_n)
- [use\_play\_b](audio_.unit.md#use_play_b)
- [wait\_play\_b](audio_.unit.md#wait_play_b)

### Methods

- [clone](audio_.unit.md#clone)

## Properties

### init\_b

• `Readonly` **init\_b**: `boolean`

初始化状态

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:260](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L260)

___

### group\_ns

• `Readonly` **group\_ns**: readonly `number`[]

分组

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:262](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L262)

___

### stop\_group\_n

• `Readonly` **stop\_group\_n**: ``null`` \| `number`

当前停止分组

**`Remarks`**

停止时优先级最大的分组

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:268](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L268)

___

### state

• `Readonly` **state**: [`state`](../enums/audio_.state.md)

播放状态

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:270](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L270)

___

### wait\_play\_n

• `Readonly` **wait\_play\_n**: `number`

等待播放次数

**`Remarks`**

0-n：等待播放次数

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:276](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L276)

___

### total\_time\_s\_n

• `Readonly` **total\_time\_s\_n**: `number`

总时长

**`Remarks`**

单位秒

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:282](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L282)

___

### event

• `Readonly` **event**: [`event_target`](../classes/event_target.md)<`event_protocol`\>

事件对象

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:284](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L284)

___

### type

• `Readonly` **type**: `number`

音频类型

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:286](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L286)

___

### real\_volume\_n

• `Readonly` **real\_volume\_n**: `number`

真实音量

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:288](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L288)

___

### audio\_source

• `Readonly` **audio\_source**: ``null`` \| `AudioSource`

音频组件

**`Remarks`**

common 使用

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:294](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L294)

___

### clip

• **clip**: ``null`` \| `AudioClip`

音频资源

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:296](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L296)

___

### volume\_n

• **volume\_n**: `number`

音量

**`Remarks`**

- common：use_play_b 为 false 的情况下修改只能在下次 play 时生效

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:302](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L302)

___

### loop\_b

• **loop\_b**: `boolean`

循环

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:304](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L304)

___

### curr\_time\_s\_n

• **curr\_time\_s\_n**: `number`

当前时间

**`Remarks`**

单位秒

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:310](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L310)

___

### use\_play\_b

• `Optional` **use\_play\_b**: `boolean`

使用 play 接口，默认使用 playOneShot

**`Remarks`**

common 使用

- play 接口存在最大并发数限制 cc.AudioSource.maxAudioChannel

- playOneShot 接口不能暂停

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:320](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L320)

___

### wait\_play\_b

• `Optional` **wait\_play\_b**: `boolean`

等待播放开关

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:322](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L322)

## Methods

### clone

▸ **clone**<`T`\>(): `T`

克隆

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`unit`](../modules/audio_.md#unit) |

#### Returns

`T`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:325](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L325)

▸ **clone**<`T`\>(`value_n_`): `T`[]

克隆

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`unit`](../modules/audio_.md#unit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_n_` | `number` | 克隆数量 |

#### Returns

`T`[]

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:330](https://github.com/1226085293/MKFramework/blob/a571549/assets/@framework/audio/mk_audio_base.ts#L330)
