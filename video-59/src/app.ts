class Department {
  name: string; // = 'Accounting';// can assign public by default
  employee: string[] = [];
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