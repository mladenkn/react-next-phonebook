import { useToolbarStyle } from "./Toolbar-style"
import React, { useState } from "react"
import { homePageUrl } from "../urls"
import { SaveChangesAction } from "./actions"
import {
  Link,
  Typography,
  Toolbar as MuiToolbar,
  Snackbar,
} from "@material-ui/core"

type ToolbarProps = { saveWork: (onComplete: () => void) => void }

export const Toolbar = ({ saveWork }: ToolbarProps) => {
  const classes = useToolbarStyle()
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  return (
    <div>
      <MuiToolbar className={classes.toolbar}>
        <Link
          className={classes.headingLink}
          underline="none"
          href={homePageUrl}
        >
          <Typography className={classes.headingLinkText}>Phonebook</Typography>
        </Link>
        <SaveChangesAction
          className={classes.saveWorkAction}
          onClick={() => saveWork(() => setIsSnackbarOpen(true))}
        />
      </MuiToolbar>
      <Snackbar
        message="Saved changes"
        open={isSnackbarOpen}
        autoHideDuration={4000}
        onClose={() => setIsSnackbarOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      />
      <div className={classes.toolbarBorder} />
    </div>
  )
}
