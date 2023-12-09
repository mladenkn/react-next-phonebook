import {
  WithStyles,
  withStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core"
import style from "./delete-dialog-style"

type Props = {
  text: string
  onCancel: () => void
  onConfirm: () => void
  isOpen: boolean
} & WithStyles<typeof style>

const DeleteModal_ = ({ classes, text, isOpen, onCancel, onConfirm }: Props) => (
  <Dialog className={classes.root} open={isOpen} aria-labelledby="delete-dialog">
    <DialogTitle className={classes.title} id="delete-dialog">
      Delete
    </DialogTitle>

    <DialogContent>
      <DialogContentText className={classes.text}>{text}</DialogContentText>
    </DialogContent>

    <DialogActions className={classes.actions}>
      <Button variant="contained" color="secondary" onClick={onCancel} className={classes.button}>
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onConfirm}
        className={classes.button}
        autoFocus
      >
        Delete
      </Button>
    </DialogActions>
  </Dialog>
)

export default withStyles(style)(DeleteModal_)

// export const DeleteContactModel = (p: {onCancel: () => {}, onConfirm: () => {}}) =>
//     <DeleteModal text="Are you sure you want to delete this contact?" onCancel={p.onCancel} onConfirm={p.onConfirm} />
