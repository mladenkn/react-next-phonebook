import { useState } from "react"
import { validURL } from "../../utils"
import { swapableAvatarStyle } from "./swapableAvatar.style"
import { withStyles, WithStyles, Avatar } from "@material-ui/core"
import { TextInputDialog } from "./TextInputDialog"
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

  const onClick = () => {
    if (imageSrc) setImageSrc_(undefined)
    else setIsDialogOpen(true)
  }

  const dialog = isDialogOpen && (
    <TextInputDialog
      text={imageSrc}
      onOK={handleDialogOK}
      onCancel={() => setIsDialogOpen(false)}
      isInputValid={validURL}
    />
  )

  return (
    <div>
      <div className={className + " " + classes.root} onClick={onClick}>
        {src ? (
          <Avatar src={src} className={classes.avatar} />
        ) : (
          <div className={classes.uploadImage} />
        )}
        {src ? (
          <div className={classes.removeIcon}>x</div>
        ) : (
          <CloudUploadIcon className={classes.uploadIcon} />
        )}
      </div>
      {dialog}
    </div>
  )
})
