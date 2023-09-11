import { Tabs, Tab, Input } from "@material-ui/core"
import { useState } from "react"
import ContactList from "./ContactList"
import { useContactListOps } from "../logic/contactListOps"
import { Divider } from "./various"
import SearchIcon from "@material-ui/icons/Search"
import useHomeSectionStyles from "./HomeSection.style"
import tw from "tailwind-styled-components"

const StyledInput = tw(Input)`
  border-solid border-1 border-secondary-light h-12 rounded-md p-2 text-lg shadow-lg mt-5 w-80 sm:mt-10 sm:w-96
`

const StyledTab = tw.button`text-lg text-tc-primary font-semibold`

const Home = () => {
  const classes = useHomeSectionStyles()

  const tabClasses = {
    root: classes.contactTab,
    selected: classes.selectedTab,
  }

  const [currentTab, setCurrentTab] = useState(0)
  const ops = useContactListOps()

  return (
    <div>
      <div className="flex flex-col items-center max-w-5xl">
        <Tabs
          value={currentTab}
          centered
          onChange={(_, v) => setCurrentTab(v)}
          classes={{
            root: classes.contactTabs,
            indicator: classes.tabIndicator,
            flexContainer: classes.tabContainer,
          }}
        >
          <Tab label="All contacts" disableRipple classes={tabClasses} />
          <div className={classes.tabDivider}></div>
          <Tab label="My favorites" disableRipple classes={tabClasses} />
        </Tabs>
        <div className="flex gap-8">
          <StyledTab>All contacts</StyledTab>
          <div className="h-5 w-1 bg-secondary-main" />
          <StyledTab>My favorites</StyledTab>
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
