import HomePage from "../components/HomePage";
import { getType } from "typesafe-actions";
import { AnyAction, favoriteContact } from "../actions";
import React, { useState } from "react";
import { DispatchContext } from "./DispatchContext";
import ContactService from "./ContactService";
import { Contact }from "../models";
import { WithContactService } from ".";

export default ({contactService}: WithContactService) =>
{
    const pageActionHandler = (a: AnyAction) => {
        switch(a.type){
            case getType(favoriteContact):
                console.log('handling favoriteContact');
        }
    }
    
    const [contactList, setContactList] = useState<Contact[] | undefined>(undefined);

    const query = (keyword: string) => contactService.search(keyword).then(setContactList);

    query('')

    return (
        <DispatchContext.Provider value={pageActionHandler}>
            <HomePage contacts={contactList} dataLoading={contactList === undefined} />
        </DispatchContext.Provider>
    )
}