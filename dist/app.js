"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookID) {
    return function (constructor) {
        const hookEL = document.getElementById("app");
        const p = new constructor();
        if (hookEL) {
            hookEL.innerHTML = template;
            hookEL.querySelector("h1").textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Masoud";
        console.log("Creating person object....");
    }
};
Person = __decorate([
    WithTemplate("<h1> My Person object</h1>", "app")
], Person);
const newPerson = new Person();
console.log(newPerson);
//# sourceMappingURL=app.js.map