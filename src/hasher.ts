import objectSorter = require('./objectSorter');
import crypto, { HexBase64Latin1Encoding } from 'crypto';
import { Hashable } from './hasher';

/**
 * Default hash algorithm
 */
const DEFAULT_ALG = 'sha256';
/**
 * Default hash string enoding
 */
const DEFAULT_ENV = 'hex';

namespace hasher {
  /**
   * Object hasher options
   */
  export interface HasherOptions extends objectSorter.SorterOptions {
    /**
     * Hash algorithm to use
     * @default 'sha256'
     */
    alg?: string;
    /**
     * String encoding for hash
     * @default 'hex'
     */
    enc?: HexBase64Latin1Encoding;
  }

  /**
   * If object implements Hashable interface then value from toHash
   * will be used for hash function. It means that the different objects
   * with the function toHash that return the same value will have the same hash
   */
  export interface Hashable {
    toHash: ()=>string;
    [key: string]: any;
  }

  export interface Hasher {
    /**
     * Create hash of an object
     * @param object source object
     * @returns hash string of an object
     */
    hash(object: Hashable | any, opts?: hasher.HasherOptions): string;
    /**
     * Create sorted string from an object
     * @param object source object
     * @returns sorted string from an object
     */
    sort(object: any): string;
    /**
     * Create sorted string from an object
     * @param object source object
     * @returns sorted string from an object
     * @alias sort
     */
    sortObject(object: any): string;
  }
}

/**
 * Hasher constructor
 * @param options hasher options
 */
function hasher(
  options: hasher.HasherOptions = {}
): hasher.Hasher {

  const sortObject = objectSorter(options);

  function hashObject(obj: Hashable | any, opts: hasher.HasherOptions = {}) {
    const alg = opts.alg || options.alg || DEFAULT_ALG;
    const enc = opts.enc || options.enc || DEFAULT_ENV;
    const sorted = sortObject(obj);
    
    return crypto
      .createHash(alg)
      .update(sorted)
      .digest(enc);
  }

  return {
    hash: hashObject,
    sort: sortObject,
    sortObject,
  };
}

export = hasher;
