/**
 * Created on 8/23/16.
 */
'use strict';
var crypto = require('crypto');

var objectSorter = require('./objectSorter');

/**
 * @typedef {Object} API
 * @property {Function} hash Returns object hash
 * @property {Function} sortObject Returns sorted object string
 */

/**
 * API constructor
 * @param {Object} [options] Library options
 * @param {boolean} [options.coerce="true"] Performs type coercion
 * @param {boolean} [options.sort="true"] Performs array, object, etc. sorting
 * @param {string} [options.alg="sha256"] Default crypto algorithm to use (can be overridden)
 * @param {string} [options.enc="hex"] Hash string encoding (can be overridden)
 * @returns {API} API object
 */
module.exports = function Hash(options) {
  var api = {},
      defaults = options || {};

  defaults.coerce = typeof defaults.coerce === 'undefined' ? true : defaults.coerce;
  defaults.sort = typeof defaults.sort === 'undefined' ? true : defaults.sort;
  defaults.alg = defaults.alg || 'sha256';
  defaults.enc = defaults.enc || 'hex';

  var sortObjectToString = objectSorter(defaults);

  /**
   * Creates hash from given object
   * @param {*} obj JS object to hash
   * @param {Object} [opts] Options
   * @param {string} [opts.alg="sha256"] Crypto algorithm to use
   * @param {string} [opts.enc="hex"] Hash string encoding
   * @returns {string} Object hash value
   */
  api.hash = function hash(obj, opts) {
    opts = opts || {};
    var alg = opts.alg || defaults.alg,
        enc = opts.enc || defaults.enc,
        sorted = sortObjectToString(obj);

    return crypto.createHash(alg)
      .update(sorted)
      .digest(enc);
  };

  /**
   * Creates sorted string from object
   * @param {*} obj JS object to be sorted
   * @returns {string} Sorted object string
   */
  api.sortObject = function sortObject(obj) {
    return sortObjectToString(obj);
  };

  return api;
};
