import { MouseEvent, useState } from "react"
import ContactListItem, { ContactListItemModel } from "./contact-list-item"
import { cn } from "~/utils/ui-utils"
import { PlusIcon } from "~/assets/icons"
import { useRouter } from "next/router"
import { contactCreateUrl, contactEditUrl } from "~/urls"

export type ContactListProps = {
  contacts: ContactListItemModel[]
  className?: string
}

export default function ContactList({ contacts, className }: ContactListProps) {
  const [selectedItemId, setSelectedItemId] = useState<number>()
  const router = useRouter()

  function handleEditClick(e: MouseEvent, contactId: number) {
    e.stopPropagation()
    router.push(contactEditUrl(contactId))
  }

  const items = contacts.map(c => (
    <ContactListItem
      key={c.id}
      isSelected={selectedItemId === c.id}
      contact={c}
      onSelect={() => setSelectedItemId(c.id)}
      onEditClick={e => handleEditClick(e, c.id)}
    />
  ))

  return (
    <ul
      className={cn(
        "flex w-full flex-col gap-2",
        "md:flex-row md:flex-wrap md:justify-center", // md
        className,
      )}
    >
      <li key={0} className="h-14 w-full md:h-36 md:w-60">
        <button
          onClick={() => router.push(contactCreateUrl)}
          className="flex h-full w-full items-center border-2 border-dashed border-primary-light md:flex-col md:justify-center"
        >
          <PlusIcon className="text-2xl text-primary-light sm-max:ml-3 sm-max:mr-2" />
          <p className="text-primary-light">Add new</p>
        </button>
      </li>
      {items}
    </ul>
  )
}
