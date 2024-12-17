[# Node object hash](../README.md) / [hasher](../modules/hasher.md) / HasherOptions

# Interface: HasherOptions

[hasher](../modules/hasher.md).HasherOptions

Object hasher options

## Hierarchy

- [`SorterOptions`](objectSorter.SorterOptions.md)

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

**`Default`**

```ts
'sha256';
```

#### Defined in

[hasher.ts:24](https://github.com/SkeLLLa/node-object-hash/blob/a6d1c08/src/hasher.ts#L24)

---

### coerce

• `Optional` **coerce**: `boolean` \| [`CoerceOptions`](objectSorter.CoerceOptions.md)

If `true` enables type coercion.
Advanced coerce options could be provided as object

**`Default`**

```ts
true;
```

#### Inherited from

[SorterOptions](objectSorter.SorterOptions.md).[coerce](objectSorter.SorterOptions.md#coerce)

#### Defined in

[objectSorter.ts:170](https://github.com/SkeLLLa/node-object-hash/blob/a6d1c08/src/objectSorter.ts#L170)

---

### enc

• `Optional` **enc**: `BinaryToTextEncoding`

String encoding for hash

**`Default`**

```ts
'hex';
```

#### Defined in

[hasher.ts:29](https://github.com/SkeLLLa/node-object-hash/blob/a6d1c08/src/hasher.ts#L29)

---

### sort

• `Optional` **sort**: `boolean` \| [`SortOptions`](objectSorter.SortOptions.md)

If `true` enables sorting.
Advanced sorting options could be provided as object

**`Default`**

```ts
true;
```

#### Inherited from

[SorterOptions](objectSorter.SorterOptions.md).[sort](objectSorter.SorterOptions.md#sort)

#### Defined in

[objectSorter.ts:176](https://github.com/SkeLLLa/node-object-hash/blob/a6d1c08/src/objectSorter.ts#L176)

---

### trim

• `Optional` **trim**: `boolean` \| [`TrimOptions`](objectSorter.TrimOptions.md)

If `true` enables trimming and multiple whitespace replacement.
Advanced sorting options could be provided as object.

**`Default`**

```ts
false;
```

#### Inherited from

[SorterOptions](objectSorter.SorterOptions.md).[trim](objectSorter.SorterOptions.md#trim)

#### Defined in

[objectSorter.ts:182](https://github.com/SkeLLLa/node-object-hash/blob/a6d1c08/src/objectSorter.ts#L182)
