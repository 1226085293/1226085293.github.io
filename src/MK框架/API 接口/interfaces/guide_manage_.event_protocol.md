[index](../README.md) / [guide\_manage\_](../modules/guide_manage_.md) / event\_protocol

# Interface: event\_protocol

[guide_manage_](../modules/guide_manage_.md).event_protocol

事件协议

## Table of contents

### Methods

- [pause](guide_manage_.event_protocol.md#pause)
- [resume](guide_manage_.event_protocol.md#resume)
- [before\_switch](guide_manage_.event_protocol.md#before_switch)
- [loading\_step](guide_manage_.event_protocol.md#loading_step)
- [after\_unload\_step](guide_manage_.event_protocol.md#after_unload_step)
- [loading\_step\_complete](guide_manage_.event_protocol.md#loading_step_complete)
- [break](guide_manage_.event_protocol.md#break)
- [finish](guide_manage_.event_protocol.md#finish)

## Methods

### pause

▸ **pause**(): `void`

暂停

#### Returns

`void`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:312](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/guide/mk_guide_manage.ts#L312)

___

### resume

▸ **resume**(): `void`

恢复

#### Returns

`void`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:314](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/guide/mk_guide_manage.ts#L314)

___

### before\_switch

▸ **before_switch**(`next_step_n`): `void`

切换步骤前

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next_step_n` | `number` | 下个步骤 |

#### Returns

`void`

**`Remarks`**

set_step 时执行

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:321](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/guide/mk_guide_manage.ts#L321)

___

### loading\_step

▸ **loading_step**(): `void`

加载步骤

#### Returns

`void`

**`Remarks`**

加载步骤(场景/操作)前调用，可在此处打开遮罩

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:327](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/guide/mk_guide_manage.ts#L327)

___

### after\_unload\_step

▸ **after_unload_step**(`step`): `void`

卸载步骤后

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `step` | [`guide_step_base`](../classes/guide_step_base.md)<`any`\> | 卸载的步骤 |

#### Returns

`void`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:332](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/guide/mk_guide_manage.ts#L332)

___

### loading\_step\_complete

▸ **loading_step_complete**(): `void`

加载步骤完成

#### Returns

`void`

**`Remarks`**

步骤 load 执行后调用，可在此处关闭遮罩

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:338](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/guide/mk_guide_manage.ts#L338)

___

### break

▸ **break**(): `void`

中断

#### Returns

`void`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:340](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/guide/mk_guide_manage.ts#L340)

___

### finish

▸ **finish**(): `void`

完成

#### Returns

`void`

#### Defined in

[assets/@framework/guide/mk_guide_manage.ts:342](https://github.com/1226085293/MKFramework/blob/d0f91f2/assets/@framework/guide/mk_guide_manage.ts#L342)
