/**
 * Created on 8/17/16.
 */
'use strict';


const hash = require('../index').hash;
const assert = require('chai').assert;

const obj1 = {
  a: 1,
  c: 2,
  b: "3"
};
const obj2 = {
  c: 2,
  b: "3",
  a: 1
};

describe(`node-object-hash`, () => {
  describe(`#hash(obj, {coerce: true, sort: true})`, () => {
    it(`should return equal hashes`, () => {
      assert.equal(hash(obj1), hash(obj2));
    });
  });
});
