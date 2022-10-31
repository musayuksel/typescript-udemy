type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // WILL BE NUMBER
type Universal2 = Combinable | Numeric; // WILL BE STRING | NUMBER | BOOLEAN

function add(num1: number, num2: number): number; // Path: video-88-FUNCTION_OVERLOADS/src/app.ts
function add(num1: string, num2: string): string; // if we call add(1, 5) it will return number TYPE
function add(num1: number, num2: string): string; //
function add(num1: string, num2: number): string; //

function add(num1: Combinable, num2: Combinable) {
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    return num1.toString() + num2.toString();
  }
  return num1 + num2;
}

const result = add('Max', ' Schwarz'); //RETURN TYPE IS STRING so I can use .split() method
console.log(result.split(' '));
const a = add(5, 6);
