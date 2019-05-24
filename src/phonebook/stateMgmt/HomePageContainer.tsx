import HomePage from "../components/HomePage";
import { getType } from "typesafe-actions";
import { AnyAction, favoriteContact } from "../actions";
import { Contact } from "../models";
import React from "react";
import { DispatchContext } from "./DispatchContext";

export default (contactList: Contact[]) => () => 
{
    const pageActionHandler = (a: AnyAction) => {
        switch(a.type){
            case getType(favoriteContact):
                console.log('handling favoriteContact');
        }
    }
 
    return (
        <DispatchContext.Provider value={pageActionHandler}>
            <HomePage contacts={contactList} />
        </DispatchContext.Provider>
    )
}