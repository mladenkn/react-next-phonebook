import { ContactListItem as ContactListItemModel } from "../models"
import { useState } from "react"
import ContactListItem from "./contact-list-item"
import ContactAdder from "./contact-list-adder"
import { cn, useWidth } from "../../utils"

type Props = {
  contacts: ContactListItemModel[]
  className?: string
  includeAdder?: boolean
  deleteContact: (id: number) => void
  toggleFavorite: (id: number) => void
}

const ContactList = ({
  contacts,
  includeAdder,
  className,
  deleteContact,
  toggleFavorite,
}: Props) => {
  const [selectedItemId, setSelectedItemId] = useState(0)
  const itemRootClass = cn("h-16 w-full pt-1", cn.md("w-60 h-36 p-1"))

  const width = useWidth()
  if (!width) return <></>

  const items = contacts.map(c => (
    <li key={c.id} className={itemRootClass}>
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

  const includeAdder_ = includeAdder || false
  if (includeAdder_) {
    const adder = (
      <li key={0} className={itemRootClass}>
        <ContactAdder />
      </li>
    )
    items.unshift(adder)
  }

  return (
    <ul
      className={cn("flex w-full flex-col", cn.md("flex-row flex-wrap justify-center"), className)}
      // className={cn(
      //   "flex w-full flex-col",
      //   "md:flex-row md:flex-wrap md:justify-center",
      //   className,
      // )}
    >
      {items}
    </ul>
  )
}

export default ContactList
