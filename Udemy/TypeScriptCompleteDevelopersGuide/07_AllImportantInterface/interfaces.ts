interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
    }
};

const printVehicle = (vehicle: Vehicle) : void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);
