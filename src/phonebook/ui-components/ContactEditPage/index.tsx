import React from 'react';
import { Contact } from "../../models"; 
import ContactEditPageSm from "./ContactEditPageXs";
import ContactEditPageMd from "./ContactEditPageSm";
import MediaQuery from "react-responsive";

export default ({contact}: {contact: Contact}) => 
    <div>
        <MediaQuery maxWidth={599}>
            <ContactEditPageSm contact={contact} />
        </MediaQuery>
        <MediaQuery minWidth={600}>
            <ContactEditPageMd contact={contact} />
        </MediaQuery>
    </div>