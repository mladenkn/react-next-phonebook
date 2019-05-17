import { WithStyles, withStyles, List, ListItem, Grid, Icon, IconButton } from "@material-ui/core";
import { Contact } from "../models";
import { contactEditorStyle } from "../ui-design/contactEditor";
import { ContactFieldLabel, Divider, TextInput, Emptiness } from "./reusables";
import React from 'react'

type Props = {contact: Contact} & WithStyles<typeof contactEditorStyle>;

const ContactEditor = ({contact, classes}: Props) => 
    <div>
        <div className={classes.field}>
            <ContactFieldLabel icon="person_outlined" text="full name" />
            <Emptiness height={10} />
            <TextInput defaultValue={contact.fullName} className={`${classes.fullWidth} ${classes.input}`} />
        </div>
        <Divider className={classes.divider} margin={12}/>
        <div className={classes.field}>
            <ContactFieldLabel icon="email" text="email" />
            <Emptiness height={10} />
            <TextInput defaultValue={contact.email} className={`${classes.fullWidth} ${classes.input}`} />
        </div>
        <Divider className={classes.divider} margin={12}/>
        <List disablePadding>
            {contact.numbers.map(({value, label}) => 
                <ListItem className={classes.phoneNumber}>
                    <TextInput defaultValue={value.toString()} className={`${classes.fullWidth}
                        ${classes.input}`} />
                    <Grid container>
                        <Grid item xs={10}>
                            <TextInput defaultValue={label} 
                                className={`${classes.input} ${classes.fullWidth} ${classes.phoneNumberLabel}`} />
                        </Grid>
                        <Grid item xs={2} className={classes.labelRemoverContainer}>
                            <IconButton className={classes.labelRemover}>
                                <Icon className={classes.labelRemoverIcon}>
                                    remove_circle_outline
                                </Icon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </ListItem>
            )}
        </List>
    </div>

export default withStyles(contactEditorStyle)(ContactEditor);