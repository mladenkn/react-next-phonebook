import style from "./style"
import { ContactListItem as ContactListItemModel } from "../../models"
import { useState } from "react"
import { withStyles, WithStyles } from "@material-ui/core"
import ContactListItem from "./ContactListItem"
import ContactAdder from "./ContactAdder"
import withWidth, { WithWidth } from "@material-ui/core/withWidth"
import clsx from "clsx"
import { cn, useWidth } from "../../../utils"

type Props = {
  contacts: ContactListItemModel[]
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
  deleteContact,
  toggleFavorite,
}: Props) => {
  const includeAdder_ = includeAdder || false

  const [selectedItemId, setSelectedItemId] = useState(0)

  const width = useWidth()
  if (!width) return <></>

  const items = contacts.map(c => (
    <li key={c.id} className={classes.itemRoot}>
      <ContactListItem
        isSelected={selectedItemId === c.id}
        variant={width >= 768 ? "bigger" : "smaller"}
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

  const isBigger = width >= 768

  return (
    <ul
      className={cn(
        "flex w-full flex-col",
        isBigger && "flex-row flex-wrap justify-center",
        className,
      )}
    >
      {items}
    </ul>
  )
})

export default withStyles(style)(ContactList)
