import type { BinaryToTextEncoding } from 'crypto';
import { createHash } from 'crypto';

import type { SorterOptions } from './objectSorter';
import { objectSorter } from './objectSorter';

/**
 * Default hash algorithm
 */
const DEFAULT_ALG = 'sha256';
/**
 * Default hash string enoding
 */
const DEFAULT_ENC: BinaryToTextEncoding = 'hex';

/**
 * Object hasher options
 */
export interface HasherOptions extends SorterOptions {
  /**
   * Hash algorithm to use
   * @default 'sha256'
   */
  alg?: string;
  /**
   * String encoding for hash
   * @default 'hex'
   */
  enc?: BinaryToTextEncoding;
}

/**
 * If object implements Hashable interface then value from toHash
 * will be used for hash function. It means that the different objects
 * with the function toHash that return the same value will have the same hash
 */
export interface Hashable {
  toHashableString: () => string;
}

export interface Hasher<T = unknown> {
  /**
   * Create hash of an object
   * @param object source object
   * @returns hash string of an object
   */
  hash(object: Hashable | T, opts?: HasherOptions): string;
  /**
   * Create sorted string from an object
   * @param object source object
   * @returns sorted string from an object
   */
  sort(object: T): string;
  /**
   * Create sorted string from an object
   * @param object source object
   * @returns sorted string from an object
   * @alias sort
   */
  sortObject(object: T): string;
}

/**
 * Hasher constructor
 * @param options hasher options
 * @return hasher instance
 */
export const hasher = (options?: HasherOptions): Hasher => {
  const sortObject = objectSorter(options);

  /**
   * Object hash function
   * @param obj object to hash
   * @param opts hasher options
   * @returns hash string
   */
  const hash = <T>(obj: Hashable | T, opts?: HasherOptions): string => {
    const alg = opts?.alg || options?.alg || DEFAULT_ALG;
    const enc: BinaryToTextEncoding = opts?.enc || options?.enc || DEFAULT_ENC;
    const sorted = sortObject(obj);

    return createHash(alg).update(sorted).digest(enc);
  };

  return {
    hash,
    sort: sortObject,
    sortObject,
  };
};
