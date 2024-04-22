"use strict";
class Car {
    get keyCode() {
        return this._keycode;
    }
    set keyCode(value) {
        this._keycode = value;
    }
    //constructor implementation(one)
    constructor(nm, speed, gears) {
        this._keycode = "";
        // if(nm){
        //     this.name = nm;
        // }else{
        //     this.name = "";
        // }
        this.name = nm ? nm : "";
        this.speed = speed ? speed : 0;
        this.gears = gears;
    }
    applyBrakes(value) {
        this.speed -= value;
    }
}
let car1 = new Car("Audi", 200, 5);
car1.keyCode = "1234";
console.log("car1", car1);
car1.applyBrakes(50);
console.log("car1", car1);
console.log("car1 keyCode", car1.keyCode);
let car2 = new Car();
car2.name = "BMW";
car2.speed = 250;
car2.gears = 6;
car2.keyCode = "6789";
console.log("car2", car2);
car2.applyBrakes(50);
console.log("car2", car2);
console.log("car2 keyCode", car2.keyCode);
