//if want to use  " " use \" \" this
//if want newline \n
var x = 'String "Array" \nArray';
console.log(x.length);
console.log(x);

//Array ข้อแตกต่างกับ object คือ เวลาเข้าถึงข้อมูลของ array ต้องใช้ตัวเลข แต่ใน Oject ใช้ชื่อ
//Array Literal
var myArr = ["BMW", "Ford", "Honda"];

//Array Constructor
var myArr2 = new Array("BMW", "Ford", "Honda");

console.log(myArr[0]); // or [1] , [2]
console.log(myArr.length);

//Function in array

//covert to string
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
// document.getElementById("demo").innerHTML = "Master N";
