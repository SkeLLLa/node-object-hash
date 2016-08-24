# node-object-hash

Node.js object hash library with properties/arrays sorting to provide constant hashes.

Built on top of node's crypto module (so for using in browser use something
like browserify or use crypto functions polyfills). 

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

### Changes
#### v0.x.x -> v1.0.0
- Sorting mechanism rewritten form ES6 Maps to simple arrays
 (add <=node-4.0.0 support)
- Performance optimization (~2 times faster than 0.x.x)
- API changes:
  - Now module returns 'constructor' function, where you can set
  default parameters: ```var objectHash = require('node-object-hash')(options);```

### API

#### Constructor `require('node-object-hash')([options])`
Returns preconfigured object with API

Parameters:
*  `options`:`<object>` - object with hasher config options
*  `options.coerce`:`<boolean>` - if true performs type coercion (default: `true`);
e.g. `hash(true) == hash('1') == hash(1)`, `hash(false) == hash('0') == hash(0)`
*  `options.sort`:`<boolean>` - if true performs sorting on objects, arrays, etc. (default: `true`);
*  `options.alg`:`<string>` - sets default hash algorithm (default: `'sha256'`); can be overridden in `hash` method;
*  `options.enc`:`<string>` - sets default hash encoding (default: `'hex'`); can be overridden in `hash` method;

#### `hash(object[, options])`
Returns hash string.
*  `object`:`<*>` object for calculating hash;
*  `options`:`<object>` object with options;
*  `options.alg`:`<string>` - hash algorithm (default: `'sha256'`);
*  `options.enc`:`<string>` - hash encoding (default: `'hex'`);

#### `sortObject(object)`
Returns sorted string generated from object
*  `object`:`<*>` - object for sorting;

### Requirements
- `>=nodejs-0.10.0` (starting from version 1.0.0)
- `>=nodejs-6.0.0`
- `>=nodejs-4.0.0` (requires to run node with `--harmony` flag)
- nodejs `crypto` module
### Example
```js
var hasher = require('node-object-hash');

var hashSortCoerce = hasher({sort:true, coerce:true});
// or
// var hashSortCoerce = hasher();
// or
// var hashSort = hasher({sort:true, coerce:false});
// or
// var hashCoerce = hasher({sort:false, coerce:true});

var objects = {
    a: {
      a: [{c: 2, a: 1, b: {a: 3, c: 2, b: 0}}],
      b: [1, 'a', {}, null],
    },
    b: {
      b: ['a', 1, {}, undefined],
      a: [{c: '2', b: {b: false, c: 2, a: '3'}, a: true}]
    },
    c: ['4', true, 0, 2, 3]
};

hashSortCoerce.hash(objects.a) === hashSortCoerce.hash(objects.b);
// returns true

hashSortCoerce.sortObject(object.c)
// returns '[0,1,2,3,4]'
```

### Benchmark results
Bench data - array of 100000 complex objects

#### Usage
`npm run bench`

#### Results

|   | node-object-hash-0.2.1 | node-object-hash-1.0.0 | object-hash-1.1.4 |
|---|---|---|---|
| Time | 5773.869ms | 2961.812ms | 534528.254ms |
| Memory | ~35Mb | ~33Mb | ~41Mb |


### Similar libraries
* https://www.npmjs.com/package/object-hash

### License
ISC
