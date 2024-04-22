console.log("Hello TypeScript!")

var x; // infers to any(Type inference)
x = 10;  // number
x = "hello"; // string

var y = 100; //infers to number(Type inference)
//y = "hello"; // error (Static type checking)


var z: string; // type annotation
z = "This is a string";
//z = 23.7; // error (Static type checking)


var user: {id: number, name: string, location?: string};

user = {
    id: 1,
    name: "Anil",
    location: "Bangalore"
}

var findIfPresent: (input:string, param: string) => boolean; 

findIfPresent = function(input: string, param: string) {

    if(param === input) {
        let a = 10;
    }
    return true;
}

// Type Aliases

type WindowStates  = "open" | "closed" | "minimized" | "maximized";

let currentState: WindowStates = "open";

type Employee = {
    
    id: number,
    name: string,
    salary?: number,
   // calcSalary: () => number

}

let emp1: Employee = {
    id: 1,
    name: "Anil",
    salary: 10000,
    // calcSalary: function() {
    //     return 40000;
    // }
}

type StringOrNumber = string | number |null; // Union Type

let data: StringOrNumber = "Hello";
data = 10;
//data = true; // error (Static type checking)




