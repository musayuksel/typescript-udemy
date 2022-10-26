// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Max',
//   age: 30,
// };
// console.log(person.name);

// Better syntax for the above:
const person2:{
    name: string;
    age: number;
    hobbies: string[];
    roles: [number, string]; // Tuple
} = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'], // Array of strings
  roles: [2, 'author'], // Tuple** - an array with a fixed number of elements where the types of each element are known ((string | number)[])
};

person2.roles.push('admin'); // This is still allowed
// person2.roles[1] = 10; // This is allowed
// let favoriteActivities: string[]; // Array of strings
// favoriteActivities = ['Sports'];

person2.roles.forEach((role) => {
//   console.log({role}); //ts knows that hobby is a string
  // console.log(hobby.map()); // !!! ERROR !!!
});
