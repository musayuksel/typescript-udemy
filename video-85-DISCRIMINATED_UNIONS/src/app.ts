interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';// Discriminated Union > we can use any property name
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
