import {
  withStyles,
  WithStyles,
  Tabs,
  Tab,
  Input,
} from "@material-ui/core"
import style from "./HomeSection.style"
import { useState } from "react"
import ContactList from "./ContactList"
import { useContactListOps } from "../logic/contactListOps"
import { Divider } from "./various"
import SearchIcon from "@material-ui/icons/Search"


const Home = ({ classes }: WithStyles<typeof style>) => {
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
          startAdornment={
            <SearchIcon className={classes.searchFieldIcon} />
          }
          onChange={(e) => ops.fetch(e.target.value)}
          classes={{
            root: classes.searchField,
            focused: classes.searchFieldFocused,
          }}
        />
        {ops.fetchStatus === "COMPLETED" && (
          <ContactList
            contacts={
              currentTab === 0 ? ops.contacts!.all : ops.contacts!.favorites
            }
            onAction={ops.handleAction}
            includeAdder
            className={classes.list}
          />
        )}
      </div>
    </div>
  )
}

export default withStyles(style)(Home)
