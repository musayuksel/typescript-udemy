class Department {
  protected employee: string[] = [];
  constructor(private name: string, private readonly id: string) {
    this.name = name;
  }
  sayHello(arg: string = 'hello') {
    console.log(`Hello from ${this.name} department!!! ${arg}`);
  }
  addEmployee(employee: string) {
    this.employee.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

class ITDepartment extends Department {
  private lastEmployee: string;
  set setLastEmployee(value: string) {
    //complex logic
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.lastEmployee = value;
    this.addEmployee(value);//also any complex logic with parent class
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
}
const it = new ITDepartment('d2', []);
it.addEmployee('Max');
it.addEmployee('Manu');
// console.log('the last employee is >>>> '+it.getLastEmployee);//getter method without ()
it.setLastEmployee = 'Anna';//setter method without ()
console.log('the last employee is >>>> '+it.getLastEmployee);//getter method without ()
console.log({ it });
