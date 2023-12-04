import { createStyles, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useHomeSectionStyles = makeStyles(({ breakpoints, palette }: Theme) =>
  createStyles({
    contactTabsDivider: {
      marginTop: 6,
      width: "100%",
      backgroundColor: palette.primary.main,
      height: 1.2,
    },
    list: {
      marginTop: 10,
    },
    [breakpoints.up("sm")]: {
      contactTabsDivider: {
        marginTop: 25,
      },
      list: {
        marginTop: 25,
      },
    },
  }),
)

export default useHomeSectionStyles
