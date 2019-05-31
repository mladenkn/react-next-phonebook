import { RouteComponentProps } from "react-router";
import { ContactIdRouteParams } from ".";
import { WithContactService } from ".";
import { WithManyChildren } from ".";
import ContactService from "./ContactService";
import React from 'react';
import { Contact } from "../models";
import { AsyncOperationStatus } from "../../utils";

interface ContextValue {
    contact?: Contact
    fetchContactStatus: AsyncOperationStatus
    saveContactStatus: AsyncOperationStatus
    
    onComplete: () => void
    onCancel: () => void
}

type Props = { contactId: number, children: (c: ContextValue) => (JSX.Element | JSX.Element[]) } & WithContactService;

export const ContactEditProvider = ({contactId, contactService, children}: Props) => {

    return <div>{children}</div>
}