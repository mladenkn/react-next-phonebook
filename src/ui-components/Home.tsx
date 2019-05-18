import { withStyles, WithStyles, Tabs, Tab, Input, Icon } from "@material-ui/core";
import { homeStyle } from "../ui-design/home";
import React, { useState } from 'react';
import ContactList from './contact-list/ContactList';
import { Divider, Emptiness, Box } from "./reusables"
import { generateArray, generateContact } from '../devUtils/dataGenerators';

const contacts = generateArray(generateContact, 5, 20);

const Home = ({classes}: WithStyles<typeof homeStyle>) => 
    {
        const tabClasses = {
            root: classes.contactTab,
            selected: classes.selectedTab,
            label: classes.tabText
        }

        const [currentTab, setCurrentTab] = useState(0)

        return (
            <div className={classes.root}>
                <Emptiness height={20} />
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
                <Emptiness height={25} />
                <Divider className={classes.contactTabsDivider} />
                <Emptiness height={40} />
                <Input disableUnderline
                    startAdornment={<Icon className={classes.searchFieldIcon}>search</Icon>}
                    classes={{root: classes.searchField, focused: classes.searchFieldFocused}} />
                <Emptiness height={25} />
                <ContactList contacts={contacts} includeAdder className={classes.list} />
            </div>
        );
    }
 
export default withStyles(homeStyle)(Home)