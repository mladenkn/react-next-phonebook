import { withStyles, WithStyles, Tabs, Tab, Input, Icon } from "@material-ui/core";
import style from "./HomePage-style";
import React, { useState } from 'react';
import ContactList from "./ContactList";
import { Divider } from "./reusables"
import { Contact } from "../models";

type Props = {contacts?: Contact[], dataLoading: boolean} & WithStyles<typeof style>;

const Home = ({classes, contacts, dataLoading}: Props) =>
{
    const tabClasses = {
        root: classes.contactTab,
        selected: classes.selectedTab,
        label: classes.tabText
    }

    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div  className={classes.root}>
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
                    classes={{root: classes.searchField, focused: classes.searchFieldFocused}} />
                { !dataLoading &&
                    <ContactList contacts={contacts!} includeAdder className={classes.list} />
                }
            </div>
        </div>
    );
}
 
export default withStyles(style)(Home)