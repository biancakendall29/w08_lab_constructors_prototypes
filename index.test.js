const {
    car1,
    car2,
    car3,
    dealership,
    customer
  } = require("./index");


describe('get car properties', () => { 
    test('can get manufacturer', () => {
      expected = "Ford";
      actual = car1.manufacturer;
      expect(actual).toBe(expected);
    });

    test('can get price', () => {
        expected = 20000;
        actual = car2.price;
        expect(actual).toBe(expected);
      });

      test('can get engine type', () => {
        expected = "4-cylinder";
        actual = car3.engineType;
        expect(actual).toBe(expected);
      });
});    

describe('get dealership properties', () => { 
    test('can get name', () => {
      expected = "ABC dealers";
      actual = dealership.name;
      expect(actual).toBe(expected);
    });

    test('can get price', () => {
        expected = 10;
        actual = dealership.capacity;
        expect(actual).toBe(expected);
      });

    test('can count number of cars in stock', () => {
        expected = 3;
        actual = dealership.countStock();
        expect(actual).toBe(expected);
    });

    test('can add a car to dealership stock', () => { // adds another ford after can add a car to dealership stock test
        expected = 4;
        dealership.addCar(car1);
        actual = dealership.countStock();
        expect(actual).toBe(expected);
    });

    test('can get array of cars manufacturers', () => {
        expected = "BMW";
        let array = dealership.getCarsManufacturers();
        actual = array[2];
        expect(actual).toBe(expected);
    });

    test('can get car by manufacturer', () => {
        expected = 1; 
        let array = dealership.getCarsFromManu("BMW");
        actual = array.length;
        expect(actual).toBe(expected);
    });

    test('can get total value of cars in stock', () => {
        expected = 70000; // adds another ford after can add a car to dealership stock test
        actual = dealership.getValueOfStock();
        expect(actual).toBe(expected);
    });
});  

describe('get customer properties', () => { 
    test('can get wallet', () => {
      expected = 15000;
      actual = customer.wallet;
      expect(actual).toBe(expected);
    });

    test('can add car', () => {
        expected = 1;
        let cars = customer.buyCar(dealership, car1);
        actual = cars.length;
        expect(actual).toBe(expected);
      });

      test('can not buy car', () => {
        expected = 1;
        let cars = customer.buyCar(car3);
        actual = cars.length;
        expect(actual).toBe(expected);
      });
});  
