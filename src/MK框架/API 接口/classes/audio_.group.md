[index](../README.md) / [Exports](../modules.md) / [audio\_](../modules/audio_.md) / group

# Class: group

[audio_](../modules/audio_.md).group

音频组

## Table of contents

### Constructors

- [constructor](audio_.group.md#constructor)

### Properties

- [priority\_n](audio_.group.md#priority_n)
- [audio\_unit\_as](audio_.group.md#audio_unit_as)

### Accessors

- [play\_b](audio_.group.md#play_b)
- [stop\_b](audio_.group.md#stop_b)
- [volume\_n](audio_.group.md#volume_n)

### Methods

- [play](audio_.group.md#play)
- [pause](audio_.group.md#pause)
- [stop](audio_.group.md#stop)
- [add\_audio](audio_.group.md#add_audio)
- [del\_audio](audio_.group.md#del_audio)
- [clear](audio_.group.md#clear)

## Constructors

### constructor

• **new group**(`init_`, `priority_n_`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init_` | [`audio`](audio.md) |
| `priority_n_` | `number` |

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:534](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L534)

## Properties

### priority\_n

• `Readonly` **priority\_n**: `number`

优先级

**`Remarks`**

值越小优先级越大

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:545](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L545)

___

### audio\_unit\_as

• **audio\_unit\_as**: readonly [`_unit`](audio_._unit.md)[] = `[]`

音频列表

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:547](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L547)

## Accessors

### play\_b

• `get` **play_b**(): `boolean`

播放状态

#### Returns

`boolean`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:550](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L550)

___

### stop\_b

• `get` **stop_b**(): `boolean`

停止状态

#### Returns

`boolean`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:555](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L555)

___

### volume\_n

• `get` **volume_n**(): `number`

音量

#### Returns

`number`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:560](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L560)

• `set` **volume_n**(`value_n_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_n_` | `number` |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:564](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L564)

## Methods

### play

▸ **play**(`contains_state_n_?`): `void`

播放

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contains_state_n_` | `number` | 包含状态，处于这些状态中的音频将被播放，例：mk.audio_.state.pause \| mk.audio_.state.stop |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:600](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L600)

___

### pause

▸ **pause**(): `void`

暂停

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:617](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L617)

___

### stop

▸ **stop**(`state_b_?`): `void`

停止

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state_b_` | `boolean` | `true` |

#### Returns

`void`

**`Remarks`**

- 停止后播放的音频将跳过

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:629](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L629)

___

### add\_audio

▸ **add_audio**(`audio_`): `void`

添加音频

#### Parameters

| Name | Type |
| :------ | :------ |
| `audio_` | [`unit`](../modules/audio_.md#unit) \| [`unit`](../modules/audio_.md#unit)[] |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:648](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L648)

___

### del\_audio

▸ **del_audio**(`audio_`): `void`

删除音频

#### Parameters

| Name | Type |
| :------ | :------ |
| `audio_` | [`unit`](../modules/audio_.md#unit) \| [`unit`](../modules/audio_.md#unit)[] |

#### Returns

`void`

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:676](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L676)

___

### clear

▸ **clear**(): [`unit`](../modules/audio_.md#unit)[]

清理所有音频

#### Returns

[`unit`](../modules/audio_.md#unit)[]

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:712](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/audio/mk_audio_base.ts#L712)
