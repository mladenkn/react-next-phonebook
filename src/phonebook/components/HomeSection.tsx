import { withStyles, WithStyles, Tabs, Tab, Input, Icon } from "@material-ui/core";
import style from "./HomeSection-style";
import React, { useState, useContext } from 'react';
import ContactList from "./ContactList";
import { Divider } from "./reusables"
import { ContactListContext } from "../stateMgmt/ContactListProvider";

const Home = ({classes}: WithStyles<typeof style>) =>
{
    const tabClasses = {
        root: classes.contactTab,
        selected: classes.selectedTab,
    }

    const [currentTab, setCurrentTab] = useState(0);
    const contactList = useContext(ContactListContext);
    const displayedContacts = currentTab === 0 ? contactList.contacts.all : contactList.contacts.favorites;

    return (
        <div className={classes.root}>
            <div className={classes.content_}>
                <Tabs value={currentTab} centered onChange={(_, v) => setCurrentTab(v)}
                    classes={{
                        root: classes.contactTabs,
                        indicator: classes.tabIndicator,
                        flexContainer: classes.tabContainer
                    }}>
                    <Tab label="All contacts" disableRipple textColor="inherit" classes={tabClasses} />
                    <div className={classes.tabDivider}></div>
                    <Tab label="My favorites" disableRipple textColor="inherit" classes={tabClasses} />
                </Tabs>
                <Divider className={classes.contactTabsDivider} />
                <Input disableUnderline
                    startAdornment={<Icon className={classes.searchFieldIcon}>search</Icon>}
                    onChange={e => contactList.fetch(e.target.value)}
                    classes={{root: classes.searchField, focused: classes.searchFieldFocused}} />
                { contactList.contactsLoadStatus === 'COMPLETED' &&
                    <ContactList contacts={displayedContacts} includeAdder className={classes.list} />
                }
            </div>
        </div>
    );
}

export default withStyles(style)(Home);