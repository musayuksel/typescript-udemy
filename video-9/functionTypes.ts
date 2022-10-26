// function addNumbers(number1: number, number2: number): number {
//   return number1 + number2;
// }
function addNumbers(number1: number, number2: number) {
  //typescript can infer the return type
  return number1 + number2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

let combineValues: (num1: number, num2: number) => number ;//function get 2 numbers and return a number
combineValues = addNumbers;
// combineValues = printResult; //error

console.log(combineValues(8, 8));