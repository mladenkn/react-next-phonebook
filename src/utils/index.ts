import faker from 'faker';
import { isActionOf } from 'typesafe-actions';

export const generateArray = <T> (getNext: () => T, minCount: number, maxCount: number) => {
    const count = faker.random.number({min: minCount, max: maxCount});
    const r: T[] = [];
    for (let i = 0; i < count; i++) 
        r.push(getNext());
    return r;
}

export const callerOf = <Arg> (...functions: ((a: Arg) => void)[]) => (arg: Arg) => {
    functions.forEach(f => f(arg));
}

interface Action<TPayload = {}> {
    type: string,
    payload: TPayload
}

export interface AnyAction {
    type: string
}

export const handle = <TActionPayload>(
    actionCreator: (a: any) => Action<TActionPayload>, handler: (a: TActionPayload) => void) => (a: AnyAction) => {
    if(isActionOf(actionCreator, a))
        handler(a.payload);
}

export const buildActionHandler = (handlers: ((a: AnyAction) => void)[]) => (a: AnyAction) => handlers.forEach(h => h(a));

export type AsyncOperationStatus = 'NEVER_INITIATED' | 'PROCESSING' | 'COMPLETED'

export const replaceMatches = <T> (arr: T[], doesMatch: (item: T) => boolean, replaceWith: T) => {
    const {allItems, updatedItems} = updateMatches(arr, doesMatch, () => replaceWith);
    return {allItems, newItems: updatedItems};
}

export const updateMatches = <T> (arr: T[], doesMatch: (item: T) => boolean, update: (item: T) => T) => {
    const allItems: T[] = [];
    const updatedItems: T[] = [];

    arr.forEach((item) => {
        if(doesMatch(item)){
            const updated = update(item);
            allItems.push(updated);
            updatedItems.push(updated);
        }
        else
            allItems.push(item);
    });

    return {allItems, updatedItems};
}