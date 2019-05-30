import style from "./ContactListItem-style";
import { ContactListItem } from "../../models";
import React from 'react';
import { Card, Avatar, Typography, withStyles, WithStyles } from "@material-ui/core";
import { Box, Link } from "../reusables";
import { contactDetailsUrl } from "../../urls";
import { GoToEditAction, FavoriteAction, DeleteAction } from "../actions";

type Props = {
    contact: ContactListItem
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
        onSelect={onSelect} 
        />
}

type ItemDummyProps = {
    contact: ContactListItem
    showFavoriteButton: boolean
    showEditLink: boolean
    showDeleteButton: boolean
    isLinkToDetails: boolean
    isSelected: boolean
    onSelect: () => void
} & WithStyles<typeof style>
 
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
        <FavoriteAction
            onClick={() => {}}
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
            onConfirm={() => {}}
            rootClass={classes.action + ' ' + classes.deleteAction}
            iconClass={classes.icon} />;

    return p.isLinkToDetails ? 
        <div className={classes.root}>
            <Link href={contactDetailsUrl(contact.id)} className={classes.rootLink}>{avatarAndName}</Link>
            {favoriteAction}{editAction}{deleteAction}
        </div> :
        <div className={classes.root} onClick={p.onSelect}>
            {avatarAndName} {favoriteAction}{editAction}{deleteAction}
        </div> ;
}
 
const StyledItemDummy = withStyles(style)(ItemDummy);