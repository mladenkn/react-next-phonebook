import { faker } from "@faker-js/faker"
import { isNil } from "lodash"
import _tw from "tailwind-styled-components"
import { useState, useLayoutEffect } from "react"
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const myPropNames_gruped = {
  responsive: ["xs", "sm", "md", "lg", "xl"],
  states: ["hover", "focus", "active"],
} as const

const myPropNames = Object.values(myPropNames_gruped).flat()

// type myProps_value = (typeof myPropNames)[0]
// type myClassValue = ClassValue | Record<myProps_value, string>

export function cn(...inputs: ClassValue[]) {
  const myParams_ = inputs.filter(classValue => typeof classValue === "object")

  // const myParams = asSingleItem(myParams_) as Record<myProps_value, string>
  const myParams = myParams_[0] as Record<string, string> // assert da je samo jedan?

  return twMerge(clsx(inputs))
}

export const tw = {
  ..._tw,
  class(className: TemplateStringsArray) {
    return className.join("")
  },
}

export const generateArray = <T>(getNext: () => T, minCount: number, maxCount: number) => {
  const count = faker.number.int({ min: minCount, max: maxCount })
  const r: T[] = []
  for (let i = 0; i < count; i++) r.push(getNext())
  return r
}

export type AsyncOperationStatus = "NEVER_INITIATED" | "PROCESSING" | "COMPLETED" | "ERROR"

export const updateMatches = <T>(
  arr: T[],
  doesMatch: (item: T) => boolean,
  update: (item: T) => T,
): [T[], T[]] => {
  const allItems: T[] = []
  const updatedItems: T[] = []

  arr.forEach(item => {
    if (doesMatch(item)) {
      const updated = update(item)
      allItems.push(updated)
      updatedItems.push(updated)
    } else allItems.push(item)
  })

  return [allItems, updatedItems]
}

export const validURL = (str: string) => {
  var pattern = new RegExp(/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/)
  return !!pattern.test(str)
}

export const containsOnlyDigits = (str: string) => {
  for (let index = 0; index < str.length; index++) {
    const c = str[index]
    if (isNaN(parseInt(c))) return false
  }
  return true
}

export function assertIsNonNil<T>(val: T): asserts val is NonNullable<T> {
  if (isNil(val)) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`)
  }
}

export function asNonNil<T>(val?: T) {
  assertIsNonNil(val)
  return val
}

export const eva = <T>(f: () => T) => f()

export function useWidth() {
  const [size, setSize] = useState<number>()

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return size
}
