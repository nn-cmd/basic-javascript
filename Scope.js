//Global scope
var myCar = "BWM";

function myFunc() {
  //local scope
  var myName = "Java script";
  //Auto Global scope
  myNameAutoGlobal = "Java script";
}

myFunc();

//Strict Mode >> จับข้อผิดพลาด เขียนผิดนิดหน่อยไม่ได้
("use strict");

x = 5; //err
var y = 5; //it's ok

//ES6 let &  const

var x = 5;
var x = 6; //เปลี่ยนแปลงค่าได้

console.log(x);

let y = 6;
// let y = 7; //ประกาศใหม่ได้ ประกาศแล้ว
y = 7; //แต่กำหนดค่าใหม่ได้
console.log(y);

const z = 9; //ค่าคงที่ ห้ามประกาศใหม่ ห้ามกำหนดค่าให้ใหม่
z = 10;

console.log(z);

//ES6 let & const

{
  //scope
  var x = 10; //เข้าถึงจากภายนอกได้
  let y = 10; // เข้าถึงจากภายนอกไม่ได้
  const z = 10; //เข้าถึงจากภายนอกไม่ได้
} //scope

console.log(x); //ภายนอก

var myName = "John";
console.log(`Hi my name is ${myName} nice to meet you.`);
