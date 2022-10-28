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

type Universal = Combinable & Numeric; // WILL BE NUMBER
// type Universal2 = Combinable | Numeric;// WILL BE STRING | NUMBER | BOOLEAN

//TYPE GUARDS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function add(num1: Combinable, num2: Combinable){
  // return num1 + num2;//ERROR because it can be a string
  if(typeof num1 === 'string' || typeof num2 === 'string'){
    return num1.toString() + num2.toString();
  }
  return num1 + num2;
}

//TYPE GUARDS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
type UnknownEmployee = Employee | Admin;// WILL BE EITHER ONE

function printEmployeeInformation(emp: UnknownEmployee){
  console.log('Name: ' + emp.name);// WILL WORK because both have name
  if('privileges' in emp){
    console.log('Privileges: ' + emp.privileges);
  }
  if('startDate' in emp){
    console.log('Start Date: ' + emp.startDate);
  }
}
printEmployeeInformation(employee1);

//TYPE GUARDS >>>>>>>>>>>>>>>>>>>>>>>>>>>>> CLASS
class Car {
  drive() {
    console.log('Driving a car...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ('loadCargo' in vehicle) {
    //TYPE GUARDS >>>>>>>> INSTANCEOF
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
