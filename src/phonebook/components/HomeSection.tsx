import { Tabs, Tab, Input } from "@material-ui/core"
import { useState } from "react"
import ContactList from "./ContactList"
import { useContactListOps } from "../logic/contactListOps"
import { Divider } from "./various"
import SearchIcon from "@material-ui/icons/Search"
import useHomeSectionStyles from "./HomeSection.style"
import clsx from "clsx"

const Home = () => {
  const classes = useHomeSectionStyles()

  const tabClasses = {
    root: classes.contactTab,
    selected: classes.selectedTab,
  }

  const [currentTab, setCurrentTab] = useState(0)
  const ops = useContactListOps()

  return (
    <div className={classes.root}>
      <div className={classes.content_}>
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
        <Divider className={classes.contactTabsDivider} />
        <Input
          disableUnderline
          startAdornment={<SearchIcon className="mr-2" />}
          onChange={e => ops.fetch(e.target.value)}
          className="border-solid border-1 border-secondary-light h-12 rounded-md p-2 text-lg shadow-lg mt-5 w-80 sm:mt-10 sm:w-96"
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
