import { useToolbarStyle } from "./Toolbar.style"
import { homePageUrl } from "../urls"
import { Link, Typography, Toolbar as MuiToolbar } from "@material-ui/core"

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
