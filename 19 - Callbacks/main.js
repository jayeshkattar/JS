function display(number) {
  console.log(`I'm displaying ${number}`);
}

function main(fn) {
  fn(2);
}

main(display);
