import { useState, useEffect } from "react"

export function useMediaQuery(breakpoint: Breakpoint) {
  const [isMatch, setIsMatch] = useState<boolean>()
  const query = breakpointToQuery(breakpoint)

  useEffect(() => {
    setIsMatch(window.matchMedia(query).matches)

    const mediaQuery = window.matchMedia(query)
    mediaQuery.addEventListener("change", e => setIsMatch(e.matches))

    return () => mediaQuery.removeEventListener("change", e => setIsMatch(e.matches))
  }, [])

  return isMatch
}

type Breakpoint = "sm" | "md" | "lg" | "xl"

function breakpointToQuery(breakpoint: Breakpoint) {
  switch (breakpoint) {
    case "sm":
      return "(min-width: 640px)"
    case "md":
      return "(min-width: 768px)"
    case "lg":
      return "(min-width: 1024px)"
    case "xl":
      return "(min-width: 1280px)"
    default:
      throw new Error(`Breakpoint ${breakpoint} not supported.`)
  }
}
