import { homePageUrl } from "./urls"
import { Typography, Toolbar as MuiToolbar, AppBar } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core"
import { Link } from "react-router-dom"

export const Toolbar = () => {
  const classes = useToolbarStyle()
  return (
    <AppBar>
      <MuiToolbar className={classes.toolbar}>
        <Link
          className="pb-2 pt-3 text-xl font-semibold uppercase text-white no-underline"
          to={homePageUrl}
        >
          Phonebook
        </Link>
      </MuiToolbar>
      <div className={classes.toolbarBorder} />
    </AppBar>
  )
}

export const toolbarStyle = ({ palette }: Theme) =>
  createStyles({
    toolbar: {
      backgroundImage: `linear-gradient(to right, ${palette.primary.dark}, ${palette.primary.light})`,
      minHeight: 40,
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },
    toolbarBorder: {
      backgroundImage: `linear-gradient(to right, #70BBC3, #A0D8DC)`,
      height: 7,
    },
  })

export const useToolbarStyle = makeStyles(toolbarStyle, {
  name: "ToolbarStyle",
})
