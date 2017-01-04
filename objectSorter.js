'use strict';

/**
 * Guesses object's type
 * @memberOf module:node-object-hash/objectSorter
 * @inner
 * @private
 * @param {Object} obj Object to guess type
 * @returns {string} Object type
 * @example
 * var a = [];
 * _guessObjectType(a) === 'array'; // true
 */
function _guessObjectType(obj) {
  var hasMapSet = typeof Map !== 'undefined';

  if (obj === null) {
    return 'null';
  }
  if (Array.isArray(obj)) {
    return 'array';
  }
  if (hasMapSet && (obj instanceof Map || obj instanceof WeakMap)) {
    return 'map';
  }
  if (hasMapSet && (obj instanceof Set || obj instanceof WeakSet)) {
    return 'set';
  }
  if (obj instanceof Date) {
    return 'date';
  }
  return 'object';
}

/**
 * Guesses variable type
 * @memberOf module:node-object-hash/objectSorter
 * @inner
 * @private
 * @param {*} obj Variable to guess type
 * @returns {string} Variable type
 * @example
 * var a = '';
 * _guessType(a) === 'string'; // true
 */
function _guessType(obj) {
  var type = typeof obj;

  return type !== 'object' ? type : _guessObjectType(obj);
}

/**
 * Creates object sorter function
 * @memberOf module:node-object-hash/objectSorter
 * @inner
 * @private
 * @param {Object} [options] Sorter options
 * @param {boolean} [options.coerce="true"] Performs type coercion
 * @param {boolean} [options.sort="true"] Performs array, object, etc. sorting
 * @returns {module:node-object-hash/objectSorter~makeObjectSorter~objectToString}
 * Object sorting function
 * @example
 * // with coercion
 * var sorter = makeObjectSorter({coerce: true, sort: false});
 * sorter(1) === "1"; // true
 * // with sort
 * var sorter = makeObjectSorter({coerce: false, sort: true});
 * sorter([2, 3, 1]) === [1, 2, 3]; // true
 */
function makeObjectSorter(options) {
  options = options || {};
  var coerce = typeof options.coerce === 'undefined' ? true : options.coerce,
      sort = typeof options.sort === 'undefined' ? true : options.sort,
      self = {};

  self.string = function sortString(obj) {
    if (coerce) {
      return obj;
    }
    return '<:s>:' + obj;
  };

  self.number = function sortNumber(obj) {
    if (coerce) {
      return obj.toString();
    }
    return '<:n>:' + obj;
  };

  self.boolean = function sortBoolean(obj) {
    if (coerce) {
      return obj ? '1' : '0';
    }
    return obj ? '<:b>:true' : '<:b>:false';
  };

  self.symbol = function sortSymbol() {
    return '<:smbl>';
  };

  self.undefined = function sortUndefined() {
    if (coerce) {
      return '';
    }
    return '<:undf>';
  };

  self.null = function sortNull() {
    if (coerce) {
      return '';
    }
    return '<:null>';
  };

  self.function = function sortFunction(obj) {
    if (coerce) {
      return obj.name + '=>' + obj.toString();
    }
    return '<:func>:' + obj.name + '=>' + obj.toString();
  };

  self.array = function sortArray(obj) {
    var item,
        itemType,
        result = [];

    for (var i = 0; i < obj.length; i++) {
      item = obj[i];
      itemType = _guessType(item);
      result.push(self[itemType](item));
    }

    return sort ? '[' + result.sort().toString() + ']' : '[' + result.toString() + ']';
  };

  self.set = function sortSet(obj) {
    return self.array(Array.from(obj));
  };

  self.date = function sortDate(obj) {
    var dateStr = obj.toISOString();

    if (coerce) {
      return dateStr;
    }
    return '<:date>:' + dateStr;
  };

  self.object = function sortObject(obj) {
    var keys = sort ? Object.keys(obj).sort() : Object.keys(obj),
        objArray = [],
        key, value, valueType,
        i;

    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      value = obj[key];
      valueType = _guessType(value);
      objArray.push(key + ':' + self[valueType](value));
    }
    return '{' + objArray.toString() + '}';
  };

  self.map = function sortMap(obj) {
    var arr = Array.from(obj),
        key, value, item,
        i;

    for (i = 0; i < arr.length; i++) {
      item = arr[i];
      key = item[0];
      value = item[1];
      item = [
        self[_guessType(key)](key),
        self[_guessType(value)](value)
      ];
      arr[i] = item;
    }

    return sort ? '[' + arr.sort().join(';') + ']' : '[' + arr.join(';') + ']';
  };

  /**
   * Object sorting function
   * @private
   * @param {Object} obj Object to sort
   * @returns {string} Sorted string
   */
  function objectToString(obj) {
    return self[_guessType(obj)](obj);
  }

  return objectToString;
}

/**
 * Object sorter module.
 * It provides object sorter function constructor.
 * @module node-object-hash/objectSorter
 * @type {module:node-object-hash/objectSorter~makeObjectSorter~objectToString}
 */
module.exports = makeObjectSorter;
