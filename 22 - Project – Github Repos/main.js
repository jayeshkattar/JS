fetch("http://api.github.com/users/jayeshkattar/repos")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
