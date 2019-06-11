import faker from 'faker';

export const generateArray = <T> (getNext: () => T, minCount: number, maxCount: number) => {
    const count = faker.random.number({min: minCount, max: maxCount});
    const r: T[] = [];
    for (let i = 0; i < count; i++) 
        r.push(getNext());
    return r;
}

export type AsyncOperationStatus = 'NEVER_INITIATED' | 'PROCESSING' | 'COMPLETED';

export const replaceMatches = <T> (arr: T[], doesMatch: (item: T) => boolean, replaceWith: T): [T[], number] => {
    const [all, replaced] = updateMatches(arr, doesMatch, () => replaceWith);
    return [all, replaced.length];
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

    return [allItems, updatedItems];
}

export const validURL = (str: string) => {
    var pattern = new RegExp(/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/);
    return !!pattern.test(str);
}

export const containsOnlyDigits = (str: string) => {
    for (let index = 0; index < str.length; index++) {
        const c = str[index];
        if(isNaN(parseInt(c)))
            return false;
    }
    return true;
}