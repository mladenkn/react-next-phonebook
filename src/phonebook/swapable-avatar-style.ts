import { createStyles } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

export const swapableAvatarStyle = () =>
  createStyles({
    root: {
      position: "relative",
      display: "block",
      cursor: "pointer",
    },
    uploadImage: {
      backgroundColor: "rgba(45, 161, 173, 0.4000000059604645)",
      borderRadius: "50%",
      width: "100%",
      height: "100%",
    },
    avatar: {
      filter: "brightness(70%)",
    },
    removeIcon: {
      // position: "absolute",
      top: "40%",
      left: "47%",
      color: grey[300],
      // fontSize: "2rem",
      // fontWeight: "lighter",
    },
    uploadIcon: {
      position: "absolute",
      top: "42%",
      left: "42%",
      color: "white",
      fontSize: "2.25rem",
    },
  })
