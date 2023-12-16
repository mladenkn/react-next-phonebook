import { ContactListItem as ContactListItemModel } from "../models"
import { useState } from "react"
import ContactListItem from "./contact-list-item"
import { cn, useWidth } from "../utils"
import { contactCreateUrl } from "../urls"
import AddIcon from "@material-ui/icons/Add"
import Link from "next/link"

export type ContactListProps = {
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
}: ContactListProps) => {
  const [selectedItemId, setSelectedItemId] = useState(0)

  const width = useWidth()
  if (!width) return <></>

  const items = contacts.map(c => (
    <ContactListItem
      key={c.id}
      isSelected={selectedItemId === c.id}
      variant={width >= 768 ? "bigger" : "smaller"}
      onDelete={() => deleteContact(c.id)}
      onSelect={() => setSelectedItemId(c.id)}
      onToggleFavorite={() => toggleFavorite(c.id)}
      contact={c}
    />
  ))

  const includeAdder_ = includeAdder || false
  if (includeAdder_) {
    const adder = (
      <li key={0} className="h-14 w-full md:h-36 md:w-60">
        <Link
          href={contactCreateUrl}
          className="flex h-full w-full items-center border-1 border-dashed border-primary-light md:flex-col md:justify-center"
        >
          <AddIcon className="text-2xl text-primary-light max-md:ml-5 max-md:mr-2" />
          <p className="text-primary-light">Add new</p>
        </Link>
      </li>
    )
    items.unshift(adder)
  }

  return (
    <ul
      className={cn(
        "flex w-full flex-col gap-1",
        "md:flex-row md:flex-wrap md:justify-center", // md
        className,
      )}
    >
      {items}
    </ul>
  )
}

export default ContactList
