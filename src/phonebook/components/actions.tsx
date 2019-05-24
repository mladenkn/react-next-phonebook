import { withStyles, WithStyles, Link, Icon, IconButton, Typography } from "@material-ui/core";
import { goToEditActionStyle, favoriteActionStyle, deleteActionStyle } from "./actions-style";
import { WithClassName, createRefRouterLink } from "./reusables";
import { contactEditUrl } from "../urls";
import React from 'react';
import { WithDispatch, withDispatch } from "../stateMgmt/DispatchContext";
import { favoriteContact } from "../actions";
import { Contact } from "../models";
import { compose } from "lodash/fp";


type IconLinkProps = {name: string, url: string} & WithClassName;

export const IconLink = ({name, url, className}: IconLinkProps) => (
    <Link component={createRefRouterLink(url) as any} className={className}>
        <Icon color="secondary">{name}</Icon>
    </Link>
);
 

type GoToEditActionProps = { contactId: number, styles: {root: string, icon: string} } 
    & WithStyles<typeof goToEditActionStyle>;

export const GoToEditAction = withStyles(goToEditActionStyle)
    (({classes, contactId, styles}: GoToEditActionProps) => (
        <Link component={createRefRouterLink(contactEditUrl(contactId)) as any}
            className={classes.root + ' ' + styles.root}>
            <Icon color="secondary" className={styles.icon}>edit</Icon>
        </Link>
    ));


type FavoriteActionProps = { contact: Contact, styles: {root: string, icon: string} }
    & WithStyles<typeof favoriteActionStyle> & WithDispatch;

export const FavoriteAction = compose(withStyles(favoriteActionStyle), withDispatch)
    (({contact, classes, styles, dispatch}: FavoriteActionProps) => (
        <IconButton className={classes.root + ' ' + styles.root}
            onClick={() => dispatch(favoriteContact(contact.id))} disableRipple>
            <Icon color="secondary" className={styles.icon}>
                {contact.isFavorite ? 'favorite' : 'favorite_outlined'}
            </Icon>
        </IconButton>
    ));


type DeleteActionProps = { withText?: boolean, styles: {root?: string, icon?: string} } & WithStyles<typeof deleteActionStyle>;
 
export const DeleteAction = withStyles(deleteActionStyle)
    (({withText, classes, styles}: DeleteActionProps) => (
        <IconButton className={classes.root + ' ' + styles.root} disableRipple>
            {(withText || false) && <Typography>Delete</Typography>}
            <Icon color="secondary" className={styles.icon}>delete</Icon>
        </IconButton>
    ));