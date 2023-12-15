import { ReactNode } from "react"

export default function Modal({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-40" />
      {children}
    </div>
  )
}
