let fn = () => {
  let i = 1;
  return () => {
    console.log(i);
  };
};

console.dir(fn());
