const timer = function (input) {
  let inputArray;

  // Check if the input is a string or an array of numbers
  if (typeof input === 'string') {
    // Split the input string into an array of numbers
    inputArray = input.split(" ").map(Number);
  } else if (Array.isArray(input)) {
    // Use the input array directly
    inputArray = input.map(Number);
  } else {

    return;
  }

  // Check if the input array contains any NaN or if it's empty
  if (inputArray.some(isNaN) || inputArray.length === 0) {

    return;
  }

  // Iterate through each number in the input array
  inputArray.forEach(function (number) {
    // Check if the number is NaN or negative
    if (isNaN(number) || number < 0) {

      return;
    }

    // Set up a timeout to execute after a certain number of seconds
    setTimeout(function () {
      // Print a dot to the console after the specified number of seconds
      process.stdout.write('.');
    }, number * 1000);
  });
}

// Example usage:
timer("5 10 15 20");         // Valid input
timer([5, 10, 15, 20]);       // Valid input
timer("");                   // Empty string
timer([-3, 8, "apple"]);      // Invalid input
timer("Pajamas");            // Non-numeric string
timer({});                   // Invalid input
