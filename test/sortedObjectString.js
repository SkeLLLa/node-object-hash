/**
 * Created on 7/5/16.
 */
'use strict';

const sortedObjectString = require('../index').sortedObjectString;
const assert = require('chai').assert;

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

describe(`node-object-hash`, () => {
  describe(`#sortedObjectString(obj, {coerce: true, sort: true})`, () => {
    it(`should return properly sorted object string`, () => {
      let options = {coerce: true, sort: true};
      assert.equal(sortedObjectString(object, options), `{a,1,b,2,c,3ab,d,[1,2,3,3,5,6],e,[1,2abc,3,3d,rt,{a,2},{e,{d,1},g,2}],f,2,x,Map[a,1,c,3,b,2],z,Set[1,2,3,4]}`);
    });
  });
});


describe(`node-object-hash`, () => {
  describe(`#sortedObjectString(obj, {coerce: true, sort: false})`, () => {
    it(`should return properly sorted object string`, () => {
      let options = {coerce: true, sort: false};
      assert.equal(sortedObjectString(object, options), `{x,Map[a,1,c,3,b,2],z,Set[4,3,2,1],f,2,e,[{a,2},3,{g,2,e,{d,1}},rt,1,2abc,3d],d,[3,5,6,1,2,3],c,3ab,b,2,a,1}`);
    });
  });
});


describe(`node-object-hash`, () => {
  describe(`#sortedObjectString(obj, {coerce: false, sort: true})`, () => {
    it(`should return properly sorted object string`, () => {
      let options = {coerce: false, sort: true};
      assert.equal(sortedObjectString(object, options), `{a,1,b,"2",c,"3ab",d,[1,2,3,3,5,6],e,["1","2abc","3d","rt",3,{a,2},{e,{d,1},g,2}],f,2,x,Map[a,1,c,3,b,2],z,Set[1,2,3,4]}`);
    });
  });
});


describe(`node-object-hash`, () => {
  describe(`#sortedObjectString(obj, {coerce: false, sort: false})`, () => {
    it(`should return properly sorted object string`, () => {
      let options = {coerce: false, sort: false};
      assert.equal(sortedObjectString(object, options), `{x,Map[a,1,c,3,b,2],z,Set[4,3,2,1],f,2,e,[{a,2},3,{g,2,e,{d,1}},"rt","1","2abc","3d"],d,[3,5,6,1,2,3],c,"3ab",b,"2",a,1}`);
    });
  });
});

describe(`node-object-hash`, () => {
  describe(`#sortedObjectString(obj, {coerce: false, sort: false}) Array`, () => {
    it(`should return properly sorted object string`, () => {
      const src = [5,'4',3,'1',2];
      let options = {coerce: true, sort: true};
      assert.equal(sortedObjectString(src, options), `[1,2,3,4,5]`);
    });
  });
});

describe(`node-object-hash`, () => {
  describe(`#sortedObjectString(obj, {coerce: false, sort: false}) Object`, () => {
    it(`should return properly sorted object string`, () => {
      const src = {'b': 1, a:2, c:'5', d:1};
      let options = {coerce: true, sort: true};
      assert.equal(sortedObjectString(src, options), `{a,2,b,1,c,5,d,1}`);
    });
  });
});
