import { createStyles, Theme, makeStyles } from "@material-ui/core"
import { cn } from "../../utils"

export const ContactPageBaseStylesXs = {
  root: cn(""),
  toolbar: cn("border-b-1 mt-4 flex items-center border-secondary-main px-2 pb-2 pt-0"),
  heading: cn("border-b-1 flex items-center border-primary-main px-0 pb-5 pt-2"),
  body: cn("pb-0 pl-4 pr-4 pt-2"),
}

const contactPageBaseMd = ({ palette }: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    heading: {
      display: "flex",
      borderBottom: `1px solid ${palette.primary.main}`,
      paddingBottom: 7,
    },
    left: {
      display: "inline-flex",
      flexDirection: "column",
    },
    right: {
      width: 500,
      marginTop: 50,
      display: "inline-block",
      marginLeft: 20,
    },
  })

export const useContactPageBaseStylesMd = makeStyles(contactPageBaseMd, {
  name: "ContactPageBaseMd",
})
