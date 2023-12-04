import style from "./style"
import { ContactListItem } from "../../models"
import { useState } from "react"
import { withStyles, WithStyles } from "@material-ui/core"
import { ContactListItem as Item } from "./ContactListItem"
import ContactAdder from "./ContactAdder"
import withWidth, { WithWidth } from "@material-ui/core/withWidth"
import clsx from "clsx"

type Props = {
  contacts: ContactListItem[]
  className?: string
  includeAdder?: boolean
  deleteContact: (id: number) => void
  toggleFavorite: (id: number) => void
} & WithStyles<typeof style> &
  WithWidth

const ContactList = withWidth()(({
  contacts,
  classes,
  includeAdder,
  className,
  width,
  deleteContact,
  toggleFavorite,
}: Props) => {
  const includeAdder_ = includeAdder || false
  const smOrDown = width === "sm" || width === "xs"

  const [selectedItemId, setSelectedItemId] = useState(0)

  const items = contacts.map(c => (
    <li key={c.id} className={classes.itemRoot}>
      <Item
        isSelected={selectedItemId === c.id}
        smOrDown={smOrDown}
        onDelete={() => deleteContact(c.id)}
        onSelect={() => setSelectedItemId(c.id)}
        onToggleFavorite={() => toggleFavorite(c.id)}
        contact={c}
      />
    </li>
  ))

  if (includeAdder_) {
    const adder = (
      <li key={0} className={classes.itemRoot}>
        <ContactAdder />
      </li>
    )
    items.unshift(adder)
  }

  return <ul className={clsx(classes.root, className)}>{items}</ul>
})

export default withStyles(style)(ContactList)
