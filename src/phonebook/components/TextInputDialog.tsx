import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Input, DialogActions, Button } from "@material-ui/core";
import { useTextInputDialogStyle } from './various-style';
 

type TextInputDialogProps = {
    text?: string
    isInputValid: (input: string) => boolean
    onOK: (url: string) => void
    onCancel: () => void
}

export const TextInputDialog = (p: TextInputDialogProps) => {

    const classes = useTextInputDialogStyle();
    const [input, setInput] = useState(p.text || '');
    const inputValid = p.isInputValid(input);
    const okButtonDisabled = !inputValid;

    return (
        <Dialog classes={{paper: classes.paper}} open={true} aria-labelledby="text-input-dialog">

            <DialogTitle id="text-input-dialog">Enter image url:</DialogTitle>
        
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