import { describe, expect, test } from '@jest/globals';

import type { Hashable } from '../src/hasher';
import { hasher } from '../src/hasher';

interface MyHashable extends Hashable {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

describe('Hasher', () => {
  describe('constructor', () => {
    const hash = hasher();
    test('defaults', () => {
      expect(hash.sort(['2', true, 3])).toBe('[1,2,3]');
      expect(hash.hash(['2', true, 3])).toBe('a615eeaee21de5179de080de8c3052c8da901138406ba71c38c032845f7d54f4');
    });

    test('overrides', () => {
      expect(hash.sort(['2', true, 3])).toBe('[1,2,3]');
      expect(hash.hash(['2', true, 3], { alg: 'sha512' })).toBe(
        '60f7b5dc86ded48785436192a08dbfd04894d7f1b417c4f8d3714679a7f78cb3c833f16a8559a1cf1f32968747dc1d95ef34826263dacf125ded8f5c374be4c0',
      );
      expect(hash.hash(['2', true, 3], { enc: 'base64' })).toBe('phXuruId5Red4IDejDBSyNqQEThAa6ccOMAyhF99VPQ=');
    });

    test('hashable', () => {
      const hashable: MyHashable = {
        value: 'value',
        number: 1,
        bool: true,
        toHashableString: () => 'some_value_to_hash',
      };
      expect(hash.sort(hashable)).toBe('some_value_to_hash');
      expect(hash.hash(hashable)).toBe('64204ff2ce2d6bfd2d1f576b58b71d98a08aaa39c8d726fd220b858bfb571039');

      const anotherHashableWithSameHash: MyHashable = {
        value: 'value_another',
        number: 5,
        toHashableString: () => 'some_value_to_hash',
      };
      expect(hash.hash(hashable)).toBe(hash.hash(anotherHashableWithSameHash));
    });

    test('hashable array', () => {
      const arrayHashable = [
        {
          value: 'value',
          number: 1,
          bool: true,
          toHashableString: () => 'some_value_to_hash',
        },
        {
          value: 'value_another',
          number: 5,
          toHashableString: () => 'another_value_to_hash',
        },
      ];
      expect(hash.sort(arrayHashable)).toBe('[another_value_to_hash,some_value_to_hash]');

      expect(hash.hash(arrayHashable)).toBe('c0705a3e2b55b54d55a6fe675b7dfb48572bd3adf0c54aab621da2b3663a0796');

      const anotherHashableArrayWithObjectWithTheSameHash = [
        {
          someValue: 'somevalue',
          toHashableString: () => 'another_value_to_hash',
        },
        {
          numberValue: 5,
          toHashableString: () => 'some_value_to_hash',
        },
      ];
      expect(hash.hash(arrayHashable)).toBe(hash.hash(anotherHashableArrayWithObjectWithTheSameHash));
    });
  });
});
