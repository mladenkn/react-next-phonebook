import { Contact } from "../../models";
import React from 'react';
import ContactDetailsSm from "./ContactDetailsXs";
import ContactDetailsMd from "./ContactDetailsSm";
import MediaQuery from "react-responsive";

export default ({contact}: {contact: Contact}) => 
    <div>
        <MediaQuery maxWidth={599}>
            <ContactDetailsSm contact={contact} />
        </MediaQuery>
        <MediaQuery minWidth={600}>
            <ContactDetailsMd contact={contact} />
        </MediaQuery>
    </div>
