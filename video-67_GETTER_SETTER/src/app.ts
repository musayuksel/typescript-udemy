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
  constructor(id: string, public admins: string[]) {
    super('IT', id);
    this.admins = admins;
  }
  addEmployee(employee: string): void {
    if (!employee) {
      return;
    }
    this.employee.push(employee); //overriding>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  }
}
const it = new ITDepartment('d2', ['Max']);
it.sayHello();
