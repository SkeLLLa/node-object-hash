**[node-object-hash](README.md)**

[Globals](README.md)

## Index

### Modules

* [hasher](modules/hasher.md)
* [objectSorter](modules/objectsorter.md)

### Type aliases

* [Stringifiers](README.md#stringifiers)

### Variables

* [DEFAULT_ALG](README.md#const-default_alg)
* [DEFAULT_ENV](README.md#const-default_env)

### Functions

* [_array](README.md#private-_array)
* [_arraySort](README.md#private-_arraysort)
* [_boolean](README.md#private-_boolean)
* [_booleanCoerce](README.md#private-_booleancoerce)
* [_date](README.md#private-_date)
* [_dateCoerce](README.md#private-_datecoerce)
* [_function](README.md#private-_function)
* [_functionCoerce](README.md#private-_functioncoerce)
* [_functionTrim](README.md#private-_functiontrim)
* [_functionTrimCoerce](README.md#private-_functiontrimcoerce)
* [_hashable](README.md#private-_hashable)
* [_map](README.md#private-_map)
* [_mapSort](README.md#private-_mapsort)
* [_null](README.md#private-_null)
* [_nullCoerce](README.md#private-_nullcoerce)
* [_number](README.md#private-_number)
* [_numberCoerce](README.md#private-_numbercoerce)
* [_object](README.md#private-_object)
* [_objectSort](README.md#private-_objectsort)
* [_set](README.md#private-_set)
* [_setCoerce](README.md#private-_setcoerce)
* [_setSort](README.md#private-_setsort)
* [_setSortCoerce](README.md#private-_setsortcoerce)
* [_string](README.md#private-_string)
* [_stringCoerce](README.md#private-_stringcoerce)
* [_stringTrim](README.md#private-_stringtrim)
* [_stringTrimCoerce](README.md#private-_stringtrimcoerce)
* [_symbol](README.md#private-_symbol)
* [_symbolCoerce](README.md#private-_symbolcoerce)
* [_undefined](README.md#private-_undefined)
* [_undefinedCoerce](README.md#private-_undefinedcoerce)
* [guessObjectType](README.md#guessobjecttype)
* [guessType](README.md#guesstype)
* [instanceOfHashable](README.md#instanceofhashable)

### Object literals

* [PREFIX](README.md#const-prefix)
* [TYPE_MAP](README.md#const-type_map)

## Type aliases

###  Stringifiers

Ƭ **Stringifiers**: *object*

*Defined in [stringifiers.ts:12](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L12)*

List of functions responsible for converting certain types to string

#### Type declaration:

* \[ **key**: *string*\]: function

▸ (`obj`: any): *string*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

## Variables

### `Const` DEFAULT_ALG

• **DEFAULT_ALG**: *"sha256"* = "sha256"

*Defined in [hasher.ts:8](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/hasher.ts#L8)*

Default hash algorithm

___

### `Const` DEFAULT_ENV

• **DEFAULT_ENV**: *"hex"* = "hex"

*Defined in [hasher.ts:12](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/hasher.ts#L12)*

Default hash string enoding

## Functions

### `Private` _array

▸ **_array**(`obj`: Array‹any›): *string*

*Defined in [stringifiers.ts:262](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L262)*

Converts array to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Array‹any› | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _arraySort

▸ **_arraySort**(`obj`: Array‹any›): *string*

*Defined in [stringifiers.ts:243](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L243)*

Converts array to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Array‹any› | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _boolean

▸ **_boolean**(`obj`: boolean): *string*

*Defined in [stringifiers.ts:110](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L110)*

Converts boolean to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | boolean | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _booleanCoerce

▸ **_booleanCoerce**(`obj`: boolean): *string*

*Defined in [stringifiers.ts:101](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L101)*

Converts boolean to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | boolean | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _date

▸ **_date**(`obj`: Date): *string*

*Defined in [stringifiers.ts:234](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L234)*

Converts date to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Date | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _dateCoerce

▸ **_dateCoerce**(`obj`: Date): *string*

*Defined in [stringifiers.ts:225](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L225)*

Converts date to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Date | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _function

▸ **_function**(`obj`: Function): *string*

*Defined in [stringifiers.ts:182](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L182)*

Converts function to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Function | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _functionCoerce

▸ **_functionCoerce**(`obj`: Function): *string*

*Defined in [stringifiers.ts:173](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L173)*

Converts function to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Function | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _functionTrim

▸ **_functionTrim**(`obj`: Function): *string*

*Defined in [stringifiers.ts:207](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L207)*

Converts function to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Function | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _functionTrimCoerce

▸ **_functionTrimCoerce**(`obj`: Function): *string*

*Defined in [stringifiers.ts:191](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L191)*

Converts function to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Function | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _hashable

▸ **_hashable**(`obj`: [Hashable](interfaces/hasher.hashable.md)): *string*

*Defined in [stringifiers.ts:37](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L37)*

Converts Hashable to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | [Hashable](interfaces/hasher.hashable.md) | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _map

▸ **_map**(`obj`: Map‹any, any›): *string*

*Defined in [stringifiers.ts:350](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L350)*

Converts map to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Map‹any, any› | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _mapSort

▸ **_mapSort**(`obj`: Map‹any, any›): *string*

*Defined in [stringifiers.ts:369](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L369)*

Converts map to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Map‹any, any› | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _null

▸ **_null**(): *string*

*Defined in [stringifiers.ts:164](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L164)*

Converts null to string

**Returns:** *string*

object string representation

___

### `Private` _nullCoerce

▸ **_nullCoerce**(): *string*

*Defined in [stringifiers.ts:155](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L155)*

Converts null to string

**Returns:** *string*

object string representation

___

### `Private` _number

▸ **_number**(`obj`: number): *string*

*Defined in [stringifiers.ts:92](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L92)*

Converts number to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | number | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _numberCoerce

▸ **_numberCoerce**(`obj`: number): *string*

*Defined in [stringifiers.ts:83](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L83)*

Converts number to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | number | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _object

▸ **_object**(`obj`: object): *string*

*Defined in [stringifiers.ts:316](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L316)*

Converts object to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | object | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _objectSort

▸ **_objectSort**(`obj`: object): *string*

*Defined in [stringifiers.ts:333](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L333)*

Converts object to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | object | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _set

▸ **_set**(`obj`: Set‹any›): *string*

*Defined in [stringifiers.ts:298](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L298)*

Converts set to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Set‹any› | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _setCoerce

▸ **_setCoerce**(`obj`: Set‹any›): *string*

*Defined in [stringifiers.ts:307](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L307)*

Converts set to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Set‹any› | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _setSort

▸ **_setSort**(`obj`: Set‹any›): *string*

*Defined in [stringifiers.ts:289](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L289)*

Converts set to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Set‹any› | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _setSortCoerce

▸ **_setSortCoerce**(`obj`: Set‹any›): *string*

*Defined in [stringifiers.ts:280](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L280)*

Converts set to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Set‹any› | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _string

▸ **_string**(`obj`: string): *string*

*Defined in [stringifiers.ts:56](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L56)*

Converts string to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | string | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _stringCoerce

▸ **_stringCoerce**(`obj`: string): *string*

*Defined in [stringifiers.ts:47](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L47)*

Converts string to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | string | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _stringTrim

▸ **_stringTrim**(`obj`: string): *string*

*Defined in [stringifiers.ts:74](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L74)*

Converts string to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | string | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _stringTrimCoerce

▸ **_stringTrimCoerce**(`obj`: string): *string*

*Defined in [stringifiers.ts:65](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L65)*

Converts string to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | string | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _symbol

▸ **_symbol**(`obj`: symbol): *string*

*Defined in [stringifiers.ts:128](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L128)*

Converts symbol to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | symbol | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _symbolCoerce

▸ **_symbolCoerce**(): *string*

*Defined in [stringifiers.ts:119](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L119)*

Converts symbol to string

**Returns:** *string*

object string representation

___

### `Private` _undefined

▸ **_undefined**(): *string*

*Defined in [stringifiers.ts:146](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L146)*

Converts undefined to string

**Returns:** *string*

object string representation

___

### `Private` _undefinedCoerce

▸ **_undefinedCoerce**(): *string*

*Defined in [stringifiers.ts:137](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L137)*

Converts undefined to string

**Returns:** *string*

object string representation

___

###  guessObjectType

▸ **guessObjectType**(`obj`: object): *string*

*Defined in [typeGuess.ts:32](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L32)*

Guess object type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | object | analyzed object |

**Returns:** *string*

object type

___

###  guessType

▸ **guessType**(`obj`: any): *string*

*Defined in [typeGuess.ts:48](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L48)*

Guess variable type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | analyzed variable |

**Returns:** *string*

variable type

___

###  instanceOfHashable

▸ **instanceOfHashable**(`object`: any): *boolean*

*Defined in [typeGuess.ts:59](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L59)*

Identify if object is instance of Hashable interface

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | analyzed variable |

**Returns:** *boolean*

true if object has toHash property and this property is function
otherwise return false

## Object literals

### `Const` PREFIX

### ▪ **PREFIX**: *object*

*Defined in [stringifiers.ts:17](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L17)*

Prefixes that used when type coercion is disabled

###  array

• **array**: *string* = ""

*Defined in [stringifiers.ts:25](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L25)*

###  boolean

• **boolean**: *string* = "<:b>"

*Defined in [stringifiers.ts:20](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L20)*

###  date

• **date**: *string* = "<:date>"

*Defined in [stringifiers.ts:26](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L26)*

###  function

• **function**: *string* = "<:func>"

*Defined in [stringifiers.ts:24](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L24)*

###  map

• **map**: *string* = "<:map>"

*Defined in [stringifiers.ts:28](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L28)*

###  null

• **null**: *string* = "<:null>"

*Defined in [stringifiers.ts:23](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L23)*

###  number

• **number**: *string* = "<:n>"

*Defined in [stringifiers.ts:19](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L19)*

###  set

• **set**: *string* = "<:set>"

*Defined in [stringifiers.ts:27](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L27)*

###  string

• **string**: *string* = "<:s>"

*Defined in [stringifiers.ts:18](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L18)*

###  symbol

• **symbol**: *string* = "<:smbl>"

*Defined in [stringifiers.ts:21](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L21)*

###  undefined

• **undefined**: *string* = "<:undf>"

*Defined in [stringifiers.ts:22](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/stringifiers.ts#L22)*

___

### `Const` TYPE_MAP

### ▪ **TYPE_MAP**: *object*

*Defined in [typeGuess.ts:6](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L6)*

Type mapping rules.

###  Array

• **Array**: *string* = "array"

*Defined in [typeGuess.ts:7](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L7)*

###  Boolean

• **Boolean**: *string* = "boolean"

*Defined in [typeGuess.ts:23](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L23)*

###  Buffer

• **Buffer**: *string* = "array"

*Defined in [typeGuess.ts:17](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L17)*

###  Date

• **Date**: *string* = "date"

*Defined in [typeGuess.ts:20](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L20)*

###  Float32Array

• **Float32Array**: *string* = "array"

*Defined in [typeGuess.ts:15](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L15)*

###  Float64Array

• **Float64Array**: *string* = "array"

*Defined in [typeGuess.ts:16](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L16)*

###  Int16Array

• **Int16Array**: *string* = "array"

*Defined in [typeGuess.ts:11](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L11)*

###  Int32Array

• **Int32Array**: *string* = "array"

*Defined in [typeGuess.ts:13](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L13)*

###  Int8Array

• **Int8Array**: *string* = "array"

*Defined in [typeGuess.ts:8](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L8)*

###  Map

• **Map**: *string* = "map"

*Defined in [typeGuess.ts:18](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L18)*

###  Number

• **Number**: *string* = "number"

*Defined in [typeGuess.ts:22](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L22)*

###  Object

• **Object**: *string* = "object"

*Defined in [typeGuess.ts:24](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L24)*

###  Set

• **Set**: *string* = "set"

*Defined in [typeGuess.ts:19](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L19)*

###  String

• **String**: *string* = "string"

*Defined in [typeGuess.ts:21](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L21)*

###  Uint16Array

• **Uint16Array**: *string* = "array"

*Defined in [typeGuess.ts:12](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L12)*

###  Uint32Array

• **Uint32Array**: *string* = "array"

*Defined in [typeGuess.ts:14](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L14)*

###  Uint8Array

• **Uint8Array**: *string* = "array"

*Defined in [typeGuess.ts:9](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L9)*

###  Uint8ClampedArray

• **Uint8ClampedArray**: *string* = "array"

*Defined in [typeGuess.ts:10](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/typeGuess.ts#L10)*