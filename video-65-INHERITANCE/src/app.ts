class Department {
  private employee: string[] = [];
  constructor(private name: string, private readonly id: string) {
    this.name = name;
  }
  sayHello(arg: string = 'hello') {
    console.log(`Hello from ${this.name} department!!! ${arg}`);
  }
  addEmployee(employee: string) {
    this.employee.push(employee);
  }
}

const accounting1 = new Department('Accounting', 'd1');
accounting1.addEmployee('Max');
console.log({ accounting1 });

// Path: video-65-INHERITANCE/src/app.ts

class ITDepartment extends Department {
  //inheritance>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  constructor(id: string, public admins: string[]) {
    super('IT', id); //super is used to call the constructor of the parent class (name and id)
    this.admins = admins;
  }
}

const it1 = new ITDepartment('d2', ['Max']);
console.log({ it1 });
