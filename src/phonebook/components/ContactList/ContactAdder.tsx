import style from "./ContactAdder.style"
import { Typography, withStyles, WithStyles } from "@material-ui/core"
import { Link } from "../various"
import { contactCreateUrl } from "../../urls"
import { Add } from "@material-ui/icons"


const ContactAdder = ({ classes }: WithStyles<typeof style>) => (
  <Link href={contactCreateUrl} className={classes.root}>
    <div className={`${classes.content_}`}>
      <Add className={classes.icon} />
      <Typography className={classes.text}>Add new</Typography>
    </div>
  </Link>
)

export default withStyles(style)(ContactAdder)
