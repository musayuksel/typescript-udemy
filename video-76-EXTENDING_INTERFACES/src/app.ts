// I want to create a interface with name and lastname
// some classes will implement this interface but also
//I will create another interface Greatable that will have a method greet and will implement the interface with name and lastname

interface Named {
  readonly name: string;
  lastName: string;
}

interface Greetable extends Named {
  //I can extend multiple interfaces with comma separated list
  greet(phrase: string): void;
}

class PersonClass implements Greetable {
  constructor(public name: string, public lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
  greet(phrase: string) {
    console.log(`${phrase} ${this.name} ${this.lastName}`);
  }
}

let user1: Greetable;
user1 = new PersonClass('Max', 'something');
// user1.name = 'Musa';//ERROR because name is readonly
user1.lastName = 'Maximilian';
user1.greet('Hi there - I am');

// Path: video-77-INTERFACE_FUNCTION_TYPES/src/app.ts
// I want to create function types
type AddFn = (num1: number, num2: number) => number;

// Using interface
interface AddFnInterface {
  (num1: number, num2: number): number; //this is the function type
}

let add: AddFn;
add = (number1: number, number2: number) => number1 + number2;

// OR
let add2: AddFnInterface;
add2 = (number1: number, number2: number) => number1 + number2;
