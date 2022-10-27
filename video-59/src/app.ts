class Department {
  name: string; // = 'Accounting';// can assign public by default
  constructor(name: string) {
    this.name = name;
  }
}

const accounting = new Department('Accounting');

console.log({ accounting });
