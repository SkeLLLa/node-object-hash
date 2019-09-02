import 'jest';
import hasher = require('../src/hasher');

describe('Hasher', () => {
  describe('constructor', () => {
    const hash = hasher();
    test('defaults', () => {
      expect(hash.sort(['2', true, 3])).toEqual('[1,2,3]');
      expect(hash.hash(['2', true, 3])).toEqual(
        'a615eeaee21de5179de080de8c3052c8da901138406ba71c38c032845f7d54f4'
      );
    });

    test('overrides', () => {
      expect(hash.sort(['2', true, 3])).toEqual('[1,2,3]');
      expect(hash.hash(['2', true, 3], {alg: 'sha512'})).toEqual(
        '60f7b5dc86ded48785436192a08dbfd04894d7f1b417c4f8d3714679a7f78cb3c833f16a8559a1cf1f32968747dc1d95ef34826263dacf125ded8f5c374be4c0'
      );
      expect(hash.hash(['2', true, 3], {enc: 'base64'})).toEqual(
        'phXuruId5Red4IDejDBSyNqQEThAa6ccOMAyhF99VPQ='
      );
    });
  });
});
