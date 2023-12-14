import { useState } from "react"
import { cn, validURL } from "../utils"
import { swapableAvatarStyle } from "./swapable-avatar-style"
import { withStyles, WithStyles } from "@material-ui/core"
import { TextInputDialog } from "./text-input-dialog"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import { ContactAvatar } from "./contact/contact-avatar"
import { grey } from "@material-ui/core/colors"

type Props = {
  src?: string
  onChange: (image?: string) => void
  className?: string
} & WithStyles<typeof swapableAvatarStyle>

export const SwapableAvatar = withStyles(swapableAvatarStyle)(({
  className,
  classes,
  src,
  onChange,
}: Props) => {
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
            <div
              className={cn("absolute text-3xl")}
              style={{ top: "40%", left: "47%", color: grey[300] }}
            >
              x
            </div>
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
              text={src}
              onOK={handleDialogOK}
              onCancel={() => setIsDialogOpen(false)}
              isInputValid={imgUrl => !!imgUrl}
            />
          )}
        </div>
      )}
    </>
  )
})
