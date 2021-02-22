[Node object hash - v2.1.2](../README.md) / [objectSorter](../modules/objectsorter.md) / CoerceOptions

# Interface: CoerceOptions

[objectSorter](../modules/objectsorter.md).CoerceOptions

Advanced coerce options

## Hierarchy

- **CoerceOptions**

## Table of contents

### Properties

- [bigint](objectsorter.coerceoptions.md#bigint)
- [boolean](objectsorter.coerceoptions.md#boolean)
- [date](objectsorter.coerceoptions.md#date)
- [function](objectsorter.coerceoptions.md#function)
- [null](objectsorter.coerceoptions.md#null)
- [number](objectsorter.coerceoptions.md#number)
- [set](objectsorter.coerceoptions.md#set)
- [string](objectsorter.coerceoptions.md#string)
- [symbol](objectsorter.coerceoptions.md#symbol)
- [undefined](objectsorter.coerceoptions.md#undefined)

## Properties

### bigint

• `Optional` **bigint**: _undefined_ | _boolean_

If `true` converts BigInt to string

**`example`**
// coerce.bigint = true
1n === '1';

**`example`**
// coerce.bigint = false
1n !== '1';

**`default`** true

Defined in: [objectSorter.ts:44](https://github.com/SkeLLLa/node-object-hash/blob/ca2f87c/src/objectSorter.ts#L44)

---

### boolean

• `Optional` **boolean**: _undefined_ | _boolean_

If `true` converts booleans to string `1` and `0`

**`example`**
// coerce.boolean = true
true === 1;
false === '0';

**`example`**
// coerce.boolean = true
true !== 1;
false !== '0'

**`default`** true

Defined in: [objectSorter.ts:22](https://github.com/SkeLLLa/node-object-hash/blob/ca2f87c/src/objectSorter.ts#L22)

---

### date

• `Optional` **date**: _undefined_ | _boolean_

If `true` dates may equal the same formatted strings

**`example`**
// coerce.date = true

**`example`**
// coerce.date = false

**`default`** true

Defined in: [objectSorter.ts:106](https://github.com/SkeLLLa/node-object-hash/blob/ca2f87c/src/objectSorter.ts#L106)

---

### function

• `Optional` **function**: _undefined_ | _boolean_

If `true` functions may equal the same formatted strings

**`example`**
// coerce.function = true

**`example`**
// coerce.function = false

**`default`** true

Defined in: [objectSorter.ts:97](https://github.com/SkeLLLa/node-object-hash/blob/ca2f87c/src/objectSorter.ts#L97)

---

### null

• `Optional` **null**: _undefined_ | _boolean_

If `true` null will be equal to empty string

**`example`**
// coerce.null = true
null === ''

**`example`**
// coerce.null = false
null !== ''

**`default`** true

Defined in: [objectSorter.ts:77](https://github.com/SkeLLLa/node-object-hash/blob/ca2f87c/src/objectSorter.ts#L77)

---

### number

• `Optional` **number**: _undefined_ | _boolean_

If `true` converts numbers to strings

**`example`**
// coerce.number = true
1 === '1';

**`example`**
// coerce.number = false
1 !== '1';

**`default`** true

Defined in: [objectSorter.ts:33](https://github.com/SkeLLLa/node-object-hash/blob/ca2f87c/src/objectSorter.ts#L33)

---

### set

• `Optional` **set**: _undefined_ | _boolean_

If `true` set will be coerced to array

**`example`**
// coerce.set = true

**`example`**
// coerce.set = false

**`default`** true

Defined in: [objectSorter.ts:115](https://github.com/SkeLLLa/node-object-hash/blob/ca2f87c/src/objectSorter.ts#L115)

---

### string

• `Optional` **string**: _undefined_ | _boolean_

If `true` strings and coerced string will be equal to coerced numbers, booleans, etc

**`example`**
// coerce.string = true
'1' === true

**`example`**
// coerce.string = false
'1' !== 1

**`default`** true

Defined in: [objectSorter.ts:55](https://github.com/SkeLLLa/node-object-hash/blob/ca2f87c/src/objectSorter.ts#L55)

---

### symbol

• `Optional` **symbol**: _undefined_ | _boolean_

If `true` all symbols will have eual representation

**`example`**
// coerce.symbol = true
Symbol.for('a') === Symbol.for('b')

**`example`**
// coerce.symbol = false
Symbol.for('a') !== Symbol.for('b')

**`default`** true

Defined in: [objectSorter.ts:88](https://github.com/SkeLLLa/node-object-hash/blob/ca2f87c/src/objectSorter.ts#L88)

---

### undefined

• `Optional` **undefined**: _undefined_ | _boolean_

If `true` undefined will be equal to empty string

**`example`**
// coerce.undefined = true
undefined === ''

**`example`**
// coerce.undefined = false
undefined !== ''

**`default`** true

Defined in: [objectSorter.ts:66](https://github.com/SkeLLLa/node-object-hash/blob/ca2f87c/src/objectSorter.ts#L66)
