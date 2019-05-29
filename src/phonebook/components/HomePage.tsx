import { withStyles, WithStyles, Tabs, Tab, Input, Icon } from "@material-ui/core";
import style from "./HomePage-style";
import React, { useState } from 'react';
import ContactList from "./ContactList";
import { Divider } from "./reusables"
import { Contact } from "../models";
import { Subscribe } from 'unstated';
import { ContactListContainer } from "../stateMgmt/containers";

const Home = ({classes}: WithStyles<typeof style>) =>
{
    const tabClasses = {
        root: classes.contactTab,
        selected: classes.selectedTab,
        label: classes.tabText
    }

    const [currentTab, setCurrentTab] = useState(0);

    return (
        <Subscribe to={[ContactListContainer]}>
            {(container: ContactListContainer) => 
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
                            onChange={e => container.search(e.target.value)}
                            classes={{root: classes.searchField, focused: classes.searchFieldFocused}} />
                        { container.state.requestStatus === 'completed' &&
                            <ContactList contacts={container.state.contacts} includeAdder className={classes.list} />
                        }
                    </div>
                </div>
            }
        </Subscribe>
    );
}

export default withStyles(style)(Home);