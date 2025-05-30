function sayHello(name) {
  console.log("Hello, " + name);
}

function greet(callback) {
  const name = "Amit";
  callback(name);  // calling the function passed as argument
}

greet(sayHello);
