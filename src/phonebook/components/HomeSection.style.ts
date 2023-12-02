import { createStyles, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useHomeSectionStyles = makeStyles(({ breakpoints }: Theme) =>
  createStyles({
    [breakpoints.down("xs")]: {
      contactTabsDivider: {
        marginTop: 6,
      },
      list: {
        marginTop: 10,
      },
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
