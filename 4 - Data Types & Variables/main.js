var a = 10; // number
var b = "Something!"; // String
var c = true; // Boolean
var d = null; // null
var e = undefined; // undefined
var f = {}; // Object
var g = []; // Array

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

console.log(typeof a);

// Scopes
var y = 20;

{
  let z = 30;
}

const n = 20;
n = "String";

const m = {
  name: "Change!",
};

m.name = "Changed!";
m["name"] = "Changed!";
