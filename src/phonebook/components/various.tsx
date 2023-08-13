import { WithStyles, withStyles } from "@material-ui/core"
import { contactFieldLabelStyle } from "./various.style"
import React, { ComponentType } from "react"
import { LinkProps as MuiLinkProps } from "@material-ui/core/Link"
import { Link as MuiLink, Divider as MUIDivider } from "@material-ui/core"
import { Link as RouterLink } from "react-router-dom"
import { dividerStyle } from "./various.style"
import clsx from "clsx"

type ContactFieldLabelProps = {
  Icon: ComponentType<{ className?: string }>
  text: string
  className?: string
} & WithStyles<typeof contactFieldLabelStyle>

const ContactFieldLabel_ = (p: ContactFieldLabelProps) => (
  <div className={clsx(p.classes.fieldLabel, p.className)}>
    <p.Icon className={p.classes.fieldLabelIcon} />
    <span className={p.classes.fieldLabelText}>{p.text}</span>
  </div>
)

export const ContactFieldLabel = withStyles(contactFieldLabelStyle)(ContactFieldLabel_)

type DividerProps = {
  margin?: number | string
  className?: string
} & WithStyles<typeof dividerStyle>
const Divider_ = ({ className, classes, margin }: DividerProps) => (
  <MUIDivider
    className={clsx(classes.root, className)}
    style={{ marginTop: margin, marginBottom: margin }}
  />
)

export const Divider = withStyles(dividerStyle)(Divider_)

type EmptinessProps = {
  width?: number | string
  height?: number | string
  className?: string
}
export const Emptiness = ({ width, height, className }: EmptinessProps) => (
  <div className={className} style={{ width, height }}></div>
)

const createRefRouterLink = (url: string) =>
  React.forwardRef((props, ref: any) => (
    // @ts-ignore
    <RouterLink innerRef={ref} to={url} {...props} />
  ))

export const Link = (p: MuiLinkProps) => (
  <MuiLink {...p} component={createRefRouterLink(p.href!)} />
)
