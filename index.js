const Car = function(manufacturer, price, engineType) {
    let _manufacturer = manufacturer;
    let _price = price;
    let _engineType = engineType;

    // getters
    this.getManufacturer = () => _manufacturer;
    this.getPrice = () => _price;
    this.getEngineType = () => engineType;
    // setters
    this.setManufacturer = (manufacturer) => _manufacturer = manufacturer;
    this.setPrice = (price) => _price = price;
    this.setEngineType = (engineType) => _engineType = engineType;
}

const Dealership = function(name, capacity, stock) {
    let _name = name;
    let _capacity = capacity;
    let _stock = stock;
    // getters
    this.getName = () => _name;
    this.getCapacity = () => _capacity;
    this.getStock = () => _stock;
    // setters
    this.setName = (name) => _name = name;
    this.setCapacity = (capacity) => _capacity = capacity;
    this.setStock = (stock) => _stock = stock; 

    // methods
    // Count the number of cars in stock  
    this.countStock = () => {
        return stock.length;
    }; 
    // Add a car to stock
    this.addCar = (car) => {
        stock.push(car);
    };
    // Return an array containing each car's manufacturer
    this.getCarsManufacturers = () => {
        let arr = [];
        for (let car in stock) {
            arr.push(car.getManufacturer);
        }
        return arr;
    };
}

// new car variable
const car1 = new Car("Ford", 10000, "2-cylinder");
const car2 = new Car("VW", 20000, "4-cylinder");
const car3 = new Car("BMW", 30000, "4-cylinder");
const car4 = new Car("Volvo", 40000, "2-cylinder");

// new dealership
const dealership = new Dealership("ABC dealers", 10, [car1, car2, car3]);

console.log(car1.getManufacturer());

console.log(dealership.countStock());

const manus = dealership.getCarsManufacturers();
console.log(manus[1]);

// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock

module.exports = { 
    car1,
    car2,
    car3,
    dealership,
    car4
};