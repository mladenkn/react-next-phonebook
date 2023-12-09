import { homePageUrl } from "../urls"
import { Link, Typography, Toolbar as MuiToolbar } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core"

export const Toolbar = () => {
  const classes = useToolbarStyle()
  return (
    <div>
      <MuiToolbar className={classes.toolbar}>
        <Link className={classes.headingLink} underline="none" href={homePageUrl}>
          <Typography className={classes.headingLinkText}>Phonebook</Typography>
        </Link>
      </MuiToolbar>
      <div className={classes.toolbarBorder} />
    </div>
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
    headingLink: {
      margin: "10px 0px 10px 0px",
      color: "white",
    },
    headingLinkText: {
      textTransform: "uppercase",
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    saveWorkAction: {
      color: "white",
      position: "absolute",
      right: "5%",
    },
  })

export const useToolbarStyle = makeStyles(toolbarStyle, {
  name: "ToolbarStyle",
})
