interface Person {
  //decsribe the shape of an object
  name: string;
  age: number;
  speak(phrase: string): void;
}

const user1: Person = {
  name: 'Max',
  age: 30,
  speak(text: string) {
    console.log(`${this.name} says ${text}`);
  },
};

// user1.speak('Hello there!');
//IMPLEMENTING INTERFACES TO CLASSES
interface Greetable {
  readonly name: string;
  // readonly is like a const variable, it can only be set once
  lastName?: string;
  greet(phrase: string): void;
}

class PersonClass implements Greetable {
  //I can implement multiple interfaces with comma separated list
  name: string;
  constructor(name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user2: Greetable; //I can use the interface as a type
user2 = new PersonClass('Musa', 30); // user2 is an instance of the class PersonClass but type Greetable
user2.greet('Hello there - I am');
// user2.name = "31";//I can NOT change the name property because it is readonly
user2.lastName = 'Musa'; //I can add a new property because it is NOT readonly
