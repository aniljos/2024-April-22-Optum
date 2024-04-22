"use strict";
console.log("Hello TypeScript!");
var x; // infers to any(Type inference)
x = 10; // number
x = "hello"; // string
var y = 100; //infers to number(Type inference)
//y = "hello"; // error (Static type checking)
var z; // type annotation
z = "This is a string";
//z = 23.7; // error (Static type checking)
var user;
user = {
    id: 1,
    name: "Anil",
    location: "Bangalore"
};
var findIfPresent;
findIfPresent = function (input, param) {
    if (param === input) {
        let a = 10;
    }
    return true;
};
let currentState = "open";
let emp1 = {
    id: 1,
    name: "Anil",
    salary: 10000,
    // calcSalary: function() {
    //     return 40000;
    // }
};
let data = "Hello";
data = 10;
//data = true; // error (Static type checking)
