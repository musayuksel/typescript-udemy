enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
} //you can assign values to the enum members, if you don't assign values, the values will be assigned automatically starting from 0

const person3 = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  roles: Role.AUTHOR, //ENUM will be converted to a number
};
