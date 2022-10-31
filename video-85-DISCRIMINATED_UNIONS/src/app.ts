interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // Discriminated Union > we can use any property name
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  if (animal.type === 'bird') {
    speed = animal.flyingSpeed;
  }
  if (animal.type === 'horse') {
    speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

const bird: Bird = {
  type: 'bird',
  flyingSpeed: 10,
};
moveAnimal(bird);
moveAnimal({ type: 'horse', runningSpeed: 20 });

// Type Casting>>>>>>
// Path: video-86-TYPE_CASTING
// if we add an element to the DOM, <inout type='text' id='user-input'>
//
const inputElement = <HTMLInputElement>document.getElementById('user-input');//if we use React, we can use 'as' instead of '<>'
const inputElement2 = document.getElementById('user-input') as HTMLInputElement; // Type Casting
inputElement.value = 'Hi there!';
// if we are not sure the element is null or not we can use if statement
const inputElement3 = document.getElementById('user-input');
if (inputElement3) {
  (inputElement3 as HTMLInputElement).value = 'Hi there!';
}