import { withStyles, WithStyles, Icon, IconButton, Typography, Tooltip  } from "@material-ui/core";
import { goToEditActionStyle, favoriteActionStyle, deleteActionStyle, goBackStyle } from "./actions-style";
import { WithClassName, Link } from "./reusables";
import { contactEditUrl } from "../urls";
import React, { useState, useContext } from 'react';
import { DispatchContext } from "../stateMgmt/DispatchContext";
import { favoriteContact, goBack, deleteContact, saveWork } from "../actions";
import { Contact } from "../models";
import DeleteModal from "./DeleteModal";

type IconLinkProps = {name: string, url: string} & WithClassName;

export const IconLink = ({name, url, className}: IconLinkProps) => (
    <Link href={url} className={className}>
        <Icon color="secondary">{name}</Icon>
    </Link>
);

 
type GoToEditActionProps = { contactId: number, rootClass?: string, iconClass?: string } 
    & WithStyles<typeof goToEditActionStyle>;

export const GoToEditAction = withStyles(goToEditActionStyle)
    (({classes, contactId, rootClass, iconClass}: GoToEditActionProps) => (
        <Link href={contactEditUrl(contactId)} className={classes.root + ' ' + rootClass}>
            <Icon color="secondary" className={iconClass}>edit</Icon>
        </Link>
    ));


type FavoriteActionProps = { contact: Contact, rootClass?: string, iconClass?: string }
    & WithStyles<typeof favoriteActionStyle>;

export const FavoriteAction = withStyles(favoriteActionStyle)
    (({contact, classes, rootClass, iconClass}: FavoriteActionProps) => {
        return (
            <IconButton className={classes.root + ' ' + rootClass}
                onClick={() => {}} disableRipple>
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
        return (
            <div className={rootClass}>
                <IconButton onClick={() => setModalOpen(true)} className={classes.button} disableRipple>
                    {(withText || false) && <Typography className={classes.text}>Delete</Typography>}
                    <Icon color="secondary" className={iconClass}>delete</Icon>
                </IconButton>
                <DeleteModal isOpen={modalOpen} text="Are you sure you want to delete this contact?"
                    onCancel={() => setModalOpen(false)}
                    onConfirm={() => {}} />
            </div>
        );
    });

    
type GoBackActionProps = { rootClass?: string, iconClass?: string } & WithStyles<typeof goBackStyle>;
    
export const GoBackAction = withStyles(goBackStyle)
    (({classes, rootClass, iconClass}: GoBackActionProps) => {
        return (<IconButton onClick={() => {}} className={classes.root + ' ' + rootClass} disableRipple>
            <Icon color="secondary" className={iconClass}>arrow_back</Icon>
        </IconButton>);
    }); 

export const SaveWorkAction = ({className}: WithClassName) => 
{
    const dispatch = useContext(DispatchContext);
    return <Tooltip title="Save work">
        <IconButton onClick={() => {}} className={className}>
            <Icon>save</Icon>
        </IconButton>
    </Tooltip>;
}