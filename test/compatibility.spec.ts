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
          '94d3c97e1c5a48b3167571dc2996d2c8f39c00849b8da60c89ce0e9451a595e2'
        );
      });
      test('no coerce', () => {
        expect(hash.hash(testData.objects.noCoerce)).toEqual(
          '94d3c97e1c5a48b3167571dc2996d2c8f39c00849b8da60c89ce0e9451a595e2'
        );
      });
      test('sort', () => {
        expect(hash.hash(testData.objects.sort)).toEqual(
          '94d3c97e1c5a48b3167571dc2996d2c8f39c00849b8da60c89ce0e9451a595e2'
        );
      });
      test('no sort', () => {
        expect(hash.hash(testData.objects.noSort)).toEqual(
          '94d3c97e1c5a48b3167571dc2996d2c8f39c00849b8da60c89ce0e9451a595e2'
        );
      });
      test('sort and coerce', () => {
        expect(hash.hash(testData.objects.sortCoerce)).toEqual(
          '94d3c97e1c5a48b3167571dc2996d2c8f39c00849b8da60c89ce0e9451a595e2'
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
          '9bc082f76d1fac974e42bddae1b68336b998c0cbbe11d33abf1aa5cdb7e3d6bf'
        );
      });
      test('no coerce', () => {
        expect(hash.hash(testData.objects.noCoerce)).toEqual(
          '5bc020a78ed173a4e99e8bf7e665a32812effd5bbc5295f6d427503d80106fe8'
        );
      });
      test('sort', () => {
        expect(hash.hash(testData.objects.sort)).toEqual(
          '5bc020a78ed173a4e99e8bf7e665a32812effd5bbc5295f6d427503d80106fe8'
        );
      });
      test('no sort', () => {
        expect(hash.hash(testData.objects.noSort)).toEqual(
          '5bc020a78ed173a4e99e8bf7e665a32812effd5bbc5295f6d427503d80106fe8'
        );
      });
      test('sort and coerce', () => {
        expect(hash.hash(testData.objects.sortCoerce)).toEqual(
          '12807cc6a369885cb81586c6b2970f3d7fdabcacaa5ffbb5be1ec71220457481'
        );
      });
    });
    describe('sort=false coerce=true', () => {
      const hash = hasher({ sort: false, coerce: true, trim: true });

      test('coerce', () => {
        expect(hash.hash(testData.objects.coerce)).toEqual(
          '1f694653901fd084895772ea46ca00525e43ffa1d4e30a6de962b1d45876d201'
        );
      });
      test('no coerce', () => {
        expect(hash.hash(testData.objects.noCoerce)).toEqual(
          '1f694653901fd084895772ea46ca00525e43ffa1d4e30a6de962b1d45876d201'
        );
      });
      test('sort', () => {
        expect(hash.hash(testData.objects.sort)).toEqual(
          '7aa16bdf487a76a26d99c36ac954ef7e55b676e78e6c4313cbcce9e561e39a22'
        );
      });
      test('no sort', () => {
        expect(hash.hash(testData.objects.noSort)).toEqual(
          '1f694653901fd084895772ea46ca00525e43ffa1d4e30a6de962b1d45876d201'
        );
      });
      test('sort and coerce', () => {
        expect(hash.hash(testData.objects.sortCoerce)).toEqual(
          '39062455e48f34333fd33712e55e52ee582572ffbdfc401a8719af9386f46919'
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
          'b2e0ddf84f51275284558ea56ef4aef78c00bcf207ef19f47819ec0e8ece4459'
        );
      });
      test('no coerce', () => {
        expect(hash.hash(testData.objects.noCoerce)).toEqual(
          '058193872e4c4aeef8101341eccefd152fe5f019c65036669ff3dd086053f9ec'
        );
      });
      test('sort', () => {
        expect(hash.hash(testData.objects.sort)).toEqual(
          '8b062d88f305e28cd40e383b880244a205a04d9df055b2ca873fae753c8a687a'
        );
      });
      test('no sort', () => {
        expect(hash.hash(testData.objects.noSort)).toEqual(
          '058193872e4c4aeef8101341eccefd152fe5f019c65036669ff3dd086053f9ec'
        );
      });
      test('sort and coerce', () => {
        expect(hash.hash(testData.objects.sortCoerce)).toEqual(
          '09e422f68209dd588baa0cceda54ed7d1f8b2b32c5a7130bb495fe389b3ae5bd'
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
            `{a:1,b:2,c:3,d:{e:4,f:5},g:0,h:,i:,j:[1,2,3,4,5],k:[1,1;2,2;3,3],l:1970-01-01T00:00:00.000Z,m:<:smbl>,n:n=>function n() {\n                    return 'n';\n                },o:[0,1,2,3,4,5],x:<:UnknownClass>:{"name":"unknown"},y:1}`
          );
          expect(hash.sort(testData.objects.noCoerce)).toEqual(
            `{a:1,b:2,c:3,d:{e:4,f:5},g:0,h:,i:,j:[1,2,3,4,5],k:[1,1;2,2;3,3],l:1970-01-01T00:00:00.000Z,m:<:smbl>,n:n=>function n() {\n                    return 'n';\n                },o:[0,1,2,3,4,5],x:<:UnknownClass>:{"name":"unknown"},y:1}`
          );
          expect(hash.sort(testData.objects.sort)).toEqual(
            `{a:1,b:2,c:3,d:{e:4,f:5},g:0,h:,i:,j:[1,2,3,4,5],k:[1,1;2,2;3,3],l:1970-01-01T00:00:00.000Z,m:<:smbl>,n:n=>function n() {\n                    return 'n';\n                },o:[0,1,2,3,4,5],x:<:UnknownClass>:{"name":"unknown"},y:1}`
          );
          expect(hash.sort(testData.objects.noSort)).toEqual(
            `{a:1,b:2,c:3,d:{e:4,f:5},g:0,h:,i:,j:[1,2,3,4,5],k:[1,1;2,2;3,3],l:1970-01-01T00:00:00.000Z,m:<:smbl>,n:n=>function n() {\n                    return 'n';\n                },o:[0,1,2,3,4,5],x:<:UnknownClass>:{"name":"unknown"},y:1}`
          );
          expect(hash.sort(testData.objects.sortCoerce)).toEqual(
            `{a:1,b:2,c:3,d:{e:4,f:5},g:0,h:,i:,j:[1,2,3,4,5],k:[1,1;2,2;3,3],l:1970-01-01T00:00:00.000Z,m:<:smbl>,n:n=>function n() {\n                    return 'n';\n                },o:[0,1,2,3,4,5],x:<:UnknownClass>:{"name":"unknown"},y:1}`
          );
        });
        test('hash strings', () => {
          expect(hash.hash(testData.objects.coerce)).toEqual(
            'fc3bd2b324abda8b46bbfc470ca2e4f6831352fc67866cb38d2be8d3cd11a09d'
          );
          expect(hash.hash(testData.objects.noCoerce)).toEqual(
            'fc3bd2b324abda8b46bbfc470ca2e4f6831352fc67866cb38d2be8d3cd11a09d'
          );
          expect(hash.hash(testData.objects.sort)).toEqual(
            'fc3bd2b324abda8b46bbfc470ca2e4f6831352fc67866cb38d2be8d3cd11a09d'
          );
          expect(hash.hash(testData.objects.noSort)).toEqual(
            'fc3bd2b324abda8b46bbfc470ca2e4f6831352fc67866cb38d2be8d3cd11a09d'
          );
          expect(hash.hash(testData.objects.sortCoerce)).toEqual(
            'fc3bd2b324abda8b46bbfc470ca2e4f6831352fc67866cb38d2be8d3cd11a09d'
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
