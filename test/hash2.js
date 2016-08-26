/**
 * Created on 8/23/16.
 */
'use strict';

var hash = require('../hash2');
var assert = require('chai').assert;

var hashSC = hash();
var hashS = hash({coerce: false});
var hashC = hash({sort: false});

var libName = 'node-object-hash-v2';

var objects = {
  a: {
    b: 1,
    c: 3,
    a: 4,
    f: 0
  },
  b: {
    c: 3,
    b: 1,
    f: 0,
    a: 4
  },
  c: {
    c: '3',
    b: 1,
    f: '0',
    a: 4
  },
  d: [4, 3, 0, 2, 1],
  e: [2, '4', '3', false, true],
  f: {
    a: [{c: 2, a: 1, b: {a: 3, c: 2, b: 0}}],
    b: [1, 'a', {}, null],
  },
  g: {
    b: ['a', 1, {}, undefined],
    a: [{c: '2', b: {b: false, c: 2, a: '3'}, a: true}]
  },
  h: {
    type: 'ui',
    key: {
      code: 'BLA'
    }
  },
  i: {
    type: 'ui',
    key: {
      code: 'BLA'
    }
  }
};

describe(libName, function () {
  describe('#hash() on objects: [sort=true, coerce=true]', function () {
    it('should return equal hashes', function () {
      assert.equal(hashSC.hash(objects.a), hashSC.hash(objects.c));
    });
  });
  describe('#hash() on objects: [sort=true, coerce=false]', function () {
    it('should return equal hashes', function () {
      assert.equal(hashS.hash(objects.a), hashS.hash(objects.b));
    });
  });
  describe('#hash() on objects: [sort=false, coerce=true]', function () {
    it('should return equal hashes', function () {
      assert.equal(hashC.hash(objects.c), hashC.hash(objects.b));
    });
  });
  describe('#hash() on arrays: [sort=true, coerce=true]', function () {
    it('should return equal hashes', function () {
      assert.equal(hashSC.hash(objects.d), hashSC.hash(objects.e));
    });
  });
  describe('#hash() on complex objects: [sort=true, coerce=true]', function () {
    it('should return equal hashes', function () {
      assert.equal(hashSC.hash(objects.f), hashSC.hash(objects.g));
    });
  });

  describe('#sortObject() on multitype array: [sort=true, coerce=true]', function () {
    it('should return sorted array', function () {
      assert.equal(hashSC.sortObject(objects.e), '[0,1,2,3,4]');
    });
  });

  describe('#hash() on complex objects: [sort=true, coerce=true]', function () {
    it('should return equal hashes', function () {
      assert.equal(hashSC.hash(objects.h), hashSC.hash(objects.i));
    });
  });
});
