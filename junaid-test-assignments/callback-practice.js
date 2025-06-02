function sayGoodMorning(name, callback){
  console.log("Good Morning " + name);
  if (callback) callback(name);
}
function sayHello(name, sayGoodMorning) {
  setTimeout(() => {
    console.log("Hello, " + name);
    if (sayGoodMorning) sayGoodMorning(name);
  }, 5000);
  console.log("in sayheello");
}

function greet() {
  const name = "Amit";
  sayHello(name,sayGoodMorning) {
    sayGoodMorning(name, function() {
      console.log("bnbnbnbn");
    });
  });
}

greet();


