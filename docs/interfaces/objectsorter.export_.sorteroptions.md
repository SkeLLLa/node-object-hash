[Node object hash - v2.3.8](../README.md) / [objectSorter](../modules/objectsorter.md) / [export%3D](../modules/objectsorter.export_.md) / SorterOptions

# Interface: SorterOptions

[objectSorter](../modules/objectsorter.md).[export=](../modules/objectsorter.export_.md).SorterOptions

Object sorter options

## Hierarchy

- **SorterOptions**

  ↳ [HasherOptions](hasher.export_.hasheroptions.md)

  ↳ [HasherOptions](hasher.hasheroptions.md)

## Table of contents

### Properties

- [coerce](objectsorter.export_.sorteroptions.md#coerce)
- [sort](objectsorter.export_.sorteroptions.md#sort)
- [trim](objectsorter.export_.sorteroptions.md#trim)

## Properties

### coerce

• `Optional` **coerce**: `boolean` \| [CoerceOptions](objectsorter.export_.coerceoptions.md)

If `true` enables type coercion.
Advanced coerce options could be provided as object

**`default`** true

#### Defined in

[objectSorter.ts:171](https://github.com/SkeLLLa/node-object-hash/blob/9b047ca/src/objectSorter.ts#L171)

---

### sort

• `Optional` **sort**: `boolean` \| [SortOptions](objectsorter.export_.sortoptions.md)

If `true` enables sorting.
Advanced sorting options could be provided as object

**`default`** true

#### Defined in

[objectSorter.ts:177](https://github.com/SkeLLLa/node-object-hash/blob/9b047ca/src/objectSorter.ts#L177)

---

### trim

• `Optional` **trim**: `boolean` \| [TrimOptions](objectsorter.export_.trimoptions.md)

If `true` enables trimming and multiple whitespace replacement.
Advanced sorting options could be provided as object.

**`default`** false

#### Defined in

[objectSorter.ts:183](https://github.com/SkeLLLa/node-object-hash/blob/9b047ca/src/objectSorter.ts#L183)
