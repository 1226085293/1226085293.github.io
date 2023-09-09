[index](../README.md) / game

# Class: game

游戏全局功能

## Hierarchy

- [`instance_base`](instance_base.md)

  ↳ **`game`**

## Table of contents

### Accessors

- [restarting\_b](game.md#restarting_b)

### Methods

- [restart](game.md#restart)
- [pause](game.md#pause)
- [resume](game.md#resume)

## Accessors

### restarting\_b

• `get` **restarting_b**(): `boolean`

重启中

#### Returns

`boolean`

#### Defined in

[assets/@framework/mk_game.ts:22](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_game.ts#L22)

## Methods

### restart

▸ **restart**(): `Promise`<`void`\>

重启游戏

#### Returns

`Promise`<`void`\>

**`Remarks`**

请不要使用 cc.game.restart()，因为这会影响框架内的数据清理以及生命周期

#### Defined in

[assets/@framework/mk_game.ts:37](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_game.ts#L37)

___

### pause

▸ **pause**(`node_`, `recursion_b_?`): `void`

暂停节点

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `node_` | `Node` | `undefined` | 目标节点 |
| `recursion_b_` | `boolean` | `false` | 是否递归子节点 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_game.ts:51](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_game.ts#L51)

___

### resume

▸ **resume**(`node_`, `recursion_b_?`): `void`

恢复节点

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `node_` | `Node` | `undefined` | 目标节点 |
| `recursion_b_` | `boolean` | `false` | 是否递归子节点 |

#### Returns

`void`

#### Defined in

[assets/@framework/mk_game.ts:96](https://github.com/1226085293/MKFramework/blob/5bafc02/assets/@framework/mk_game.ts#L96)
