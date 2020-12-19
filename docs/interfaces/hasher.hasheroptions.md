**[node-object-hash](../README.md)**

[Globals](../README.md) › [hasher](../modules/hasher.md) › [HasherOptions](hasher.hasheroptions.md)

# Interface: HasherOptions

Object hasher options

## Hierarchy

* [SorterOptions](objectsorter.sorteroptions.md)

  * **HasherOptions**

## Index

### Properties

* [alg](hasher.hasheroptions.md#optional-alg)
* [coerce](hasher.hasheroptions.md#optional-coerce)
* [enc](hasher.hasheroptions.md#optional-enc)
* [sort](hasher.hasheroptions.md#optional-sort)
* [trim](hasher.hasheroptions.md#optional-trim)

## Properties

### `Optional` alg

• **alg**? : *undefined | string*

*Defined in [hasher.ts:23](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/hasher.ts#L23)*

Hash algorithm to use

**`default`** 'sha256'

___

### `Optional` coerce

• **coerce**? : *boolean | [CoerceOptions](objectsorter.coerceoptions.md)*

*Inherited from [SorterOptions](objectsorter.sorteroptions.md).[coerce](objectsorter.sorteroptions.md#optional-coerce)*

*Defined in [objectSorter.ts:152](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L152)*

If `true` enables type coercion.
Advanced coerce options could be provided as object

**`default`** true

___

### `Optional` enc

• **enc**? : *HexBase64Latin1Encoding*

*Defined in [hasher.ts:28](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/hasher.ts#L28)*

String encoding for hash

**`default`** 'hex'

___

### `Optional` sort

• **sort**? : *boolean | [SortOptions](objectsorter.sortoptions.md)*

*Inherited from [SorterOptions](objectsorter.sorteroptions.md).[sort](objectsorter.sorteroptions.md#optional-sort)*

*Defined in [objectSorter.ts:158](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L158)*

If `true` enables sorting.
Advanced sorting options could be provided as object

**`default`** true

___

### `Optional` trim

• **trim**? : *boolean | [TrimOptions](objectsorter.trimoptions.md)*

*Inherited from [SorterOptions](objectsorter.sorteroptions.md).[trim](objectsorter.sorteroptions.md#optional-trim)*

*Defined in [objectSorter.ts:164](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L164)*

If `true` enables trimming and multiple whitespace replacement.
Advanced sorting options could be provided as object.

**`default`** false