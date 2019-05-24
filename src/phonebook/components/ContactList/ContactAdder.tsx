import style from "./ContactAdder-style";
import React from 'react';
import { Typography, Icon, ButtonBase, withStyles, WithStyles } from "@material-ui/core";
import { createRefRouterLink } from "../reusables";

const ContactAdder = ({classes}: WithStyles<typeof style>) => 
    <ButtonBase 
        component={createRefRouterLink("contact-create") as any}
        className={classes.root} disableRipple>
        <div className={`${classes.content_}`}>
            <Icon className={classes.icon}>add</Icon>
            <Typography className={classes.text}>Add new</Typography>
        </div>
    </ButtonBase>

export default withStyles(style)(ContactAdder)