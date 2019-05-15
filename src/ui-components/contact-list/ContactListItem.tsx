import { contactListItemStyle } from "../../ui-design/contact-list/contactListItem";
import { Contact } from "../../models";
import React from 'react';
import { withStyles, WithStyles } from '../../utils';
import { Card, Avatar, CardContent, Typography, Icon, IconButton } from "@material-ui/core";
import withWidth, { WithWidthProps } from "@material-ui/core/withWidth";

interface OwnProps {
    contact: Contact
    // onToggleFavorite: () => {}
    // onEditClick: () => {}
    // onDeleteClick: () => {}
}

type Props = OwnProps & WithStyles<typeof contactListItemStyle> & WithWidthProps

const Item = ({classes, width, contact}: Props) => {
    const icons = 
        <div className={classes.icons}>
            <span className={classes.iconsLeft}>
                <IconButton className={classes.iconButton}>
                    <Icon className={classes.icon}>
                        {contact.isFavorite ? 'favorite' : 'favorite_outlined'}
                    </Icon>
                </IconButton>
            </span> 
            <span className={classes.iconsRight}>
                <IconButton className={classes.iconButton}>
                    <Icon className={classes.icon}>edit</Icon>
                </IconButton>
                <IconButton className={classes.iconButton}>
                    <Icon className={classes.icon}>delete</Icon>
                </IconButton>
            </span>
        </div>;

    const avatar = <Avatar alt="avatar" src={contact.avatar} className={classes.avatar} />;

    const name = <Typography className={classes.name}>{contact.firstName + ' ' + contact.lastName}</Typography>;

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                {width === 'xs' ?
                    <div className={classes.container}>{avatar} {name} {icons}</div> :
                    <div className={classes.container}>{icons} {avatar} {name}</div>}
            </CardContent>
        </Card>
    );
}

export const ContactListItem = withWidth()(withStyles(contactListItemStyle)(Item))