class Department {
  name: string; // = 'Accounting';// can assign public by default
  constructor(name: string) {
    this.name = name;
  }
  sayHello(arg: string = 'hello') {
    console.log(`Hello from ${this.name} department!!! ${arg}`);
  }
}

const accounting = new Department('Accounting');

console.log({ accounting }, accounting.sayHello());
