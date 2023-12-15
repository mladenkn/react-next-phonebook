import { cn } from "./utils"

type Breakpoint = "sm" | "md" | "lg"

export function getBreakpointContainerStyle(breakpoint: Breakpoint) {
  switch (breakpoint) {
    case "sm":
      return cn("px-6 max-w-xl")
    case "md":
      return cn("px-6 w-full")
    case "lg":
      return cn("px-6 w-full")
  }
}
