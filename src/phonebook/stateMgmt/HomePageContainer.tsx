import HomePage from "../components/HomePage";
import { getType } from "typesafe-actions";
import { AnyAction, favoriteContact, deleteContact } from "../actions";
import React, { useState } from "react";
import { DispatchContext } from "./DispatchContext";
import ContactService from "./ContactService";
import { Contact }from "../models";
import { WithContactService } from ".";

export default ({contactService}: WithContactService) =>
{    
    console.log("home page");
    const [contactList, setContactList] = useState<Contact[] | undefined>(undefined);
    
    const pageActionHandler = (a: AnyAction) => {
        console.log(a);
        switch(a.type){
            case getType(favoriteContact):
                console.log('handling favoriteContact');
            case getType(deleteContact):
                contactService
                    .delete(a.payload.contactId)
                    .then(() => {
                        const withoutContact = contactList!.filter(c => c.id !== a.payload.contactId);
                        setContactList(withoutContact);
                    });
        }
    }
 
    const query = (keyword: string) => contactService.search(keyword).then(setContactList);

    query('')

    return (
        <DispatchContext.Provider value={pageActionHandler}>
            <HomePage contacts={contactList} dataLoading={contactList === undefined} />
        </DispatchContext.Provider>
    )
}