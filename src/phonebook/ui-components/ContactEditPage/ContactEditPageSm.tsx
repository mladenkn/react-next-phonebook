import React from 'react';
import { Contact } from "../../models"; 
import { WithStyles, withStyles, Grid, Avatar, IconButton, Icon } from "@material-ui/core";
import style from "./ContactEditPageSm-style";
import { Emptiness, Divider } from '../reusables';
import ContactEditor from '../ContactEditor';

type Props = { contact: Contact } & WithStyles<typeof style>;

const ContactEditPageMd = ({contact, classes}: Props) =>
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
            <div className={classes.editorContainer}>
                <ContactEditor contact={contact} />
            </div>
        </Grid>
    </Grid>

export default withStyles(style)(ContactEditPageMd);