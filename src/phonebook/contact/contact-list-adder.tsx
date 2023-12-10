import style from "./contact-list-adder-style"
import { withStyles, WithStyles } from "@material-ui/core"
import { contactCreateUrl } from "../urls"
import { Add } from "@material-ui/icons"

const ContactAdder = ({ classes }: WithStyles<typeof style>) => (
  <a href={contactCreateUrl} className={classes.root}>
    <div className={classes.content_}>
      <Add className={classes.icon} />
      <p className="text-primary-light">Add new</p>
    </div>
  </a>
)

export default withStyles(style)(ContactAdder)
