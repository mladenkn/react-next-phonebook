import { faker } from "@faker-js/faker"

export const generateArray = <T>(getNext: () => T, minCount: number, maxCount: number) => {
  const count = faker.number.int({ min: minCount, max: maxCount })
  const r: T[] = []
  for (let i = 0; i < count; i++) r.push(getNext())
  return r
}

export const validURL = (str: string) => {
  var pattern = new RegExp(/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/)
  return !!pattern.test(str)
}

export const containsOnlyDigits = (str: string) => {
  for (let index = 0; index < str.length; index++) {
    const c = str[index]
    assertIsNonNil(c)
    if (isNaN(parseInt(c))) return false
  }
  return true
}

export function assertIsNonNil<T>(val: T): asserts val is NonNullable<T> {
  if (val === null || val === undefined) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`)
  }
}

export function asNonNil<T>(val?: T) {
  assertIsNonNil(val)
  return val
}

export function isNil<T>(val?: T | null | undefined): val is null | undefined {
  return val === null || val === undefined
}

export const eva = <T>(f: () => T) => f()

export const updateMatches = <T>(
  arr: T[],
  doesMatch: (item: T) => boolean,
  update: (item: T) => T,
) => {
  const allItems: T[] = []
  // const updatedItems: T[] = []

  arr.forEach(item => {
    if (doesMatch(item)) {
      const updated = update(item)
      allItems.push(updated)
      // updatedItems.push(updated)
    } else allItems.push(item)
  })

  return allItems
  // return [allItems, updatedItems]
}

export function removeNils<T extends Record<string, unknown>>(record: T) {
  const nonNilEntries = Object.entries(record).filter(
    ([key, value]) => value !== null && value !== undefined,
  )
  return Object.fromEntries(nonNilEntries)
}

export function arrayWithoutNils<T>(array: (T | undefined | null)[]) {
  return array.map(i => i !== undefined && i !== null) as T[]
}

export function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  const ret: any = {}
  keys.forEach(key => {
    ret[key] = obj[key]
  })
  return ret
}

export function omit<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
  keys.forEach(key => delete obj[key])
  return obj
}
