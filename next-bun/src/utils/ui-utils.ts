import { cn } from "."

type Breakpoint = "sm" | "md" | "lg"

export function getBreakpointContainerStyle(breakpoint: Breakpoint) {
  switch (breakpoint) {
    case "sm":
      return cn("px-8 mx-auto max-w-xl") // možda fali w-full
    case "md":
      return cn("px-8 mx-auto max-w-4xl") // možda fali w-full
    case "lg":
      return cn("px-8 w-full mx-auto")
  }
}
