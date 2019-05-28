import faker from 'faker';
import { isActionOf, ActionCreator } from 'typesafe-actions';

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

export type RequestStatus = 'none' | 'pending' | 'completed' | 'failed';