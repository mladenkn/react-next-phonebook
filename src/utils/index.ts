import faker from 'faker';

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