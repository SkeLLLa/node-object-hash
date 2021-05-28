[Node object hash - v2.3.1](../README.md) / [hasher](../modules/hasher.md) / HasherOptions

# Interface: HasherOptions

[hasher](../modules/hasher.md).HasherOptions

Object hasher options

## Hierarchy

- [_SorterOptions_](objectsorter.export_.sorteroptions.md)

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

• `Optional` **alg**: _undefined_ | _string_

Hash algorithm to use

**`default`** 'sha256'

Defined in: [hasher.ts:23](https://github.com/SkeLLLa/node-object-hash/blob/94c2a98/src/hasher.ts#L23)

---

### coerce

• `Optional` **coerce**: _undefined_ | _boolean_ | [_CoerceOptions_](objectsorter.export_.coerceoptions.md)

If `true` enables type coercion.
Advanced coerce options could be provided as object

**`default`** true

Inherited from: [SorterOptions](objectsorter.export_.sorteroptions.md).[coerce](objectsorter.export_.sorteroptions.md#coerce)

Defined in: [objectSorter.ts:171](https://github.com/SkeLLLa/node-object-hash/blob/94c2a98/src/objectSorter.ts#L171)

---

### enc

• `Optional` **enc**: _undefined_ | _base64_ | _hex_

String encoding for hash

**`default`** 'base64'

Defined in: [hasher.ts:28](https://github.com/SkeLLLa/node-object-hash/blob/94c2a98/src/hasher.ts#L28)

---

### sort

• `Optional` **sort**: _undefined_ | _boolean_ | [_SortOptions_](objectsorter.export_.sortoptions.md)

If `true` enables sorting.
Advanced sorting options could be provided as object

**`default`** true

Inherited from: [SorterOptions](objectsorter.export_.sorteroptions.md).[sort](objectsorter.export_.sorteroptions.md#sort)

Defined in: [objectSorter.ts:177](https://github.com/SkeLLLa/node-object-hash/blob/94c2a98/src/objectSorter.ts#L177)

---

### trim

• `Optional` **trim**: _undefined_ | _boolean_ | [_TrimOptions_](objectsorter.export_.trimoptions.md)

If `true` enables trimming and multiple whitespace replacement.
Advanced sorting options could be provided as object.

**`default`** false

Inherited from: [SorterOptions](objectsorter.export_.sorteroptions.md).[trim](objectsorter.export_.sorteroptions.md#trim)

Defined in: [objectSorter.ts:183](https://github.com/SkeLLLa/node-object-hash/blob/94c2a98/src/objectSorter.ts#L183)
