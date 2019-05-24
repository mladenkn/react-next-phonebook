import { createAction, ActionType } from "typesafe-actions";

export interface Action {
    type: string
    payload: {}
}

export const favoriteContact = createAction(
    "FAVORITE_CONTACT",
    a => ((contactId: number) => a({contactId}))
);

export const deleteContact = createAction(
    "DELETE_CONTACT",
    a => ((contactId: number) => a({contactId}))
);

const allActions = {favoriteContact, deleteContact};

export type RootAction = ActionType<typeof allActions>;