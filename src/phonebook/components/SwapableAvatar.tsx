import React, { useState } from "react"
import { validURL } from "../../utils"
import { swapableAvatarStyle } from "./swapableAvatar-style"
import { withStyles, WithStyles, Avatar, Icon } from "@material-ui/core"
import { TextInputDialog } from "./TextInputDialog"

type Props = {
  src?: string
  onChange: (image?: string) => void
  className?: string
} & WithStyles<typeof swapableAvatarStyle>

export const SwapableAvatar = withStyles(swapableAvatarStyle)((p: Props) => {
  const [imageSrc, setImageSrc] = useState(p.src)
  const { classes } = p
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const setImageSrc_ = (src?: string) => {
    setImageSrc(src)
    p.onChange(src)
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
      <div className={p.className + " " + classes.root} onClick={onClick}>
        {p.src ? (
          <Avatar src={p.src} className={classes.avatar} />
        ) : (
          <div className={classes.uploadImage} />
        )}
        {p.src ? (
          <div className={classes.removeIcon}>x</div>
        ) : (
          <Icon className={classes.uploadIcon}>cloud_upload</Icon>
        )}
      </div>
      {dialog}
    </div>
  )
})
