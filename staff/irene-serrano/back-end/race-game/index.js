const fs = require("fs").promises;
const { writeFile } = fs;

class Car {
  constructor(icon) {
    this.icon = icon;
    this.position = 0;
  }

  toString() {
    return `${" ".repeat(this.position)}${this.icon}`;
  }

  move(distance) {
    this.position = this.position + distance;
  }
}

const randomInteger = (min, max) =>
  min + Math.round((max - min) * Math.random());

const car1 = new Car("🚗");
const car2 = new Car("🏎️");
const car3 = new Car("🚓");

const interval = setInterval(() => {
  console.clear();

  console.log(car1.toString());
  console.log(car2.toString());
  console.log(car3.toString());

  if (car1.position >= 100 || car2.position >= 100 || car3.position >= 100) {
    console.clear();

    clearInterval(interval);
    showResults(car1, car2, car3);
    return
  }

  car1.move(randomInteger(0, 10));
  car2.move(randomInteger(0, 10));
  car3.move(randomInteger(0, 10));
}, 100);

function showResults(car1, car2, car3) {
  const result = getResult(car1, car2, car3);
  console.log(result);

  writeFile(
    `race-${Date.now().toString()}.txt`,
    `${car1.toString()}\n${car2.toString()}\n${car3.toString()}\n${result}`
  ).then(()=> console.log('Race successfully saved'))
  .catch(console.error);
}

function getResult(car1, car2, car3) {
  if (car1.position >= 100) {
    return `${car1.icon} WINS!`;
  } else if (car2.position >= 100) {
    return `${car2.icon} WINS!`;
  } else if (car3.position >= 100) {
    return `${car3.icon} WINS!`;
  } else if (car1.position >= 100 && car2.position >= 100) {
    return `TIE! ${car1.icon} ${car2.icon} TRY AGAIN`;
  } else if (car3.position >= 100 && car2.position >= 100) {
    return `TIE! ${car3.icon} ${car2.icon} TRY AGAIN`;
  } else if (car1.position >= 100 && car3.position >= 100) {
    return `TIE! ${car1.icon} ${car3.icon}  TRY AGAIN`;
  } else if (
    car1.position >= 100 &&
    car2.position >= 100 &&
    car3.position >= 100
  ) {
    return `TIE! ${car1.icon} ${car2.icon} ${car3.icon}  TRY AGAIN`;
  }
}
