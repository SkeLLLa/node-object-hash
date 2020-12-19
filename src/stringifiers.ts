/**
 * @private
 * @inner
 */

import { guessType } from './typeGuess';
import { Hashable } from './hasher';

/**
 * List of functions responsible for converting certain types to string
 */
export type Stringifiers = { [key: string]: (obj: any) => string };

/**
 * Prefixes that used when type coercion is disabled
 */
export const PREFIX = {
  string: '<:s>',
  number: '<:n>',
  boolean: '<:b>',
  symbol: '<:smbl>',
  undefined: '<:undf>',
  null: '<:null>',
  function: '<:func>',
  array: '',
  date: '<:date>',
  set: '<:set>',
  map: '<:map>',
};

/**
 * Converts Hashable to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
export function _hashable(obj: Hashable): string {
  return obj.toHash();
}

/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _stringCoerce(obj: string): string {
  return obj;
}
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _string(obj: string): string {
  return PREFIX.string + ':' + obj;
}
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _stringTrimCoerce(obj: string): string {
  return obj.replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ').trim();
}
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _stringTrim(obj: string): string {
  return PREFIX.string + ':' + obj.replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ').trim();
}
/**
 * Converts number to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _numberCoerce(obj: number): string {
  return obj.toString();
}
/**
 * Converts number to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _number(obj: number): string {
  return PREFIX.number + ':' + obj;
}
/**
 * Converts boolean to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _booleanCoerce(obj: boolean): string {
  return obj ? '1' : '0';
}
/**
 * Converts boolean to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _boolean(obj: boolean): string {
  return PREFIX.boolean + ':' + obj.toString();
}
/**
 * Converts symbol to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _symbolCoerce(): string {
  return PREFIX.symbol;
}
/**
 * Converts symbol to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _symbol(obj: symbol): string {
  return PREFIX.symbol + ':' + obj.toString();
}
/**
 * Converts undefined to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _undefinedCoerce(): string {
  return '';
}
/**
 * Converts undefined to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _undefined(): string {
  return PREFIX.undefined;
}
/**
 * Converts null to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _nullCoerce(): string {
  return '';
}
/**
 * Converts null to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _null(): string {
  return PREFIX.null;
}
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _functionCoerce(obj: Function): string {
  return obj.name + '=>' + obj.toString();
}
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _function(obj: Function): string {
  return PREFIX.function + ':' + obj.name + '=>' + obj.toString();
}
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _functionTrimCoerce(obj: Function): string {
  return (
    obj.name +
    '=>' +
    obj
      .toString()
      .replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ')
      .trim()
  );
}
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _functionTrim(obj: Function): string {
  return (
    PREFIX.function +
    ':' +
    obj.name +
    '=>' +
    obj
      .toString()
      .replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ')
      .trim()
  );
}
/**
 * Converts date to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _dateCoerce(obj: Date): string {
  return obj.toISOString();
}
/**
 * Converts date to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _date(obj: Date): string {
  return PREFIX.date + ':' + obj.toISOString();
}
/**
 * Converts array to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _arraySort(obj: Array<any>): string {
  const stringifiers: Stringifiers = this;
  return (
    '[' +
    obj
      .map((item) => {
        return stringifiers[guessType(item)](item);
      })
      .sort()
      .toString() +
    ']'
  );
}
/**
 * Converts array to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _array(obj: Array<any>): string {
  const stringifiers: Stringifiers = this;
  return (
    '[' +
    obj
      .map((item) => {
        return stringifiers[guessType(item)](item);
      })
      .toString() +
    ']'
  );
}
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _setSortCoerce(obj: Set<any>): string {
  return _arraySort.call(this, Array.from(obj));
}
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _setSort(obj: Set<any>): string {
  return PREFIX.set + ':' + _arraySort.call(this, Array.from(obj));
}
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _set(obj: Set<any>): string {
  return PREFIX.set + ':' + _array.call(this, Array.from(obj));
}
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _setCoerce(obj: Set<any>): string {
  return _array.call(this, Array.from(obj));
}
/**
 * Converts object to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _object(obj: { [key: string]: any }): string {
  const stringifiers: Stringifiers = this;
  const keys = Object.keys(obj);
  const objArray = [];
  for (const key of keys) {
    const val = obj[key];
    const valT = guessType(val);
    objArray.push(key + ':' + stringifiers[valT](val));
  }
  return '{' + objArray.toString() + '}';
}
/**
 * Converts object to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _objectSort(obj: { [key: string]: any }): string {
  const stringifiers: Stringifiers = this;
  const keys = Object.keys(obj).sort();
  const objArray = [];
  for (const key of keys) {
    const val = obj[key];
    const valT = guessType(val);
    objArray.push(key + ':' + stringifiers[valT](val));
  }
  return '{' + objArray.toString() + '}';
}
/**
 * Converts map to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _map(obj: Map<any, any>): string {
  const stringifiers: Stringifiers = this;
  const arr = Array.from(obj);
  const mapped = [];
  for (const item of arr) {
    const [key, value] = item;
    mapped.push([
      stringifiers[guessType(key)](key),
      stringifiers[guessType(value)](value),
    ]);
  }
  return '[' + mapped.join(';') + ']';
}
/**
 * Converts map to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
export function _mapSort(obj: Map<any, any>): string {
  const stringifiers: Stringifiers = this;
  const arr = Array.from(obj);
  const mapped = [];
  for (const item of arr) {
    const [key, value] = item;
    mapped.push([
      stringifiers[guessType(key)](key),
      stringifiers[guessType(value)](value),
    ]);
  }
  return '[' + mapped.sort().join(';') + ']';
}
