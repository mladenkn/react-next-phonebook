import React from 'react';
import { WithStyles, withStyles, Grid, Avatar, IconButton, Icon, Typography } from "@material-ui/core";
import style from "./ContactPageBaseSm-style";
import { Contact } from '../../models';
import { Emptiness } from '../reusables';

type Props = { avatar: string, children?: JSX.Element, heading: JSX.Element }
     & WithStyles<typeof style>;

const ContactPageBaseSm = ({avatar, classes, children, heading}: Props) => 
    <Grid container className={classes.root}>
        <Grid item sm={3}>
            <Avatar className={classes.avatar} src={avatar} />
        </Grid>
        <Grid item sm={8}>
            <div className={classes.heading}>
                <div className={classes.headingContent}>
                    {heading}
                </div>
            </div>
            <div className={classes.mainContent}>
                {children}
            </div>
        </Grid>
    </Grid>

export default withStyles(style)(ContactPageBaseSm);
