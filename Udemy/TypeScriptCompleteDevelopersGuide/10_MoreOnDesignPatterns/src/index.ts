import {NumbersCollection} from "./NumbersCollection";
import {Sorter} from "./Sorter";
import {CharactersCollection} from "./CharactersCollection";
import {MyLinkedList} from "./LinkedList";


const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numSorter = new Sorter(numbersCollection);
numSorter.sort();
console.log(numbersCollection.data);


const charactersCollection = new CharactersCollection('Xaayb');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data);


const linkedList = new MyLinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
