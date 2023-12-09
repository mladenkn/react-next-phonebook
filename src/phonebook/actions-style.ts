import { createStyles, Theme } from "@material-ui/core"

export const deleteActionStyle = ({ palette }: Theme) =>
  createStyles({
    button: {
      padding: 0,
      color: palette.text.primary,
      "&:hover": {
        "background-color": "inherit",
      },
    },
    buttonHoverEffect: {
      padding: 5,
      color: palette.text.primary,
      borderRadius: "10%",
    },
  })
