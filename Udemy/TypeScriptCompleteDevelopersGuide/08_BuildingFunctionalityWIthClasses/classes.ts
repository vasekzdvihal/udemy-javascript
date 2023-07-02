class Vehicle {
    drive() : void {
        console.log('chugga chugga');
    }

    honk() : void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    drive() : void {
        console.log('vroom');
    }
}

const vehicle = new Vehicle();
const car = new Car();
vehicle.drive();
vehicle.honk();
car.drive();
car.honk();
