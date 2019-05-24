import { withStyles, WithStyles, Link, Icon, IconButton } from "@material-ui/core";
import { goToEditActionStyle, favoriteActionStyle, deleteActionStyle } from "./actions-style";
import { WithClassName, createRefRouterLink } from "./reusables";
import { contactEditUrl } from "../urls";
import React from 'react';

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

type FavoriteActionProps = { isContactFavorite: boolean, styles: {root: string, icon: string} }
    & WithStyles<typeof favoriteActionStyle>;
export const FavoriteAction = withStyles(favoriteActionStyle)
    (({isContactFavorite, classes, styles}: FavoriteActionProps) => (
        <IconButton className={classes.root + ' ' + styles.root} disableRipple>
            <Icon color="secondary" className={styles.icon}>
                {isContactFavorite ? 'favorite' : 'favorite_outlined'}
            </Icon>
        </IconButton>
    ));


type DeleteActionProps = { styles: {root: string, icon: string} } & WithStyles<typeof deleteActionStyle>;
export const DeleteAction = withStyles(deleteActionStyle)
    (({classes, styles}: DeleteActionProps) => (
        <IconButton className={classes.root + ' ' + styles.root} disableRipple>
            <Icon color="secondary" className={styles.icon}>delete</Icon>
        </IconButton>
    ));