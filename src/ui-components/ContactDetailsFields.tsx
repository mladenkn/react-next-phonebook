import { Contact } from "../models";
import { contactDetailsFieldsStyle } from "../ui-design/contactDetailsFields";
import React from 'react';
import { List, ListItem, Icon, withStyles, WithStyles } from "@material-ui/core";

type Props = {contact: Contact } & WithStyles<typeof contactDetailsFieldsStyle>

const ContactDetailsFields_ = ({contact, classes}: Props) => 
    <List>
        <ListItem className={classes.field}>
            <div className={`${classes.fieldLabel} ${classes.fieldLabelEmail}`}>
                <Icon className={classes.fieldLabelIcon}>email</Icon>
                <span className={classes.fieldLabelText}>email</span>
            </div>
            <div className={classes.fieldValue}>
                {contact.email}                 
            </div>
        </ListItem>
        <ListItem className={classes.field}>
            <div className={classes.fieldLabel}>
                <Icon className={classes.fieldLabelIcon}>phone</Icon>
                <span className={classes.fieldLabelText}>numbers</span>
            </div>
            <List className={classes.fieldListValue}>
                {contact.numbers.map(({type, value}) => 
                    <ListItem key={value}>
                        <div className={classes.numberType}>{type}</div>
                        <div className={classes.numberValue}>{value}</div>
                    </ListItem>
                )}
            </List>
        </ListItem>
    </List>

export const ContactDetailsFields = withStyles(contactDetailsFieldsStyle)(ContactDetailsFields_)