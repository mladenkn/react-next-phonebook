import style from "./ContactListItem-style";
import { Contact } from "../../models";
import React from 'react';
import { Card, Avatar, Link, Typography, Icon, IconButton, withStyles, WithStyles }
    from "@material-ui/core";
import { Box } from "../reusables";
import { Link as RouterLink } from "react-router-dom";
import { contactDetailsUrl, contactEditUrl } from "../../urls";

type Props = {
    contact: Contact
    isSelected: boolean
    smOrDown: boolean
    onSelect: () => void
}

export default ({contact, isSelected, smOrDown, onSelect}: Props) =>
{
    return <StyledItemDummy 
        contact={contact}
        showFavoriteButton={true}
        showEditLink={smOrDown || (!smOrDown && isSelected)}
        showDeleteButton={smOrDown || (!smOrDown && isSelected)}
        isLinkToDetails={smOrDown || (!smOrDown && isSelected)}
        isSelected={isSelected}
        onSelect={onSelect} />
}

type ItemDummyProps = {
    contact: Contact
    showFavoriteButton: boolean
    showEditLink: boolean
    showDeleteButton: boolean
    isLinkToDetails: boolean
    isSelected: boolean
    onSelect: () => void
} & WithStyles<typeof style>

const routerLink = (url: string) => React.forwardRef((props, ref: any) => (
    <RouterLink innerRef={ref} to={url} {...props} />
));
 
const ItemDummy = (p: ItemDummyProps) => {

    const { classes, contact } = p;

    const avatarAndName = (
        <Card className={classes.avatarAndName + ' ' + (p.isSelected && classes.selected)}>
            <Avatar alt="avatar" src={contact.avatar} className={classes.avatar} />
            <Box className={classes.nameBox}>
                <Typography className={`${classes.name}`}>{contact.fullName}</Typography>
            </Box>
        </Card>);

    const favoriteAction = p.showFavoriteButton &&
        (<IconButton className={classes.action + ' ' + classes.favoriteAction} disableRipple>
            <Icon color="secondary" className={classes.icon}>
                {contact.isFavorite ? 'favorite' : 'favorite_outlined'}
            </Icon>
        </IconButton>);

    const editAction = p.showEditLink &&
        (<Link component={routerLink(contactEditUrl(contact.id)) as any}
            className={classes.action + ' ' + classes.editAction}>
            <Icon color="secondary" className={classes.icon}>edit</Icon>
        </Link>);

    const deleteAction = p.showDeleteButton &&
        (<IconButton className={classes.action + ' ' + classes.deleteAction} disableRipple>
            <Icon color="secondary" className={classes.icon}>delete</Icon>
        </IconButton>);

    return p.isLinkToDetails ? 
        <div className={classes.root}>
            <Link component={routerLink(contactDetailsUrl(contact.id)) as any} className={classes.rootLink}>
                {avatarAndName}
            </Link>
            {favoriteAction}{editAction}{deleteAction}
        </div> :
        <div className={classes.root} onClick={p.onSelect}>
            {avatarAndName} {favoriteAction}{editAction}{deleteAction}
        </div> ;
}

const StyledItemDummy = withStyles(style)(ItemDummy);