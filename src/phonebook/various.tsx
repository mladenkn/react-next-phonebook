import { ComponentType, ReactNode } from "react"
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

export function Modal({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-40" />
      {children}
    </div>
  )
}
