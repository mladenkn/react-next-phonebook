import React, { useState } from 'react';
import { LinkProps as MuiLinkProps } from "@material-ui/core/Link";
import { Link as MuiLink, withStyles, WithStyles, Avatar, Icon, Dialog,
    DialogContent, DialogTitle, Input, DialogActions, Button, Divider as MUIDivider } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { swapableAvatarStyle, useUrlInputDialogStyle, dividerStyle } from './components-style';
import { validURL } from "./";


type SwapableAvatarProps = {
    src?: string
    onChange: (image?: string) => void
    className?: string
} & WithStyles<typeof swapableAvatarStyle>

export const SwapableAvatar = withStyles(swapableAvatarStyle)((p: SwapableAvatarProps) => {

    const [imageSrc, setImageSrc] = useState(p.src);
    const { classes } = p;
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const setImageSrc_ = (src?: string) => {
        setImageSrc(src);
        p.onChange(src);
    };

    const handleDialogOK = (image: string) => {
        setIsDialogOpen(false);
        setImageSrc_(image);
    };

    const onClick = () => {
        if(imageSrc)
            setImageSrc_(undefined);
        else
            setIsDialogOpen(true);
    };

    const dialog = isDialogOpen && 
        <TextInputDialog 
            text={imageSrc}
            onOK={handleDialogOK} 
            onCancel={() => setIsDialogOpen(false)} 
            isInputValid={validURL}
        />

    return (
        <div>
            <div className={p.className + ' ' + classes.root} onClick={onClick}>
                {p.src ? 
                    <Avatar src={p.src} className={classes.avatar} /> :
                    <div className={classes.uploadImage} />}
                {p.src ? 
                    <div className={classes.removeIcon}>x</div> :
                    <Icon className={classes.uploadIcon}>cloud_upload</Icon>}
            </div>
            {dialog}
        </div>
    );
});
 

interface TextInputDialogProps {
    text?: string
    isInputValid: (input: string) => boolean
    onOK: (url: string) => void
    onCancel: () => void
}

export const TextInputDialog = (p: TextInputDialogProps) => {

    const classes = useUrlInputDialogStyle();
    const [input, setInput] = useState(p.text || '');
    const inputValid = p.isInputValid(input);
    const okButtonDisabled = !inputValid;

    return (
        <Dialog classes={{paper: classes.paper}} open={true} aria-labelledby="d1">

            <DialogTitle id="d1">Enter image url:</DialogTitle>
        
            <DialogContent>
                <Input className={classes.input} value={input} onChange={e => setInput(e.target.value)} />
            </DialogContent>
        
            <DialogActions className={classes.actions}>
                <Button variant="contained" color="secondary" onClick={() => p.onCancel()} className={''}>
                    Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={() => p.onOK(input)} disabled={okButtonDisabled} autoFocus>
                    OK
                </Button>        
            </DialogActions>

        </Dialog>
    );
}

type DividerProps = {margin?: number | string, className?: string} & WithStyles<typeof dividerStyle>;
const Divider_ = ({className, classes, margin}: DividerProps) =>
    <MUIDivider className={`${classes.root} ${className}`} style={{marginTop: margin, marginBottom: margin}} />

export const Divider = withStyles(dividerStyle)(Divider_);

type EmptinessProps = {width?: number | string, height?: number | string, className?: string}
export const Emptiness = ({width, height, className}: EmptinessProps) => <div className={className} style={{width, height}}></div>


export const createRefRouterLink = (url: string) => React.forwardRef((props, ref: any) => (
    <RouterLink innerRef={ref} to={url} {...props} />
));

const MuiLink_ = MuiLink as any;
export const Link = (p: MuiLinkProps) => <MuiLink_ {...p} component={createRefRouterLink(p.href!)} />