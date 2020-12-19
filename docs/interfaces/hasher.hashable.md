**[node-object-hash](../README.md)**

[Globals](../README.md) › [hasher](../modules/hasher.md) › [Hashable](hasher.hashable.md)

# Interface: Hashable

If object implements Hashable interface then value from toHash
will be used for hash function. It means that the different objects
with the function toHash that return the same value will have the same hash

## Hierarchy

* **Hashable**

## Indexable

* \[ **key**: *string*\]: any

If object implements Hashable interface then value from toHash
will be used for hash function. It means that the different objects
with the function toHash that return the same value will have the same hash

## Index

### Properties

* [toHash](hasher.hashable.md#tohash)

## Properties

###  toHash

• **toHash**: *function*

*Defined in [hasher.ts:37](https://github.com/SkeLLLa/node-object-hash/blob/e455f23/src/hasher.ts#L37)*

#### Type declaration:

▸ (): *string*