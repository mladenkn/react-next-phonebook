import style from "./ContactListItem-style";
import { ContactListItem as Model } from "../../models";
import React from 'react';
import { Card, Avatar, Typography, withStyles, WithStyles } from "@material-ui/core";
import { Link } from "../various";
import { contactDetailsUrl } from "../../urls";
import { GoToEditAction, FavoriteAction, DeleteAction } from "../actions";
import { ContactListItemAction } from "../../actions";
const defaultAvatarUrl = require('../../assets/default-avatar.jpg'); // doesn't work with ES6 import

type Props = {
    contact: Model
    isSelected: boolean
    smOrDown: boolean
    onAction: (a: ContactListItemAction) => void
}

export const ContactListItem =  ({contact, isSelected, smOrDown, onAction}: Props) =>
{
    return <StyledItemDummy 
        contact={contact}
        showFavoriteButton={true}
        showEditLink={smOrDown || (!smOrDown && isSelected)}
        showDeleteButton={smOrDown || (!smOrDown && isSelected)}
        isLinkToDetails={smOrDown || (!smOrDown && isSelected)}
        isSelected={isSelected}
        onAction={onAction} 
    />
}
 
type ItemDummyProps = {
    contact: Model
    showFavoriteButton: boolean
    showEditLink: boolean
    showDeleteButton: boolean
    isLinkToDetails: boolean
    isSelected: boolean
    onAction: (a: ContactListItemAction) => void
} & WithStyles<typeof style>
 
 // Should rename to StyledItemDummy
const ItemDummy = (p: ItemDummyProps) => {

    const { classes, contact, onAction } = p;

    const avatarUrl = contact.avatar || defaultAvatarUrl;

    const avatarAndName = (
        <Card className={classes.avatarAndName + ' ' + (p.isSelected && classes.selected)}>
            <Avatar alt="avatar" src={avatarUrl} className={classes.avatar} />
            <div className={classes.nameBox}>
                <Typography className={`${classes.name}`}>{contact.fullName}</Typography>
            </div>
        </Card>);

    const favoriteAction = p.showFavoriteButton &&
        <FavoriteAction
            onClick={() => onAction({type: 'TOGGLE_FAVORITE', contactId: contact.id})}
            isFavorite={contact.isFavorite}
            rootClass={classes.action + ' ' + classes.favoriteAction}
            iconClass={classes.icon} />;

    const editAction = p.showEditLink &&
        <GoToEditAction
            contactId={contact.id}
            rootClass={classes.action + ' ' + classes.editAction}
            iconClass={classes.icon} />;

    const deleteAction = p.showDeleteButton &&
        <DeleteAction
            onConfirm={() => onAction({type: 'DELETE', contactId: contact.id})}
            rootClass={classes.action + ' ' + classes.deleteAction}
            iconClass={classes.icon} />;

    return p.isLinkToDetails ? 
        <div className={classes.root}>
            <Link href={contactDetailsUrl(contact.id)} className={classes.rootLink}>{avatarAndName}</Link>
            {favoriteAction}{editAction}{deleteAction}
        </div> :
        <div className={classes.root} onClick={() => onAction({type: 'SELECT', contactId: contact.id})}>
            {avatarAndName} {favoriteAction}{editAction}{deleteAction}
        </div> ;
}
 
const StyledItemDummy = withStyles(style)(ItemDummy);
