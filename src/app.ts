function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Masoud";

  constructor() {
    console.log("Creating person object....");
  }
}

const newPerson = new Person();
console.log(newPerson);
