import { Hashable } from './hasher';

/**
 * Type mapping rules.
 */
export const TYPE_MAP: { [type: string]: string } = {
  Array: 'array',
  Int8Array: 'array',
  Uint8Array: 'array',
  Uint8ClampedArray: 'array',
  Int16Array: 'array',
  Uint16Array: 'array',
  Int32Array: 'array',
  Uint32Array: 'array',
  Float32Array: 'array',
  Float64Array: 'array',
  Buffer: 'array',
  Map: 'map',
  Set: 'set',
  Date: 'date',
  String: 'string',
  Number: 'number',
  BigInt: 'bigint',
  Boolean: 'boolean',
  Object: 'object',
};

/**
 * Guess object type
 * @param obj analyzed object
 * @return object type
 */
export function guessObjectType(obj: unknown): string {
  if (obj === null) {
    return 'null';
  }
  if (instanceOfHashable(obj)) {
    return 'hashable';
  }
  const type = (obj as Object).constructor?.name ?? 'unknown';
  return TYPE_MAP[type] || 'unknown';
}

/**
 * Guess variable type
 * @param obj analyzed variable
 * @return variable type
 */
export function guessType(obj: unknown): string {
  const type = typeof obj;
  return type !== 'object' ? type : guessObjectType(obj);
}

/**
 * Identify if object is instance of Hashable interface
 * @param object analyzed variable
 * @return true if object has toHashableString property and this property is function
 * otherwise return false
 */
function instanceOfHashable(object: Hashable | unknown): boolean {
  return typeof (object as Hashable).toHashableString === 'function';
}
