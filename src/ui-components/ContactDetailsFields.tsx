import { Contact } from "../models";
import { contactDetailsFieldsStyle } from "../ui-design/contactDetailsPropsStyle";
import React from 'react';
import { List, ListItem, Icon, withStyles, WithStyles } from "@material-ui/core";

type Props = {contact: Contact } & WithStyles<typeof contactDetailsFieldsStyle>

const ContactDetailsProps_ = ({contact, classes}: Props) => 
    <List>
        <ListItem className={classes.prop}>
            <div className={`${classes.propLabel} ${classes.propLabelEmail}`}>
                <Icon className={classes.icon}>email</Icon>
                email
            </div>
            <div className={classes.propValue}>
                {contact.email}                 
            </div>
        </ListItem>
        <ListItem>
            <div className={classes.propLabel}>
                <Icon className={classes.icon}>phone</Icon>
                numbers
            </div>
            <List className={classes.propListValue}>
                {contact.numbers.map(({type, value}) => 
                    <ListItem key={value}>
                        <div className={classes.numberType}>{type}</div>
                        <div className={classes.numberValue}>{value}</div>
                    </ListItem>
                )}
            </List>
        </ListItem>
    </List>

export const ContactDetailsFields = withStyles(contactDetailsFieldsStyle)(ContactDetailsProps_)