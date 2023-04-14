[# Node object hash](../README.md) / [objectSorter](../modules/objectSorter.md) / SorterOptions

# Interface: SorterOptions

[objectSorter](../modules/objectSorter.md).SorterOptions

Object sorter options

## Hierarchy

- **`SorterOptions`**

  ↳ [`HasherOptions`](hasher.HasherOptions.md)

## Table of contents

### Properties

- [coerce](objectSorter.SorterOptions.md#coerce)
- [sort](objectSorter.SorterOptions.md#sort)
- [trim](objectSorter.SorterOptions.md#trim)

## Properties

### coerce

• `Optional` **coerce**: `boolean` \| [`CoerceOptions`](objectSorter.CoerceOptions.md)

If `true` enables type coercion.
Advanced coerce options could be provided as object

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:170](https://github.com/SkeLLLa/node-object-hash/blob/22b763e/src/objectSorter.ts#L170)

---

### sort

• `Optional` **sort**: `boolean` \| [`SortOptions`](objectSorter.SortOptions.md)

If `true` enables sorting.
Advanced sorting options could be provided as object

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:176](https://github.com/SkeLLLa/node-object-hash/blob/22b763e/src/objectSorter.ts#L176)

---

### trim

• `Optional` **trim**: `boolean` \| [`TrimOptions`](objectSorter.TrimOptions.md)

If `true` enables trimming and multiple whitespace replacement.
Advanced sorting options could be provided as object.

**`Default`**

```ts
false;
```

#### Defined in

[objectSorter.ts:182](https://github.com/SkeLLLa/node-object-hash/blob/22b763e/src/objectSorter.ts#L182)
