import { Icon, WithStyles, withStyles, Divider as MUIDivider } from "@material-ui/core";
import { contactFieldLabelStyle, dividerStyle } from "../ui-design/reusables";
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

const Divider_ = ({className, classes}: WithStyles<typeof dividerStyle> & WithClassName) =>
    <MUIDivider className={`${classes.root} ${className}`} />

export const Divider = withStyles(dividerStyle)(Divider_) 