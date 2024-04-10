---
title: 模块
article: false
timeline: false
dir:
  order: 3
  index: true
---

模块系统是框架内最重要的系统，涉及了模块的生命周期管理，资源释放，展示优化...

```state 模块系统架构
cc.Component --> mk.layer
mk.layer --> mk.life_cycle
mk.life_cycle --> mk.scene_drive
mk.life_cycle --> mk.static_view_base
mk.life_cycle --> mk.view_base
```

<!-- more -->

<AutoCatalog />