/**
 * Created on 8/23/16.
 */
'use strict';


const hash = require('../hash2');
const assert = require('chai').assert;

const hashSC = hash();
const hashS = hash({coerce: false});
const hashC = hash({sort: false});

const libName = 'node-object-hash-v2';

const objects = {
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
  }
};

describe(`${libName}`, () => {
  describe(`#hash() on objects: [sort=true, coerce=true]`, () => {
    it(`should return equal hashes`, () => {
      assert.equal(hashSC.hash(objects.a), hashSC.hash(objects.c));
    });
  });
  describe(`#hash() on objects: [sort=true, coerce=false]`, () => {
    it(`should return equal hashes`, () => {
      assert.equal(hashS.hash(objects.a), hashS.hash(objects.b));
    });
  });
  describe(`#hash() on objects: [sort=false, coerce=true]`, () => {
    it(`should return equal hashes`, () => {
      assert.equal(hashC.hash(objects.c), hashC.hash(objects.b));
    });
  });
  describe(`#hash() on arrays: [sort=true, coerce=true]`, () => {
    it(`should return equal hashes`, () => {
      assert.equal(hashSC.hash(objects.d), hashSC.hash(objects.e));
    });
  });
  describe(`#hash() on complex objects: [sort=true, coerce=true]`, () => {
    it(`should return equal hashes`, () => {
      assert.equal(hashSC.hash(objects.f), hashSC.hash(objects.g));
    });
  });

  describe(`#sortObject() on multitype array: [sort=true, coerce=true]`, () => {
    it(`should return sorted array`, () => {
      assert.equal(hashSC.sortObject(objects.e), '[0,1,2,3,4]');
    });
  });
});
