import { applyCn } from "~/utils/apply"
import { cn } from "../utils"

export const contactPageBaseStylesXs = {
  root: cn(""),
  toolbar: cn(
    "border-b-1 mt-4 flex items-center border-secondary-main px-1 pb-2 pt-0 justify-between",
  ),
  heading: cn("border-b-1 flex items-center border-primary-main px-0 pb-5 pt-2"),
  body: cn("pb-0 pl-4 pr-4 pt-2"),
}

export const contactPageBaseStylesMd = {
  root: cn("flex"),
  heading: cn("flex border-b-1 border-primary-main pb-2"),
  right: cn("inline-block ml-5"),
}

export const SingleContactV = {
  Root: applyCn("div", cn("md:flex")),
  Toolbar: applyCn(
    "div",
    cn("mt-4 flex items-center px-1 pb-2 pt-0 justify-between"),
  ),
  ToolbarDivider: applyCn("div", cn("h-0.25 bg-secondary-main w-full md:hidden")),
  Heading: applyCn(
    "h1",
    cn("flex items-center px-0 md:pb-2 md:hidden sm-max:py-4"),
  ),
  HeadingDivider: applyCn("div", cn("h-0.25 bg-primary-main w-full")),
  Body: applyCn("div", cn("")),
  Right: applyCn("div", cn("inline-block ml-5"))
}
