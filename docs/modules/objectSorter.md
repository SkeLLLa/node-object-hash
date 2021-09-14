[Node object hash - v2.3.9](../README.md) / objectSorter

# Module: objectSorter

## Table of contents

### Namespaces

- [export&#x3D;](objectSorter.export_.md)

### Interfaces

- [CoerceOptions](../interfaces/objectSorter.CoerceOptions.md)
- [SortOptions](../interfaces/objectSorter.SortOptions.md)
- [SorterOptions](../interfaces/objectSorter.SorterOptions.md)
- [TrimOptions](../interfaces/objectSorter.TrimOptions.md)

### Type aliases

- [StringifyFn](objectSorter.md#stringifyfn)

### Functions

- [export&#x3D;](objectSorter.md#export=)

## Type aliases

### StringifyFn

Ƭ **StringifyFn**: (`obj`: [`Hashable`](../interfaces/hasher.export_.Hashable.md) \| `any`) => `string`

#### Type declaration

▸ (`obj`): `string`

##### Parameters

| Name  | Type                                                            |
| :---- | :-------------------------------------------------------------- |
| `obj` | [`Hashable`](../interfaces/hasher.export_.Hashable.md) \| `any` |

##### Returns

`string`

#### Defined in

[objectSorter.ts:186](https://github.com/SkeLLLa/node-object-hash/blob/996e344/src/objectSorter.ts#L186)

## Functions

### export&#x3D;

▸ **export=**(`options?`): [`StringifyFn`](objectSorter.export_.md#stringifyfn)

Object sorter consturctor

#### Parameters

| Name      | Type                                                                   | Description                   |
| :-------- | :--------------------------------------------------------------------- | :---------------------------- |
| `options` | [`SorterOptions`](../interfaces/objectSorter.export_.SorterOptions.md) | object transformation options |

#### Returns

[`StringifyFn`](objectSorter.export_.md#stringifyfn)

function that transforms object to strings

#### Defined in

[objectSorter.ts:194](https://github.com/SkeLLLa/node-object-hash/blob/996e344/src/objectSorter.ts#L194)
