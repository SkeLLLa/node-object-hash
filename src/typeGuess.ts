/**
 * Type mapping rules.
 */
export const TYPE_MAP: {[type: string]: string} = {
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
  Boolean: 'boolean',
  Object: 'object',
};

/**
 * Guess object type
 * @param obj analyzed object
 * @returns object type
 */
export function guessObjectType(obj: object): string {
  if (obj === null) {
    return 'null';
  }
  const type = obj.constructor ? obj.constructor.name : 'unknown';
  return TYPE_MAP[type] || 'unknown';
}

/**
 * Guess variable type
 * @param obj analyzed variable
 * @returns variable type
 */
export function guessType(obj: any): string {
  const type = typeof obj;
  return type !== 'object' ? type : guessObjectType(obj);
}
