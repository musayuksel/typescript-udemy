class Department {
  private name: string; // = 'Accounting';// can assign public by default
  private employee: string[] = []; //public & private > line 25
  constructor(name: string) {
    this.name = name;
  }
  sayHello(arg: string = 'hello') {
    console.log(`Hello from ${this.name} department!!! ${arg}`);
  }
  addEmployee(employee: string) {
    this.employee.push(employee);
  }
}

const accounting = new Department('Accounting');
accounting.addEmployee('Max');
console.log({ accounting });

const accounting2 = new Department('Accounting2');
accounting2.addEmployee('Max2');
console.log({ accounting2 });

//MAIN DISADVANTAGE OF THIS CLASS IS THAT WE CAN ADD ANY PROPERTY TO IT OR CHANGE ANY PROPERTY
//accounting2.name = 'NEW NAME'; //THIS IS NOT GOOD
//TO SOLVE THIS WE CAN USE PRIVATE KEYWORD

//Path: video-63 > Short initialization
class DepartmentShort {
  private employee: string[] = [];
//   constructor(private name: string) {
//     //this is a shortcut to create a property and assign it to the value passed in the constructor
//     this.name = name;
//   }
  constructor(private name: string, private readonly id: string) {//readonly can only be assigned once
    this.name = name;
  }
  sayHello(arg: string = 'hello') {
    console.log(`Hello from ${this.name} department!!! ${arg}`);
  }
  addEmployee(employee: string) {
    this.employee.push(employee);
  }
}

const accountingShort = new DepartmentShort('Accounting', 'd1');
accountingShort.addEmployee('Max');
console.log({ accountingShort });