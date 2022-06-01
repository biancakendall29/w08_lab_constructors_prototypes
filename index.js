class Car {
    constructor(manufacturer, price, engineType) {
        this.manufacturer = manufacturer;
        this.price = price;
        this.engineType = engineType;
    }
}    

class Dealership {
    constructor(name, capacity, stock) {
        this.name = name;
        this.capacity = capacity;
        this.stock = stock;        
    }

    // methods
    // Count the number of cars in stock  
    countStock = () => {
        return this.stock.length;
    }; 
    // Add a car to stock
    addCar = (car) => {
        if (this.capacity < this.stock) {
            this.stock.push(car);
        }
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
        let arr = this.stock;
        let arrMan = [];
        arrMan = arr.filter((car) => car.manufacturer == manufacturer);
        return arrMan;
    };

    // Find the total value of all the cars in stock
    getValueOfStock = () => {
        let total = this.stock;
        let sum = [];
        for (let i = 0; i < total.length; i++) {
            sum.push(total[i].price);
        }
        let totalSum = sum.reduce((agg, val) => agg + val, 0);
        return totalSum;
    }

}

class Customer {
    constructor(name, wallet) {
        this.name = name;
        this.wallet = wallet;
        this.car = null;
    }

    buyCar = (dealership, car) => {
        if (this.wallet > car.price) {
            this.car = car;
            let removedCar = dealership.stock.findIndex((element) => element == car);
            dealership.stock.splice(removedCar, 1);
        }
    }
}

// new car variable
const car1 = new Car("Ford", 10000, "2-cylinder");
const car2 = new Car("VW", 20000, "4-cylinder");
const car3 = new Car("BMW", 30000, "4-cylinder");
const car4 = new Car("Volvo", 40000, "2-cylinder");

let carArray = [car1, car2, car3];

// new dealership
const dealership = new Dealership("ABC dealers", 10, carArray);

// new customer
const customer = new Customer("John", 15000);


module.exports = { 
    car1,
    car2,
    car3,
    dealership,
    customer
};