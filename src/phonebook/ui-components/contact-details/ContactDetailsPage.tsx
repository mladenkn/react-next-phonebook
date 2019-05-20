import { Contact } from "../../models";
import React from 'react';
import withWidth, { WithWidthProps } from "@material-ui/core/withWidth";
import ContactDetailsMobile from "./ContactDetailsMobile";
import ContactDetailsDesktop from "./ContactDetailsDesktop";

export default withWidth()(
    ({width, contact}: {contact: Contact} & WithWidthProps) => 
        {
            console.log(width);
            return width === 'sm' || width === 'xs' ?
                <ContactDetailsMobile contact={contact} /> :
                <ContactDetailsDesktop contact={contact} />;
        }
    );

