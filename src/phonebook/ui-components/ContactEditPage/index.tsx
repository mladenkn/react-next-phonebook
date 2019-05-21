import React from 'react';
import { Contact } from "../../models"; 
import MediaQuery from "react-responsive";
import ContactEditor from '../ContactEditor';
import ContactPageBaseSm from '../ContactPageBase/ContactPageBaseSm';

export default ({contact}: {contact: Contact}) => 
    <div>
        <MediaQuery maxWidth={599}>
        </MediaQuery>
        <MediaQuery minWidth={600}>
            <ContactPageBaseSm contact={contact} variant='edit'>
                <ContactEditor contact={contact} />
            </ContactPageBaseSm>
        </MediaQuery>
    </div> 