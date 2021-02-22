import 'jest';
import hasher = require('../src/hasher');

describe('Backward compatibility', () => {
  class UnknownClass {
    protected name: string;
    constructor() {
      this.name = 'unknown';
    }
    toString(): string {
      return JSON.stringify(this);
    }
  }

  const testData = {
    objects: {
      noSort: {
        a: 1,
        b: 2,
        c: 3,
        d: {
          e: 4,
          f: 5,
        },
        g: 0,
        h: undefined,
        i: null,
        j: new Set([1, 2, 3, 4, 5]),
        k: new Map([
          [1, 1],
          [2, 2],
          [3, 3],
        ]),
        l: new Date(0),
        m: Symbol(),
        n: function n() {
          return 'n';
        },
        o: [5, 4, 3, 2, 1, 0],
        p: BigInt(123450),
        x: new UnknownClass(),
        y: true,
      },
      noCoerce: {
        a: 1,
        b: 2,
        c: 3,
        d: {
          e: 4,
          f: 5,
        },
        g: 0,
        h: undefined,
        i: null,
        j: new Set([1, 2, 3, 4, 5]),
        k: new Map([
          [1, 1],
          [2, 2],
          [3, 3],
        ]),
        l: new Date(0),
        m: Symbol(),
        n: function n() {
          return 'n';
        },
        o: [5, 4, 3, 2, 1, 0],
        p: BigInt(123450),
        x: new UnknownClass(),
        y: true,
      },
      sort: {
        d: {
          e: 4,
          f: 5,
        },
        b: 2,
        a: 1,
        c: 3,
        k: new Map([
          [3, 3],
          [2, 2],
          [1, 1],
        ]),
        g: 0,
        o: [4, 2, 1, 3, 5, 0],
        p: BigInt(123450),
        h: undefined,
        n: function n() {
          return 'n';
        },
        j: new Set([2, 4, 3, 5, 1]),
        l: new Date(0),
        i: null,
        m: Symbol(),
        x: new UnknownClass(),
        y: new Boolean(true),
      },
      coerce: {
        a: true,
        b: '2',
        c: new String('3'),
        d: {
          e: new Number(4),
          f: '5',
        },
        g: false,
        h: null,
        i: undefined,
        j: new Set(['1', 2, '3', 4, 5]),
        k: new Map<any, any>([
          ['1', 1],
          [2, '2'],
          [3, 3],
        ]),
        l: new Date(0),
        m: Symbol(),
        n: function n() {
          return 'n';
        },
        o: ['5', 4, '3', 2, true, false],
        p: BigInt(123450),
        x: new UnknownClass(),
        y: true,
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
          e: '4',
        },
        x: new UnknownClass(),
        o: ['5', 4, '3', 2, true, false],
        p: BigInt(123450),
        c: '3',
        l: new Date(0),
        k: new Map([
          [2, 2],
          [3, 3],
          [1, 1],
        ]),
        h: null,
        m: Symbol(),
        y: new Number(1),
      },
    },
  };

  describe('trim=true', () => {
    describe('sort=true coerce=true', () => {
      const hash = hasher({ sort: true, coerce: true, trim: true });
      test('coerce', () => {
        expect(hash.hash(testData.objects.coerce)).toEqual(
          'd562fffb194de7210e60f930d9046f57541e81368043a46e6d0532104c5c1b5c'
        );
      });
      test('no coerce', () => {
        expect(hash.hash(testData.objects.noCoerce)).toEqual(
          'd562fffb194de7210e60f930d9046f57541e81368043a46e6d0532104c5c1b5c'
        );
      });
      test('sort', () => {
        expect(hash.hash(testData.objects.sort)).toEqual(
          'd562fffb194de7210e60f930d9046f57541e81368043a46e6d0532104c5c1b5c'
        );
      });
      test('no sort', () => {
        expect(hash.hash(testData.objects.noSort)).toEqual(
          'd562fffb194de7210e60f930d9046f57541e81368043a46e6d0532104c5c1b5c'
        );
      });
      test('sort and coerce', () => {
        expect(hash.hash(testData.objects.sortCoerce)).toEqual(
          'd562fffb194de7210e60f930d9046f57541e81368043a46e6d0532104c5c1b5c'
        );
      });
    });

    describe('sort=true coerce=false', () => {
      const hash = hasher({
        sort: true,
        coerce: { set: true, symbol: true },
        trim: true,
      });

      test('coerce', () => {
        expect(hash.hash(testData.objects.coerce)).toEqual(
          '4930c339209f05627234b5bdff0577abd99c5ba9c7f7998731183c5123d0057c'
        );
      });
      test('no coerce', () => {
        expect(hash.hash(testData.objects.noCoerce)).toEqual(
          '5394d25e67809bacb64ba04dc2daa4763c56918efb1c689438b86373a98e826e'
        );
      });
      test('sort', () => {
        expect(hash.hash(testData.objects.sort)).toEqual(
          '5394d25e67809bacb64ba04dc2daa4763c56918efb1c689438b86373a98e826e'
        );
      });
      test('no sort', () => {
        expect(hash.hash(testData.objects.noSort)).toEqual(
          '5394d25e67809bacb64ba04dc2daa4763c56918efb1c689438b86373a98e826e'
        );
      });
      test('sort and coerce', () => {
        expect(hash.hash(testData.objects.sortCoerce)).toEqual(
          '510f7a95d1d95671c35f912309450bdbd418d32188d34d3980171c4fbb36fbe7'
        );
      });
    });
    describe('sort=false coerce=true', () => {
      const hash = hasher({ sort: false, coerce: true, trim: true });

      test('coerce', () => {
        expect(hash.hash(testData.objects.coerce)).toEqual(
          '45216942fbca6f5962a9b47416baaa23b27fb4e9c521c18d69df9efb35d5419d'
        );
      });
      test('no coerce', () => {
        expect(hash.hash(testData.objects.noCoerce)).toEqual(
          '45216942fbca6f5962a9b47416baaa23b27fb4e9c521c18d69df9efb35d5419d'
        );
      });
      test('sort', () => {
        expect(hash.hash(testData.objects.sort)).toEqual(
          '0c5dbb0aee08318086864856540b9bc760ce1bf1073e934caac3482a4646201d'
        );
      });
      test('no sort', () => {
        expect(hash.hash(testData.objects.noSort)).toEqual(
          '45216942fbca6f5962a9b47416baaa23b27fb4e9c521c18d69df9efb35d5419d'
        );
      });
      test('sort and coerce', () => {
        expect(hash.hash(testData.objects.sortCoerce)).toEqual(
          'e566ff209cf13b51ce5f8e53a6ae262a2e7c39075d0caff2336140c32c1892c6'
        );
      });
    });
    describe('sort=false coerce=false', () => {
      const hash = hasher({
        sort: false,
        coerce: { set: true, symbol: true },
        trim: true,
      });
      test('coerce', () => {
        expect(hash.hash(testData.objects.coerce)).toEqual(
          '85989bfe8c8a5aa29d3cd052bb50cf0b3cb5d2177f788bfa0b0b13756b5f9041'
        );
      });
      test('no coerce', () => {
        expect(hash.hash(testData.objects.noCoerce)).toEqual(
          'e302b813a63216fc4a2ccfe5d7412744438768f201116269fa185d60e805cd0c'
        );
      });
      test('sort', () => {
        expect(hash.hash(testData.objects.sort)).toEqual(
          '74e1458df6bd97860fd8cdf6db79408ee30dbcc4265371057cbb0733061debaf'
        );
      });
      test('no sort', () => {
        expect(hash.hash(testData.objects.noSort)).toEqual(
          'e302b813a63216fc4a2ccfe5d7412744438768f201116269fa185d60e805cd0c'
        );
      });
      test('sort and coerce', () => {
        expect(hash.hash(testData.objects.sortCoerce)).toEqual(
          'ba5efaa940a6eb779cc1d739ad4d9f423cf1a76d75cc1a0475d992a627586889'
        );
      });
    });
  });

  describe('trim=false', () => {
    describe('sort=true coerce=true', () => {
      const hash = hasher();
      describe('compatibility', function () {
        test('sort strings', () => {
          expect(hash.sort(testData.objects.coerce)).toEqual(
            `{a:1,b:2,c:3,d:{e:4,f:5},g:0,h:,i:,j:[1,2,3,4,5],k:[1,1;2,2;3,3],l:1970-01-01T00:00:00.000Z,m:<:smbl>,n:n=>function n() {\n                    return 'n';\n                },o:[0,1,2,3,4,5],p:<:bi>:123450,x:<:UnknownClass>:{"name":"unknown"},y:1}`
          );
          expect(hash.sort(testData.objects.noCoerce)).toEqual(
            `{a:1,b:2,c:3,d:{e:4,f:5},g:0,h:,i:,j:[1,2,3,4,5],k:[1,1;2,2;3,3],l:1970-01-01T00:00:00.000Z,m:<:smbl>,n:n=>function n() {\n                    return 'n';\n                },o:[0,1,2,3,4,5],p:<:bi>:123450,x:<:UnknownClass>:{"name":"unknown"},y:1}`
          );
          expect(hash.sort(testData.objects.sort)).toEqual(
            `{a:1,b:2,c:3,d:{e:4,f:5},g:0,h:,i:,j:[1,2,3,4,5],k:[1,1;2,2;3,3],l:1970-01-01T00:00:00.000Z,m:<:smbl>,n:n=>function n() {\n                    return 'n';\n                },o:[0,1,2,3,4,5],p:<:bi>:123450,x:<:UnknownClass>:{"name":"unknown"},y:1}`
          );
          expect(hash.sort(testData.objects.noSort)).toEqual(
            `{a:1,b:2,c:3,d:{e:4,f:5},g:0,h:,i:,j:[1,2,3,4,5],k:[1,1;2,2;3,3],l:1970-01-01T00:00:00.000Z,m:<:smbl>,n:n=>function n() {\n                    return 'n';\n                },o:[0,1,2,3,4,5],p:<:bi>:123450,x:<:UnknownClass>:{"name":"unknown"},y:1}`
          );
          expect(hash.sort(testData.objects.sortCoerce)).toEqual(
            `{a:1,b:2,c:3,d:{e:4,f:5},g:0,h:,i:,j:[1,2,3,4,5],k:[1,1;2,2;3,3],l:1970-01-01T00:00:00.000Z,m:<:smbl>,n:n=>function n() {\n                    return 'n';\n                },o:[0,1,2,3,4,5],p:<:bi>:123450,x:<:UnknownClass>:{"name":"unknown"},y:1}`
          );
        });
        test('hash strings', () => {
          expect(hash.hash(testData.objects.coerce)).toEqual(
            '929a16265b70ecfb68dc252b2b4d40364d69711621b7ebdf8162043e344c1dc3'
          );
          expect(hash.hash(testData.objects.noCoerce)).toEqual(
            '929a16265b70ecfb68dc252b2b4d40364d69711621b7ebdf8162043e344c1dc3'
          );
          expect(hash.hash(testData.objects.sort)).toEqual(
            '929a16265b70ecfb68dc252b2b4d40364d69711621b7ebdf8162043e344c1dc3'
          );
          expect(hash.hash(testData.objects.noSort)).toEqual(
            '929a16265b70ecfb68dc252b2b4d40364d69711621b7ebdf8162043e344c1dc3'
          );
          expect(hash.hash(testData.objects.sortCoerce)).toEqual(
            '929a16265b70ecfb68dc252b2b4d40364d69711621b7ebdf8162043e344c1dc3'
          );
        });
      });
      describe('sort', () => {
        test('should return equal strings', function () {
          expect(hash.sort(testData.objects.noSort)).toEqual(
            hash.sort(testData.objects.sort)
          );
        });
        test('should return equal strings', function () {
          expect(hash.sort(testData.objects.noCoerce)).toEqual(
            hash.sort(testData.objects.coerce)
          );
        });
        test('should return equal strings', function () {
          expect(hash.sort(testData.objects.sort)).toEqual(
            hash.sort(testData.objects.sortCoerce)
          );
        });
        test('should return equal strings', function () {
          expect(hash.sort(testData.objects.coerce)).toEqual(
            hash.sort(testData.objects.sortCoerce)
          );
        });
        test('should return equal strings', function () {
          expect(hash.sort(testData.objects.coerce)).toEqual(
            hash.sort(testData.objects.sortCoerce)
          );
        });
      });

      describe('hash', () => {
        it('should return equal hashes', function () {
          expect(hash.hash(testData.objects.noSort)).toEqual(
            hash.hash(testData.objects.sort)
          );
        });
        it('should return equal hashes', function () {
          expect(hash.hash(testData.objects.noCoerce)).toEqual(
            hash.hash(testData.objects.coerce)
          );
        });
        it('should return equal hashes', function () {
          expect(hash.hash(testData.objects.sort)).toEqual(
            hash.hash(testData.objects.sortCoerce)
          );
        });
        it('should return equal hashes', function () {
          expect(hash.hash(testData.objects.coerce)).toEqual(
            hash.hash(testData.objects.sortCoerce)
          );
        });
        it('should return equal hashes', function () {
          expect(hash.hash(testData.objects.coerce)).toEqual(
            hash.hash(testData.objects.sortCoerce)
          );
        });
      });
    });

    describe('sort=false coerce=true', () => {
      const hash = hasher({ sort: false });

      it('should return different strings', function () {
        expect(hash.sort(testData.objects.noSort)).not.toEqual(
          hash.sort(testData.objects.sort)
        );
      });
      it('should return different strings', function () {
        expect(hash.sort(testData.objects.noCoerce)).not.toEqual(
          hash.sort(testData.objects.sortCoerce)
        );
      });
      it('should return equal strings', function () {
        expect(hash.sort(testData.objects.noCoerce)).toEqual(
          hash.sort(testData.objects.coerce)
        );
      });
      it('should return equal strings', function () {
        expect(hash.sort(testData.objects.noCoerce)).toEqual(
          hash.sort(testData.objects.noSort)
        );
      });
    });

    describe('sort=true coerce=false', () => {
      const hash = hasher({ coerce: false });

      test('should return different strings', function () {
        expect(hash.sort(testData.objects.noCoerce)).not.toEqual(
          hash.sort(testData.objects.coerce)
        );
      });
      test('should return different strings', function () {
        expect(hash.sort(testData.objects.noSort)).not.toEqual(
          hash.sort(testData.objects.sortCoerce)
        );
      });
      test('should return equal strings', function () {
        expect(hash.sort(testData.objects.noSort)).toEqual(
          hash.sort(testData.objects.sort)
        );
      });
      test('should return equal strings', function () {
        expect(hash.sort(testData.objects.noCoerce)).toEqual(
          hash.sort(testData.objects.noSort)
        );
      });
    });

    describe('sort=false coerce=false', () => {
      const hash = hasher({ sort: false, coerce: false });

      test('should return different strings', function () {
        expect(hash.sort(testData.objects.noSort)).not.toEqual(
          hash.sort(testData.objects.sort)
        );
      });
      test('should return different strings', function () {
        expect(hash.sort(testData.objects.noCoerce)).not.toEqual(
          hash.sort(testData.objects.coerce)
        );
      });
      test('should return equal strings', function () {
        expect(hash.sort(testData.objects.noCoerce)).toEqual(
          hash.sort(testData.objects.noSort)
        );
      });
    });
  });
});
