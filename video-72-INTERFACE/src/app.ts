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

user1.speak('Hello there!');