import { useState } from "react"
import { Dialog, Input } from "@material-ui/core"
import { cn } from "../utils"

type TextInputDialogProps = {
  text?: string
  isInputValid: (input: string) => boolean
  onOK: (url: string) => void
  onCancel: () => void
}

export const TextInputDialog = ({ text, isInputValid, onOK, onCancel }: TextInputDialogProps) => {
  const [input, setInput] = useState(text || "")
  const inputValid = isInputValid(input)
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
        <button
          className="h-10 w-20 rounded-lg border-none bg-secondary-main text-black"
          onClick={() => onCancel()}
        >
          Cancel
        </button>
        <button
          className={cn(
            "h-10 w-20 rounded-lg border-none ",
            okButtonDisabled ? "text-gray bg-secondary-light" : "bg-secondary-main text-black",
          )}
          onClick={() => onOK(input)}
          disabled={okButtonDisabled}
        >
          Ok
        </button>
      </div>
    </Dialog>
  )
}
