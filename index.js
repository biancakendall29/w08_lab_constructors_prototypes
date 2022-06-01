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
}

// Count the number of cars in stock
// Add a car to stock
// Return an array containing each car's manufacturer
// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock

module.exports = { 
    getManufacturer,
    getPrice,
    getEngineType,
    getName,
    getCapacity,
    getStock
};