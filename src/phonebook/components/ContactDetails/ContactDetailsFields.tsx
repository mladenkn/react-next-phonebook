import { Contact } from "../../models"
import style from "./ContactDetailsFields.style"
import {
  List,
  ListItem,
  withStyles,
  WithStyles,
  Typography,
} from "@material-ui/core"
import { ContactFieldLabel } from "../various"


export default withStyles(style)(
  ({ contact, classes }: { contact: Contact } & WithStyles<typeof style>) => (
    <div className={classes.root}>
      <div className={classes.field}>
        <div className={classes.labelContainer}>
          <ContactFieldLabel icon="email" text="email" />
        </div>
        <Typography className={classes.fieldValue}>{contact.email}</Typography>
      </div>
      <div className={classes.field}>
        <div className={classes.labelContainer}>
          <ContactFieldLabel icon="phone" text="number" />
        </div>
        <List
          disablePadding
          className={classes.fieldValue + " " + classes.fieldListValue}
        >
          {contact.numbers.map(({ label, value }) => (
            <ListItem disableGutters key={value}>
              <Typography className={classes.label}>{label}</Typography>
              <Typography className={classes.numberValue}>{value}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
)
