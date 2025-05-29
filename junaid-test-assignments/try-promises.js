let isMachineWorking = false; // change this to true or false to test

let iceCreamPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (isMachineWorking) {
      resolve("✅ Ice cream is ready! 🍦");
    } else {
      reject("❌ Sorry, the ice cream machine is broken!");
    }
  }, 2000); // wait 2 seconds
});

iceCreamPromise
  .then(function(result) {
    console.log("Kid says: " + result);
  })
  .catch(function(error) {
    console.log("Kid is sad: " + error);
  });
