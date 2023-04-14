[# Node object hash](../README.md) / objectSorter

# Module: objectSorter

## Table of contents

### Interfaces

- [CoerceOptions](../interfaces/objectSorter.CoerceOptions.md)
- [SortOptions](../interfaces/objectSorter.SortOptions.md)
- [SorterOptions](../interfaces/objectSorter.SorterOptions.md)
- [TrimOptions](../interfaces/objectSorter.TrimOptions.md)

### Type Aliases

- [StringifyFn](objectSorter.md#stringifyfn)

### Functions

- [objectSorter](objectSorter.md#objectsorter)

## Type Aliases

### StringifyFn

Ƭ **StringifyFn**: <T\>(`obj`: [`Hashable`](../interfaces/hasher.Hashable.md) \| `T`) => `string`

#### Type declaration

▸ <`T`\>(`obj`): `string`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name  | Type                                                  |
| :---- | :---------------------------------------------------- |
| `obj` | [`Hashable`](../interfaces/hasher.Hashable.md) \| `T` |

##### Returns

`string`

#### Defined in

[objectSorter.ts:185](https://github.com/SkeLLLa/node-object-hash/blob/22b763e/src/objectSorter.ts#L185)

## Functions

### objectSorter

▸ **objectSorter**(`options?`): [`StringifyFn`](objectSorter.md#stringifyfn)

Object sorter consturctor

#### Parameters

| Name       | Type                                                           | Description                   |
| :--------- | :------------------------------------------------------------- | :---------------------------- |
| `options?` | [`SorterOptions`](../interfaces/objectSorter.SorterOptions.md) | object transformation options |

#### Returns

[`StringifyFn`](objectSorter.md#stringifyfn)

function that transforms object to strings

#### Defined in

[objectSorter.ts:192](https://github.com/SkeLLLa/node-object-hash/blob/22b763e/src/objectSorter.ts#L192)
