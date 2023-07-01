## Type Annotations and Inference

Type annotations + Type Inference is different when it's applied to Variables, Functions, or Objects.

### Type Annotations
Code we add to tell TS what type of value a variable will refer to. 
We (developers) tell TS the type.

### Type Inference
TS tries to figure out what type of value a variable refers to.
Typescript guesses the type.


## When to use annotations
1. Functions that returns the `any` type

``` ts
    const json = '{ "x": 10, "y": 20 }';
    const coordinates = JSON.parse(json); // coordinates is of type 'any'  
    console.log(coordinates); // { x: 10, y: 20 }
```

2. When we declare a variable on one line and initialize it later

``` ts
    let words = ['red', 'green', 'blue'];
    let foundWord: boolean; 
    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'green') {
            foundWord = true;
        }
    }
```

3. When we want a variable to have a type that can't be inferred

``` ts
    let numbers = [-10, -1, 12];
    let numberAboveZero: boolean | number = false; // boolean or number
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            numberAboveZero = numbers[i];
        }
    }
```
