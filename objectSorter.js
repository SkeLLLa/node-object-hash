/**
 * Created on 8/22/16.
 */
'use strict';

/**
 * Guesses object's type
 * @param {Object} obj Object
 * @returns {string}
 */
function guessObjectType(obj) {
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
 * @param {*} obj
 * @returns {string}
 */
function guessType(obj) {
  var type = typeof obj;

  return type !== 'object' ? type : guessObjectType(obj);
}

/**
 * Creates object sorter function
 * @param {Object} [options] Sorter options
 * @param {boolean} [options.coerce="true"] Performs type coercion (e.g sorter(1) === ("1"))
 * @param {boolean} [options.sort="true"] Performs array, object, etc. sorting
 * @returns {string} Sorted object string
 */
function objectSorter(options) {
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
      itemType = guessType(item);
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
      valueType = guessType(value);
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
        self[guessType(key)](key),
        self[guessType(value)](value)
      ];
      arr[i] = item;
    }

    return sort ? '[' + arr.sort().join(';') + ']' : '[' + arr.join(';') + ']';
  };

  function obj2string(obj) {
    return self[guessType(obj)](obj);
  }

  return obj2string;
}

module.exports = objectSorter;
