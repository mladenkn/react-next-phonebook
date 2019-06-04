import style from "./ContactAdder-style";
import React from 'react';
import { Typography, Icon, withStyles, WithStyles } from "@material-ui/core";
import { Link } from "../../../utils/components";
import { contactCreateUrl } from "../../urls";

const ContactAdder = ({classes}: WithStyles<typeof style>) => 
    <Link href={contactCreateUrl} className={classes.root}>
        <div className={`${classes.content_}`}>
            <Icon className={classes.icon}>add</Icon>
            <Typography className={classes.text}>Add new</Typography>
        </div>
    </Link>

export default withStyles(style)(ContactAdder)