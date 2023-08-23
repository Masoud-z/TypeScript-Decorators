function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookID: string) {
  return function (constructor: any) {
    const hookEL = document.getElementById("app");
    const p = new constructor();
    if (hookEL) {
      hookEL.innerHTML = template;
      hookEL.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("LOGGING - PERSON")
@WithTemplate("<h1> My Person object</h1>", "app")
class Person {
  name = "Masoud";

  constructor() {
    console.log("Creating person object....");
  }
}

const newPerson = new Person();
console.log(newPerson);
