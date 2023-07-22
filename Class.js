class myClass {
  constructor(name) {
    this.myname = name;
  }

  fullName(greeting) {
    return greeting + "My name is" + this.myname;
  }

  static hello(name) {
    return "Hello!" + name;
  }
}

var person = new myClass("Master"); //เรียกใช้ class

console.log(person.fullName("Hello"));

console.log(myClass.hello("Master")); //เรียกใช้ static ใช้ชื่อ class เรียก

//Class Inheritance

class Car {
  constructor(brand) {
    this.carname = brand;
  }

  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  show() {
    return this.present() + ", it's a " + this.model; //ใช้ function จาก class แม่ได้
  }
}

var myCar = new Model("Ford" , "Mustang")
