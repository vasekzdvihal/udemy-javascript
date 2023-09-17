import {NumbersCollection} from "./NumbersCollection";
import {Sorter} from "./Sorter";
import {CharactersCollection} from "./CharactersCollection";


const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numSorter = new Sorter(numbersCollection);
numSorter.sort();
console.log(numbersCollection.data);


const charactersCollection = new CharactersCollection('Xaayb');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data);
