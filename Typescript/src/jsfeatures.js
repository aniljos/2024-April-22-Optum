//All declaration are hoisted to the top of the function or global scope.
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//var x, y;

console.log('JS Features');

console.log("x", x);// undefined
var x = 10;
console.log("x", x); // 10

var y;
console.log("y", y); // undefined

//console.log("z", z); // ReferenceError: z is not defined

foo();
function foo(){
    console.log("in foo");
}

console.log('JS Features completed');


function sum(){

    console.log("in sum no arguments");
   
}
function sum(a, b){

    console.log("in sum ");
    return a + b;
}

console.log("sum", sum(10, 20));
sum();
sum(2,3,4,5);
