abstract class Department {
  protected employee: string[] = [];
  constructor(private name: string, private readonly id: string) {
    this.name = name;
  }
  abstract sayHello(this: Department, name: string): void;
  addEmployee(employee: string) {
    this.employee.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

// I WANT TO CREATE A SINGLETON CLASS SO THAT I CAN NOT CREATE MULTIPLE INSTANCE OF THIS CLASS
// EXM: company can have only one IT department
class ITDepartment extends Department {
  constructor(id: string, private newEmployees: string[]) {
    super('IT', id);
  }

  static myStaticProperty = 'Hello from static property';

  sayHello(this: ITDepartment, name2: string): void {
    console.log(`Hello from ${name2} department!!! ${name2}`);
    console.log(this.employee);
  }
}
