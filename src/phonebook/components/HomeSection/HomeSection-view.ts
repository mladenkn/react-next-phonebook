import { withStyles, WithStyles, Tabs, Tab, Input, Icon } from "@material-ui/core";
import style from "../Home-style";
import React, { useState } from 'react';
import ContactList from './contact-list/ContactList';
import { Divider } from "../reusables"
import { generateContact } from '../devUtils/dataGenerators';
import { generateArray } from "../../utils";

const contacts = generateArray(generateContact, 5, 20);

const Home = ({classes}: WithStyles<typeof style>) => 
    {
        const tabClasses = {
            root: classes.contactTab,
            selected: classes.selectedTab,
            label: classes.tabText
        }

        const [currentTab, setCurrentTab] = useState(0)

        return (
            <div className={classes.root}>
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
                <ContactList contacts={contacts} includeAdder className={classes.list} />
            </div>
        );
    }
 
export default withStyles(homeStyle)(Home)