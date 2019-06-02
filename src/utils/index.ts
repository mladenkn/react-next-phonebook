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

export type AsyncOperationStatus = 'NEVER_INITIATED' | 'PROCESSING' | 'COMPLETED' | 'SERVER_ERROR' | 'NO_CONNECTION'; 

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


interface ApiRequestState<TPayload> { 
    status: AsyncOperationStatus
    data: TPayload | undefined
    error: Error | undefined
}

export const apiRequest = <TPayload> (
    executeWith: () => Promise<TPayload>, onStateChange: (s:ApiRequestState<TPayload>) => void
) => {

    const execute = () => {

    }

    return execute
}

interface DoAsyncOperationParams<TData> {
    do: Promise<TData>
    setStatus?: (status: AsyncOperationStatus) => void
    setData?: (data: TData) => void
    setExecutedAlready?: (executedAlready: boolean) => void
    onComplete?: (data: TData) => void
}

export const doAsyncOperation = <TData> (p: DoAsyncOperationParams<TData>) => {
    p.setStatus && p.setStatus('PROCESSING');
    p.do.then(
        d => {
            p.setData && p.setData(d);
            p.setExecutedAlready && p.setExecutedAlready(true);
            p.setStatus && p.setStatus('COMPLETED');
            p.onComplete && p.onComplete(d);
        },
        e => p.setStatus && p.setStatus('SERVER_ERROR')
    );
}