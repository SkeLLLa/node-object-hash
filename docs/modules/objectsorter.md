[Node object hash - v2.2.0](../README.md) / objectSorter

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

Ƭ **StringifyFn**: (`obj`: [_Hashable_](../interfaces/hasher.export_.hashable.md) | _any_) => _string_

Defined in: [objectSorter.ts:186](https://github.com/SkeLLLa/node-object-hash/blob/28d5344/src/objectSorter.ts#L186)

## Functions

### export&#x3D;

▸ **export=**(`options?`: [_SorterOptions_](../interfaces/objectsorter.export_.sorteroptions.md)): [_StringifyFn_](objectsorter.export_.md#stringifyfn)

Object sorter consturctor

#### Parameters:

| Name      | Type                                                                   | Default value | Description                   |
| --------- | ---------------------------------------------------------------------- | ------------- | ----------------------------- |
| `options` | [_SorterOptions_](../interfaces/objectsorter.export_.sorteroptions.md) | ...           | object transformation options |

**Returns:** [_StringifyFn_](objectsorter.export_.md#stringifyfn)

function that transforms object to strings

Defined in: [objectSorter.ts:194](https://github.com/SkeLLLa/node-object-hash/blob/28d5344/src/objectSorter.ts#L194)
