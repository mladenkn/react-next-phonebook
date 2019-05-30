import { RouteComponentProps } from "react-router";
import { ContactIdRouteParams } from ".";
import { WithContactService } from ".";
import { WithManyChildren } from ".";
import ContactService from "./ContactService";
import React from 'react';

type Props = WithManyChildren & RouteComponentProps<ContactIdRouteParams> & WithContactService;

export const ContactEditProvider = ({history, match, contactService, children}: Props) => {   

    const contactId = parseInt(match.params.contactId!);

    return <div>{children}</div>
}