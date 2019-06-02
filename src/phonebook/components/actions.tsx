import { withStyles, WithStyles, Icon, IconButton, Typography, Tooltip  } from "@material-ui/core";
import { goToEditActionStyle, favoriteActionStyle, deleteActionStyle, goBackStyle } from "./actions-style";
import { WithClassName, Link } from "./reusables";
import { contactEditUrl } from "../urls";
import React, { useState, useContext } from 'react';
import DeleteModal from "./DeleteModal";
import { GoBackContext } from "../stateMgmt/GoBackContext";
 
type GoToEditActionProps = { contactId: number, rootClass?: string, iconClass?: string } 
    & WithStyles<typeof goToEditActionStyle>;

export const GoToEditAction = withStyles(goToEditActionStyle)
    (({classes, contactId, rootClass, iconClass}: GoToEditActionProps) => (
        <Link href={contactEditUrl(contactId)} className={classes.root + ' ' + rootClass}>
            <Icon color="secondary" className={iconClass}>edit</Icon>
        </Link>
    ));


type FavoriteActionProps = { onClick: () => void, isFavorite: boolean, rootClass?: string, iconClass?: string }
    & WithStyles<typeof favoriteActionStyle>;

export const FavoriteAction = withStyles(favoriteActionStyle)
    (({onClick, isFavorite, classes, rootClass, iconClass}: FavoriteActionProps) => {
        return (
            <IconButton className={classes.root + ' ' + rootClass}
                onClick={onClick} disableRipple>
            <Icon color="secondary" className={iconClass}>
                {isFavorite ? 'favorite' : 'favorite_outlined'}
            </Icon>
        </IconButton>);
    });


type DeleteActionProps = { onConfirm: () => void, withHoverEffect?: boolean, withText?: boolean, rootClass?: string, iconClass?: string }
    & WithStyles<typeof deleteActionStyle>
 
export const DeleteAction = withStyles(deleteActionStyle)
    (({onConfirm, withText, classes, rootClass, iconClass, withHoverEffect}: DeleteActionProps) => {
        const [modalOpen, setModalOpen] = useState(false);
        const buttonClass = (withHoverEffect || false) ? classes.buttonHoverEffect : classes.button;
        return (
            <div className={rootClass}>
                <IconButton onClick={() => setModalOpen(true)} className={buttonClass} disableRipple>
                    {(withText || false) && <Typography className={classes.text}>Delete</Typography>}
                    <Icon color="secondary" className={iconClass}>delete</Icon>
                </IconButton>
                <DeleteModal isOpen={modalOpen} text="Are you sure you want to delete this contact?"
                    onCancel={() => setModalOpen(false)}
                    onConfirm={onConfirm} />
            </div>
        );
    });

    
type GoBackActionProps = { 
    rootClass?: string, iconClass?: string, onClick?: () => void, useGoBackContext?: boolean
} & WithStyles<typeof goBackStyle>;

export const GoBackAction = withStyles(goBackStyle)
    (({onClick, classes, rootClass, iconClass, useGoBackContext}: GoBackActionProps) => {
        const onClick_ = (useGoBackContext || true) ? useContext(GoBackContext) : onClick;
        return (
            <IconButton onClick={onClick_} className={classes.root + ' ' + rootClass} disableRipple>
                <Icon color="secondary" className={iconClass}>arrow_back</Icon>
            </IconButton>
        );
    }); 

type SaveWorkActionProps = {onClick: () => void} & WithClassName
export const SaveWorkAction = ({className, onClick}: SaveWorkActionProps) => 
    <Tooltip title="Save work">
        <IconButton onClick={onClick} className={className}>
            <Icon>save</Icon>
        </IconButton>
    </Tooltip>;