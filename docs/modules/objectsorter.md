[Node object hash - v2.3.6](../README.md) / objectSorter

# Module: objectSorter

## Table of contents

### Namespaces

- [export&#x3D;](objectsorter.export_.md)

### Interfaces

- [CoerceOptions](../interfaces/objectsorter.coerceoptions.md)
- [SortOptions](../interfaces/objectsorter.sortoptions.md)
- [SorterOptions](../interfaces/objectsorter.sorteroptions.md)
- [TrimOptions](../interfaces/objectsorter.trimoptions.md)

### Type aliases

- [StringifyFn](objectsorter.md#stringifyfn)

### Functions

- [export&#x3D;](objectsorter.md#export=)

## Type aliases

### StringifyFn

Ƭ **StringifyFn**: (`obj`: [Hashable](../interfaces/hasher.export_.hashable.md) \| `any`) => `string`

#### Type declaration

▸ (`obj`): `string`

##### Parameters

| Name  | Type                                                          |
| :---- | :------------------------------------------------------------ |
| `obj` | [Hashable](../interfaces/hasher.export_.hashable.md) \| `any` |

##### Returns

`string`

#### Defined in

[objectSorter.ts:186](https://github.com/SkeLLLa/node-object-hash/blob/f48c0c9/src/objectSorter.ts#L186)

## Functions

### export&#x3D;

▸ **export=**(`options?`): [StringifyFn](objectsorter.export_.md#stringifyfn)

Object sorter consturctor

#### Parameters

| Name      | Type                                                                 | Description                   |
| :-------- | :------------------------------------------------------------------- | :---------------------------- |
| `options` | [SorterOptions](../interfaces/objectsorter.export_.sorteroptions.md) | object transformation options |

#### Returns

[StringifyFn](objectsorter.export_.md#stringifyfn)

function that transforms object to strings

#### Defined in

[objectSorter.ts:194](https://github.com/SkeLLLa/node-object-hash/blob/f48c0c9/src/objectSorter.ts#L194)
