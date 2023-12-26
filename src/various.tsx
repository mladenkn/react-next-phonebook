import { ReactNode } from "react"
import clsx from "clsx"
import { cn } from "~/utils/ui-utils"

type ContactFieldLabelProps = {
  icon: ReactNode
  text: string
  className?: string
}
export const ContactFieldLabel = (p: ContactFieldLabelProps) => (
  <div className={clsx("flex items-end text-primary-main", p.className)}>
    {p.icon}
    <span className="ml-2">{p.text}</span>
  </div>
)

export function Modal({
  contentClassName,
  children,
}: {
  children: ReactNode
  contentClassName?: string
}) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-40" />
      <div className={cn("z-50", contentClassName)}>{children}</div>
    </div>
  )
}
