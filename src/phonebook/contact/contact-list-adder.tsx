import style from "./contact-list-adder-style"
import { withStyles, WithStyles } from "@material-ui/core"
import { contactCreateUrl } from "../urls"
import AddIcon from "@material-ui/icons/Add"
import { Link } from "react-router-dom"

const ContactAdder = ({ classes }: WithStyles<typeof style>) => (
  <Link
    to={contactCreateUrl}
    className="flex h-full w-full items-center border-1 border-dashed border-primary-light md:flex-col md:justify-center"
  >
    <AddIcon className="text-2xl text-primary-light max-sm:ml-5 max-sm:mr-2" />
    <p className="text-primary-light">Add new</p>
  </Link>
)

export default withStyles(style)(ContactAdder)
