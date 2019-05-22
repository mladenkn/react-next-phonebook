import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactEditPage from "./ContactEditPage";
import ContactDetailsPage from './ContactDetailsPage';
import { generateArray } from "../../utils";
import { generateContact } from '../devUtils/dataGenerators';
import faker from 'faker';
import { History } from 'history';

const contacts = generateArray(generateContact, 5, 20);
const randomContact = faker.random.arrayElement(contacts);

export default () => 
    <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact-edit" component={
            ({history}: {history: History}) =>
                <ContactEditPage contact={randomContact} onGoBack={history.goBack} />
        } />
        <Route path="/contact-details" component={() => <ContactDetailsPage contact={randomContact} />} />
    </BrowserRouter>