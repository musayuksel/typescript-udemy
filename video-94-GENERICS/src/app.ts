const names: Array<object> = []; // string[] same as Array<string>

const promise: Promise<string> = new Promise((resolve, reject) => {
  // type of resolve is string
  setTimeout(() => {
    resolve('This is done');
  }, 1000);
});

promise.then((data) => {
  console.log(data.split(' '));
});

// Path: video-95-Generic Function/src/app.ts
function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj = merge({ name: 'Max' }, { age: 30 }); // T and U are inferred as {name: string} and {age: number}
console.log(mergedObj.age);

const mergedObj2 = merge({ name: 'Max' }, { hobbies: ['running'] }); // T and U are inferred as {name: string} and {hobbies: string[]}
console.log(mergedObj2.hobbies);

// Path: video-96-Constraints/src/app.ts
function mergeAdvance<T extends object, U extends object>(objA: T, objB: U) {
  // T and U must be objects
  return { ...objA, ...objB };
}

// Path: video-97-Function Types/src/app.ts
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  // T must have length property
  return [element, `This element has ${element.length} element/s.`];
}
console.log(countAndDescribe('Hi there!'));

// Path: video-98-The "keyof" Constraint/src/app.ts
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  // U must be a key of T
  return obj[key];
}
console.log(extractAndConvert({ name: 'Max' }, 'name'));
// console.log(extractAndConvert({ name: 'Max' }, 'age')); // ERROR
