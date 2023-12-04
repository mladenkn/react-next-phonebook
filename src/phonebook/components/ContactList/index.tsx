import { ContactListItem as ContactListItemModel } from "../../models"
import { useState } from "react"
import ContactListItem from "./ContactListItem"
import ContactAdder from "./ContactAdder"
import withWidth from "@material-ui/core/withWidth"
import { cn, useWidth } from "../../../utils"

type Props = {
  contacts: ContactListItemModel[]
  className?: string
  includeAdder?: boolean
  deleteContact: (id: number) => void
  toggleFavorite: (id: number) => void
}

const ContactList = withWidth()(({
  contacts,
  includeAdder,
  className,
  deleteContact,
  toggleFavorite,
}: Props) => {
  const includeAdder_ = includeAdder || false

  const [selectedItemId, setSelectedItemId] = useState(0)

  const width = useWidth()
  if (!width) return <></>

  const variant = width >= 768 ? "bigger" : "smaller"
  const isBigger = variant == "bigger"

  const itemRoot_class = cn("h-16 w-full pt-1", isBigger && "w-60 h-36 p-1")

  const items = contacts.map(c => (
    <li key={c.id} className={itemRoot_class}>
      <ContactListItem
        isSelected={selectedItemId === c.id}
        variant={variant}
        onDelete={() => deleteContact(c.id)}
        onSelect={() => setSelectedItemId(c.id)}
        onToggleFavorite={() => toggleFavorite(c.id)}
        contact={c}
      />
    </li>
  ))

  if (includeAdder_) {
    const adder = (
      <li key={0} className={itemRoot_class}>
        <ContactAdder />
      </li>
    )
    items.unshift(adder)
  }

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

export default ContactList
