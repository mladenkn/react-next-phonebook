import { useState } from "react"
import { cn, validURL } from "../utils"
import { swapableAvatarStyle } from "./swapable-avatar-style"
import { withStyles, WithStyles, Avatar } from "@material-ui/core"
import { TextInputDialog } from "./text-input-dialog"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"

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
  const [imageSrc, setImageSrc] = useState(src)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const setImageSrc_ = (src?: string) => {
    setImageSrc(src)
    onChange(src)
  }

  const handleDialogOK = (image: string) => {
    setIsDialogOpen(false)
    setImageSrc_(image)
  }

  return (
    <>
      {imageSrc ? (
        <div>
          <div
            className={cn("relative cursor-pointer", className)}
            onClick={() => setImageSrc_(undefined)}
          >
            <Avatar src={src} className={classes.avatar} />
            <div className={classes.removeIcon}>x</div>
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
              text={imageSrc}
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
