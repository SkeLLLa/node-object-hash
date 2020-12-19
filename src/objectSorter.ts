import { guessType } from './typeGuess';
import * as str from './stringifiers';
import { Hashable } from './hasher';

namespace objectSorter {
  /**
   * Advanced coerce options
   */
  export interface CoerceOptions {
    /**
     * If `true` converts booleans to string `1` and `0`
     * @example
     * // coerce.boolean = true
     * true === 1;
     * false === '0';
     * @example
     * // coerce.boolean = true
     * true !== 1;
     * false !== '0'
     * @default true
     */
    boolean?: boolean;
    /**
     * If `true` converts numbers to strings
     * @example
     * // coerce.number = true
     * 1 === '1';
     * @example
     * // coerce.number = true
     * 1 !== '1';
     * @default true
     */
    number?: boolean;
    /**
     * If `true` strings and coerced string will be equal to coerced numbers, booleans, etc
     * @example
     * // coerce.string = true
     * '1' === true
     * @example
     * // coerce.string = false
     * '1' !== 1
     * @default true
     */
    string?: boolean;
    /**
     * If `true` undefined will be equal to empty string
     * @example
     * // coerce.undefined = true
     * undefined === ''
     * @example
     * // coerce.undefined = false
     * undefined !== ''
     * @default true
     */
    undefined?: boolean;
    /**
     * If `true` null will be equal to empty string
     * @example
     * // coerce.null = true
     * null === ''
     * @example
     * // coerce.null = false
     * null !== ''
     * @default true
     */
    null?: boolean;
    /**
     * If `true` all symbols will have eual representation
     * @example
     * // coerce.symbol = true
     * Symbol.for('a') === Symbol.for('b')
     * @example
     * // coerce.symbol = false
     * Symbol.for('a') !== Symbol.for('b')
     * @default true
     */
    symbol?: boolean;
    /**
     * If `true` functions may equal the same formatted strings
     * @example
     * // coerce.function = true
     * @example
     * // coerce.function = false
     * @default true
     */
    function?: boolean;
    /**
     * If `true` dates may equal the same formatted strings
     * @example
     * // coerce.date = true
     * @example
     * // coerce.date = false
     * @default true
     */
    date?: boolean;
    /**
     * If `true` set will be coerced to array
     * @example
     * // coerce.set = true
     * @example
     * // coerce.set = false
     * @default true
     */
    set?: boolean;
  }

  /**
   * Advanced sort options
   */
  export interface SortOptions {
    /**
     * If `true` sort array entries before hash
     */
    array?: boolean;
    /**
     * If `true` sort object entries before hash
     */
    object?: boolean;
    /**
     * If `true` sort set entries before hash
     */
    set?: boolean;
    /**
     * If `true` sort map entries before hash
     */
    map?: boolean;
  }

  /**
   * Advanced trim options
   */
  export interface TrimOptions {
    /**
     * If `true` replaces multiple space with one and trims whitespaces in strings
     */
    string?: boolean;
    /**
     * If `true` replaces multiple space with one and trims whitespaces in function body
     */
    function?: boolean;
  }

  /**
   * Object sorter options
   */
  export interface SorterOptions {
    /**
     * If `true` enables type coercion.
     * Advanced coerce options could be provided as object
     * @default true
     */
    coerce?: boolean | CoerceOptions;
    /**
     * If `true` enables sorting.
     * Advanced sorting options could be provided as object
     * @default true
     */
    sort?: boolean | SortOptions;
    /**
     * If `true` enables trimming and multiple whitespace replacement.
     * Advanced sorting options could be provided as object.
     * @default false
     */
    trim?: boolean | TrimOptions;
  }
}

/**
 * Object sorter consturctor
 * @param options object transformation options
 * @return function that transforms object to strings
 */
function objectSorter(
  options: objectSorter.SorterOptions = {}
): (obj: Hashable | any) => string {
  const { sort, coerce, trim } = {
    sort: true,
    coerce: true,
    trim: false,
    ...options,
  };
  const stringifiers: str.Stringifiers = {
    unknown: function _unknown(obj) {
      // `unknonw` - is a typo, saved for backward compatibility
      const constructorName = obj.constructor
        ? obj.constructor.name
        : 'unknonw';
      const objectName =
        typeof obj.toString === 'function' ? obj.toString() : 'unknown';

      return `<:${constructorName}>:${objectName}`;
    },
  };

  const sortOptions: objectSorter.SortOptions = {
    array: typeof sort === 'boolean' ? sort : sort.array,
    object: typeof sort === 'boolean' ? sort : sort.object,
    set: typeof sort === 'boolean' ? sort : sort.set,
    map: typeof sort === 'boolean' ? sort : sort.map,
  };
  const coerceOptions: objectSorter.CoerceOptions = {
    boolean: typeof coerce === 'boolean' ? coerce : coerce.boolean,
    number: typeof coerce === 'boolean' ? coerce : coerce.number,
    string: typeof coerce === 'boolean' ? coerce : coerce.string,
    undefined: typeof coerce === 'boolean' ? coerce : coerce.undefined,
    null: typeof coerce === 'boolean' ? coerce : coerce.null,
    symbol: typeof coerce === 'boolean' ? coerce : coerce.symbol,
    function: typeof coerce === 'boolean' ? coerce : coerce.function,
    date: typeof coerce === 'boolean' ? coerce : coerce.date,
    set: typeof coerce === 'boolean' ? coerce : coerce.set,
  };
  const trimOptions: objectSorter.TrimOptions = {
    string: typeof trim === 'boolean' ? trim : trim.string,
    function: typeof trim === 'boolean' ? trim : trim.function,
  };

  stringifiers.hashable = str._hashable.bind(stringifiers);
  if (trimOptions.string) {
    stringifiers.string = coerceOptions.string
      ? str._stringTrimCoerce.bind(stringifiers)
      : str._stringTrim.bind(stringifiers);
  } else {
    stringifiers.string = coerceOptions.string
      ? str._stringCoerce.bind(stringifiers)
      : str._string.bind(stringifiers);
  }
  stringifiers.number = coerceOptions.number
    ? str._numberCoerce.bind(stringifiers)
    : str._number.bind(stringifiers);
  stringifiers.boolean = coerceOptions.boolean
    ? str._booleanCoerce.bind(stringifiers)
    : str._boolean.bind(stringifiers);
  stringifiers.symbol = coerceOptions.symbol
    ? str._symbolCoerce.bind(stringifiers)
    : str._symbol.bind(stringifiers);
  stringifiers.undefined = coerceOptions.undefined
    ? str._undefinedCoerce.bind(stringifiers)
    : str._undefined.bind(stringifiers);
  stringifiers.null = coerceOptions.null
    ? str._nullCoerce.bind(stringifiers)
    : str._null.bind(stringifiers);
  if (trimOptions.function) {
    stringifiers.function = coerceOptions.function
      ? str._functionTrimCoerce.bind(stringifiers)
      : str._functionTrim.bind(stringifiers);
  } else {
    stringifiers.function = coerceOptions.function
      ? str._functionCoerce.bind(stringifiers)
      : str._function.bind(stringifiers);
  }
  stringifiers.date = coerceOptions.date
    ? str._dateCoerce.bind(stringifiers)
    : str._date.bind(stringifiers);
  stringifiers.array = sortOptions.array
    ? str._arraySort.bind(stringifiers)
    : str._array.bind(stringifiers);
  if (sortOptions.set) {
    stringifiers.set = coerceOptions.set
      ? str._setSortCoerce.bind(stringifiers)
      : str._setSort.bind(stringifiers);
  } else {
    stringifiers.set = coerceOptions.set
      ? str._setCoerce.bind(stringifiers)
      : str._set.bind(stringifiers);
  }
  stringifiers.object = sortOptions.object
    ? str._objectSort.bind(stringifiers)
    : str._object.bind(stringifiers);
  stringifiers.map = sortOptions.map
    ? str._mapSort.bind(stringifiers)
    : str._map.bind(stringifiers);

  function objectToString(obj: any): string {
    return stringifiers[guessType(obj)](obj);
  }

  return objectToString;
}

export = objectSorter;
