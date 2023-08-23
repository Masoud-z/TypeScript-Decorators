"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    console.log("LOGGER factory");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookID) {
    console.log("Template factory");
    return function (constructor) {
        console.log("Rendering templates");
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
    Logger("LOGGING - PERSON"),
    WithTemplate("<h1> My Person object</h1>", "app")
], Person);
const newPerson = new Person();
console.log(newPerson);
console.log("%c//-------------++Property decorators++-------------", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
function Log(target, propertyName) {
    console.log("Property decorator");
    console.log(target, propertyName);
}
class Product {
    constructor(title, _price) {
        this.title = title;
        this._price = _price;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - Should be positive");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
//# sourceMappingURL=app.js.map