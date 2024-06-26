console.log("The Javascript-Homework 1 page is live");
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;
console.log(
  `The value returned from this operation is ${isSum50} which means the four numbers add up to 50`
);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isSum50);
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

/**-------------------------------------------------- Part 1 --------------------------------------------------**/
//------------  n/5 -------//
// Used the modules operator to determine if the remainder of 5 from the numbers equal 0
const divisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(
  `The value returned from this operation is ${divisibleBy5} because all the numbers are divisible by 5`
); // true

//---------  n1 > n45 -------//
// used the ternary operator to check if the first number is greater than the last number
const isItLarger = n1 > n4 ? true : false;
console.log(
  `The value returned from this operation is ${isItLarger} because the first number is greater than the last number`
); // true

//--- ((n2 - n1) * n3) % 4 ---//
const answer = ((n2 - n1) * 3) % n4 === 0;
console.log(
  `After using this operation, ((n2 - n1) * n3) % 4, the value returned from this operation is ${answer}`
); // true

// isOver25 //
const olderThan25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(
  `The value returned from this operation is ${olderThan25} because all the number are not over 25`
); // false

/**-------------------------------------------------- Part 2 --------------------------------------------------**/
// totalDistance = 1500
// 55mph = 1hr * 30 miles per gallon
// 60mph = 1hr * 28 miles per gallon
// 75mph = 1hr * 23 miles per gallon

// 525 gallons of gas
let totalGallonsOfGas = 175 * 3;
console.log(
  `You can purchase ${totalGallonsOfGas} gallons of gas with a fuel budget of $175 and the average cost of gas being $3`
);

const oneHour = 1;

const fiftyFiveMph = 1500 / 30;
const totalHrs55Mph = fiftyFiveMph * oneHour;
console.log(
  `When driving at a speed of 55 miles per hour we will use up ${fiftyFiveMph} gallons of gas and the trip will take ${totalHrs55Mph} hours`
);
const sixtyMph = 1500 / 28;
const totalHrs60Mph = sixtyMph * oneHour;
console.log(
  `When driving at a speed of 60 miles per hour we will use up ${sixtyMph} gallons of gas and the trip will take ${totalHrs60Mph} hours`
);
const seventyFiveMph = 1500 / 23;
const totalHrs75Mph = seventyFiveMph * oneHour;
console.log(
  `When driving at a speed of 75 miles per hour we will use up ${seventyFiveMph} gallons of gas and the trip will take ${totalHrs75Mph} hours`
);
//----------------------------------------------------------------------------------------------------------------------//

if (totalHrs55Mph < totalHrs60Mph && totalHrs55Mph < totalHrs75Mph) {
  console.log("Driving at 55mph is the slowest but the cheapest");
}

if (totalHrs60Mph > totalHrs55Mph && totalHrs60Mph < totalHrs75Mph) {
  console.log(
    "Driving at 65mph is the fastest than driving at 55 mph but the more expensive and slower than driving ar 75 mph but cheaper than drivng at 75 mph"
  );
}
if (totalHrs75Mph > totalHrs60Mph && totalHrs75Mph > totalHrs55Mph) {
  console.log("Driving at 75mph is the fastest but the most expensive");
}
