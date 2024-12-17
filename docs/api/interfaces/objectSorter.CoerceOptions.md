[# Node object hash](../README.md) / [objectSorter](../modules/objectSorter.md) / CoerceOptions

# Interface: CoerceOptions

[objectSorter](../modules/objectSorter.md).CoerceOptions

Advanced coerce options

## Table of contents

### Properties

- [bigint](objectSorter.CoerceOptions.md#bigint)
- [boolean](objectSorter.CoerceOptions.md#boolean)
- [date](objectSorter.CoerceOptions.md#date)
- [function](objectSorter.CoerceOptions.md#function)
- [null](objectSorter.CoerceOptions.md#null)
- [number](objectSorter.CoerceOptions.md#number)
- [set](objectSorter.CoerceOptions.md#set)
- [string](objectSorter.CoerceOptions.md#string)
- [symbol](objectSorter.CoerceOptions.md#symbol)
- [undefined](objectSorter.CoerceOptions.md#undefined)

## Properties

### bigint

• `Optional` **bigint**: `boolean`

If `true` converts BigInt to string

**`Example`**

```ts
// coerce.bigint = true
1n === '1';
```

**`Example`**

```ts
// coerce.bigint = false
1n !== '1';
```

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:43](https://github.com/SkeLLLa/node-object-hash/blob/89ac590/src/objectSorter.ts#L43)

---

### boolean

• `Optional` **boolean**: `boolean`

If `true` converts booleans to string `1` and `0`

**`Example`**

```ts
// coerce.boolean = true
true === 1;
false === '0';
```

**`Example`**

```ts
// coerce.boolean = true
true !== 1;
false !== '0';
```

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:21](https://github.com/SkeLLLa/node-object-hash/blob/89ac590/src/objectSorter.ts#L21)

---

### date

• `Optional` **date**: `boolean`

If `true` dates may equal the same formatted strings

**`Example`**

```ts
// coerce.date = true
```

**`Example`**

```ts
// coerce.date = false
```

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:105](https://github.com/SkeLLLa/node-object-hash/blob/89ac590/src/objectSorter.ts#L105)

---

### function

• `Optional` **function**: `boolean`

If `true` functions may equal the same formatted strings

**`Example`**

```ts
// coerce.function = true
```

**`Example`**

```ts
// coerce.function = false
```

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:96](https://github.com/SkeLLLa/node-object-hash/blob/89ac590/src/objectSorter.ts#L96)

---

### null

• `Optional` **null**: `boolean`

If `true` null will be equal to empty string

**`Example`**

```ts
// coerce.null = true
null === '';
```

**`Example`**

```ts
// coerce.null = false
null !== '';
```

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:76](https://github.com/SkeLLLa/node-object-hash/blob/89ac590/src/objectSorter.ts#L76)

---

### number

• `Optional` **number**: `boolean`

If `true` converts numbers to strings

**`Example`**

```ts
// coerce.number = true
1 === '1';
```

**`Example`**

```ts
// coerce.number = false
1 !== '1';
```

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:32](https://github.com/SkeLLLa/node-object-hash/blob/89ac590/src/objectSorter.ts#L32)

---

### set

• `Optional` **set**: `boolean`

If `true` set will be coerced to array

**`Example`**

```ts
// coerce.set = true
```

**`Example`**

```ts
// coerce.set = false
```

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:114](https://github.com/SkeLLLa/node-object-hash/blob/89ac590/src/objectSorter.ts#L114)

---

### string

• `Optional` **string**: `boolean`

If `true` strings and coerced string will be equal to coerced numbers, booleans, etc

**`Example`**

```ts
// coerce.string = true
'1' === true;
```

**`Example`**

```ts
// coerce.string = false
'1' !== 1;
```

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:54](https://github.com/SkeLLLa/node-object-hash/blob/89ac590/src/objectSorter.ts#L54)

---

### symbol

• `Optional` **symbol**: `boolean`

If `true` all symbols will have eual representation

**`Example`**

```ts
// coerce.symbol = true
Symbol.for('a') === Symbol.for('b');
```

**`Example`**

```ts
// coerce.symbol = false
Symbol.for('a') !== Symbol.for('b');
```

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:87](https://github.com/SkeLLLa/node-object-hash/blob/89ac590/src/objectSorter.ts#L87)

---

### undefined

• `Optional` **undefined**: `boolean`

If `true` undefined will be equal to empty string

**`Example`**

```ts
// coerce.undefined = true
undefined === '';
```

**`Example`**

```ts
// coerce.undefined = false
undefined !== '';
```

**`Default`**

```ts
true;
```

#### Defined in

[objectSorter.ts:65](https://github.com/SkeLLLa/node-object-hash/blob/89ac590/src/objectSorter.ts#L65)
