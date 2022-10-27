class Department {
  private employee: string[] = [];
  constructor(private name: string, private readonly id: string) {
    this.name = name;
  }
  // sayHello(arg: string = 'hello') {
  //   console.log(`Hello from ${this.name} department!!! ${arg}`);
  // }
  protected sayHello(arg: string = 'hello') {
    // protected method> Path: video-66 OVERRIDING PROPERTIES AND THE PROTECTED KEYWORD/src/app.ts
    //I CAN NOT ACCESS THIS METHOD FROM OUTSIDE OF THE CLASS ANYMORE
    console.log(`Hello from ${this.name} department!!! ${arg}`);
  }
  addEmployee(employee: string) {
    this.employee.push(employee);
  }
}

const accounting1 = new Department('Accounting', 'd1');
accounting1.addEmployee('Max');
console.log({ accounting1 },accounting1);

// Path: video-65-INHERITANCE/src/app.ts

class ITDepartment extends Department {
  //inheritance>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  constructor(id: string, public admins: string[]) {
    super('IT', id); //super is used to call the constructor of the parent class (name and id)
    this.admins = admins;
  }
}

const it1 = new ITDepartment('d2', ['Max']);
// console.log({ it1 });

// Path: video-66 OVERRIDING PROPERTIES AND THE PROTECTED KEYWORD/src/app.ts

class ITDepartment2 extends Department {
  constructor(id: string, public admins: string[]) {
    super('IT', id);
    this.admins = admins;
  }
  //overriding>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  sayHello() {
    console.log('THIS IS OVERRIDING THE PARENT METHOD');
  }
}
const it2 = new ITDepartment2('d2', ['Max']);
console.log(it2.sayHello());
