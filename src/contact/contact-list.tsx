import { useState } from "react"
import ContactListItem, { ContactListItemModel } from "./contact-list-item"
import { cn } from "~/utils/ui-utils"
import { PlusIcon } from "~/assets/icons"
import { Toast, useToast } from "~/utils/toast"

export type ContactListProps = {
  contacts: ContactListItemModel[]
  className?: string
  includeAdder?: boolean
}

export default function ContactList({ contacts, includeAdder, className }: ContactListProps) {
  const [selectedItemId, setSelectedItemId] = useState<number>()
  const [isToastActive, setToastActive] = useToast()

  const items = contacts.map(c => (
    <ContactListItem
      key={c.id}
      isSelected={selectedItemId === c.id}
      contact={c}
      onSelect={() => setSelectedItemId(c.id)}
    />
  ))

  const includeAdder_ = includeAdder || false
  if (includeAdder_) {
    const adder = (
      <li key={0} className="h-14 w-full md:h-36 md:w-60">
        <button
          onClick={() => setToastActive(true)}
          className="flex h-full w-full items-center border-1 border-dashed border-primary-light md:flex-col md:justify-center"
        >
          <PlusIcon className="text-2xl text-primary-light sm-max:ml-3 sm-max:mr-2" />
          <p className="text-primary-light">Add new</p>
        </button>
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
      <Toast className="bg-error-light" isActive={isToastActive} setIsActive={setToastActive}>
        <p className="mr-6 text-xl">Contact create not implemented.</p>
      </Toast>
    </ul>
  )
}
