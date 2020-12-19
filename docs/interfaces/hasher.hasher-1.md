**[node-object-hash](../README.md)**

[Globals](../README.md) › [hasher](../modules/hasher.md) › [Hasher](hasher.hasher-1.md)

# Interface: Hasher

## Hierarchy

* **Hasher**

## Index

### Methods

* [hash](hasher.hasher-1.md#hash)
* [sort](hasher.hasher-1.md#sort)
* [sortObject](hasher.hasher-1.md#sortobject)

## Methods

###  hash

▸ **hash**(`object`: [Hashable](hasher.hashable.md) | any, `opts?`: [HasherOptions](hasher.hasheroptions.md)): *string*

*Defined in [hasher.ts:47](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/hasher.ts#L47)*

Create hash of an object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | [Hashable](hasher.hashable.md) \| any | source object |
`opts?` | [HasherOptions](hasher.hasheroptions.md) | - |

**Returns:** *string*

hash string of an object

___

###  sort

▸ **sort**(`object`: any): *string*

*Defined in [hasher.ts:53](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/hasher.ts#L53)*

Create sorted string from an object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | source object |

**Returns:** *string*

sorted string from an object

___

###  sortObject

▸ **sortObject**(`object`: any): *string*

*Defined in [hasher.ts:60](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/hasher.ts#L60)*

Create sorted string from an object

**`alias`** sort

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | source object |

**Returns:** *string*

sorted string from an object