import { generateArray } from "../../utils";
import { generateContact } from '../devUtils/dataGenerators';
import faker from 'faker';

const initialState = {
    contacts: generateArray(generateContact, 5, 20)
}
