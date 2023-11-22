---
title: 音频
article: false
timeline: false
dir:
  order: 1
  index: true
---

音频系统除了支持最基础的音乐音效控制，还有以下亮点

- 音频分组，支持对不同类型的音频批量控制

- 支持(动态/静态)音频

- (通用/微信)版本

- 增加对 playOnShot 接口的事件支持

- 通用版本超出播放数量限制后停止当前音频而不是之前的

<!-- more -->

::: warning
通用音频系统由于以下 creator 引擎 bug，非微信小游戏开发者推荐使用 3.7.3 及以上引擎版本进行开发

- https://github.com/cocos/cocos-engine/issues/14175
:::

### 通用音频版本说明

由于 creator 引擎存在最大播放数量（cc.AudioSource.maxAudioChannel）限制，所以如果使用引擎接口播放音频超出这个数量后会停止之前播放的一个音频

MK框架的处理是阻止当前需要播放的音频而不是之前的

<AutoCatalog />