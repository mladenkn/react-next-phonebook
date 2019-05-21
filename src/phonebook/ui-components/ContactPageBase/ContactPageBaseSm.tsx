import React from 'react';
import { WithStyles, withStyles, Grid, Avatar, IconButton, Icon, Typography } from "@material-ui/core";
import style from "./ContactPageBaseSm-style";
import { Contact } from '../../models';
import { Emptiness } from '../reusables';

type Props = { contact: Contact, children?: JSX.Element, variant: 'details' | 'edit' | 'create' }
     & WithStyles<typeof style>;

const ContactPageBaseSm = ({contact, classes, children, variant}: Props) => 
    <Grid container className={classes.root}>
        <Grid item sm={3}>
            <Avatar className={classes.avatar} src={contact.avatar} />
        </Grid>
        <Grid item sm={8}>
            <div className={classes.heading}>
                <div className={classes.headingContent}>
                    <IconButton className={classes.iconButton} disableRipple>
                        <Icon color="secondary">arrow_back</Icon>
                    </IconButton>
                    <Typography className={classes.headingName}>
                        {variant === 'details' && contact.fullName}
                    </Typography>
                    <IconButton className={classes.iconButton} disableRipple>
                        {variant !== 'create' && 
                            <Icon color="secondary">{contact.isFavorite ? 'favorite' : 'favorite_outlined'}</Icon>}
                    </IconButton>
                    <Emptiness className={classes.iconSpace} />
                    <IconButton className={classes.iconButton} disableRipple>
                        {variant !== 'create' && <Icon color="secondary">edit</Icon>}
                    </IconButton>
                </div>
            </div>
            <div className={classes.mainContent}>
                {children}
            </div>
        </Grid>
    </Grid>

export default withStyles(style)(ContactPageBaseSm);
