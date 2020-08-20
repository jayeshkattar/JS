// Basic Function
function add() {
  return true;
}

add();
console.log(add());

// Parameterized Function
function sub(a) {
  return a - 1;
}

sub(6);
console.log(sub(6));

// Function as a value
const mul = function () {
  return true;
};

mul();

// Function as a Argument/Parameter
function calc(fn, fn1, fn2) {
  fn();
  fn1();
  fn2();
}

calc(add, sub, mul);

// Function as Property
const student = {
  marks: function () {
    return 100;
  },
};

student.marks();

// Function Arguments
function marks() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

marks(1, 2, 3, 4);

//Constructor Function
function Student(name, age) {
  this.name = name;
  this.age = age;
}

const s1 = new Student("S1", 10);
const s2 = new Student("S2", 11);
