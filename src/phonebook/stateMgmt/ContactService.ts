import { Contact } from "../models";
import { generateArray } from "../../utils";
import { generateContact } from '../devUtils/dataGenerators';

// Classes and services may be discouraged in React but they ara not a bad pattern :)
// Easy to refactor to call REST API
export default class ContactService {

    private contactList: Contact[]

    constructor(){
        const contactListJsonOrNothing = localStorage.getItem('contacts');

        if(!contactListJsonOrNothing)
            this.contactList = generateArray(generateContact, 70, 100);
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
        const keywordLower = keyword.toLowerCase();
        const all = this.contactList.filter(c => c.fullName.toLowerCase().includes(keywordLower));
        const favorites = all.filter(c => c.isFavorite);
        return {all, favorites};
    }

    async save(c: Contact){
        this.contactList.push(c);
    }

    async delete(id: number){
        this.contactList = this.contactList.filter(c => c.id !== id);
    }
}