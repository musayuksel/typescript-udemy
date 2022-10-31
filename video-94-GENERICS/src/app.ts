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
