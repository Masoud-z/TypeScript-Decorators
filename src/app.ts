function Logger(constructor: Function) {
  console.log("Logging");
  console.log(constructor);
}

@Logger
class Person {
  name = "Masoud";

  constructor() {
    console.log("Creating person object....");
  }
}

const newPerson = new Person();
console.log(newPerson);
