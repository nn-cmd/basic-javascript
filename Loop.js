// for (var i = 0; i <= 5; i++) {
//   console.log(i);
// }

var cars = ["BMW", "Ford", "Honda", "Audi"];

for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (var x in cars) {
  console.log(cars[x]);
}

for (x of cars) {
  console.log(x);
}

var myString = "JavaScript";

var y;

for (y of myString) {
  console.log(y);
}

