const someoneDetails = {
  name: "Someone!",
  designation: "Instructor",
  displayName: () => console.log(this.name),
};

someoneDetails.displayName(); // Implicit Binding

// =======================

const lang = ["HTML", "CSS", "JS"];

const someoneDetails = {
  name: "Someone!",
};

function display(languages) {
  console.log(`${this.name} knows ${languages}`);
}

display.call(someoneDetails, lang); // Explicit - call
display.call(someoneDetails, lang[0], lang[1], lang[2]);

// =====================

const lang = ["HTML", "CSS", "JS"];

const someoneDetails = {
  name: "Someone!",
};

function display(lan1, lan2, lan3) {
  console.log(`${this.name} knows ${lan1}, ${lan2} and ${lan3}`);
}

display.apply(someoneDetails, lang); // Explicit - apply

// =====================

const lang = ["HTML", "CSS", "JS"];

const someoneDetails = {
  name: "Someone!",
};

function display(languages) {
  console.log(`${this.name} knows ${languages}`);
}

display.bind(someoneDetails, lang)(); // Explicit - bind

//=======================

const name = "Someone!";
console.log(this.name); // Window binding

// ======================

function Student() {
  this.name = name;
}

const s1 = new Student("Someone"); // New Binding
