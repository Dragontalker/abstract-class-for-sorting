import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);