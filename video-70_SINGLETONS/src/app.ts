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
  //1 - DO PRIVATE CONSTRUCTOR
  private constructor(id: string,  employee: string[]) {
    super('IT', id);
    this.employee = employee;
  }
  //2 - CREATE A STATIC PROPERTY
  private static instance: ITDepartment;
  //3 - CREATE A STATIC METHOD
  static getInstance() {
    // if (this.instance) {
    if (ITDepartment.instance) {
      return this.instance;
    }
    this.instance = new ITDepartment('d1', ['Max']);
    return this.instance;
  }
  static myStaticProperty = 'Hello from static property';

  sayHello(this: ITDepartment, name2: string): void {
    console.log(`Hello from ${name2} department!!! ${name2}`);
    console.log(this.employee);
  }
}

// const it = new ITDepartment('d1', ['Max']);// ERROR
const it = ITDepartment.getInstance();
it.addEmployee('Max2');
console.log(it)

const it2 = ITDepartment.getInstance();//it and it2 are same instance
it2.addEmployee('Max3');
console.log(it2)