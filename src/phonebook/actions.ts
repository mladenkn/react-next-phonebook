import { createAction, ActionType } from "typesafe-actions";

export const favoriteContact = createAction(
    "FAVORITE_CONTACT",
    a => ((contactId: number) => a({contactId}))
);

export const deleteContact = createAction(
    "DELETE_CONTACT",
    a => ((contactId: number) => a({contactId}))
);

export const saveContact = createAction(
    "SAVE_CONTACT",
    a => ((contactId: number) => a({contactId}))
);

export const goBack = createAction("GO_BACK");


const allActions = { favoriteContact, deleteContact, saveContact, goBack };
export type AnyAction = ActionType<typeof allActions>;