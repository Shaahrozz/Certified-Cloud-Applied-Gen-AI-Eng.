"use strict";
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a 
//model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and 
//two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information 
//was stored correctly.
function car_info(manufacturer, model, ...args) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    for (let arg of args) {
        for (let key in arg) {
            car[key] = arg[key];
        }
    }
    return car;
}
let carObject = car_info("Toyota", "Camry", { color: "Red", year: 2022, price: 25000 });
console.log(carObject);
