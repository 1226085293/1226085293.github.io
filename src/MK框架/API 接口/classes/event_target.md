[index](../README.md) / event\_target

# Class: event\_target<CT\>

事件对象（类型安全）

**`Remarks`**

获取事件键使用 event_target.key.xxx

## Type parameters

| Name |
| :------ |
| `CT` |

## Hierarchy

- `EventTarget`

  ↳ **`event_target`**

## Table of contents

### Properties

- [key](event_target.md#key)

### Methods

- [on](event_target.md#on)
- [once](event_target.md#once)
- [off](event_target.md#off)
- [emit](event_target.md#emit)
- [has](event_target.md#has)
- [clear](event_target.md#clear)
- [request](event_target.md#request)

## Properties

### key

• **key**: { [k in string \| number \| symbol]: k }

事件键

#### Defined in

[assets/@framework/mk_event_target.ts:11](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_event_target.ts#L11)

## Methods

### on

▸ **on**<`T`, `T2`\>(`type_`, `callback_`, `target_?`, `once_b_?`): ``null`` \| `T2`

监听事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `T2` | extends (...`event_`: `Parameters`<`CT`[`T`]\>) => `void` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type_` | `T` \| `T`[] | 事件类型 |
| `callback_` | `T2` | 触发回调 |
| `target_?` | `any` | 事件目标对象 |
| `once_b_?` | `boolean` | 是否触发单次 |

#### Returns

``null`` \| `T2`

触发回调

#### Overrides

cc.EventTarget.on

#### Defined in

[assets/@framework/mk_event_target.ts:25](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_event_target.ts#L25)

___

### once

▸ **once**<`T`, `T2`\>(`type_`, `callback_`, `target_?`): ``null`` \| `T2`

监听单次事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `T2` | extends (...`event_`: `Parameters`<`CT`[`T`]\>) => `void` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type_` | `T` \| `T`[] | 事件类型 |
| `callback_` | `T2` | 触发回调 |
| `target_?` | `any` | 事件目标对象 |

#### Returns

``null`` \| `T2`

触发回调

#### Overrides

cc.EventTarget.once

#### Defined in

[assets/@framework/mk_event_target.ts:53](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_event_target.ts#L53)

___

### off

▸ **off**<`T`, `T2`\>(`type_`, `callback_?`, `target_?`): `void`

取消监听事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `T2` | extends (...`event_`: `Parameters`<`CT`[`T`]\>) => `void` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type_` | `T` \| `T`[] | 事件类型 |
| `callback_?` | `T2` | 触发回调 |
| `target_?` | `any` | 事件目标对象 |

#### Returns

`void`

触发回调

#### Overrides

cc.EventTarget.off

#### Defined in

[assets/@framework/mk_event_target.ts:80](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_event_target.ts#L80)

___

### emit

▸ **emit**<`T`, `T2`\>(`type_`, `...args_`): `void`

派发事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `T2` | extends `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type_` | `T` \| `T`[] | 事件类型 |
| `...args_` | `T2` | 事件参数 |

#### Returns

`void`

#### Overrides

cc.EventTarget.emit

#### Defined in

[assets/@framework/mk_event_target.ts:96](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_event_target.ts#L96)

___

### has

▸ **has**<`T`, `T2`\>(`type_`, `callback_?`, `target_?`): `boolean`

是否存在事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `T2` | extends (...`event_`: `Parameters`<`CT`[`T`]\>) => `void` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type_` | `T` | 事件类型 |
| `callback_?` | `T2` | 触发回调 |
| `target_?` | `any` | 事件目标对象 |

#### Returns

`boolean`

#### Defined in

[assets/@framework/mk_event_target.ts:114](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_event_target.ts#L114)

___

### clear

▸ **clear**(): `void`

清空所有事件

#### Returns

`void`

#### Defined in

[assets/@framework/mk_event_target.ts:119](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_event_target.ts#L119)

___

### request

▸ **request**<`T`, `T2`, `T3`\>(`type_`, `...args_`): `Promise`<`T3`\>[]

请求事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `T2` | extends `unknown`[] |
| `T3` | extends `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type_` | `T` \| `T`[] | 事件类型 |
| `...args_` | `T2` | 事件参数 |

#### Returns

`Promise`<`T3`\>[]

**`Remarks`**

等待请求事件返回

#### Defined in

[assets/@framework/mk_event_target.ts:132](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_event_target.ts#L132)
