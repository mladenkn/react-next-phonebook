import { useState } from "react"
import ContactList from "../contact-list"
import { useContactListOps } from "./contact-list-ops"
import SearchIcon from "@material-ui/icons/Search"
import clsx from "clsx"
import { cn, tw } from "../../utils"

const StyledTab = tw.button`text-lg text-tc-primary font-semibold`

const searchWrapper_class = tw.class`
  mt-5 flex w-80 items-center sm:mt-10 sm:w-96
  border-1 rounded-md border-solid border-secondary-light
  shadow-homeSearch shadow-secondary-main
`

const ContactListPage = ({ className }: { className?: string }) => {
  const [currentTab, setCurrentTab] = useState(0)
  const ops = useContactListOps()

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="flex gap-8">
        <StyledTab
          className={clsx(currentTab === 0 && "text-tc-secondary")}
          onClick={() => setCurrentTab(0)}
        >
          All contacts
        </StyledTab>
        <div className="h-5 w-1 bg-secondary-main" />
        <StyledTab
          className={clsx(currentTab === 1 && "text-tc-secondary")}
          onClick={() => setCurrentTab(1)}
        >
          My favorites
        </StyledTab>
      </div>
      <div className="mt-2 h-0.25 w-full bg-primary-main sm:mt-6" />
      <div className={searchWrapper_class}>
        <SearchIcon className="ml-2 mr-2 text-gray-500" />
        <input className="h-12 w-full p-2 text-lg text-gray-500 outline-none" />
      </div>
      {ops.fetchStatus === "COMPLETED" && (
        <ContactList
          contacts={currentTab === 0 ? ops.contacts!.all : ops.contacts!.favorites}
          deleteContact={ops.deleteContact}
          toggleFavorite={ops.toggleFavorite}
          includeAdder
          className="mt-3 sm:mt-6"
        />
      )}
    </div>
  )
}

export default ContactListPage
