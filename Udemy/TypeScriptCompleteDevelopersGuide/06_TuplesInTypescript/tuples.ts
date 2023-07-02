const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

const pepsi = ['brown', true, 40]; // This is an array, not a tuple. It is not clear what each element represents.

const pepsi2: [string, boolean, number] = ['brown', true, 40]; // This is a tuple. It is clear what each element represents.

// Type alias
type Drink = [string, boolean, number];
const pepsi3: Drink = ['brown', true, 40];

const sugarOfPepsi3 = pepsi3[2]; // This is not clear what this number represents. It is better to use an object instead of a tuple.
