import _ from 'lodash/fp'

export * from './conversion'
export * from './collection'
export * from './function'
export * from './string'
export * from './object'
export * from './aspect'
export * from './array'
export * from './logic'
export * from './regex'
export * from './lang'
export * from './lens'

// Math
// ----
export const greaterThanOne = _.lt(1)
