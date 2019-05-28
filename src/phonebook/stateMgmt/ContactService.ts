import { Contact } from "../models";
import { generateArray } from "../../utils";
import { generateContact } from '../devUtils/dataGenerators';

// Classes and services may be discouraged in React but why not :)
// Easy to refactor to call REST API
export default class ContactService {

    private contactList = generateArray(generateContact, 5, 20);

    constructor(){
        const contactListJsonOrNothing = localStorage.getItem('contacts');

        if(contactListJsonOrNothing === null)
            this.contactList = generateArray(generateContact, 5, 20);
        else
            this.contactList = JSON.parse(contactListJsonOrNothing) as Contact[];
    }

    async persist(){
        const contactListJson = JSON.stringify(this.contactList);
        localStorage.setItem('contacts', contactListJson);
    }

    async getById(id: number){
        return this.contactList.find(c => c.id === id)!;
    }

    async search(keyword: string){
        return this.contactList;
    }

    async save(c: Contact){
        this.contactList.push(c);
    }

    async delete(id: number){
        this.contactList = this.contactList.filter(c => c.id !== id);
    }
}