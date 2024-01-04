import { useRef, useState, useEffect, ReactNode } from "react"
import * as _Toast from "@radix-ui/react-toast"
import { RemoveIcon } from "~/assets/icons"
import { cn } from "./ui-utils"

export function useToast() {
  const [isActive, _setIsActive] = useState(false)
  const timerRef = useRef(0)

  function setIsActive(value: boolean) {
    if (value) {
      _setIsActive(false)
      window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => {
        _setIsActive(true)
      }, 100)
    } else {
      _setIsActive(false)
    }
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return [isActive, setIsActive] as const
}

type ToastProps = {
  className?: string
  children: ReactNode
  isActive: boolean
  setIsActive(value: boolean): void
}

export function Toast({ className, isActive, children, setIsActive }: ToastProps) {
  return (
    <_Toast.Root
      className={cn("flex justify-between rounded-lg px-3 pb-4 pt-3", className)}
      open={isActive}
      onOpenChange={setIsActive}
      onClick={e => e.stopPropagation()}
    >
      {children}
      <button onClick={() => setIsActive(false)}>
        <RemoveIcon className="text-black" />
      </button>
    </_Toast.Root>
  )
}

export function ToastViewport() {
  return (
    <_Toast.Viewport
      className={cn(
        "fixed bottom-2 left-2 right-2 z-[2147483647] m-0 flex max-w-[100vw]",
        "list-none flex-col gap-[10px] outline-none",
      )}
    />
  )
}
