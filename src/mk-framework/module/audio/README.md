---
title: 音频
article: false
timeline: false
dir:
  order: 1
  index: true
---

::: warning
通用音频系统由于以下 creator 引擎 bug，非微信小游戏开发者推荐使用 3.8 及以上引擎版本进行开发

- 3.7.2 以下版本不能同时播放两个以上的音频

- 3.7.2 以下版本使用编辑器 @property 资源调用 play 只会有一个音频生效
:::

<!-- more -->

## 初始化

### 方式一：属性面板
```ts
@property(mk.audio_.unit)
music = new mk.audio_.unit();
```

### 方式二：动态加载
```ts
// 全路径
this.music = (await mk.audio.add("db://assets/resources/xxx.mp3", this))!;

// bundle 相对路径
this.music = (await mk.audio.add("xxx", this, {
    load_config: {
        bundle_s: global_config.asset.bundle.resources,
    },
}))!;
```

## mk.audio_.unit 属性说明

| 属性 | 说明 |
| :- | :- |
| group_ns | 音频所在分组列表，可存在多个 |
| state | [播放状态](https://github.com/1226085293/MKFramework/blob/main/assets/%40framework/audio/mk_audio_base.ts#L248) | 
| wait_play_b | 等待播放开关，开启时多次调用 mk.audio_.unit.play 接口时，会等待前次 play 完成 |
| wait_play_n | 等待播放次数，wait_play_b 为 true 时等待播放的次数 |
| curr_time_s_n | 当前时间（秒） |
| total_time_s_n | 总时长（秒） |
| event | [事件对象](https://github.com/1226085293/MKFramework/blob/main/assets/%40framework/audio/mk_audio_base.ts#L356) |
| type | 音频类型，默认类型为 global_config.audio.type |
| volume_n | 音量 |
| loop_b | 循环 |
| use_play_b | 通用音频系统使用，指定使用 play 接口，playOneShot 接口不能暂停音频 |