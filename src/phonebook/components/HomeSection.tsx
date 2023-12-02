import { Input } from "@material-ui/core"
import { useState } from "react"
import ContactList from "./ContactList"
import { useContactListOps } from "../logic/contactListOps"
import { Divider } from "./various"
import SearchIcon from "@material-ui/icons/Search"
import useHomeSectionStyles from "./HomeSection.style"
import tw from "tailwind-styled-components"
import clsx from "clsx"

const StyledInput = tw(Input)`
  border-solid border-1 border-secondary-light h-12 rounded-md p-2 text-lg shadow-lg mt-5 w-80 sm:mt-10 sm:w-96
`

const StyledTab = tw.button`text-lg text-tc-primary font-semibold`

const SearchWrapper = tw.div`
  border-1 mt-5 flex w-80 items-center rounded-md border-solid border-secondary-light shadow-homeSearch shadow-secondary-main sm:mt-10 sm:w-96
`

const Home = () => {
  const classes = useHomeSectionStyles()

  const [currentTab, setCurrentTab] = useState(0)
  const ops = useContactListOps()

  return (
    <div>
      <div className="flex max-w-5xl flex-col items-center">
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
        <Divider className={classes.contactTabsDivider} />
        <StyledInput
          disableUnderline
          startAdornment={<SearchIcon className="mr-2" />}
          onChange={e => ops.fetch(e.target.value)}
          classes={{
            focused: "shadow-2xl",
          }}
        />
        <div className="border-1 mt-5 flex w-80 items-center rounded-md border-solid border-secondary-light shadow-homeSearch shadow-secondary-main sm:mt-10 sm:w-96">
          <SearchIcon className="ml-2 mr-2 text-gray-500" />
          <input className="h-12 w-full p-2 text-lg text-gray-500 outline-none" />
        </div>
        <SearchWrapper>
          <SearchIcon className="ml-2 mr-2 text-gray-500" />
          <input className="h-12 w-full p-2 text-lg text-gray-500 outline-none" />
        </SearchWrapper>
        {ops.fetchStatus === "COMPLETED" && (
          <ContactList
            contacts={currentTab === 0 ? ops.contacts!.all : ops.contacts!.favorites}
            deleteContact={ops.deleteContact}
            toggleFavorite={ops.toggleFavorite}
            includeAdder
            className={classes.list}
          />
        )}
      </div>
    </div>
  )
}

export default Home
