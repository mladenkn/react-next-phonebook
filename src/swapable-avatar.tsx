import { useState } from "react"
import { cn } from "~/utils/ui-utils"
import { TextInputDialog } from "./text-input-dialog"
import ContactAvatar from "./contact/contact-avatar"
import { CloudUploadIcon, RemoveIcon } from "./assets/icons"

type Props = {
  src?: string | null
  onChange: (image?: string) => void
  className?: string
}

export const SwapableAvatar = ({ className, src, onChange }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDialogOK = (image: string) => {
    setIsDialogOpen(false)
    onChange(image)
  }

  return (
    <>
      {src ? (
        <div>
          <div
            className={cn("relative cursor-pointer", className)}
            onClick={() => onChange(undefined)}
          >
            <ContactAvatar
              url={src}
              className="h-full w-full"
              style={{ filter: "brightness(70%)" }}
            />
            <RemoveIcon
              className={cn("absolute text-3xl text-gray-200")}
              style={{ top: "40%", left: "47%" }}
            />
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{ background: "rgba(45, 161, 173, 0.4000000059604645)" }}
            className={cn(
              "flex cursor-pointer items-center justify-center rounded-full",
              className,
            )}
            onClick={() => setIsDialogOpen(true)}
          >
            <CloudUploadIcon className="text-white" />
          </div>
          {isDialogOpen && (
            <TextInputDialog
              text={src || ""}
              onOK={handleDialogOK}
              onCancel={() => setIsDialogOpen(false)}
              isInputValid={imgUrl => !!imgUrl}
            />
          )}
        </div>
      )}
    </>
  )
}
