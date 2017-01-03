'use strict';

var crypto = require('crypto');
var objectSorter = require('./objectSorter');

/**
 * Node object hash API object
 * @typedef {Object} API
 * @memberOf module:node-object-hash
 * @inner
 * @property {Function} hash Returns object hash string (see {@link module:node-object-hash#hash})
 * @property {Function} sort Returns sorted object string (see {@link module:node-object-hash#sort})
 */


/**
 * Generates node-object-hash API object
 * @param {Object} [options] Library options
 * @param {boolean} [options.coerce=true] Performs type coercion
 * @param {boolean} [options.sort=true] Performs array, object, etc. sorting
 * @param {string} [options.alg=sha256] Default crypto algorithm to use (can be overridden)
 * @param {string} [options.enc=hex] Hash string encoding (can be overridden)
 * @returns {module:node-object-hash~API} Node object hash API instance
 * @memberOf module:node-object-hash
 * @inner
 */
function apiConstructor(options) {
  var defaults = options || {},
      _sortObject;

  defaults.alg = defaults.alg || 'sha256';
  defaults.enc = defaults.enc || 'hex';

  _sortObject = objectSorter(options);

  /**
   * Creates sorted string from given object
   * @param {*} obj JS object to be sorted
   * @returns {string} Sorted object string
   * @see {@link module:node-object-hash/objectSorter~makeObjectSorter~objectToString}
   * @memberOf module:node-object-hash
   * @instance
   * @public
   * @alias sort
   */
  function sortObject(obj) {
    return _sortObject(obj);
  }

  /**
   * Creates hash from given object
   * @param {*} obj JS object to hash
   * @param {Object} [opts] Options
   * @param {string} [opts.alg=sha256] Crypto algorithm to use
   * @param {string} [opts.enc=hex] Hash string encoding
   * @returns {string} Object hash value
   * @memberOf module:node-object-hash
   * @instance
   * @public
   * @alias hash
   */
  function hashObject(obj, opts) {
    opts = opts || {};
    var alg = opts.alg || defaults.alg,
        enc = opts.enc || defaults.enc,
        sorted = sortObject(obj);

    return crypto.createHash(alg)
      .update(sorted)
      .digest(enc);
  }

  return {
    hash: hashObject,
    sortObject: sortObject,
    sort: sortObject
  };
}

/**
 * Node object hash module.
 * It provides a methods that return object hash or sorted object string.
 * @module node-object-hash
 * @type {module:node-object-hash~apiConstructor}
 */
module.exports = apiConstructor;
