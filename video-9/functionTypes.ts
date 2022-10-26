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

let combineValues: (num1: number, num2: number) => number; //function get 2 numbers and return a number
combineValues = addNumbers;
// combineValues = printResult; //error

// console.log(combineValues(8, 8));

function callbackFunction(result: number) {
  return result;
}
// CALLBACKS
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  //callback function might return any type, we say void because we don't care about the return type
  const result = n1 + n2;
  cb(result);
}
addAndHandle(10, 20, callbackFunction);//will work even if we declare the callback function as returning void because we don't care about the return type