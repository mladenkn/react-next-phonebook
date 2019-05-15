import { WithStyles, withStyles } from "../utils";
import { Contact } from "../models";
import { contactDetailsPropsStyle } from "../ui-design/contactDetailsPropsStyle";
import React from 'react';
import { List, ListItem, Icon } from "@material-ui/core";

type Props = {contact: Contact } & WithStyles<typeof contactDetailsPropsStyle>

export const ContactDetailsProps_ = ({contact, classes}: Props) => 
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
                        {type} {value}
                    </ListItem>
                )}
            </List>
        </ListItem>
    </List>

export const ContactDetailsProps = withStyles(contactDetailsPropsStyle)(ContactDetailsProps_) 