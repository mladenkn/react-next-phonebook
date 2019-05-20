import { Icon, WithStyles, withStyles, Divider as MUIDivider } from "@material-ui/core";
import { contactFieldLabelStyle, dividerStyle, textInputStyle } from "../reusables";
import React from 'react';

export interface WithClassName {
    className?: string
}

type ContactFieldLabelProps = {icon: string, text: string} 
    & WithStyles<typeof contactFieldLabelStyle> & WithClassName;

const ContactFieldLabel_ = (p: ContactFieldLabelProps) => 
    <div className={`${p.classes.fieldLabel} ${p.className}`}>
        <Icon className={p.classes.fieldLabelIcon}>{p.icon}</Icon>
        <span className={p.classes.fieldLabelText}>{p.text}</span>
    </div>
 
export const ContactFieldLabel = withStyles(contactFieldLabelStyle)(ContactFieldLabel_);

type DividerProps = {margin?: number | string} & WithStyles<typeof dividerStyle> & WithClassName;
const Divider_ = ({className, classes, margin}: DividerProps) =>
    <MUIDivider className={`${classes.root} ${className}`} style={{marginTop: margin, marginBottom: margin}} />

export const Divider = withStyles(dividerStyle)(Divider_);

type TextInputProps = { defaultValue?: string, id?: string } & WithStyles<typeof textInputStyle> & WithClassName
const TextInput_ = ({defaultValue, className, classes, id}: TextInputProps) => 
    <input type="text" defaultValue={defaultValue} id={id} placeholder="&#61447;" className={`${className} ${classes.root}`} />
export const TextInput = withStyles(textInputStyle)(TextInput_);

type EmptinessProps = {width?: number | string, height?: number | string} & WithClassName
export const Emptiness = ({width, height, className}: EmptinessProps) => <div className={className} style={{width, height}}></div>

type BoxProps = { 
    width?: number | string,
    height?: number | string,
    children: JSX.Element,
} & WithClassName
export const Box = ({width, height, children, className}: BoxProps) => 
    <div className={className} style={{width, height}}>{children}</div>