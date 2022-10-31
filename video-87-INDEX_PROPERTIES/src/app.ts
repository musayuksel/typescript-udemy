const inputElement = document.getElementById('user-input') as HTMLInputElement; // Type Casting
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character!' }
  [prop: string]: string; // we can use any property name also any number of properties
}

const errorBagEmpty: ErrorContainer = {}; //we can use empty object also

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
  // 1: 'test', // we can use any property name also any number of properties
};

inputElement.value = errorBag.email; // Not a valid email!