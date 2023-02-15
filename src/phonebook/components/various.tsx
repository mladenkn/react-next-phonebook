import { Icon, WithStyles, withStyles } from "@material-ui/core"
import { contactFieldLabelStyle } from "./various-style"
import React from "react"
import { LinkProps as MuiLinkProps } from "@material-ui/core/Link"
import { Link as MuiLink, Divider as MUIDivider } from "@material-ui/core"
import { Link as RouterLink } from "react-router-dom"
import { dividerStyle } from "./various-style"

type ContactFieldLabelProps = {
  icon: string
  text: string
  className?: string
} & WithStyles<typeof contactFieldLabelStyle>

const ContactFieldLabel_ = (p: ContactFieldLabelProps) => (
  <div className={`${p.classes.fieldLabel} ${p.className}`}>
    <Icon className={p.classes.fieldLabelIcon}>{p.icon}</Icon>
    <span className={p.classes.fieldLabelText}>{p.text}</span>
  </div>
)

export const ContactFieldLabel = withStyles(contactFieldLabelStyle)(
  ContactFieldLabel_
)

type DividerProps = {
  margin?: number | string
  className?: string
} & WithStyles<typeof dividerStyle>
const Divider_ = ({ className, classes, margin }: DividerProps) => (
  <MUIDivider
    className={`${classes.root} ${className}`}
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
    <RouterLink innerRef={ref} to={url} {...props} />
  ))

const MuiLink_ = MuiLink as any
export const Link = (p: MuiLinkProps) => (
  <MuiLink_ {...p} component={createRefRouterLink(p.href!)} />
)
