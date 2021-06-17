[Node object hash - v2.3.4](../README.md) / [hasher](../modules/hasher.md) / HasherOptions

# Interface: HasherOptions

[hasher](../modules/hasher.md).HasherOptions

Object hasher options

## Hierarchy

- [SorterOptions](objectsorter.export_.sorteroptions.md)

  ↳ **HasherOptions**

## Table of contents

### Properties

- [alg](hasher.hasheroptions.md#alg)
- [coerce](hasher.hasheroptions.md#coerce)
- [enc](hasher.hasheroptions.md#enc)
- [sort](hasher.hasheroptions.md#sort)
- [trim](hasher.hasheroptions.md#trim)

## Properties

### alg

• `Optional` **alg**: `string`

Hash algorithm to use

**`default`** 'sha256'

#### Defined in

[hasher.ts:23](https://github.com/SkeLLLa/node-object-hash/blob/db2f49f/src/hasher.ts#L23)

---

### coerce

• `Optional` **coerce**: `boolean` \| [CoerceOptions](objectsorter.export_.coerceoptions.md)

If `true` enables type coercion.
Advanced coerce options could be provided as object

**`default`** true

#### Inherited from

[SorterOptions](objectsorter.export_.sorteroptions.md).[coerce](objectsorter.export_.sorteroptions.md#coerce)

#### Defined in

[objectSorter.ts:171](https://github.com/SkeLLLa/node-object-hash/blob/db2f49f/src/objectSorter.ts#L171)

---

### enc

• `Optional` **enc**: `BinaryToTextEncoding`

String encoding for hash

**`default`** 'base64'

#### Defined in

[hasher.ts:28](https://github.com/SkeLLLa/node-object-hash/blob/db2f49f/src/hasher.ts#L28)

---

### sort

• `Optional` **sort**: `boolean` \| [SortOptions](objectsorter.export_.sortoptions.md)

If `true` enables sorting.
Advanced sorting options could be provided as object

**`default`** true

#### Inherited from

[SorterOptions](objectsorter.export_.sorteroptions.md).[sort](objectsorter.export_.sorteroptions.md#sort)

#### Defined in

[objectSorter.ts:177](https://github.com/SkeLLLa/node-object-hash/blob/db2f49f/src/objectSorter.ts#L177)

---

### trim

• `Optional` **trim**: `boolean` \| [TrimOptions](objectsorter.export_.trimoptions.md)

If `true` enables trimming and multiple whitespace replacement.
Advanced sorting options could be provided as object.

**`default`** false

#### Inherited from

[SorterOptions](objectsorter.export_.sorteroptions.md).[trim](objectsorter.export_.sorteroptions.md#trim)

#### Defined in

[objectSorter.ts:183](https://github.com/SkeLLLa/node-object-hash/blob/db2f49f/src/objectSorter.ts#L183)
