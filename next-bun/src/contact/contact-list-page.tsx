import { useState } from "react"
import ContactList, { ContactListProps } from "./contact-list"
import clsx from "clsx"
import { cn, tw } from "../utils"
import Toolbar from "~/toolbar"
import { getBreakpointContainerStyle } from "~/utils/ui-utils"
import { MagnifierIcon } from "~/assets/icons"

const StyledTab = tw.button`text-lg text-tc-primary font-semibold`

const searchWrapper_class = tw.class`
  mt-5 flex w-80 items-center sm:mt-10 sm:w-96
  border-1 rounded-md border-solid border-secondary-light
  shadow-homeSearch shadow-secondary-main
`

type Props = {
  data: ContactListProps["contacts"] // TODO: async data
}

const ContactListPage = ({ data }: Props) => {
  const [currentTab, setCurrentTab] = useState<"all" | "favorites">("all")
  const tabContacts = currentTab === "all" ? data : data.filter(c => c.isFavorite)

  return (
    <div className={getBreakpointContainerStyle("lg")}>
      <Toolbar />

      <div className={cn("mt-20 flex flex-col items-center")}>
        <div className="flex gap-8">
          <StyledTab
            className={clsx(currentTab === "all" && "text-tc-secondary")}
            onClick={() => setCurrentTab("all")}
          >
            All contacts
          </StyledTab>
          <div className="h-5 w-1 bg-secondary-main" />
          <StyledTab
            className={clsx(currentTab === "favorites" && "text-tc-secondary")}
            onClick={() => setCurrentTab("favorites")}
          >
            My favorites
          </StyledTab>
        </div>
        <div className="mt-2 h-0.25 w-full bg-primary-main sm:mt-6" />
        <div className={searchWrapper_class}>
          {/* <SearchIcon color="secondary" className="ml-2 mr-2" /> */}
          <MagnifierIcon className="ml-2 mr-2 text-secondary-main" />
          <input className="h-12 w-full p-2 text-lg text-gray-500 outline-none" />
        </div>
        <ContactList
          contacts={tabContacts}
          deleteContact={() => {}}
          toggleFavorite={() => {}}
          includeAdder
          className="mt-3 sm:mt-6"
        />
      </div>
    </div>
  )
}

export default ContactListPage
