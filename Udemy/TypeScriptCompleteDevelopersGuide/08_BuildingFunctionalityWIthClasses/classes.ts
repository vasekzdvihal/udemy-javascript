class Vehicle {
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

const vehicle = new Vehicle();
const car = new Car();
vehicle.drive();
car.startDrivingProcess();
// car.honk(); // error: Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses.ts(2445)
