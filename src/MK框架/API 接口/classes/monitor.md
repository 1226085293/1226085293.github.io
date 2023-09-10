---
article: false
timeline: false
---
[index](../README.md) / monitor

# Class: monitor

数据监听器（类型安全）

**`Remarks`**

可以用以 mvvm 搭建及使用，注意：监听回调仅在下一帧被调用

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`monitor`**

## Table of contents

### Methods

- [wait](monitor.md#wait)
- [on\_recursion](monitor.md#on_recursion)
- [on](monitor.md#on)
- [once](monitor.md#once)
- [off\_recursion](monitor.md#off_recursion)
- [off](monitor.md#off)
- [clear](monitor.md#clear)
- [enable](monitor.md#enable)
- [disable](monitor.md#disable)

## Methods

### wait

▸ **wait**<`T`, `T2`\>(`value_`, `key_`): `Promise`<`void`\>

等待监听回调执行完成

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `T2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `T` | 对象 |
| `key_` | `T2` | 键 |

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/mk_monitor.ts:116](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L116)

___

### on\_recursion

▸ **on_recursion**(`value_`, `on_callback_f_`, `target_?`): `void`

递归监听数据更新

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `any` | 监听对象 |
| `on_callback_f_` | `type_on_callback`<`any`\> | on 触发回调 |
| `target_?` | `any` | 绑定对象 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_monitor.ts:138](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L138)

▸ **on_recursion**(`value_`, `on_callback_f_`, `off_callback_f_`, `target_?`): `void`

递归监听数据更新

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `any` | 监听对象 |
| `on_callback_f_` | `type_on_callback`<`any`\> | on 触发回调 |
| `off_callback_f_` | `type_off_callback` | off 触发回调 |
| `target_?` | `any` | 绑定对象 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_monitor.ts:146](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L146)

___

### on

▸ **on**<`T`, `T2`\>(`value_`, `key_`, `on_callback_f_`, `target_?`): ``null`` \| `type_on_callback`<`T`[`T2`]\>

监听数据更新

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `T2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `T` | 监听对象 |
| `key_` | `T2` | 监听键 |
| `on_callback_f_` | `type_on_callback`<`T`[`T2`]\> | on 触发回调 |
| `target_?` | `any` | 绑定对象 |

#### Returns

``null`` \| `type_on_callback`<`T`[`T2`]\>

#### Defined in

[assets/@framework/mk_monitor.ts:181](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L181)

▸ **on**<`T`, `T2`\>(`value_`, `key_`, `on_callback_f_`, `off_callback_f_`, `target_?`): ``null`` \| `type_on_callback`<`T`[`T2`]\>

监听数据更新

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `T2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `T` | 监听对象 |
| `key_` | `T2` | 监听键 |
| `on_callback_f_` | `type_on_callback`<`T`[`T2`]\> | on 触发回调 |
| `off_callback_f_` | `type_off_callback` | off 触发回调 |
| `target_?` | `any` | 绑定对象 |

#### Returns

``null`` \| `type_on_callback`<`T`[`T2`]\>

#### Defined in

[assets/@framework/mk_monitor.ts:195](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L195)

___

### once

▸ **once**<`T`, `T2`\>(`value_`, `key_`, `on_callback_f_`, `target_?`): ``null`` \| `type_on_callback`<`T`[`T2`]\>

监听单次数据更新

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `T2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `T` | 监听对象 |
| `key_` | `T2` | 监听键 |
| `on_callback_f_` | `type_on_callback`<`T`[`T2`]\> | on 触发回调 |
| `target_?` | `any` | 绑定对象 |

#### Returns

``null`` \| `type_on_callback`<`T`[`T2`]\>

#### Defined in

[assets/@framework/mk_monitor.ts:226](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L226)

▸ **once**<`T`, `T2`\>(`value_`, `key_`, `on_callback_f_`, `off_callback_f_`, `target_?`): ``null`` \| `type_on_callback`<`T`[`T2`]\>

监听单次数据更新

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `T2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `T` | 监听对象 |
| `key_` | `T2` | 监听键 |
| `on_callback_f_` | `type_on_callback`<`T`[`T2`]\> | on 触发回调 |
| `off_callback_f_` | `type_off_callback` | off 触发回调 |
| `target_?` | `any` | 绑定对象 |

#### Returns

``null`` \| `type_on_callback`<`T`[`T2`]\>

#### Defined in

[assets/@framework/mk_monitor.ts:240](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L240)

___

### off\_recursion

▸ **off_recursion**(`value_`, `target_?`): `Promise`<`any`\>

递归取消监听数据更新

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `any` | 监听对象 |
| `target_?` | `any` | 绑定目标 |

#### Returns

`Promise`<`any`\>

#### Defined in

[assets/@framework/mk_monitor.ts:270](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L270)

▸ **off_recursion**(`value_`, `on_callback_f_`, `target_?`): `Promise`<`any`\>

递归取消监听数据更新

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `any` | 监听对象 |
| `on_callback_f_` | `type_on_callback`<`any`\> | on 触发回调 |
| `target_?` | `any` | 绑定目标 |

#### Returns

`Promise`<`any`\>

#### Defined in

[assets/@framework/mk_monitor.ts:277](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L277)

___

### off

▸ **off**<`T`, `T2`\>(`value_`, `key_`, `target_?`): `Promise`<`void`\>

取消监听数据更新

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `T2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `T` | 监听对象 |
| `key_` | `T2` | 监听键 |
| `target_?` | `any` | 绑定目标 |

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/mk_monitor.ts:317](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L317)

▸ **off**<`T`, `T2`\>(`value_`, `key_`, `on_callback_f_`, `target_?`): `Promise`<`void`\>

取消监听数据更新

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `T2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `T` | 监听对象 |
| `key_` | `T2` | 监听键 |
| `on_callback_f_` | `type_on_callback`<`T`[`T2`]\> | on 触发回调 |
| `target_?` | `any` | 绑定目标 |

#### Returns

`Promise`<`void`\>

#### Defined in

[assets/@framework/mk_monitor.ts:325](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L325)

___

### clear

▸ **clear**(`target_`): ``null`` \| `Promise`<`any`[]\>

清理对象绑定的数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target_` | `any` | 绑定对象 |

#### Returns

``null`` \| `Promise`<`any`[]\>

#### Defined in

[assets/@framework/mk_monitor.ts:343](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L343)

___

### enable

▸ **enable**(`target_`): `void`

启用 on 事件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target_` | `any` | 绑定对象 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_monitor.ts:377](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L377)

▸ **enable**<`T`, `T2`\>(`value_`, `key_`, `target_?`): `void`

启用 on 事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `T2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `T` | 监听对象 |
| `key_` | `T2` | 监听键 |
| `target_?` | `any` | 绑定对象 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_monitor.ts:384](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L384)

▸ **enable**<`T`, `T2`\>(`value_`, `key_`, `callback_f_`, `target_?`): `void`

启用 on 事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `T2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `T` | 监听对象 |
| `key_` | `T2` | 监听键 |
| `callback_f_` | `type_on_callback`<`T`[`T2`]\> | on 触发回调 |
| `target_?` | `any` | 绑定对象 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_monitor.ts:392](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L392)

___

### disable

▸ **disable**(`target_`): `void`

禁用 on 事件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target_` | `any` | 绑定对象 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_monitor.ts:401](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L401)

▸ **disable**<`T`, `T2`\>(`value_`, `key_`, `target_?`): `void`

禁用 on 事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `T2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `T` | 监听对象 |
| `key_` | `T2` | 监听键 |
| `target_?` | `any` | 绑定对象 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_monitor.ts:408](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L408)

▸ **disable**<`T`, `T2`\>(`value_`, `key_`, `callback_f_`, `target_?`): `void`

禁用 on 事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `T2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value_` | `T` | 监听对象 |
| `key_` | `T2` | 监听键 |
| `callback_f_` | `type_on_callback`<`T`[`T2`]\> | on 触发回调 |
| `target_?` | `any` | 绑定对象 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_monitor.ts:416](https://github.com/1226085293/MKFramework/blob/d01a59e/assets/@framework/mk_monitor.ts#L416)
