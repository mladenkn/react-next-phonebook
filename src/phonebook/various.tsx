import { ComponentType } from "react"
import clsx from "clsx"

type ContactFieldLabelProps = {
  Icon: ComponentType<{ className?: string }>
  text: string
  className?: string
}

export const ContactFieldLabel = (p: ContactFieldLabelProps) => (
  <div className={clsx("flex items-end text-primary-main", p.className)}>
    <p.Icon className="mr-2" />
    <span>{p.text}</span>
  </div>
)

type EmptinessProps = {
  width?: number | string
  height?: number | string
  className?: string
}
export const Emptiness = ({ width, height, className }: EmptinessProps) => (
  <div className={className} style={{ width, height }}></div>
)
