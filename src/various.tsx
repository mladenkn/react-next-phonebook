import { ReactNode } from "react"
import clsx from "clsx"
import { cn } from "~/utils/ui-utils"

type ContactFieldLabelProps = {
  className?: string
  icon: ReactNode
  text: string
}
export const ContactFieldLabel = ({ className, icon, text }: ContactFieldLabelProps) => (
  <div className={clsx("flex items-end text-primary-main", className)}>
    {icon}
    <span className="ml-2">{text}</span>
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
