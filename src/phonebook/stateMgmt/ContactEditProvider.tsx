import { RouteComponentProps } from "react-router";
import { ContactIdRouteParams } from ".";
import { WithContactService } from ".";
import { WithManyChildren } from ".";
import ContactService from "./ContactService";
import React from 'react';
import { Contact } from "../models";
import { RequestStatus } from "../../utils";

interface ContextValue {
    onComplete: () => void
    onCancel: () => void
    contact?: Contact
    contactStatus: RequestStatus
}

type Props = { contactId: number, children: (c: ContextValue) => (JSX.Element | JSX.Element[]) } & WithContactService;

export const ContactEditProvider = ({contactId, contactService, children}: Props) => {

    return <div>{children}</div>
}