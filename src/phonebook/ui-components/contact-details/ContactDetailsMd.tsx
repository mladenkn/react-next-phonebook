import { Contact } from "../../models";
import stlye from "./ContactDetailsMd-style";
import { Grid, Avatar, Icon, withStyles, WithStyles, IconButton, Typography } from "@material-ui/core";
import React from 'react';
import { Divider, Emptiness } from "../reusables";
import ContactDetailsFields from "./ContactDetailsFields";

export default withStyles(stlye)(
    ({contact, classes}: {contact: Contact} & WithStyles<typeof stlye>) => 
        <Grid container className={classes.root}>
            <Grid item sm={3}>
                <Avatar className={classes.avatar} src={contact.avatar} />            
            </Grid>
            <Grid item sm={8} className={classes.content}>
                <Emptiness height={50} />
                <div className={classes.contentHeading}>
                    <div className={classes.contentHeadingContent}>
                        <IconButton className={classes.contentHeadingBackIcon} disableRipple>
                            <Icon color="secondary">arrow_back</Icon>
                        </IconButton>
                        <Emptiness width="15%" />
                        <Typography className={classes.contentHeadingName}>{contact.fullName}</Typography>
                        <IconButton className={classes.contentHeadingFavoriteIcon} disableRipple>
                            <Icon color="secondary">{contact.isFavorite ? 'favorite': 'favorite_outlined'}</Icon>
                        </IconButton>
                        <Emptiness width="5%" />
                        <IconButton className={classes.contentHeadingEditIcon} disableRipple>
                            <Icon color="secondary" className={classes.contentHeadingEditIcon}>edit</Icon>
                        </IconButton>
                    </div>
                    <Emptiness height={10} />
                    <Divider className={classes.divider} />
                </div>
                <Grid className={classes.contentPropsContainer} container>
                    <Grid item sm={1} />
                    <Grid item sm={11}>
                        <ContactDetailsFields contact={contact} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    ); 