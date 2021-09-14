[Node object hash - v2.3.9](../README.md) / [hasher](../modules/hasher.md) / HasherOptions

# Interface: HasherOptions

[hasher](../modules/hasher.md).HasherOptions

Object hasher options

## Hierarchy

- [`SorterOptions`](objectSorter.export_.SorterOptions.md)

  ↳ **`HasherOptions`**

## Table of contents

### Properties

- [alg](hasher.HasherOptions.md#alg)
- [coerce](hasher.HasherOptions.md#coerce)
- [enc](hasher.HasherOptions.md#enc)
- [sort](hasher.HasherOptions.md#sort)
- [trim](hasher.HasherOptions.md#trim)

## Properties

### alg

• `Optional` **alg**: `string`

Hash algorithm to use

**`default`** 'sha256'

#### Defined in

[hasher.ts:23](https://github.com/SkeLLLa/node-object-hash/blob/996e344/src/hasher.ts#L23)

---

### coerce

• `Optional` **coerce**: `boolean` \| [`CoerceOptions`](objectSorter.export_.CoerceOptions.md)

If `true` enables type coercion.
Advanced coerce options could be provided as object

**`default`** true

#### Inherited from

[SorterOptions](objectSorter.export_.SorterOptions.md).[coerce](objectSorter.export_.SorterOptions.md#coerce)

#### Defined in

[objectSorter.ts:171](https://github.com/SkeLLLa/node-object-hash/blob/996e344/src/objectSorter.ts#L171)

---

### enc

• `Optional` **enc**: `BinaryToTextEncoding`

String encoding for hash

**`default`** 'hex'

#### Defined in

[hasher.ts:28](https://github.com/SkeLLLa/node-object-hash/blob/996e344/src/hasher.ts#L28)

---

### sort

• `Optional` **sort**: `boolean` \| [`SortOptions`](objectSorter.export_.SortOptions.md)

If `true` enables sorting.
Advanced sorting options could be provided as object

**`default`** true

#### Inherited from

[SorterOptions](objectSorter.export_.SorterOptions.md).[sort](objectSorter.export_.SorterOptions.md#sort)

#### Defined in

[objectSorter.ts:177](https://github.com/SkeLLLa/node-object-hash/blob/996e344/src/objectSorter.ts#L177)

---

### trim

• `Optional` **trim**: `boolean` \| [`TrimOptions`](objectSorter.export_.TrimOptions.md)

If `true` enables trimming and multiple whitespace replacement.
Advanced sorting options could be provided as object.

**`default`** false

#### Inherited from

[SorterOptions](objectSorter.export_.SorterOptions.md).[trim](objectSorter.export_.SorterOptions.md#trim)

#### Defined in

[objectSorter.ts:183](https://github.com/SkeLLLa/node-object-hash/blob/996e344/src/objectSorter.ts#L183)
