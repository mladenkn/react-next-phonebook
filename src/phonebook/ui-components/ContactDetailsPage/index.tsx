import { Contact } from "../../models";
import React from 'react';
import withWidth, { WithWidthProps } from "@material-ui/core/withWidth";
import ContactDetailsSm from "./ContactDetailsSm";
import ContactDetailsMd from "./ContactDetailsMd";

export default withWidth()(
    ({width, contact}: {contact: Contact} & WithWidthProps) => 
        width === 'sm' || width === 'xs' ?
            <ContactDetailsSm contact={contact} /> :
            <ContactDetailsMd contact={contact} />
    );