import { withStyles, WithStyles, Link, Icon, IconButton, Typography } from "@material-ui/core";
import { goToEditActionStyle, favoriteActionStyle, deleteActionStyle, goBackStyle } from "./actions-style";
import { WithClassName, createRefRouterLink } from "./reusables";
import { contactEditUrl } from "../urls";
import React, { useState, useContext } from 'react';
import { DispatchContext } from "../stateMgmt/DispatchContext";
import { favoriteContact, goBack, deleteContact } from "../actions";
import { Contact } from "../models";
import DeleteModal from "./DeleteModal";

type IconLinkProps = {name: string, url: string} & WithClassName;

export const IconLink = ({name, url, className}: IconLinkProps) => (
    <Link component={createRefRouterLink(url) as any} className={className}>
        <Icon color="secondary">{name}</Icon>
    </Link>
);


type GoToEditActionProps = { contactId: number, rootClass?: string, iconClass?: string } 
    & WithStyles<typeof goToEditActionStyle>;

export const GoToEditAction = withStyles(goToEditActionStyle)
    (({classes, contactId, rootClass, iconClass}: GoToEditActionProps) => (
        <Link component={createRefRouterLink(contactEditUrl(contactId)) as any}
            className={classes.root + ' ' + rootClass}>
            <Icon color="secondary" className={iconClass}>edit</Icon>
        </Link>
    ));


type FavoriteActionProps = { contact: Contact, rootClass?: string, iconClass?: string }
    & WithStyles<typeof favoriteActionStyle>;

export const FavoriteAction = withStyles(favoriteActionStyle)
    (({contact, classes, rootClass, iconClass}: FavoriteActionProps) => {
        const dispatch = useContext(DispatchContext);
        return (
            <IconButton className={classes.root + ' ' + rootClass}
                onClick={() => dispatch(favoriteContact(contact.id))} disableRipple>
            <Icon color="secondary" className={iconClass}>
                {contact.isFavorite ? 'favorite' : 'favorite_outlined'}
            </Icon>
        </IconButton>);
    });


type DeleteActionProps = { contactId: number, withText?: boolean, rootClass?: string, iconClass?: string }
    & WithStyles<typeof deleteActionStyle>
 
export const DeleteAction = withStyles(deleteActionStyle)
    (({contactId, withText, classes, rootClass, iconClass}: DeleteActionProps) => {
        const [modalOpen, setModalOpen] = useState(false);
        const dispatch = useContext(DispatchContext);
        return (
            <div className={rootClass}>
                <IconButton onClick={() => setModalOpen(true)} className={classes.button} disableRipple>
                    {(withText || false) && <Typography className={classes.text}>Delete</Typography>}
                    <Icon color="secondary" className={iconClass}>delete</Icon>
                </IconButton>
                <DeleteModal isOpen={modalOpen} text="Are you sure you want to delete this modal"
                    onCancel={() => setModalOpen(false)}
                    onConfirm={() => dispatch(deleteContact(contactId))} />
            </div>
        );
    });

    
type GoBackActionProps = { rootClass?: string, iconClass?: string }
    & WithStyles<typeof goBackStyle>;
    
export const GoBackAction = withStyles(goBackStyle)
    (({classes, rootClass, iconClass}: GoBackActionProps) => {
        const dispatch = useContext(DispatchContext);
        return (<IconButton onClick={() => dispatch(goBack())} className={classes.root + ' ' + rootClass} disableRipple>
            <Icon color="secondary" className={iconClass}>arrow_back</Icon>
        </IconButton>);
    }); 