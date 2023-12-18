import { omit } from "lodash"
import { HTMLAttributes } from "react"
import { cn } from "."

export function apply<
  TFullProps extends Record<string, unknown>,
  TAppliedProps extends Partial<TFullProps>,
  WrapeeReturn,
>(
  wrapee: (props: TFullProps) => WrapeeReturn,
  appliedProps: TAppliedProps,
): (props: TFullProps) => WrapeeReturn

export function apply<
  TElementType extends "div" | "button" | "main" | "section" | "input" | "h1",
  TAppliedProps extends { className?: string },
  WrapeeReturn,
>(element: TElementType, appliedProps: TAppliedProps): (props: HTMLAttributes<{}>) => WrapeeReturn

export function apply<
  TFullProps extends Record<string, unknown>,
  TAppliedProps extends Partial<TFullProps>,
  WrapeeReturn,
>(wrapee: (props: TFullProps) => WrapeeReturn, appliedProps: TAppliedProps) {
  return (fullProps: TFullProps) => {
    return (appliedProps: TFullProps) => {
      const className: string = cn((appliedProps as any).className, (fullProps as any).className)
      return wrapee({
        ...omit(fullProps, "className"),
        ...omit(appliedProps, "className"),
        className,
      } as any)
    }
  }
}

export function applyCn<
  TElementType extends "div" | "button" | "main" | "section" | "input" | "h1",
>(element: TElementType, className: string) {
  return (props: HTMLAttributes<{}>) => {
    const fullProps = {...props, className: cn(className, props.className)}
    switch(element){
      case "div": return <div {...fullProps} />
      case "button": return <div {...fullProps} />
      case "main": return <div {...fullProps} />
      case "section": return <div {...fullProps} />
      case "input": return <div {...fullProps} />
      case "h1": return <div {...fullProps} />
      default: throw new Error()
    }
  }
}
