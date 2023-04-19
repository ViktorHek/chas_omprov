// 4 (2p) Använd map för att skapa en ny array slowCars där alla bilar har speed: 20.

const cars = [
  { type: "Volvo", speed: 50 },
  { type: "Ford", speed: 80 },
  { type: "Opel", speed: 60 },
];
const slowCars = []
cars.map(el => {
  slowCars.push({type: el.type, speed: 20})
})
console.log('4: ', slowCars)