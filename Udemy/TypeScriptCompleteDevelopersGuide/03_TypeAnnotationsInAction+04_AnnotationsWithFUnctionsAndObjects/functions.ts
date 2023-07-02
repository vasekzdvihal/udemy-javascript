// Arrow functions
const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

// Annotations for Anonemous Functions
function divide(a: number, b: number) : number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

// Void and Never
const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => { // corner case, rarely used
    throw new Error(message);
}

// Destructing with Annotations
const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

logWeather(forecast);

// ES2015
// const logWeather = ({ date, weather }) => {
//     console.log(date);
//     console.log(weather);
// }

const logWeather2015 = ({ date, weather }: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather2015(forecast);
