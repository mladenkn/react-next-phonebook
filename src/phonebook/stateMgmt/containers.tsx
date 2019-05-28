import { Container, Subscribe } from 'unstated';
import { RequestStatus } from '../../utils';
import { Contact } from '../models';
import ContactService from './ContactService';
import React from 'react';

export interface ContactListState {
    contacts: Contact[]
    requestStatus: RequestStatus
}

export class ContactListContainer extends Container<ContactListState> {

    constructor(private contactService: ContactService){
        super();

        this.state = {
            contacts: [],
            requestStatus: 'none',
        };

        this.fetch = this.fetch.bind(this);
    }

    fetch(keyword: string){
        this.contactService.search(keyword)
            .then(cl => this.setState({contacts: cl}));
    }
}

interface ConnectComponentOptions {
    component: any
    to: any
    with: any
}

export const connect = (o: ConnectComponentOptions) => (otherProps: any) =>
    <Subscribe to={[o.to]}>
        {c => {
            const componentProps = o.with(c);
            const Component = o.component;
            return <Component {...otherProps} {...componentProps} />
        }}
    </Subscribe>    