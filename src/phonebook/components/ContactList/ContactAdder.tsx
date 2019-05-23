import style from "./ContactAdder-style";
import React from 'react';
import { Typography, Icon, ButtonBase, withStyles, WithStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const ContactCreateLink = React.forwardRef((props, ref: any) => <Link to="contact-create" innerRef={ref} {...props} />);

const ContactAdder = ({classes}: WithStyles<typeof style>) => 
    <ButtonBase 
        component={ContactCreateLink as any}
        className={classes.root} disableRipple>
        <div className={`${classes.content_}`}>
            <Icon className={classes.icon}>add</Icon>
            <Typography className={classes.text}>Add new</Typography>
        </div>
    </ButtonBase>

export default withStyles(style)(ContactAdder)