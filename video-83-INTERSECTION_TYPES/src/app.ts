type Employee = {
  name: string;
  startDate: Date;
};

type Admin = {
  name: string;
  privileges: string[];
};

type ElevatedEmployee = Employee & Admin;
// WILL COMBINE THE TWO TYPES INTO ONE
const employee1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;// WILL BE NUMBER
type Universal2 = Combinable | Numeric;// WILL BE STRING | NUMBER | BOOLEAN