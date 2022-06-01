const {
    car1,
    car2,
    car3,
    dealership
  } = require("./index");


describe('get car properties', () => { 
    test('can get manufacturer', () => {
      expected = "Ford";
      actual = car1.getManufacturer();
      expect(actual).toBe(expected);
    });

    test('can get price', () => {
        expected = 20000;
        actual = car2.getPrice();
        expect(actual).toBe(expected);
      });

      test('can get engine type', () => {
        expected = "4-cylinder";
        actual = car3.getEngineType();
        expect(actual).toBe(expected);
      });
});    

describe('get dealership properties', () => { 
    test('can get name', () => {
      expected = "ABC dealers";
      actual = dealership.getName();
      expect(actual).toBe(expected);
    });

    test('can get price', () => {
        expected = 10;
        actual = dealership.getCapacity();
        expect(actual).toBe(expected);
      });

    test('can count number of cars in stock', () => {
        expected = 3;
        actual = dealership.countStock();
        expect(actual).toBe(expected);
    });

    test('can add a car to dealership stock', () => {
        expected = 4;
        dealership.addCar(car1);
        actual = dealership.countStock();
        expect(actual).toBe(expected);
    });
});  