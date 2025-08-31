let pizzaPromise = new Promise(function(resolve, reject) {
  console.log("Ordering pizza...");

  setTimeout(function() {
    // Randomly decide success or failure
    let success = Math.random() > 0.5;
    //   Math.random() gives a random number between 0 and 1.

    if (success) {
      resolve("Pizza is ready!");
    } else {
      reject("Pizza delivery failed.");
    }
  }, 3000);
});

pizzaPromise
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error){
    console.log("we are sorry " + error);
  });


