**[node-object-hash](../README.md)**

[Globals](../README.md) › [objectSorter](../modules/objectsorter.md) › [SorterOptions](objectsorter.sorteroptions.md)

# Interface: SorterOptions

Object sorter options

## Hierarchy

* **SorterOptions**

  * [HasherOptions](hasher.hasheroptions.md)

## Index

### Properties

* [coerce](objectsorter.sorteroptions.md#optional-coerce)
* [sort](objectsorter.sorteroptions.md#optional-sort)
* [trim](objectsorter.sorteroptions.md#optional-trim)

## Properties

### `Optional` coerce

• **coerce**? : *boolean | [CoerceOptions](objectsorter.coerceoptions.md)*

*Defined in [objectSorter.ts:152](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L152)*

If `true` enables type coercion.
Advanced coerce options could be provided as object

**`default`** true

___

### `Optional` sort

• **sort**? : *boolean | [SortOptions](objectsorter.sortoptions.md)*

*Defined in [objectSorter.ts:158](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L158)*

If `true` enables sorting.
Advanced sorting options could be provided as object

**`default`** true

___

### `Optional` trim

• **trim**? : *boolean | [TrimOptions](objectsorter.trimoptions.md)*

*Defined in [objectSorter.ts:164](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L164)*

If `true` enables trimming and multiple whitespace replacement.
Advanced sorting options could be provided as object.

**`default`** false