'use strict';

// vehicle example
// start with class definition of a class keyword and the name of the class
// this class definition tells me what each INSTANCE of the class will look like
// and instance is once the class object is actually created
class Vehicle {
    // code to define the properties (attributes) and the methods (functions for this specific class)
    constructor(vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        // this is a keyword, and ties what I'm doing to the specific instance that I am in
    }

    // class methods define what objects in a class can do 
    // you can use the methods with any instance of the class
    start() {
		this.running = true;
		console.log(`${this.make} ${this.model} is running...`);
	}
    stop() {
		this.running = false;
		console.log(`${this.make} is stopped...`);
	}
    toString(){
        return `Vehicle ${this.vin} is a  ${this.make} model ${this.model}!`;
    }

}

// Vocabulary:
// Instance
// Instantiate
// Instantiation

// Here we are instantiating the class because we are CREATING a new object of that class type
// so v1 is an INSTANCE of the Vehicle class
// I'm making a new instance, so it's a new variable
const v1 = new Vehicle('12345', 'honda','accord');
// the parameter order matters, so if i put what I want as the make before the vin, 
// they'll get switched
// const v2 = new Vehicle('toyota', '323456');
const v2 = new Vehicle('323456', 'toyota','accord2');
v2.start();
console.log(v2.toString(), typeof v2.toString());
const newCar = new Vehicle('234324', 'bmw');
newCar.stop();
