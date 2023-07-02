class Vehicle {
    color: string; // can be public, private, or protected

    constructor(color: string) {
        this.color = color;
    }

    public drive() : void {
        console.log('chugga chugga');
    }

    protected honk() : void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    drive() : void {
        console.log('vroom');
    }

    startDrivingProcess() : void {
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle('orange');
vehicle.drive();
console.log(vehicle.color);

const car = new Car('red');
car.startDrivingProcess();
// car.honk(); // error: Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses.ts(2445)
