import { useState } from "react"
import ContactList, { ContactListProps } from "./contact-list"
import SearchIcon from "@material-ui/icons/Search"
import clsx from "clsx"
import { cn, tw } from "../utils"

const StyledTab = tw.button`text-lg text-tc-primary font-semibold`

const searchWrapper_class = tw.class`
  mt-5 flex w-80 items-center sm:mt-10 sm:w-96
  border-1 rounded-md border-solid border-secondary-light
  shadow-homeSearch shadow-secondary-main
`

type Props = {
  className?: string
  data: ContactListProps["contacts"] // TODO: async data
}

const ContactListPage = ({ className, data }: Props) => {
  const [currentTab, setCurrentTab] = useState(0)

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
      <ContactList
        contacts={data}
        deleteContact={() => {}}
        toggleFavorite={() => {}}
        includeAdder
        className="mt-3 sm:mt-6"
      />
    </div>
  )
}

export default ContactListPage
