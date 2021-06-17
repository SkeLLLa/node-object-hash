[Node object hash - v2.3.6](../README.md) / [hasher](../modules/hasher.md) / Hashable

# Interface: Hashable

[hasher](../modules/hasher.md).Hashable

If object implements Hashable interface then value from toHash
will be used for hash function. It means that the different objects
with the function toHash that return the same value will have the same hash

## Table of contents

### Properties

- [toHashableString](hasher.hashable.md#tohashablestring)

## Properties

### toHashableString

• **toHashableString**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[hasher.ts:37](https://github.com/SkeLLLa/node-object-hash/blob/f48c0c9/src/hasher.ts#L37)
