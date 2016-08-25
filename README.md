# node-object-hash

Node.js object hash library with properties/arrays sorting to provide constant hashes.

Built on top of node's crypto module (so for using in browser use something
like browserify or use crypto functions polyfills). 

[![node](https://img.shields.io/node/v/node-object-hash.svg?maxAge=2592000&style=flat-square)]()
[![NPM](https://img.shields.io/npm/v/node-object-hash.svg?maxAge=2592000&style=flat-square)](https://npmjs.org/packages/node-object-hash)
[![NPM Downloads](https://img.shields.io/npm/dt/node-object-hash.svg?maxAge=2592000&style=flat-square)](https://npmjs.org/packages/node-object-hash)
[![Build Status](https://img.shields.io/travis/SkeLLLa/node-object-hash.svg?branch=master&style=flat-square)](https://travis-ci.org/SkeLLLa/node-object-hash)
[![Known Vulnerabilities](https://snyk.io/test/github/skellla/node-object-hash/badge.svg?style=flat-square)](https://snyk.io/test/github/skellla/node-object-hash)


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

In case if you still need an old 0.x.x version it's available in `hash.js`
file.
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
| Library                | Time (ms)  | Memory (Mb)        |
|------------------------|------------|--------------------|
| node-object-hash-0.2.1 | 5813.575   | 34                 |
| node-object-hash-1.0.0 | 2805.581   | 27                 |
| object-hash-1.1.4      | 534528.254 | 41                 |
| object-hash-1.1.3      | ERROR      | Out of heap memory |
| hash-object-0.1.7      | 9219.826   | 42                 |

### Similar libraries
* https://www.npmjs.com/package/object-hash (Slow, but browser-ready
 and most js types supported)
* https://www.npmjs.com/package/hash-object (no ES6 types support)


### License
ISC
