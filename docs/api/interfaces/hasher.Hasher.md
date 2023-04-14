[# Node object hash](../README.md) / [hasher](../modules/hasher.md) / Hasher

# Interface: Hasher<T\>

[hasher](../modules/hasher.md).Hasher

## Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

## Table of contents

### Methods

- [hash](hasher.Hasher.md#hash)
- [sort](hasher.Hasher.md#sort)
- [sortObject](hasher.Hasher.md#sortobject)

## Methods

### hash

▸ **hash**(`object`, `opts?`): `string`

Create hash of an object

#### Parameters

| Name     | Type                                       | Description   |
| :------- | :----------------------------------------- | :------------ |
| `object` | [`Hashable`](hasher.Hashable.md) \| `T`    | source object |
| `opts?`  | [`HasherOptions`](hasher.HasherOptions.md) | -             |

#### Returns

`string`

hash string of an object

#### Defined in

[hasher.ts:47](https://github.com/SkeLLLa/node-object-hash/blob/22b763e/src/hasher.ts#L47)

---

### sort

▸ **sort**(`object`): `string`

Create sorted string from an object

#### Parameters

| Name     | Type | Description   |
| :------- | :--- | :------------ |
| `object` | `T`  | source object |

#### Returns

`string`

sorted string from an object

#### Defined in

[hasher.ts:53](https://github.com/SkeLLLa/node-object-hash/blob/22b763e/src/hasher.ts#L53)

---

### sortObject

▸ **sortObject**(`object`): `string`

Create sorted string from an object

**`Alias`**

sort

#### Parameters

| Name     | Type | Description   |
| :------- | :--- | :------------ |
| `object` | `T`  | source object |

#### Returns

`string`

sorted string from an object

#### Defined in

[hasher.ts:60](https://github.com/SkeLLLa/node-object-hash/blob/22b763e/src/hasher.ts#L60)
