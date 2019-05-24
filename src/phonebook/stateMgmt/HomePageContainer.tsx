import HomePage from "../components/HomePage";
import { getType } from "typesafe-actions";
import { favoriteContact, RootAction } from "../actions";
import { Contact } from "../models";
import React from "react";
import { DispatchContext } from "./DispatchContext";

export default (contactList: Contact[]) => () => 
{
    const actionHandler = (action: RootAction) => {
        console.log("tu sam 1");
        switch(action.type){
            case getType(favoriteContact):
                console.log("favoriteContact akcija " + action.payload.contactId);
        }
    }

    console.log("tu sam 2");
    actionHandler(favoriteContact(23));
    console.log("tu sam 3");

    return (
        <DispatchContext.Provider value={actionHandler}>
            <HomePage contacts={contactList} />
        </DispatchContext.Provider>
    )
}