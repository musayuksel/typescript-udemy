function add(num1: number, num2: number) {
  return num1 + num2;
}

let number1: number; //if you just declare a variable without initializing it, it will be of type any
number1 = 5;
const number2 = 2.8;//if you initialize a variable, it will be of type number

const result = add(number1, number2);
console.log(result);
