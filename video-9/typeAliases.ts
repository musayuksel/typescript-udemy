type ReturnTypes = 'as-number' | 'as-text';//Aliases
type InputTypes = string | number;//alias


function addManyTypesWithAliases(
    input1: InputTypes,
    input2: InputTypes,
    resultConversion: ReturnTypes
  ) {
    //literal type also can be options, we can not use any other value
    return (typeof input1 === 'number' && typeof input2 === 'number') ||
      resultConversion === 'as-number'
      ? +input1 + +input2
      : input1.toString() + input2.toString();
  }
  console.log(addManyTypesWithAliases(1, 2, 'as-number')); //3
  console.log(addManyTypesWithAliases('1', '2', 'as-text')); //12
  
  // function greet(user: { name: string; age: number }) {
  //   console.log('Hi, I am ' + user.name);
  // }
   
  // function isOlder(user: { name: string; age: number }, checkAge: number) {
  //   return checkAge > user.age;
  // }
  // To >>>>>>>>>>:
  
  // type User = { name: string; age: number };
   
  // function greet(user: User) {
  //   console.log('Hi, I am ' + user.name);
  // }
   
  // function isOlder(user: User, checkAge: number) {
  //   return checkAge > user.age;
  // }