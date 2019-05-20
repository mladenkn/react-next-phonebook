import React from 'react'
import { Contact } from "../models";
import style from "./ContactEditSection-style";
import ContactEditor from "./ContactEditor";
import { WithStyles, withStyles, Avatar, IconButton, Icon, Button } from "@material-ui/core";
import { Divider, Emptiness } from "./reusables";

type Props = { contact: Contact } & WithStyles<typeof style>

const ContactEditSection = ({contact, classes}: Props) =>
    <div className={classes.root}>
        <div className={classes.header}>
            <IconButton>
                <Icon color="secondary">arrow_back</Icon>
            </IconButton>
            <IconButton>
                <Icon color="secondary">delete</Icon>
            </IconButton>
        </div>
        <div className={classes.avatarContainer}>
            <Avatar src={contact.avatar} className={classes.avatar} />
        </div>
        <Divider margin={18} />
        <ContactEditor contact={contact} />
        <Emptiness height={30} />
        <div className={classes.buttonContainer}>
            <Button variant="contained" className={`${classes.button} ${classes.cancelButton}`}>Cancel</Button>
            <Button variant="contained" className={`${classes.button} ${classes.saveButton}`}>Save</Button>
        </div>
    </div>

export default withStyles(style)(ContactEditSection)