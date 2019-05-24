import { createAction, ActionType } from "typesafe-actions";

export const favoriteContact = createAction(
    "FAVORITE_CONTACT",
    a => ((contactId: number) => a({contactId}))
);

export const deleteContact = createAction(
    "DELETE_CONTACT",
    a => ((contactId: number) => a({contactId}))
);

export const goBack = createAction("GO_BACK",);

const allActions = {favoriteContact, deleteContact, goBack};

export type RootAction = ActionType<typeof allActions>;