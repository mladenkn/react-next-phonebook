import { contactListItemStyle } from "../../ui-design/contact-list/contactListItem";
import { Contact } from "../../models";
import React from 'react';
import { Card, Avatar, CardContent, Typography, Icon, IconButton, withStyles, WithStyles } from "@material-ui/core";
import { Box } from "../reusables";

interface OwnProps {
    contact: Contact
    isSelected: boolean
    onClick: () => void
}

type Props = OwnProps & WithStyles<typeof contactListItemStyle>

const Item = ({classes, contact, isSelected, onClick}: Props) =>
    <Card className={`${classes.root} ${isSelected ? classes.selected : ''}`} onClick={onClick}>
        <CardContent className={classes.cardContent}>
            <Avatar alt="avatar" src={contact.avatar} className={classes.avatar} />
            <Box className={classes.nameBox}>
                <Typography className={`${classes.name}`}>{contact.fullName}</Typography>
            </Box>
            <div className={classes.icons}>
                <IconButton className={classes.iconButton} disableRipple>
                    <Icon color="secondary" className={classes.icon }>
                        {contact.isFavorite ? 'favorite' : 'favorite_outlined'}
                    </Icon>
                </IconButton>
                <IconButton className={classes.iconButton + ' ' + classes.secondIcon} disableRipple>
                    <Icon color="secondary" className={classes.icon}>edit</Icon> 
                </IconButton>
                <IconButton className={classes.iconButton + ' ' + classes.lastIcon} disableRipple>
                    <Icon color="secondary" className={classes.icon}>delete</Icon>
                </IconButton>
            </div>
        </CardContent>
    </Card>

export default withStyles(contactListItemStyle)(Item)