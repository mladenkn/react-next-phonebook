import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { generateArray } from "../../utils";
import { generateContact } from '../devUtils/dataGenerators';
import { ContactEditPageContainer, ContactDetailsPageContainer} from "../stateMgmt";
import HomePageContainer from "../stateMgmt/HomePageContainer";

const contactList = generateArray(generateContact, 5, 20);

export default () => 
    <BrowserRouter>
        <Route exact path="/" component={HomePageContainer(contactList)} />
        <Route path="/contact-edit/:contactId" component={ContactEditPageContainer(contactList)} />
        <Route path="/contact-details/:contactId" component={ContactDetailsPageContainer(contactList)} />
        <Route path="/contact-create" component={() => <div>contact-create</div>} />
    </BrowserRouter>;