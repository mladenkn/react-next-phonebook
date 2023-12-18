import { cn } from "~/utils"

type Props = {
  className?: string
}

export const MagnifierIcon = ({className}: Props) => (
  <svg
    aria-hidden="true"
    className={cn(defaultStyle, className)}
    viewBox="0 0 24 24"
  >
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
)

export const PlusIcon = ({className}: Props) => (
  <svg
    aria-hidden="true"
    className={cn(defaultStyle, className)}
    viewBox="0 0 24 24"
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
)

const defaultStyle = "fill-current w-6 h-6 inline-block text-1.5xl transition duration-200 ease-in-out flex-shrink-0 select-none"
