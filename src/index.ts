import * as en from './locales/en.json'
import * as fr from './locales/fr.json'
import { flattenObject } from './utils/flattenObject'
import {isEqual} from 'lodash'

const enKeys = Object.keys(flattenObject(en)).sort();
const frKeys = Object.keys(flattenObject(fr)).sort();

console.log(isEqual(enKeys, frKeys)) 
