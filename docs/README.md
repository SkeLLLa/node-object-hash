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

### Object literals

* [PREFIX](README.md#const-prefix)
* [TYPE_MAP](README.md#const-type_map)

## Type aliases

###  Stringifiers

Ƭ **Stringifiers**: *object*

Defined in stringifiers.ts:11

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

Defined in hasher.ts:7

Default hash algorithm

___

### `Const` DEFAULT_ENV

• **DEFAULT_ENV**: *"hex"* = "hex"

Defined in hasher.ts:11

Default hash string enoding

## Functions

### `Private` _array

▸ **_array**(`obj`: Array‹any›): *string*

Defined in stringifiers.ts:251

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

Defined in stringifiers.ts:232

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

Defined in stringifiers.ts:99

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

Defined in stringifiers.ts:90

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

Defined in stringifiers.ts:223

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

Defined in stringifiers.ts:214

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

Defined in stringifiers.ts:171

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

Defined in stringifiers.ts:162

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

Defined in stringifiers.ts:196

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

Defined in stringifiers.ts:180

Converts function to string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | Function | object to convert |

**Returns:** *string*

object string representation

___

### `Private` _map

▸ **_map**(`obj`: Map‹any, any›): *string*

Defined in stringifiers.ts:339

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

Defined in stringifiers.ts:358

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

Defined in stringifiers.ts:153

Converts null to string

**Returns:** *string*

object string representation

___

### `Private` _nullCoerce

▸ **_nullCoerce**(): *string*

Defined in stringifiers.ts:144

Converts null to string

**Returns:** *string*

object string representation

___

### `Private` _number

▸ **_number**(`obj`: number): *string*

Defined in stringifiers.ts:81

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

Defined in stringifiers.ts:72

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

Defined in stringifiers.ts:305

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

Defined in stringifiers.ts:322

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

Defined in stringifiers.ts:287

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

Defined in stringifiers.ts:296

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

Defined in stringifiers.ts:278

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

Defined in stringifiers.ts:269

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

Defined in stringifiers.ts:45

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

Defined in stringifiers.ts:36

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

Defined in stringifiers.ts:63

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

Defined in stringifiers.ts:54

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

Defined in stringifiers.ts:117

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

Defined in stringifiers.ts:108

Converts symbol to string

**Returns:** *string*

object string representation

___

### `Private` _undefined

▸ **_undefined**(): *string*

Defined in stringifiers.ts:135

Converts undefined to string

**Returns:** *string*

object string representation

___

### `Private` _undefinedCoerce

▸ **_undefinedCoerce**(): *string*

Defined in stringifiers.ts:126

Converts undefined to string

**Returns:** *string*

object string representation

___

###  guessObjectType

▸ **guessObjectType**(`obj`: object): *string*

Defined in typeGuess.ts:30

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

Defined in typeGuess.ts:43

Guess variable type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | analyzed variable |

**Returns:** *string*

variable type

## Object literals

### `Const` PREFIX

### ▪ **PREFIX**: *object*

Defined in stringifiers.ts:16

Prefixes that used when type coercion is disabled

###  array

• **array**: *string* = ""

Defined in stringifiers.ts:24

###  boolean

• **boolean**: *string* = "<:b>"

Defined in stringifiers.ts:19

###  date

• **date**: *string* = "<:date>"

Defined in stringifiers.ts:25

###  function

• **function**: *string* = "<:func>"

Defined in stringifiers.ts:23

###  map

• **map**: *string* = "<:map>"

Defined in stringifiers.ts:27

###  null

• **null**: *string* = "<:null>"

Defined in stringifiers.ts:22

###  number

• **number**: *string* = "<:n>"

Defined in stringifiers.ts:18

###  set

• **set**: *string* = "<:set>"

Defined in stringifiers.ts:26

###  string

• **string**: *string* = "<:s>"

Defined in stringifiers.ts:17

###  symbol

• **symbol**: *string* = "<:smbl>"

Defined in stringifiers.ts:20

###  undefined

• **undefined**: *string* = "<:undf>"

Defined in stringifiers.ts:21

___

### `Const` TYPE_MAP

### ▪ **TYPE_MAP**: *object*

Defined in typeGuess.ts:4

Type mapping rules.

###  Array

• **Array**: *string* = "array"

Defined in typeGuess.ts:5

###  Boolean

• **Boolean**: *string* = "boolean"

Defined in typeGuess.ts:21

###  Buffer

• **Buffer**: *string* = "array"

Defined in typeGuess.ts:15

###  Date

• **Date**: *string* = "date"

Defined in typeGuess.ts:18

###  Float32Array

• **Float32Array**: *string* = "array"

Defined in typeGuess.ts:13

###  Float64Array

• **Float64Array**: *string* = "array"

Defined in typeGuess.ts:14

###  Int16Array

• **Int16Array**: *string* = "array"

Defined in typeGuess.ts:9

###  Int32Array

• **Int32Array**: *string* = "array"

Defined in typeGuess.ts:11

###  Int8Array

• **Int8Array**: *string* = "array"

Defined in typeGuess.ts:6

###  Map

• **Map**: *string* = "map"

Defined in typeGuess.ts:16

###  Number

• **Number**: *string* = "number"

Defined in typeGuess.ts:20

###  Object

• **Object**: *string* = "object"

Defined in typeGuess.ts:22

###  Set

• **Set**: *string* = "set"

Defined in typeGuess.ts:17

###  String

• **String**: *string* = "string"

Defined in typeGuess.ts:19

###  Uint16Array

• **Uint16Array**: *string* = "array"

Defined in typeGuess.ts:10

###  Uint32Array

• **Uint32Array**: *string* = "array"

Defined in typeGuess.ts:12

###  Uint8Array

• **Uint8Array**: *string* = "array"

Defined in typeGuess.ts:7

###  Uint8ClampedArray

• **Uint8ClampedArray**: *string* = "array"

Defined in typeGuess.ts:8