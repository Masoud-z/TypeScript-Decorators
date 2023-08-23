function Logger(logString: string) {
  console.log("LOGGER factory");

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookID: string) {
  console.log("Template factory");

  return function (constructor: any) {
    console.log("Rendering templates");
    const hookEL: HTMLElement | null = document.getElementById("app");
    const p = new constructor();
    if (hookEL) {
      hookEL.innerHTML = template;
      hookEL.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1> My Person object</h1>", "app")
class Person {
  name = "Masoud";

  constructor() {
    console.log("Creating person object....");
  }
}

const newPerson = new Person();
console.log(newPerson);

//-------------++Property decorators++-------------
console.log(
  "%c//-------------++Property decorators++-------------",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px"
);

function Log(target: any, propertyName: string | symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;
  constructor(title: string, _price: number) {
    this.title = title;
    this._price = _price;
  }
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - Should be positive");
    }
  }
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
