import { Icon, WithStyles, withStyles, Divider as MUIDivider } from "@material-ui/core";
import { contactFieldLabelStyle, dividerStyle, textInputStyle } from "../ui-design/reusables";
import React from 'react';

export interface WithClassName {
    className?: string
}

type Props = {icon: string, text: string} & WithStyles<typeof contactFieldLabelStyle> & WithClassName;

const ContactFieldLabel_ = ({icon, text, classes, className}: Props) => 
    <div className={`${classes.fieldLabel} ${className}`}>
        <Icon className={classes.fieldLabelIcon}>{icon}</Icon>
        <span className={classes.fieldLabelText}>{text}</span>
    </div>
 
export const ContactFieldLabel = withStyles(contactFieldLabelStyle)(ContactFieldLabel_);

type DividerProps = {margin?: number | string} & WithStyles<typeof dividerStyle> & WithClassName;
const Divider_ = ({className, classes, margin}: DividerProps) =>
    <MUIDivider className={`${classes.root} ${className}`} style={{marginTop: margin, marginBottom: margin}} />

export const Divider = withStyles(dividerStyle)(Divider_);

type TextInputProps = { defaultValue: string } & WithStyles<typeof textInputStyle> & WithClassName
const TextInput_ = ({defaultValue, className, classes}: TextInputProps) => 
    <input type="text" defaultValue={defaultValue} className={`${className} ${classes.root}`} />
export const TextInput = withStyles(textInputStyle)(TextInput_);

interface EmptinessProps {width?: number | string, height?: number | string}
export const Emptiness = ({width, height}: EmptinessProps) => <div style={{width, height}}></div>