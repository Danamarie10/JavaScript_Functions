console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count <0) {
        console.log("Invalid input. Count must be a positive number.");
        return;
    }
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    if (!userName || !age) {
        console.log("Please provide a valid name and age");
        return;
    }
const aboveSixteen = 'Congrats ${userName}, you can drive!';
const belowSixteen = 'Sorry ${userName}, but you need to wait until you're 16';

if (age < 16) {
    console.log(belowSixteen);
}else {
    console.log(aboveSixteen);
}

}

console.log("EXERCISE 3:\n==========\n");

function checkCoordinates(x, y) {
    if (x === 0 && y === 0) {
      console.log("The point is at the origin.");
    } else if (x === 0) {
      console.log(`The point (${x}, ${y}) is on the y-axis.`);
    } else if (y === 0) {
      console.log(`The point (${x}, ${y}) is on the x-axis.`);
    } else if (x > 0 && y > 0) {
      console.log(`The point (${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
      console.log(`The point (${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
      console.log(`The point (${x}, ${y}) is in Quadrant 3.`);
    } else {
      console.log(`The point (${x}, ${y}) is in Quadrant 4.`);
    }
  }

  console.log("EXERCISE 4:\n==========\n");
  
  function checkTriangleType(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
  return "Invalid triangle. All side lengths must be greater than 0.";
    }
  
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
  return "Invalid triangle. The sum of any two sides must be greater than the length of the third side.";
    }
  
    if (side1 === side2 && side2 === side3) {
 return "Equilateral triangle. All side lengths are equal.";
    }
  
    if (side1 === side2 || side1 === side3 || side2 === side3) {
  return "Isosceles triangle. Two side lengths are equal.";
    }
  
    return "Scalene triangle. All side lengths are different.";
  } 
