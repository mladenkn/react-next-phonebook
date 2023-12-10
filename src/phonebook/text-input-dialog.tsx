import { useState } from "react"
import { Dialog, DialogContent, DialogTitle, Input, DialogActions, Button } from "@material-ui/core"

type TextInputDialogProps = {
  text?: string
  isInputValid: (input: string) => boolean
  onOK: (url: string) => void
  onCancel: () => void
}

export const TextInputDialog = (p: TextInputDialogProps) => {
  const [input, setInput] = useState(p.text || "")
  const inputValid = p.isInputValid(input)
  const okButtonDisabled = !inputValid

  return (
    <Dialog classes={{ paper: "mx-2 w-full" }} open={true} aria-labelledby="text-input-dialog">
      <DialogTitle id="text-input-dialog">Enter image url:</DialogTitle>

      <DialogContent>
        <Input className="w-full sm:w-96" value={input} onChange={e => setInput(e.target.value)} />
      </DialogContent>

      <DialogActions className="mx-6 mb-3 mt-2">
        <Button variant="contained" color="secondary" onClick={() => p.onCancel()} className={""}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => p.onOK(input)}
          disabled={okButtonDisabled}
          autoFocus
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
