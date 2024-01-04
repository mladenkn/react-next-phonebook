import ContactDetailsFields from "./contact-details-fields"
import { GoBackAction } from "../actions"
import ContactAvatar from "./contact-avatar"
import { cn } from "~/utils/ui-utils"
import Toolbar from "~/toolbar"
import { api } from "~/utils/api"
import { ContactFavorite } from "./contact-update"
import { PencilIcon } from "~/assets/icons"
import { Toast, useToast } from "~/utils/toast"

export default function ContactDetailsPage({ contactId }: { contactId: number }) {
  const contact = api.contact.single.useQuery(contactId)

  if (!contact.data) return <>Loading...</> // never

  const [isEditToastActive, setIsEditToastActive] = useToast()
  const editAction = (
    <button onClick={() => setIsEditToastActive(true)}>
      <PencilIcon />
    </button>
  )

  const avatar = (
    <ContactAvatar
      style={contact.data.avatarStyle}
      className={cn("ml-2 mr-3 h-16 w-16 sm:h-44 sm:w-44")}
      url={contact.data.avatarUrl}
      letter={contact.data.fullName[0]}
    />
  )

  return (
    <div className="mx-auto max-w-xl">
      <Toolbar />
      <div className={cn("mt-16 px-3 text-tc-primary sm:mt-24 sm:flex xs-max:w-full")}>
        <div className="xs-max:hidden">{avatar}</div>
        <div>
          <div className="mt-4 flex items-center justify-between px-1 pb-2 pt-0 sm:w-80">
            <GoBackAction />
            <span className="text-2xl xs-max:hidden">{contact.data.fullName}</span>
            <span className="flex items-center gap-2">
              <ContactFavorite id={contact.data.id} isFavorite={contact.data.isFavorite} />
              {editAction}
            </span>
          </div>
          <div className="h-0.25 w-full bg-secondary-main sm:hidden" />
          <h1 className="flex items-center px-0 sm:hidden sm:pb-2 xs-max:py-4">
            {avatar}
            <p className="text-2xl">{contact.data.fullName}</p>
          </h1>
          <div className="h-0.25 w-full bg-primary-main" />
          <ContactDetailsFields contact={contact.data} />
        </div>
      </div>
      <Toast
        className="bg-error-light"
        isActive={isEditToastActive}
        setIsActive={setIsEditToastActive}
      >
        <p className="text-xl mr-4">Contact edit not available.</p>
      </Toast>
    </div>
  )
}
