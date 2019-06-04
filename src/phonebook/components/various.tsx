import { Icon, WithStyles, withStyles, Typography, Toolbar as MuiToolbar, Snackbar } from "@material-ui/core";
import { contactFieldLabelStyle, useToolbarStyle } from "./various-style";
import React, { useState } from 'react';
import { homePageUrl } from "../urls";
import { Link } from "../../utils/components";
import { SaveChangesAction } from "./actions";

type ContactFieldLabelProps = {icon: string, text: string, className?: string} 
    & WithStyles<typeof contactFieldLabelStyle>;

const ContactFieldLabel_ = (p: ContactFieldLabelProps) => 
    <div className={`${p.classes.fieldLabel} ${p.className}`}>
        <Icon className={p.classes.fieldLabelIcon}>{p.icon}</Icon>
        <span className={p.classes.fieldLabelText}>{p.text}</span>
    </div>
 
export const ContactFieldLabel = withStyles(contactFieldLabelStyle)(ContactFieldLabel_);


type ToolbarProps = {saveWork: (onComplete: () => void) => void}

export const Toolbar = ({saveWork}: ToolbarProps) =>
{
    const classes = useToolbarStyle();
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    return <div>
        <MuiToolbar className={classes.toolbar}>
            <Link className={classes.headingLink} underline="none" href={homePageUrl}>
                <Typography className={classes.headingLinkText}>Phonebook</Typography>
            </Link>
            <SaveChangesAction className={classes.saveWorkAction} onClick={() => saveWork(() => setIsSnackbarOpen(true))} />
        </MuiToolbar>
        <Snackbar 
            message="Saved changes" 
            open={isSnackbarOpen} 
            autoHideDuration={4000}
            onClose={() => setIsSnackbarOpen(false)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        />
        <div className={classes.toolbarBorder} />
    </div>;
}