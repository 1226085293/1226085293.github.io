[index](../README.md) / [Exports](../modules.md) / [guide\_manage\_](../modules/guide_manage_.md) / init\_config

# Interface: init\_config

[guide_manage_](../modules/guide_manage_.md).init_config

初始化配置

## Table of contents

### Properties

- [current\_step\_n](guide_manage_.init_config.md#current_step_n)
- [end\_step\_n](guide_manage_.init_config.md#end_step_n)
- [operate\_tab](guide_manage_.init_config.md#operate_tab)
- [name\_s](guide_manage_.init_config.md#name_s)

### Methods

- [step\_update\_callback\_f](guide_manage_.init_config.md#step_update_callback_f)

## Properties

### current\_step\_n

• `Optional` **current\_step\_n**: `number`

当前步骤

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:362](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/guide/mk_guide_manage.ts#L362)

___

### end\_step\_n

• `Optional` **end\_step\_n**: `number`

结束步骤

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:364](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/guide/mk_guide_manage.ts#L364)

___

### operate\_tab

• `Optional` **operate\_tab**: `Record`<`string`, [`operate_cell`](guide_manage_.operate_cell.md)\>

操作表

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:366](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/guide/mk_guide_manage.ts#L366)

___

### name\_s

• `Optional` **name\_s**: `string`

引导名

**`Remarks`**

用于日志输出

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:372](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/guide/mk_guide_manage.ts#L372)

## Methods

### step\_update\_callback\_f

▸ **step_update_callback_f**(`step_n`): `any`

步骤更新回调

#### Parameters

| Name | Type |
| :------ | :------ |
| `step_n` | `number` |

#### Returns

`any`

null/undefined：更新失败中断引导

**`Remarks`**

- 可在此内更新服务端数据并请求奖励

- 步骤可使用 this.step_update_data 获取返回数据

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:383](https://github.com/1226085293/MKFramework/blob/6204f55/assets/@framework/guide/mk_guide_manage.ts#L383)
