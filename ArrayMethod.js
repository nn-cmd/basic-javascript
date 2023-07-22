var fruits = ["Banana", "Orange", "Apple", "Mango"];

//การเขื่อม
document.getElementById("text").innerHTML = fruits.join(" - ");

//เพิ่มข้อมูล ลบข้อมูล pop ข้อมูลตัวสุดท้ายหายไป , push เพิ่มข้อมูลด้านหลัง , shift ลบตัวหน้าสุด , unshift เพิ่มข้อมูลด้านหน้า
// fruits.pop();
// fruits.push("Kiwi");
// fruits.shift();
// fruits.unshift();
// console.log(fruits);

//delete
// delete fruits[0]; // ลบตัวแรก

//การเพิ่ม
fruits.splice(2, 0, "Lemon", "Kiwi"); //(ตน. , ข้อมูลที่จะถูกลบ , ข้อมูลที่ต้องการเพิ่ม)

//การลบ
fruits.splice(0, 2);
