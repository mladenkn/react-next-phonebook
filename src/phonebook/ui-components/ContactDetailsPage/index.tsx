import { Contact } from "../../models";
import React from 'react';
import ContactDetailsSm from "./ContactDetailsXs";
import ContactDetailsFields from "./ContactDetailsFields";
import MediaQuery from "react-responsive";
import ContactPageBaseSm from "../ContactPageBase/ContactPageBaseSm";
import styles from "./root-style";
import { WithStyles, withStyles } from "@material-ui/core"

const ContactDetailsPage = ({contact, classes}: {contact: Contact} & WithStyles) => 
    <div>
        <MediaQuery maxWidth={599}>
            <ContactDetailsSm contact={contact} />
        </MediaQuery>
        <MediaQuery minWidth={600}>
            <ContactPageBaseSm variant={'details'} contact={contact}>
                <ContactDetailsFields contact={contact} />
            </ContactPageBaseSm>
        </MediaQuery>
    </div>

export default withStyles(styles)(ContactDetailsPage);