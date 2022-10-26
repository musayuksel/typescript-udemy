function addManyTypes(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  //literal type also can be options, we can not use any other value
  return (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
    ? +input1 + +input2
    : input1.toString() + input2.toString();
}
// console.log(addManyTypes(1, 2, 'as-number')); //3
// console.log(addManyTypes('1', '2', 'as-text')); //12
