let isMachineWorking = false; // change to true or false to test

// Define the function that returns a promise
function getIceCream() 
{
  return new Promise
  (function(resolve, reject) 
   {
        setTimeout(function() 
       {
           if (isMachineWorking) 
           {
              resolve("✅ Ice cream is ready! 🍦");
           } 
           else 
           {
             reject("❌ Sorry, the ice cream machine is broken!");
           }
        }, 2000);
    }
   );
}

// Use async/await to call the function
async function orderIceCream() {
  try {
    let result = await getIceCream();
    console.log("Kid says: " + result);
  } catch (error) {
    console.log("Kid is sad: " + error);
  }
}

// Call the async function
orderIceCream();
