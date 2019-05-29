import React, { useState } from "react";
import ContactEditPage from "../components/ContactEditPage";
import ContactDetailsPage from '../components/ContactDetailsPage';
import { Contact } from "../models";
import { DispatchContext } from "./DispatchContext";
import { saveContact, goBack, deleteContact } from "../actions";
import { getType } from "typesafe-actions";
import { compose } from "lodash/fp";
import ContactService from "./ContactService";
import { buildActionHandler, handle } from "../../utils";

export interface WithContactService { contactService: ContactService };

export interface WithManyChildren { children: JSX.Element };

export interface ContactIdRouteParams {
    contactId?: string
}

const emptyContact: Contact = {
    id: 0,
    fullName: '',
    avatar: '',
    email: '',
    numbers: [],
    isFavorite: false
}