import { useState } from "react"
import { Dialog, Input, Button } from "@material-ui/core"

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
    <Dialog classes={{ paper: "mx-2 w-full" }} open={true}>
      <h1 className="mb-4 ml-6 mt-6 text-xl">Enter image url:</h1>

      <Input
        className="ml-6 w-full sm:w-96"
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <div className="mx-6 mb-4 mt-6 flex justify-end gap-3">
        <Button variant="contained" color="secondary" onClick={() => p.onCancel()}>
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
      </div>
    </Dialog>
  )
}
