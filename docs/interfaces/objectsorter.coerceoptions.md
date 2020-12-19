**[node-object-hash](../README.md)**

[Globals](../README.md) › [objectSorter](../modules/objectsorter.md) › [CoerceOptions](objectsorter.coerceoptions.md)

# Interface: CoerceOptions

Advanced coerce options

## Hierarchy

* **CoerceOptions**

## Index

### Properties

* [boolean](objectsorter.coerceoptions.md#optional-boolean)
* [date](objectsorter.coerceoptions.md#optional-date)
* [function](objectsorter.coerceoptions.md#optional-function)
* [null](objectsorter.coerceoptions.md#optional-null)
* [number](objectsorter.coerceoptions.md#optional-number)
* [set](objectsorter.coerceoptions.md#optional-set)
* [string](objectsorter.coerceoptions.md#optional-string)
* [symbol](objectsorter.coerceoptions.md#optional-symbol)
* [undefined](objectsorter.coerceoptions.md#optional-undefined)

## Properties

### `Optional` boolean

• **boolean**? : *undefined | false | true*

*Defined in [objectSorter.ts:22](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L22)*

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

___

### `Optional` date

• **date**? : *undefined | false | true*

*Defined in [objectSorter.ts:95](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L95)*

If `true` dates may equal the same formatted strings

**`example`** 
// coerce.date = true

**`example`** 
// coerce.date = false

**`default`** true

___

### `Optional` function

• **function**? : *undefined | false | true*

*Defined in [objectSorter.ts:86](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L86)*

If `true` functions may equal the same formatted strings

**`example`** 
// coerce.function = true

**`example`** 
// coerce.function = false

**`default`** true

___

### `Optional` null

• **null**? : *undefined | false | true*

*Defined in [objectSorter.ts:66](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L66)*

If `true` null will be equal to empty string

**`example`** 
// coerce.null = true
null === ''

**`example`** 
// coerce.null = false
null !== ''

**`default`** true

___

### `Optional` number

• **number**? : *undefined | false | true*

*Defined in [objectSorter.ts:33](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L33)*

If `true` converts numbers to strings

**`example`** 
// coerce.number = true
1 === '1';

**`example`** 
// coerce.number = true
1 !== '1';

**`default`** true

___

### `Optional` set

• **set**? : *undefined | false | true*

*Defined in [objectSorter.ts:104](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L104)*

If `true` set will be coerced to array

**`example`** 
// coerce.set = true

**`example`** 
// coerce.set = false

**`default`** true

___

### `Optional` string

• **string**? : *undefined | false | true*

*Defined in [objectSorter.ts:44](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L44)*

If `true` strings and coerced string will be equal to coerced numbers, booleans, etc

**`example`** 
// coerce.string = true
'1' === true

**`example`** 
// coerce.string = false
'1' !== 1

**`default`** true

___

### `Optional` symbol

• **symbol**? : *undefined | false | true*

*Defined in [objectSorter.ts:77](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L77)*

If `true` all symbols will have eual representation

**`example`** 
// coerce.symbol = true
Symbol.for('a') === Symbol.for('b')

**`example`** 
// coerce.symbol = false
Symbol.for('a') !== Symbol.for('b')

**`default`** true

___

### `Optional` undefined

• **undefined**? : *undefined | false | true*

*Defined in [objectSorter.ts:55](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/objectSorter.ts#L55)*

If `true` undefined will be equal to empty string

**`example`** 
// coerce.undefined = true
undefined === ''

**`example`** 
// coerce.undefined = false
undefined !== ''

**`default`** true