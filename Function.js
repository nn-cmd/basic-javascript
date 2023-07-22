//ex1
function myFunction(value1, value2) {
  return value1 * value2;
}
console.log(myFunction(5, 5));

//ex2
function changeBg() {
  document.body.style.backgroundColor = "black";
}
//call function
// changeBg();

//แปลงอุณหภูมิ
function cToF(celsius) {
  var cTemp = celsius;
  var ctoFahr = (cTemp * 9) / 5 + 32;
  var message = cTemp + " \xB0C " + ctoFahr + "\xB0F";
  console.log(message);
}

cToF(30);

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  var message = fTemp + " \xB0F is " + fToCel + " \xB0C ";
  console.log(message);
}

fToC(86);
