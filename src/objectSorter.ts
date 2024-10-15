import type { Hashable } from './hasher';
import * as str from './stringifiers';
import { guessType } from './typeGuess';

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
   * // coerce.number = false
   * 1 !== '1';
   * @default true
   */
  number?: boolean;
  /**
   * If `true` converts BigInt to string
   * @example
   * // coerce.bigint = true
   * 1n === '1';
   * @example
   * // coerce.bigint = false
   * 1n !== '1';
   * @default true
   */
  bigint?: boolean;
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
   * If `true` sort TypedArray entries before hash
   */
  typedArray?: boolean;
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
  /**
   * If `true` sort BigInt entries before hash
   */
  bigint?: boolean;
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
  coerce?: boolean | CoerceOptions | undefined;
  /**
   * If `true` enables sorting.
   * Advanced sorting options could be provided as object
   * @default true
   */
  sort?: boolean | SortOptions | undefined;
  /**
   * If `true` enables trimming and multiple whitespace replacement.
   * Advanced sorting options could be provided as object.
   * @default false
   */
  trim?: boolean | TrimOptions | undefined;
}

export type StringifyFn = <T>(obj: Hashable | T) => string;

/**
 * Object sorter consturctor
 * @param options object transformation options
 * @return function that transforms object to strings
 */
export const objectSorter = (options?: SorterOptions): StringifyFn => {
  const { sort, coerce, trim } = {
    sort: true,
    coerce: true,
    trim: false,
    ...options,
  };

  const sortOptions: SortOptions = {
    array: typeof sort === 'boolean' ? sort : sort?.array ?? false,
    typedArray: typeof sort === 'boolean' ? false : sort?.typedArray ?? false,
    object: typeof sort === 'boolean' ? sort : sort?.object ?? false,
    set: typeof sort === 'boolean' ? sort : sort?.set ?? false,
    map: typeof sort === 'boolean' ? sort : sort?.map ?? false,
  };
  const coerceOptions: CoerceOptions = {
    boolean: typeof coerce === 'boolean' ? coerce : coerce?.boolean ?? false,
    number: typeof coerce === 'boolean' ? coerce : coerce?.number ?? false,
    bigint: typeof coerce === 'boolean' ? coerce : coerce?.bigint ?? false,
    string: typeof coerce === 'boolean' ? coerce : coerce?.string ?? false,
    undefined: typeof coerce === 'boolean' ? coerce : coerce?.undefined ?? false,
    null: typeof coerce === 'boolean' ? coerce : coerce?.null ?? false,
    symbol: typeof coerce === 'boolean' ? coerce : coerce?.symbol ?? false,
    function: typeof coerce === 'boolean' ? coerce : coerce?.function ?? false,
    date: typeof coerce === 'boolean' ? coerce : coerce?.date ?? false,
    set: typeof coerce === 'boolean' ? coerce : coerce?.set ?? false,
  };
  const trimOptions: TrimOptions = {
    string: typeof trim === 'boolean' ? trim : trim?.string ?? false,
    function: typeof trim === 'boolean' ? trim : trim?.function ?? false,
  };

  const stringifiers: str.Stringifiers = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    unknown: function _unknown(obj: Object) {
      // `unknonw` - is a typo, saved for backward compatibility
      const constructorName: string = obj.constructor?.name ?? 'unknonw';

      let objectName = 'unknown';

      if (typeof obj.toString === 'function') {
        objectName = obj.toString();
      } else if (Object.keys(obj).length > 0) {
        objectName = JSON.stringify(obj);
      }

      return `<:${constructorName}>:${objectName}`;
    },
  };

  stringifiers['hashable'] = str._hashable.bind(stringifiers) as StringifyFn;

  if (trimOptions.string) {
    stringifiers['string'] = coerceOptions.string
      ? (str._stringTrimCoerce.bind(stringifiers) as StringifyFn)
      : (str._stringTrim.bind(stringifiers) as StringifyFn);
  } else {
    stringifiers['string'] = coerceOptions.string
      ? (str._stringCoerce.bind(stringifiers) as StringifyFn)
      : (str._string.bind(stringifiers) as StringifyFn);
  }
  stringifiers['number'] = coerceOptions.number
    ? (str._numberCoerce.bind(stringifiers) as StringifyFn)
    : (str._number.bind(stringifiers) as StringifyFn);
  stringifiers['bigint'] = coerceOptions.bigint
    ? (str._bigIntCoerce.bind(stringifiers) as StringifyFn)
    : (str._bigInt.bind(stringifiers) as StringifyFn);
  stringifiers['boolean'] = coerceOptions.boolean
    ? (str._booleanCoerce.bind(stringifiers) as StringifyFn)
    : (str._boolean.bind(stringifiers) as StringifyFn);
  stringifiers['symbol'] = coerceOptions.symbol
    ? (str._symbolCoerce.bind(stringifiers) as StringifyFn)
    : (str._symbol.bind(stringifiers) as StringifyFn);
  stringifiers['undefined'] = coerceOptions.undefined
    ? (str._undefinedCoerce.bind(stringifiers) as StringifyFn)
    : (str._undefined.bind(stringifiers) as StringifyFn);
  stringifiers['null'] = coerceOptions.null
    ? (str._nullCoerce.bind(stringifiers) as StringifyFn)
    : (str._null.bind(stringifiers) as StringifyFn);
  if (trimOptions.function) {
    stringifiers['function'] = coerceOptions.function
      ? (str._functionTrimCoerce.bind(stringifiers) as StringifyFn)
      : (str._functionTrim.bind(stringifiers) as StringifyFn);
  } else {
    stringifiers['function'] = coerceOptions.function
      ? (str._functionCoerce.bind(stringifiers) as StringifyFn)
      : (str._function.bind(stringifiers) as StringifyFn);
  }
  stringifiers['date'] = coerceOptions.date
    ? (str._dateCoerce.bind(stringifiers) as StringifyFn)
    : (str._date.bind(stringifiers) as StringifyFn);
  stringifiers['array'] = sortOptions.array
    ? (str._arraySort.bind(stringifiers) as StringifyFn)
    : (str._array.bind(stringifiers) as StringifyFn);
  stringifiers['typedarray'] = sortOptions.typedArray
    ? (str._typedArraySort.bind(stringifiers) as StringifyFn)
    : (str._typedArray.bind(stringifiers) as StringifyFn);
  if (sortOptions.set) {
    stringifiers['set'] = coerceOptions.set
      ? (str._setSortCoerce.bind(stringifiers) as StringifyFn)
      : (str._setSort.bind(stringifiers) as StringifyFn);
  } else {
    stringifiers['set'] = coerceOptions.set
      ? (str._setCoerce.bind(stringifiers) as StringifyFn)
      : (str._set.bind(stringifiers) as StringifyFn);
  }
  stringifiers['object'] = sortOptions.object
    ? (str._objectSort.bind(stringifiers) as StringifyFn)
    : (str._object.bind(stringifiers) as StringifyFn);
  stringifiers['map'] = sortOptions.map
    ? (str._mapSort.bind(stringifiers) as StringifyFn)
    : (str._map.bind(stringifiers) as StringifyFn);

  /**
   * Serializes object to string
   * @param obj object
   */
  function objectToString<T>(obj: T): string {
    return stringifiers[guessType(obj)]!(obj);
  }

  return objectToString;
};
