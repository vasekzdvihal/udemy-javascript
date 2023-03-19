// https://academind.com/tutorials

const name =  'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
};

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));
console.log(add(1, 2));
console.log(addOne(1));
console.log(addRandom());

// In objects we use key value pairs also called properties or a field
