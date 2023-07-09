# Typescript
## Types

| Type    | Values That Have This Type                 |
|---------|--------------------------------------------|
| string  | "hi there", "", 'This is Monday'           |
| number  | .000025, -20, 40000000                     |
| boolean | true, false                                |
| Date    | new Date()                                 |
| Todo    | { id: 1, completed: true, title: "Trash" } |


### Types

- Primitive Types
  - number
  - boolean
  - void
  - undefined
  - string
  - symbol
  - null
- Object Types
  - functions
  - arrays
  - classes
  - objects

### Why do we care about types?

- Types are used by the Typescript Compiler to analyze our code for errors
- Types allow other engineers to understand what values are flowing around our codebase

## Type Annotations and Inference

Type annotations + Type Inference is different when it's applied to Variables, Functions, or Objects.

#### Type Annotations
Code we add to tell TS what type of value a variable will refer to.
We (developers) tell TS the type.

#### Type Inference
TS tries to figure out what type of value a variable refers to.
Typescript guesses the type.


### When to use annotations
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

### Annotations Around Functions and Objects

#### Type annotations for functions
Code we add to tell TS what type of arguments a function will receive and what type of values it will return.

#### Type inference for functions
TS tries to figure out what type of value a function will return.

### Interfaces

General strategy for reusable code in TS
1. Create functions that accept arguments that are typed with interfaces
2. Objects/classes can decide to 'implement' a given interface to work with a function

### Classes

- PUBLIC: This method can be called anywhere, any time
- PRIVATE: This method can only be called by other methods in this class
- PROTECTED: This method can be called by other methods in this class, or by other methods in child classes
