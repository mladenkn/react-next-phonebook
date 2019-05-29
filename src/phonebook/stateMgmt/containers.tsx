import { Container, Subscribe } from 'unstated';
import { RequestStatus } from '../../utils';
import { Contact } from '../models';
import ContactService from './ContactService';
import React from 'react';

export interface ContactListState {
    contacts: Contact[]
    requestStatus: RequestStatus
    _fetchedAlready: boolean
}

export class ContactListContainer extends Container<ContactListState> {

    constructor(private contactService: ContactService){
        super();

        this.state = {
            contacts: [],
            requestStatus: 'none',
            _fetchedAlready: false
        };

        this.search = this.search.bind(this);

        if(!this.state._fetchedAlready)
            this.search('');
    }

    search(keyword: string){
        this.setState({requestStatus: 'pending'});
        this.contactService.search(keyword)
            .then(cl => {
                this.setState({contacts: cl, requestStatus: 'completed', _fetchedAlready: true});
            });
    }
} 