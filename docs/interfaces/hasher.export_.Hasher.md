[Node object hash - v2.3.9](../README.md) / [hasher](../modules/hasher.md) / [export%3D](../modules/hasher.export_.md) / Hasher

# Interface: Hasher

[hasher](../modules/hasher.md).[export=](../modules/hasher.export_.md).Hasher

## Table of contents

### Methods

- [hash](hasher.export_.Hasher.md#hash)
- [sort](hasher.export_.Hasher.md#sort)
- [sortObject](hasher.export_.Hasher.md#sortobject)

## Methods

### hash

▸ **hash**(`object`, `opts?`): `string`

Create hash of an object

#### Parameters

| Name     | Type                                               | Description   |
| :------- | :------------------------------------------------- | :------------ |
| `object` | `any`                                              | source object |
| `opts?`  | [`HasherOptions`](hasher.export_.HasherOptions.md) | -             |

#### Returns

`string`

hash string of an object

#### Defined in

[hasher.ts:46](https://github.com/SkeLLLa/node-object-hash/blob/996e344/src/hasher.ts#L46)

---

### sort

▸ **sort**(`object`): `string`

Create sorted string from an object

#### Parameters

| Name     | Type  | Description   |
| :------- | :---- | :------------ |
| `object` | `any` | source object |

#### Returns

`string`

sorted string from an object

#### Defined in

[hasher.ts:52](https://github.com/SkeLLLa/node-object-hash/blob/996e344/src/hasher.ts#L52)

---

### sortObject

▸ **sortObject**(`object`): `string`

Create sorted string from an object

**`alias`** sort

#### Parameters

| Name     | Type  | Description   |
| :------- | :---- | :------------ |
| `object` | `any` | source object |

#### Returns

`string`

sorted string from an object

#### Defined in

[hasher.ts:59](https://github.com/SkeLLLa/node-object-hash/blob/996e344/src/hasher.ts#L59)
