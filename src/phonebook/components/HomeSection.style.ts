import { createStyles, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useHomeSectionStyles = makeStyles(({ breakpoints, palette }: Theme) =>
  createStyles({
    list: {
      marginTop: 10,
    },
    [breakpoints.up("sm")]: {
      list: {
        marginTop: 25,
      },
    },
  }),
)

export default useHomeSectionStyles
