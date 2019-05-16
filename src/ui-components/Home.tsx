import { withStyles, WithStyles, Tabs, Tab, Divider } from "@material-ui/core";
import { homeStyle } from "../ui-design/home";
import React from 'react';
import { ContactList } from './contact-list/ContactList';
import { generateArray, generateContact } from '../devUtils/dataGenerators';

type Props = WithStyles<typeof homeStyle>

const contacts = generateArray(generateContact, 5, 20);

const Home_ = ({classes}: Props) => 
    {
        const tabClasses = {
            root: classes.contactTab,
            selected: classes.selectedTab
        }

        return <div>
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
            <ContactList contacts={contacts} includeAdder />
        </div>;
    }

export const Home = withStyles(homeStyle)(Home_)