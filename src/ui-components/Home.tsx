import { withStyles, WithStyles } from "@material-ui/core";
import { homeStyle } from "../ui-design/home";
import React from 'react';
import { ContactList } from './contact-list/ContactList';
import { generateArray, generateContact } from '../devUtils/dataGenerators';
import faker from 'faker';

type Props = WithStyles<typeof homeStyle>


const contacts = generateArray(generateContact, 5, 20);
const randomContact = faker.random.arrayElement(contacts);

const Home_ = ({classes}: Props) => 
    <div>
        <ContactList contacts={contacts} />
    </div>

export const Home = withStyles(homeStyle)(Home_)