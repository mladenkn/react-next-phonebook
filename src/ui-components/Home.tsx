import { withStyles, WithStyles, Tabs, Tab, TextField } from "@material-ui/core";
import { homeStyle } from "../ui-design/home";
import React from 'react';
import ContactList from './contact-list/ContactList';
import { Divider } from "./reusables"
import { generateArray, generateContact } from '../devUtils/dataGenerators';

const contacts = generateArray(generateContact, 5, 20);

const Home = ({classes}: WithStyles<typeof homeStyle>) => 
    {
        const tabClasses = {
            root: classes.contactTab,
            selected: classes.selectedTab
        }

        return <div className={classes.root}>
            <Tabs value={0} centered
                classes={{
                    root: classes.contactTabs,
                    indicator: classes.tabIndicator,
                    flexContainer: classes.tabContainer
                }}>
                <Tab label="All contacts" disableRipple classes={tabClasses} />
                <div className={classes.tabDivider}></div>
                <Tab label="My favorites" disableRipple classes={tabClasses} />
            </Tabs>
            <Divider className={classes.contactTabsDivider} />
            <TextField className={classes.searchField} margin="normal" variant="outlined"/>
            <ContactList contacts={contacts} includeAdder className={classes.list} />
        </div>;
    }

export default withStyles(homeStyle)(Home)