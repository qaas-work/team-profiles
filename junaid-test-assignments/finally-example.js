function operateLightSwitch() {
  try {
    console.log("Attempting to turn on the light...");
    // Let's pretend sometimes the lightbulb is broken.
    let lightbulbWorks = Math.random() > 0.5; // This randomly decides if the light works
    if (!lightbulbWorks) {
      throw new Error("Lightbulb is broken!"); // Uh oh, error!
    }
    console.log("Light is ON!");
  } catch (error) {
    console.error("Oh no! Couldn't turn on the light:", error.message);
  } finally {
    // This code ALWAYS runs, no matter if the light turned on or not.
    console.log("Light switch operation complete. Ensuring light is OFF.");
  }
}

console.log("--- First attempt (light might work) ---");
operateLightSwitch();
// Output will be either:
// Attempting to turn on the light...
// Light is ON!
// Light switch operation complete. Ensuring light is OFF.
// OR
// Attempting to turn on the light...
// Oh no! Couldn't turn on the light: Lightbulb is broken!
// Light switch operation complete. Ensuring light is OFF.


console.log("\n--- Second attempt (another go) ---");
operateLightSwitch();
// Same possible outputs as above.
