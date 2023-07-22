// Oิbject เก็บได้หลายค่า ใสา property , methods

var person = {
  //property
  firstName: "NNNN",
  lastName: "NNNN",
  eyeColor: "black",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());