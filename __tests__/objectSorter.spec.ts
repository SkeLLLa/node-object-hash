import { describe, expect, test } from '@jest/globals';

import { hasher } from '../src/hasher';
import { objectSorter } from '../src/objectSorter';

describe('Sorter', () => {
  const dataA = {
    a: 1,
    b: 2,
    c: 3,
  };

  const dataB = {
    b: 2,
    c: 3,
    a: 1,
  };

  describe('sort=true coerce=false', () => {
    const hash = hasher({ coerce: false });
    test('equal strings', () => {
      expect(hash.sort(dataA)).toBe(hash.sort(dataB));
    });
  });

  describe('sort=false coerce=false', () => {
    const hash = hasher({ sort: false, coerce: false });
    test('equal strings', () => {
      expect(hash.sort(dataA)).not.toBe(hash.sort(dataB));
    });
  });

  describe('constructor', () => {
    const sort = objectSorter();
    test('defaults', () => {
      expect(sort(['2', true, 3])).toBe('[1,2,3]');
    });
  });

  describe('sort', () => {
    test('array', () => {
      const hash = hasher({ sort: { array: true } });
      expect(hash.sort([3, 2, 1])).toBe('[1,2,3]');
    });
    test('set', () => {
      const hash = hasher({ sort: { set: true } });
      expect(hash.sort(new Set([3, 2, 1]))).toBe('[1,2,3]');
    });
    test('map', () => {
      const hash = hasher({ sort: { map: true } });
      expect(
        hash.sort(
          new Map([
            [3, 3],
            [2, 2],
            [1, 1],
          ]),
        ),
      ).toBe('[1,1;2,2;3,3]');
    });
    test('dictionary', () => {
      const hash = hasher({ sort: { object: true } });
      expect(hash.sort({ c: 3, a: 1, b: 2 })).toBe('{a:1,b:2,c:3}');
    });
    test('buffer', () => {
      const hash = hasher({ sort: true, coerce: false });
      expect(hash.sort(Buffer.from([3, 2, 1]))).toBe('[<:n>:3,<:n>:2,<:n>:1]');
    });
    test('Uint8Array', () => {
      const hash = hasher({ sort: { typedArray: true }, coerce: false });
      expect(hash.sort(Uint8Array.from([2, 3, 1]))).toBe('[<:n>:1,<:n>:2,<:n>:3]');
    });
  });

  describe('trim', () => {
    test('function', () => {
      const hash = hasher({ trim: { function: true } });
      const fn = function fn(): string {
        return 'hello      world';
      };
      expect(hash.sort(fn)).toBe(`fn=>function fn() { return 'hello world'; }`);
    });
    test('string', () => {
      const hash = hasher({ trim: { string: true } });
      const str = `  foo  bar  
        baz`;
      expect(hash.sort(str)).toBe(`foo bar baz`);
    });
  });

  describe('stringifiers', () => {
    test('unknown', () => {
      const hash = hasher();
      expect(hash.sort(Object.create(null))).toBe('<:unknonw>:unknown');
    });
  });
});
