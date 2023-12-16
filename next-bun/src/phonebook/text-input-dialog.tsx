import { useState } from "react"
import { cn } from "../utils"
import { Modal } from "./various"

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
    <Modal contentClassName="mx-2 bg-white px-6">
      <h1 className="mb-6 mt-6 text-xl">Enter image url:</h1>

      <input
        className="w-full border-b-2 border-b-primary-light p-1 outline-none sm:w-96"
        value={input}
        onChange={e => setInput(e.target.value)}
        autoFocus
      />

      <div className="mb-4 mt-6 flex justify-end gap-3">
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
    </Modal>
  )
}
