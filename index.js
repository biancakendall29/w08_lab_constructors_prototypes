class Car {
    constructor(manufacturer, price, engineType) {
        this.manufacturer = manufacturer;
        this.price = price;
        this.engineType = engineType;
    }

    // getters
    getManufacturer = () => this.manufacturer;
    getPrice = () => this.price;
    getEngineType = () => this.engineType;
    // setters
    setManufacturer = (manufacturer) => this.manufacturer = manufacturer;
    setPrice = (price) => this.price = price;
    setEngineType = (engineType) => this.engineType = engineType;
}


class Dealership {
    constructor(name, capacity, stock) {
        this.name = name;
        this.capacity = capacity;
        this.stock = stock;        
    }

    // getters
    getName = () => this.name;
    getCapacity = () => this.capacity;
    getStock = () => this.stock;
    // setters
    setName = (name) => this.name = name;
    setCapacity = (capacity) => this.capacity = capacity;
    setStock = (stock) => this.stock = stock; 

    // methods
    // Count the number of cars in stock  
    countStock = () => {
        return this.stock.length;
    }; 
    // Add a car to stock
    addCar = (car) => {
        this.stock.push(car);
    };
    // Return an array containing each car's manufacturer
    getCarsManufacturers = () => {
        let arr = this.stock;
        let arrMans = [];

        for (let i = 0; i < arr.length; i++) {
            arrMans.push(arr[i].manufacturer);
        }
        return arrMans;
    };

    // Find all the cars from a given manufacturer
    getCarsFromManu = (manufacturer) => {
        let arr = this.stock.filter((car)=> car.getManufacturer === manufacturer);
        return arr;
    };
}

// new car variable
const car1 = new Car("Ford", 10000, "2-cylinder");
const car2 = new Car("VW", 20000, "4-cylinder");
const car3 = new Car("BMW", 30000, "4-cylinder");
const car4 = new Car("Volvo", 40000, "2-cylinder");

let carArray = [car1, car2, car3];

// new dealership
const dealership = new Dealership("ABC dealers", 10, carArray);

//console.log(dealership.getStock());

console.log(car1.getManufacturer());

let man = dealership.stock;
console.log(man[1].manufacturer);

console.log(dealership.countStock());

const manus = dealership.getCarsManufacturers();
console.log(manus);

const array = dealership.getCarsFromManu("Ford");
console.log(array);


// Find the total value of all the cars in stock

module.exports = { 
    car1,
    car2,
    car3,
    dealership,
    car4
};