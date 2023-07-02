const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// two-dimensional array
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // error

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
// const importantDates = []; // Will work too, but we want to avoid using 'any' type
importantDates.push('2030-10-10');
importantDates.push(new Date());
