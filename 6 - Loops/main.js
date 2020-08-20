//For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let n = 0;
while (n < 5) {
  console.log(n);
  n++;
}

// do while loop
let m = 0;
do {
  console.log(m);
  m++;
} while (m < 5);

// for in

let obj = {
  name1: "A",
  name2: "B",
};

for (const key in obj) {
  console.log(obj[key]);
}
