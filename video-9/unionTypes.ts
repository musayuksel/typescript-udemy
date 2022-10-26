function add(input1: number, input2: number) {
  return input1 + input2;
}
// I want to use this function with strings, but I can't because the function is expecting numbers
// function addManyTypes(input1: number | string, input2: number | string) {
//   return input1 + input2;
// }
function addManyTypes(input1: number | string, input2: number | string) {
  return typeof input1 === 'number' && typeof input2 === 'number'
    ? input1 + input2
    : input1.toString() + input2.toString();
}
// console.log(addManyTypes(1, 2)); //3
// console.log(addManyTypes('1', '2')); //12
