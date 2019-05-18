import { Icon, WithStyles, withStyles, Divider as MUIDivider } from "@material-ui/core";
import { contactFieldLabelStyle, dividerStyle, textInputStyle } from "../ui-design/reusables";
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

type TextInputProps = { defaultValue: string, id?: string } & WithStyles<typeof textInputStyle> & WithClassName
const TextInput_ = ({defaultValue, className, classes, id}: TextInputProps) => 
    <input type="text" defaultValue={defaultValue} id={id} className={`${className} ${classes.root}`} />
export const TextInput = withStyles(textInputStyle)(TextInput_);

interface EmptinessProps {width?: number | string, height?: number | string}
export const Emptiness = ({width, height}: EmptinessProps) => <div style={{width, height}}></div>