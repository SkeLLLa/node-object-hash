# node-object-hash

Node object hash library. Built on top of node's crypto module.
### Installation
`npm i node-object-hash`
### Features
- Supports object property sorting for constant hashes for objects with same properties, but different order.
- Supports ES6 Maps and Sets.
- Supports type coercion (e.g. 1 and "1" will be the same)
  - rules:
    - numbers and strings represented without quotes;
    - boolean values converted to numbers;
- Supports all hashes and encodings of crypto library
- Supports large objects and arrays

### API

#### `hash(object[, options])`
Returns hash string.
*  `object` object for calculating hash;
*  `options` object with options;
*  `options.alg` hash algorithm (default: `'sha256'`);
*  `options.enc` hash encoding (default: `'hex'`);
*  `options.coerce` if true performs type coercion (default: `true`);
*  `options.sort` if true performs sorting on objects, arrays and Sets (default: `true`);

#### `sortedObjectString(object[, options])`
Returns sorted string generated from object
*  `object` object for calculating hash;
*  `options` object with options;
*  `options.coerce` if true performs type coercion (default: `true`);
*  `options.sort` if true performs sorting on objects, arrays and Sets (default: `true`);

### Requirements
- `>=nodejs-6.0.0`

### Example
```js
const {hash} = require('node-object-hash');

const object = {
  x: new Map([['a', 1], ['c', 3], ['b', 2]]),
  z: new Set([4,3,2,1]),
  f: 2,
  e: [{a:2}, 3, {g:2, e:{d:1}}, "rt", "1", "2abc", "3d"],
  d: [3,5,6,1,2,3],
  c: "3ab",
  b: "2",
  a: 1
};

const hashString = hash(object);
const hashStringSha512 = hash(object, {alg:'sha512'});
```

### Compared to same libraries
* https://www.npmjs.com/package/object-hash
  * Pros:
    * node-object-hash has twice smaller memory footprint
    * five times faster
    * no memory leak when using in sync flow
  * Cons:
    * Only `>=node-6.0.0` supported

### License
ICS
