function divideNumbers(numerator, denominator) {
  try {
    // This is the code we're "trying" to run.
    // We expect an error if 'denominator' is 0.
    if (denominator === 0) {
      throw new Error("Cannot divide by zero!"); // We intentionally create an error here
    }
    let result = numerator / denominator;
    console.log(`The result is: ${result}`);
  } catch (error) {
    // If an error happens in the 'try' block, we jump here.
    // 'error' contains details about what went wrong.
    console.error("Oops! An error occurred:");
    console.error(error.message); // This will log "Cannot divide by zero!"
  } finally {
    // The 'finally' block runs AFTER try and catch, regardless of whether an error occurred.
    // It's good for cleanup, like closing a file or network connection.
    console.log("Division attempt complete.");
  }
}

// --- Let's test it out ---

console.log("--- First scenario: Valid division ---");
divideNumbers(10, 2); // Output: The result is: 5, Division attempt complete.

console.log("\n--- Second scenario: Division by zero ---");
divideNumbers(10, 0); // Output: Oops! An error occurred:, Cannot divide by zero!, Division attempt complete.

console.log("\n--- Third scenario: Another valid division ---");
divideNumbers(15, 3); // Output: The result is: 5, Division attempt complete.
