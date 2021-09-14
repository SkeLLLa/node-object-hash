[Node object hash - v2.3.9](../README.md) / [objectSorter](../modules/objectSorter.md) / [export%3D](../modules/objectSorter.export_.md) / CoerceOptions

# Interface: CoerceOptions

[objectSorter](../modules/objectSorter.md).[export=](../modules/objectSorter.export_.md).CoerceOptions

Advanced coerce options

## Table of contents

### Properties

- [bigint](objectSorter.export_.CoerceOptions.md#bigint)
- [boolean](objectSorter.export_.CoerceOptions.md#boolean)
- [date](objectSorter.export_.CoerceOptions.md#date)
- [function](objectSorter.export_.CoerceOptions.md#function)
- [null](objectSorter.export_.CoerceOptions.md#null)
- [number](objectSorter.export_.CoerceOptions.md#number)
- [set](objectSorter.export_.CoerceOptions.md#set)
- [string](objectSorter.export_.CoerceOptions.md#string)
- [symbol](objectSorter.export_.CoerceOptions.md#symbol)
- [undefined](objectSorter.export_.CoerceOptions.md#undefined)

## Properties

### bigint

• `Optional` **bigint**: `boolean`

If `true` converts BigInt to string

**`example`**
// coerce.bigint = true
1n === '1';

**`example`**
// coerce.bigint = false
1n !== '1';

**`default`** true

#### Defined in

[objectSorter.ts:44](https://github.com/SkeLLLa/node-object-hash/blob/7665e39/src/objectSorter.ts#L44)

---

### boolean

• `Optional` **boolean**: `boolean`

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

#### Defined in

[objectSorter.ts:22](https://github.com/SkeLLLa/node-object-hash/blob/7665e39/src/objectSorter.ts#L22)

---

### date

• `Optional` **date**: `boolean`

If `true` dates may equal the same formatted strings

**`example`**
// coerce.date = true

**`example`**
// coerce.date = false

**`default`** true

#### Defined in

[objectSorter.ts:106](https://github.com/SkeLLLa/node-object-hash/blob/7665e39/src/objectSorter.ts#L106)

---

### function

• `Optional` **function**: `boolean`

If `true` functions may equal the same formatted strings

**`example`**
// coerce.function = true

**`example`**
// coerce.function = false

**`default`** true

#### Defined in

[objectSorter.ts:97](https://github.com/SkeLLLa/node-object-hash/blob/7665e39/src/objectSorter.ts#L97)

---

### null

• `Optional` **null**: `boolean`

If `true` null will be equal to empty string

**`example`**
// coerce.null = true
null === ''

**`example`**
// coerce.null = false
null !== ''

**`default`** true

#### Defined in

[objectSorter.ts:77](https://github.com/SkeLLLa/node-object-hash/blob/7665e39/src/objectSorter.ts#L77)

---

### number

• `Optional` **number**: `boolean`

If `true` converts numbers to strings

**`example`**
// coerce.number = true
1 === '1';

**`example`**
// coerce.number = false
1 !== '1';

**`default`** true

#### Defined in

[objectSorter.ts:33](https://github.com/SkeLLLa/node-object-hash/blob/7665e39/src/objectSorter.ts#L33)

---

### set

• `Optional` **set**: `boolean`

If `true` set will be coerced to array

**`example`**
// coerce.set = true

**`example`**
// coerce.set = false

**`default`** true

#### Defined in

[objectSorter.ts:115](https://github.com/SkeLLLa/node-object-hash/blob/7665e39/src/objectSorter.ts#L115)

---

### string

• `Optional` **string**: `boolean`

If `true` strings and coerced string will be equal to coerced numbers, booleans, etc

**`example`**
// coerce.string = true
'1' === true

**`example`**
// coerce.string = false
'1' !== 1

**`default`** true

#### Defined in

[objectSorter.ts:55](https://github.com/SkeLLLa/node-object-hash/blob/7665e39/src/objectSorter.ts#L55)

---

### symbol

• `Optional` **symbol**: `boolean`

If `true` all symbols will have eual representation

**`example`**
// coerce.symbol = true
Symbol.for('a') === Symbol.for('b')

**`example`**
// coerce.symbol = false
Symbol.for('a') !== Symbol.for('b')

**`default`** true

#### Defined in

[objectSorter.ts:88](https://github.com/SkeLLLa/node-object-hash/blob/7665e39/src/objectSorter.ts#L88)

---

### undefined

• `Optional` **undefined**: `boolean`

If `true` undefined will be equal to empty string

**`example`**
// coerce.undefined = true
undefined === ''

**`example`**
// coerce.undefined = false
undefined !== ''

**`default`** true

#### Defined in

[objectSorter.ts:66](https://github.com/SkeLLLa/node-object-hash/blob/7665e39/src/objectSorter.ts#L66)
