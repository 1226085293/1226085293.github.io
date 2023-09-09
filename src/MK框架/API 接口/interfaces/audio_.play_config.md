[index](../README.md) / [audio\_](../modules/audio_.md) / play\_config

# Interface: play\_config

[audio_](../modules/audio_.md).play_config

play 配置

## Table of contents

### Properties

- [volume\_n](audio_.play_config.md#volume_n)
- [loop\_b](audio_.play_config.md#loop_b)
- [use\_play\_b](audio_.play_config.md#use_play_b)

## Properties

### volume\_n

• **volume\_n**: `number`

音量

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:348](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/audio/mk_audio_base.ts#L348)

___

### loop\_b

• **loop\_b**: `boolean`

循环

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:350](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/audio/mk_audio_base.ts#L350)

___

### use\_play\_b

• **use\_play\_b**: `boolean`

使用 play 接口，默认使用 playOneShot

**`Remarks`**

common 使用

- play 接口存在最大并发数限制 cc.AudioSource.maxAudioChannel

- playOneShot 接口不能暂停

#### Defined in

[assets/@framework/audio/mk_audio_base.ts:360](https://github.com/1226085293/MKFramework/blob/0053bdc/assets/@framework/audio/mk_audio_base.ts#L360)
