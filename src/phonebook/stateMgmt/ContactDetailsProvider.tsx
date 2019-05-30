import { RouteComponentProps } from "react-router";
import { ContactIdRouteParams } from ".";
import { WithContactService } from ".";
import { WithManyChildren } from ".";
import React from 'react';

type Props = WithManyChildren & RouteComponentProps<ContactIdRouteParams> & WithContactService;

export const ContactDetailsProvider = ({history, match, contactService, children}: Props) => {

    const contactId = parseInt(match.params.contactId!);
    
    return <div>{children}</div>
}