import { Contact as _Contact } from "../models"
import { GoBackAction } from "../actions"
import ContactForm from "./contact-form"
import SwapableAvatar from "../swapable-avatar"
import { cn } from "~/utils/ui-utils"
import { useRouter } from "next/router"
import FixedToolbar from "~/toolbar"
import { ContactDeleteAction } from "./contact-delete"
import { homePageUrl } from "~/urls"

type Contact = Omit<_Contact, "id"> & { id?: number }

type Props = {
  contact: Contact
}

export default function ContactEdit({ contact }: Props) {
  const avatar = (
    <SwapableAvatar src={contact.avatarUrl} className="h-52 w-52" onChange={() => {}} />
  )

  const router = useRouter()

  return (
    <div className="mx-auto max-w-3xl">
      <FixedToolbar />
      <div className={cn("mt-16 px-3 text-secondary-dark md:mt-24 md:flex sm-max:w-full")}>
        <div className="mr-4 sm-max:hidden">{avatar}</div>
        <div>
          <div className="mt-4 flex w-full items-center justify-between px-1 pb-2 pt-0">
            <GoBackAction />
            {contact.id ? (
              <ContactDeleteAction
                contactId={contact.id}
                onComplete={() => router.push(homePageUrl)}
                withHoverEffect
                withText
              />
            ) : null}
          </div>
          <div className="h-0.25 w-full bg-secondary-main md:hidden" />
          <h1 className="flex items-center justify-center px-0 md:hidden md:pb-2 sm-max:py-4">
            {avatar}
          </h1>
          <div className="mb-2 h-0.25 w-full bg-primary-main" />
          <ContactForm initialInput={contact} />
        </div>
      </div>
    </div>
  )
}
