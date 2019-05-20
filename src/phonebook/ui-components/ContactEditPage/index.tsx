import React from 'react';
import { Contact } from "../../models"; 
import ContactEditPageSm from "./ContactEditPageSm";
import ContactEditPageMd from "./ContactEditPageMd";
import withWidth, { WithWidthProps } from "@material-ui/core/withWidth";

export default withWidth()(
    ({width, contact}: {contact: Contact} & WithWidthProps) => 
        width === 'sm' || width === 'xs' ?
            <ContactEditPageSm contact={contact} /> :
            <ContactEditPageMd contact={contact} />
    );