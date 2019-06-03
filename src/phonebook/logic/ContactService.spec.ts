import { anyPropContains } from "./ContactService";
import { Contact } from "../models";

test('anyPropContains', () => {
    
    const shouldMatch = (a: {contact: Contact, with?: string[], notWith?: string[]}) =>
    {
        if(!a.with){     
            for (let i = 0; i < a.with!.length; i++) {
                const keyword = a.with![i];
                expect(anyPropContains(keyword)(a.contact)).toBe(true);            
            }
        }   

        if(!a.notWith){     
            for (let i = 0; i < a.notWith!.length; i++) {
                const keyword = a.notWith![i];
                expect(anyPropContains(keyword)(a.contact)).toBe(false);            
            }
        }   
    };

    shouldMatch({
        contact: {
            id: -1,
            isFavorite: false,
            email: 'yyyyemailzzzzz',
            fullName: '',
            numbers: [
                {value: -1, label: ''}
            ]
        },
        with: ['email'],
        notWith: ['sds'],        
    });

    shouldMatch({
        contact: {
            id: -1,
            isFavorite: false,
            email: '',
            fullName: 'yyyyyyyfullNamezzzzzzz',
            numbers: [
                {value: -1, label: ''}
            ]
        },
        with: ['fullName'],
        notWith: ['xy'],   
    });

    shouldMatch({
        contact: {
            id: -1,
            isFavorite: false,
            email: '',
            fullName: 'yyyyyyyfullNamezzzzzzz',
            numbers: [
                {value: 463454, label: ''}
            ]
        },
        with: ['463454']
    });

    shouldMatch({
        contact: {
            id: -1,
            isFavorite: false,
            email: 'yyyyemailzzzzz',
            fullName: 'yyyyyyyfullNamezzzzzzz',
            numbers: [
                {value: 463454, label: ''}
            ]
        },
        with: ['4634', 'email', 'fullName']
    });

    shouldMatch({
        contact: {
            id: -1,
            isFavorite: false,
            email: '',
            fullName: 'yyyyyyyfullNamezzzzzzz',
            numbers: [
                {value: 463454, label: ''}
            ]
        },
        with: ['454']
    });

    shouldMatch({
        contact: {
            id: -1,
            isFavorite: false,
            email: '',
            fullName: '',
            numbers: [
                {value: 463454, label: ''}
            ]
        },
        with: ['34']
    });

    shouldMatch({
        contact: {
            id: -1,
            isFavorite: false,
            email: '',
            fullName: '',
            numbers: [
                {value: 463454, label: ''}
            ]
        },
        with: ['34aa', '46aa']
    });

    shouldMatch({
        contact: {
            id: -1,
            isFavorite: false,
            email: '',
            fullName: '',
            numbers: [
                {value: 463454, label: ''}
            ]
        },
        notWith: ['34aa', '463454aa']
    });
});

export default undefined 