import { contactListItemStyle } from "../../ui-design/contact-list/contactListItem";
import { Contact } from "../../models";
import React from 'react';
import { Card, Avatar, CardContent, Typography, Icon, IconButton, withStyles, WithStyles } from "@material-ui/core";
import withWidth, { WithWidthProps } from "@material-ui/core/withWidth";
import { Emptiness, Box } from "../reusables";

interface OwnProps {
    contact: Contact
    isSelected: boolean
    onClick: () => void
}

type Props = OwnProps & WithStyles<typeof contactListItemStyle> & WithWidthProps

const Item = ({classes, width, contact, isSelected, onClick}: Props) => {

    const icons = 
        <div className={classes.icons}>
            <IconButton className={classes.iconButton} disableRipple>
                <Icon color="secondary" className={classes.icon}>
                    {contact.isFavorite ? 'favorite' : 'favorite_outlined'}
                </Icon>
            </IconButton>
            <Emptiness className={classes.firstIconsSpace} />
            <IconButton className={classes.iconButton} disableRipple>
                <Icon color="secondary" className={classes.icon}>edit</Icon> 
            </IconButton>
            <Emptiness className={classes.secondIconsSpace} />
            <IconButton className={classes.iconButton} disableRipple>
                <Icon color="secondary" className={classes.icon}>delete</Icon>
            </IconButton>
        </div>;

    const avatar = <Avatar alt="avatar" src={contact.avatar} className={classes.avatar} />;

    const name = <Box className={classes.nameBox}>
        <Typography className={`${classes.name}`}>{contact.fullName}</Typography>
    </Box>;

    return (
        <Card className={`${classes.card} ${isSelected ? classes.selected : ''}`} onClick={onClick}>
            <CardContent className={classes.cardContent}>
                {width === 'xs' ?
                    <div className={classes.container}>{avatar} {name} {icons}</div> :
                    <div className={classes.container}>{icons} {avatar} {name}</div>}
            </CardContent>
        </Card>
    );
}

export default withWidth()(withStyles(contactListItemStyle)(Item))