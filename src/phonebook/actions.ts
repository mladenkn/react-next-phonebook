import { createAction } from "typesafe-actions";
import { Contact } from "./models";

export const favoriteContact = createAction(
    "FAVORITE_CONTACT",
    a => ((contactId: number) => a(contactId))
);

export const deleteContact = createAction(
    "DELETE_CONTACT",
    a => ((contactId: number) => a(contactId))
);

export const saveContact = createAction(
    "SAVE_CONTACT",
    a => ((contact: Contact) => a(contact))
);

export const goBack = createAction("GO_BACK", a => () => a({}));