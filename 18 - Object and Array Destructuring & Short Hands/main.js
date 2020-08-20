const [name, age] = ["Someone", 20];

console.log(name);
console.log(age);

const { name, age } = { name: "Someone", age: 20 };

console.log(name);
console.log(age);

const { name, ...details } = {
  name: "Someone!",
  age: 20,
  location: "Somewhere",
};

console.log(name);
console.log(details);

function display({ name, location: city }) {
  console.log(`${name} lives in ${city}`);
}

display({ name: "Someone", location: "Somewhere" });
