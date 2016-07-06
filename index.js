/**
 * Node.js constant object hash module.
 * @exports node-object-hash
 * @type {Function}
 */

'use strict';
const crypto = require('crypto');

/**
 * Sorts object fields
 * @param {Object|Array|string|function} obj Initial object
 * @param {boolean} [coerce=true] Perform coercion
 * @param {boolean} [sort=true] Perform Array, Set, Object sorting
 * @returns {string}
 */
exports.sortedObjectString = (obj, {coerce = true, sort = true}) => {
  if (typeof obj == 'object') {
    if (Array.isArray(obj)) {
      let tmp = [...obj];
      tmp.forEach((it, idx) => {
        tmp[idx] = exports.sortedObjectString(it, {coerce, sort})
      });
      return sort ? `[${tmp.sort().toString()}]` : `[${tmp.toString()}]`;
    }
    if (obj === null) {
      return `null`;
    }
    if (obj instanceof Map) {
      return `Map[${[...obj].toString()}]`;
    }
    if (obj instanceof Set) {
      return sort ? `Set[${[...obj].sort().toString()}]` : `Set[${[...obj].toString()}]`;
    }
    const sortedObj = new Map();
    const keys = sort ? Object.keys(obj).sort() : Object.keys(obj);
    keys.forEach((key) => {
      sortedObj.set(key, exports.sortedObjectString(obj[key], {coerce, sort}));
    });
    return `{${[...sortedObj].toString()}}`;
  }
  if (typeof obj == 'function') {
    return `${obj.name}=>${obj.toString()}`;
  }
  if (coerce) {
    if (typeof obj == 'boolean') {
      return `${Number(obj)}`;
    }
  } else {
    if (typeof obj == 'string') {
      return `"${obj}"`
    }
  }
  if (coerce && typeof obj == 'boolean') {
    return `${Number(obj)}`;
  }
  return obj;
};

/**
 * Calculates object hash
 * @param {Object} obj Object to hash
 * @param {string} [alg="sha256"] Crypto algorithm to use
 * @param {string} [enc="hex"] Hash string encoding
 * @param {boolean} [coerce=true] Perform coercion
 * @param {boolean} [sort=true] Perform Array, Set, Object sorting
 * @returns {string} Hash string
 */
exports.hash = (obj, {alg='sha256', enc='hex', coerce=true, sort=true} = {}) => {
  if (~crypto.getHashes().indexOf(alg)) {
    const sorted = exports.sortedObjectString(obj, {coerce, sort});
    return crypto.createHash(alg)
      .update(sorted)
      .digest(enc);
  } else {
    throw new Error(`Algorithm ${alg} not supported by "ctypto" module`);
  }
};

