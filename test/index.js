/**
 * Created on 8/23/16.
 */
'use strict';

var hash = require('../index');
var assert = require('chai').assert;

var hashSC = hash();
var hashS = hash({coerce: false});
var hashC = hash({sort: false});
var hashNoSC = hash({sort: false, coerce: false});

var libName = 'node-object-hash';

var UnknownClass = function UnknownClass() {
  this.name = 'unknown';
};
UnknownClass.prototype.toString = function XToString(){
  return JSON.stringify(this);
};

var testData = {
  objects: {
    noSort: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        e: 4,
        f: 5
      },
      g: 0,
      h: undefined,
      i: null,
      j: new Set([1, 2, 3, 4, 5]),
      k: new Map([[1, 1], [2, 2], [3, 3]]),
      l: new Date(0),
      m: Symbol(),
      n: function n() {
        return 'n';
      },
      o: [5, 4, 3, 2, 1, 0],
      x: new UnknownClass(),
      y: true,
    },
    noCoerce: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        e: 4,
        f: 5
      },
      g: 0,
      h: undefined,
      i: null,
      j: new Set([1, 2, 3, 4, 5]),
      k: new Map([[1, 1], [2, 2], [3, 3]]),
      l: new Date(0),
      m: Symbol(),
      n: function n() {
        return 'n';
      },
      o: [5, 4, 3, 2, 1, 0],
      x: new UnknownClass(),
      y: true
    },
    sort: {
      d: {
        e: 4,
        f: 5
      },
      b: 2,
      a: 1,
      c: 3,
      k: new Map([[3, 3], [2, 2], [1, 1]]),
      g: 0,
      o: [4, 2, 1, 3, 5, 0],
      h: undefined,
      n: function n() {
        return 'n';
      },
      j: new Set([2, 4, 3, 5, 1]),
      l: new Date(0),
      i: null,
      m: Symbol(),
      x: new UnknownClass(),
      y: new Boolean(true)
    },
    coerce: {
      a: true,
      b: '2',
      c: new String('3'),
      d: {
        e: new Number(4),
        f: '5'
      },
      g: false,
      h: null,
      i: undefined,
      j: new Set(['1', 2, '3', 4, 5]),
      k: new Map([['1', 1], [2, '2'], [3, 3]]),
      l: new Date(0),
      m: Symbol(),
      n: function n() {
        return 'n';
      },
      o: ['5', 4, '3', 2, true, false],
      x: new UnknownClass(),
      y: true
    },
    sortCoerce: {
      b: 2,
      n: function n() {
        return 'n';
      },
      g: false,
      j: new Set([4, 2, 1, 3, 5]),
      a: true,
      i: undefined,
      d: {
        f: 5,
        e: '4'
      },
      x: new UnknownClass(),
      o: ['5', 4, '3', 2, true, false],
      c: '3',
      l: new Date(0),
      k: new Map([[2, 2], [3, 3], [1, 1]]),
      h: null,
      m: Symbol(),
      y: new Number(1)
    }
  }
};

describe(libName, function () {
  describe('[sort=false, coerce=false]', function () {
    describe('#sort(<object>)', function () {
      it('should return different strings', function () {
        assert.notEqual(hashNoSC.sort(testData.objects.noSort), hashNoSC.sort(testData.objects.sort));
      });
      it('should return different strings', function () {
        assert.notEqual(hashNoSC.sort(testData.objects.noCoerce), hashNoSC.sort(testData.objects.coerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashNoSC.sort(testData.objects.noCoerce), hashNoSC.sort(testData.objects.noSort));
      });
    });
  });
  describe('[sort=false, coerce=true]', function () {
    describe('#sort(<object>)', function () {
      it('should return different strings', function () {
        assert.notEqual(hashC.sort(testData.objects.noSort), hashC.sort(testData.objects.sort));
      });
      it('should return different strings', function () {
        assert.notEqual(hashC.sort(testData.objects.noCoerce), hashC.sort(testData.objects.sortCoerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashC.sort(testData.objects.noCoerce), hashC.sort(testData.objects.coerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashC.sort(testData.objects.noCoerce), hashC.sort(testData.objects.noSort));
      });
    });
  });
  describe('[sort=true, coerce=false]', function () {
    describe('#sort(<object>)', function () {
      it('should return different strings', function () {
        assert.notEqual(hashS.sort(testData.objects.noCoerce), hashS.sort(testData.objects.coerce));
      });
      it('should return different strings', function () {
        assert.notEqual(hashS.sort(testData.objects.noSort), hashS.sort(testData.objects.sortCoerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashS.sort(testData.objects.noSort), hashS.sort(testData.objects.sort));
      });
      it('should return equal strings', function () {
        assert.equal(hashS.sort(testData.objects.noCoerce), hashS.sort(testData.objects.noSort));
      });
    });
  });
  describe('[sort=true, coerce=true]', function () {
    describe('#hash(<object>)', function () {
      it('should return equal hashes', function () {
        assert.equal(hashSC.hash(testData.objects.noSort), hashSC.hash(testData.objects.sort));
      });
      it('should return equal hashes', function () {
        assert.equal(hashSC.hash(testData.objects.noCoerce), hashSC.hash(testData.objects.coerce));
      });
      it('should return equal hashes', function () {
        assert.equal(hashSC.hash(testData.objects.sort), hashSC.hash(testData.objects.sortCoerce));
      });
      it('should return equal hashes', function () {
        assert.equal(hashSC.hash(testData.objects.coerce), hashSC.hash(testData.objects.sortCoerce));
      });
      it('should return equal hashes', function () {
        assert.equal(hashSC.hash(testData.objects.coerce), hashSC.hash(testData.objects.sortCoerce));
      });
    });
    describe('#sort(<object>)', function () {
      it('should return equal strings', function () {
        assert.equal(hashSC.sort(testData.objects.noSort), hashSC.sort(testData.objects.sort));
      });
      it('should return equal strings', function () {
        assert.equal(hashSC.sort(testData.objects.noCoerce), hashSC.sort(testData.objects.coerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashSC.sort(testData.objects.sort), hashSC.sort(testData.objects.sortCoerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashSC.sort(testData.objects.coerce), hashSC.sort(testData.objects.sortCoerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashSC.sort(testData.objects.coerce), hashSC.sort(testData.objects.sortCoerce));
      });
    });
  });
});
