import React, { useState } from "react";
import ContactEditPage from "../components/ContactEdit";
import ContactDetailsPage from '../components/ContactDetails';
import { Contact } from "../models";
import { DispatchContext } from "./DispatchContext";
import { saveContact, goBack, deleteContact } from "../actions";
import { getType } from "typesafe-actions";
import { compose } from "lodash/fp";
import { ContactService } from "./ContactService";
import { buildActionHandler, handle } from "../../utils";

export interface WithContactService { contactService: ContactService };

export interface WithChildren<TParam> { children: (c: TParam) => (JSX.Element | JSX.Element[]) };