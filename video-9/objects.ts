// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Max',
//   age: 30,
// };
// console.log(person.name);

// Better syntax for the above:
const person2 = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'], // Array of strings
};

// let favoriteActivities: string[]; // Array of strings
// favoriteActivities = ['Sports'];

person2.hobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase()); //ts knows that hobby is a string
  // console.log(hobby.map()); // !!! ERROR !!!
});
