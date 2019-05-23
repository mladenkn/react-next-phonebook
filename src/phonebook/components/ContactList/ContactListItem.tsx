import style from "./ContactListItem-style";
import { Contact } from "../../models";
import React from 'react';
import { Card, Avatar, CardContent, Typography, Icon, IconButton, withStyles, WithStyles }
    from "@material-ui/core";
import { Box } from "../reusables";

export type ContactListItemAction = 'click' | 'details' | 'edit' | 'delete';

type Props = {
    contact: Contact
    onAction: (a: ContactListItemAction) => void
    isSelected: boolean
    smOrXs: boolean
} & WithStyles<typeof style>

const Item = ({classes, contact, onAction, isSelected, smOrXs}: Props) =>
{
    return <Card 
        className={classes.root + ' ' + ((isSelected && !smOrXs) ? classes.selected : '')}
        onClick={() => onAction('click')}>
        <CardContent className={classes.cardContent}>
            <Avatar alt="avatar" src={contact.avatar} className={classes.avatar} />
            <Box className={classes.nameBox}>
                <Typography className={`${classes.name}`}>{contact.fullName}</Typography>
            </Box>
            <div className={classes.icons}>
                <IconButton className={classes.iconButton} disableRipple>
                    <Icon color="secondary" className={classes.icon}>
                        {contact.isFavorite ? 'favorite' : 'favorite_outlined'}
                    </Icon>
                </IconButton>
                {(isSelected || smOrXs) &&
                    <div className={classes.iconsRight}>
                        <IconButton className={classes.iconButton + ' ' + classes.secondIcon} disableRipple>
                            <Icon color="secondary" className={classes.icon}>edit</Icon>
                        </IconButton>
                        <IconButton className={classes.iconButton + ' ' + classes.lastIcon} disableRipple>
                            <Icon color="secondary" className={classes.icon}>delete</Icon>
                        </IconButton>
                    </div>}
            </div>
        </CardContent>
    </Card>;
}

export default withStyles(style)(Item);