/**
 * Created on 8/23/16.
 */
'use strict';

var hash = require('../hash2');
var assert = require('chai').assert;

var hashSC = hash();
var hashS = hash({coerce: false});
var hashC = hash({sort: false});
var hashNoSC = hash({sort: false, coerce: false});

var libName = 'node-object-hash';

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
      o: [5, 4, 3, 2, 1, 0]
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
      o: [5, 4, 3, 2, 1, 0]
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
      m: Symbol()
    },
    coerce: {
      a: true,
      b: '2',
      c: '3',
      d: {
        e: 4,
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
      o: ['5', 4, '3', 2, true, false]
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
      o: ['5', 4, '3', 2, true, false],
      c: '3',
      l: new Date(0),
      k: new Map([[2, 2], [3, 3], [1, 1]]),
      h: null,
      m: Symbol()
    }
  }
};

describe(libName, function () {
  describe('[sort=false, coerce=false]', function () {
    describe('#sortObject(<object>)', function () {
      it('should return different strings', function () {
        assert.notEqual(hashNoSC.sortObject(testData.objects.noSort), hashNoSC.sortObject(testData.objects.sort));
      });
      it('should return different strings', function () {
        assert.notEqual(hashNoSC.sortObject(testData.objects.noCoerce), hashNoSC.sortObject(testData.objects.coerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashNoSC.sortObject(testData.objects.noCoerce), hashNoSC.sortObject(testData.objects.noSort));
      });
    });
  });
  describe('[sort=false, coerce=true]', function () {
    describe('#sortObject(<object>)', function () {
      it('should return different strings', function () {
        assert.notEqual(hashC.sortObject(testData.objects.noSort), hashC.sortObject(testData.objects.sort));
      });
      it('should return different strings', function () {
        assert.notEqual(hashC.sortObject(testData.objects.noCoerce), hashC.sortObject(testData.objects.sortCoerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashC.sortObject(testData.objects.noCoerce), hashC.sortObject(testData.objects.coerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashC.sortObject(testData.objects.noCoerce), hashC.sortObject(testData.objects.noSort));
      });
    });
  });
  describe('[sort=true, coerce=false]', function () {
    describe('#sortObject(<object>)', function () {
      it('should return different strings', function () {
        assert.notEqual(hashS.sortObject(testData.objects.noCoerce), hashS.sortObject(testData.objects.coerce));
      });
      it('should return different strings', function () {
        assert.notEqual(hashS.sortObject(testData.objects.noSort), hashS.sortObject(testData.objects.sortCoerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashS.sortObject(testData.objects.noSort), hashS.sortObject(testData.objects.sort));
      });
      it('should return equal strings', function () {
        assert.equal(hashS.sortObject(testData.objects.noCoerce), hashS.sortObject(testData.objects.noSort));
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
    describe('#sortObject(<object>)', function () {
      it('should return equal strings', function () {
        assert.equal(hashSC.sortObject(testData.objects.noSort), hashSC.sortObject(testData.objects.sort));
      });
      it('should return equal strings', function () {
        assert.equal(hashSC.sortObject(testData.objects.noCoerce), hashSC.sortObject(testData.objects.coerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashSC.sortObject(testData.objects.sort), hashSC.sortObject(testData.objects.sortCoerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashSC.sortObject(testData.objects.coerce), hashSC.sortObject(testData.objects.sortCoerce));
      });
      it('should return equal strings', function () {
        assert.equal(hashSC.sortObject(testData.objects.coerce), hashSC.sortObject(testData.objects.sortCoerce));
      });
    });
  });
});

// describe(libName, function () {
//   describe('#hash() on objects: [sort=true, coerce=true]', function () {
//     it('should return equal hashes', function () {
//       assert.equal(hashSC.hash(objects.a), hashSC.hash(objects.c));
//     });
//   });
//   describe('#hash() on objects: [sort=true, coerce=false]', function () {
//     it('should return equal hashes', function () {
//       assert.equal(hashS.hash(objects.a), hashS.hash(objects.b));
//     });
//   });
//   describe('#hash() on objects: [sort=false, coerce=true]', function () {
//     it('should return equal hashes', function () {
//       assert.equal(hashSC.hash(objects.c), hashC.hash(objects.b));
//     });
//   });
//   describe('#hash() on arrays: [sort=true, coerce=true]', function () {
//     it('should return equal hashes', function () {
//       assert.equal(hashSC.hash(objects.d), hashSC.hash(objects.e));
//     });
//   });
//   describe('#hash() on complex objects: [sort=true, coerce=true]', function () {
//     it('should return equal hashes', function () {
//       assert.equal(hashSC.hash(objects.f), hashSC.hash(objects.g));
//     });
//   });
//
//   describe('#sortObject() on multitype array: [sort=true, coerce=true]', function () {
//     it('should return sorted array', function () {
//       assert.equal(hashSC.sortObject(objects.e), '[0,1,2,3,4]');
//     });
//   });
//
//   describe('#hash() on complex objects: [sort=true, coerce=true]', function () {
//     it('should return equal hashes', function () {
//       assert.equal(hashSC.hash(objects.h), hashSC.hash(objects.i));
//     });
//   });
// });
