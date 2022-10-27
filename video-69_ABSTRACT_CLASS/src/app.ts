abstract class Department {
  //abstract Class
  protected employee: string[] = [];
  constructor(private name: string, private readonly id: string) {
    this.name = name;
  }
  abstract sayHello(this: Department, name: string): void; //abstract method
  // all abstract method must be implemented in child class with a string and void return type, also `this` keyword is used to access the department properties
  //WE FORCE THE CHILD CLASS TO IMPLEMENT THIS METHOD
  // WE CAN NOT CREATE INSTANCE OF ABSTRACT CLASS
  addEmployee(employee: string) {
    this.employee.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

//const accounting = new Department("Accounting", "d1");//ERROR
class ITDepartment extends Department {
  private lastEmployee: string;
  set setLastEmployee(value: string) {
    //complex logic
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.lastEmployee = value;
    this.addEmployee(value); //also any complex logic with parent class
  }

  get getLastEmployee() {
    if (this.lastEmployee) {
      return this.lastEmployee;
    }
    throw 'No employee found!!!';
  }

  constructor(id: string, private newEmployees: string[]) {
    super('IT', id);
    this.lastEmployee = newEmployees[0];
  }

  static myStaticProperty = 'Hello from static property';

  sayHello(this: ITDepartment, name2: string): void {
    console.log(`Hello from ${name2} department!!! ${name2}`);
    console.log(this.employee);
  }
}

const it = new ITDepartment('d1', ['Max']);
it.sayHello('IT');
