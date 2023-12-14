import style from "./contact-list-adder-style"
import { withStyles, WithStyles } from "@material-ui/core"
import { contactCreateUrl } from "../urls"
import { Add } from "@material-ui/icons"
import { Link } from "react-router-dom"

const ContactAdder = ({ classes }: WithStyles<typeof style>) => (
  <Link
    to={contactCreateUrl}
    className="flex h-full w-full border-1 border-dashed border-primary-light md:items-center md:justify-center"
  >
    <div className={classes.content_}>
      <Add className={classes.icon} />
      <p className="text-primary-light">Add new</p>
    </div>
  </Link>
)

export default withStyles(style)(ContactAdder)
