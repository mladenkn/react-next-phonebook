import { Contact } from "../../models"
import style from "./ContactDetailsFields.style"
import { List, ListItem, withStyles, WithStyles, Typography } from "@material-ui/core"
import { ContactFieldLabel } from "../various"
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"

export default withStyles(style)(
  ({ contact, classes }: { contact: Contact } & WithStyles<typeof style>) => (
    <div className={classes.root}>
      <div className={classes.field}>
        <div className={classes.labelContainer}>
          <ContactFieldLabel Icon={EmailIcon} text="email" />
        </div>
        <Typography className={classes.fieldValue}>{contact.email}</Typography>
      </div>
      <div className={classes.field}>
        <div className={classes.labelContainer}>
          <ContactFieldLabel Icon={PhoneIcon} text="number" />
        </div>
        <List disablePadding className={classes.fieldValue}>
          {contact.numbers.map(({ label, value }) => (
            <ListItem disableGutters key={value}>
              <Typography className="w-24 uppercase">{label}</Typography>
              <Typography className="underline">{value}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  ),
)
