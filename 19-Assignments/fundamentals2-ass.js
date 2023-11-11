"use strict";
// : Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

//Solution
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const firstCountry = describeCountry("Nigeria", 6, "Abuja");
const secondCountry = describeCountry("Ghana", 4, "Accra");
const thirdCouuntry = describeCountry("Spain", 9, "Barcelona");
console.log(firstCountry, secondCountry, thirdCouuntry);

// : Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

let worldPopulation = 7900;

// fucntion declaration
function percentageOfWorld1(population) {
  const percentage = Math.trunc((population / worldPopulation) * 100);
  return `${percentage}%`;
}

const nigeria = percentageOfWorld1(1335);
const ghana = percentageOfWorld1(1247);
const spain = percentageOfWorld1(1674);
console.log(nigeria, ghana, spain);

// function expression
const percentageOfWorld2 = function (population) {
  const percentage = Math.trunc((population / worldPopulation) * 100);
  return `${percentage}%`;
};

const canada = percentageOfWorld2(1335);
const portugal = percentageOfWorld2(1247);
const egypt = percentageOfWorld2(1674);
console.log(canada, portugal, egypt);

// Arrow function
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

const mexico = percentageOfWorld3(1690);
console.log(mexico);

// Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

//solution
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld2(
    population
  )} of the world.`;
};

const italy = describePopulation("Italy", 2891);
console.log(italy);

// Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

// solution

const populations = [3251, 2874, 2911, 5003];
console.log(populations, populations > 4);

const percentages = [
  percentageOfWorld2(populations[0]),
  percentageOfWorld2(populations[1]),
  percentageOfWorld2(populations[2]),
  percentageOfWorld2(populations[3]),
];

console.log(percentages);

// Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'

//solution

const neighbours = ["Benin", "Ghana", "Togo", "Chad"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("European countries :)");
} else {
  console.log("Probably not a central European country :)");
}

console.log(neighbours.indexOf("Chad"));
neighbours[3] = "Lake Chad";
console.log(neighbours);

//  Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

// solution
const myCountry = {
  country: "Nigeria",
  capital: "Abuja",
  language: "English",
  population: "200",
  neighbours: ["Benin", "Ghana", "Togo", "Chad"],
};
console.log(myCountry);

// Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

//solution
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
console.log(myCountry.population + 2);
console.log(myCountry["population"] - 2);

// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

// solution

myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  );
};

myCountry.describe();

myCountry.checkIsland = function () {
  this.isIsland = !this.neighbours ? false : true;
};
myCountry.checkIsland();
console.log(myCountry);

// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// solution
for (let voter = 1; voter <= 50; voter++) {
  console.log(`(for numbers 1 to 50): ${voter}  is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

// solution
// Array containiing the populations
// const populations = [3251, 2874, 2911, 5003];

// loop to calc percentages and compute them in an array
let newPercentages = [];

for (let i = 0; i < populations.length; i++) {
  const percentageOfWorld2 = function (populations) {
    const percentage = Math.trunc((populations[i] / worldPopulation) * 100);
    return newPercentages.push(percentage);
  };
  percentageOfWorld2(populations);
}
console.log(newPercentages);

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway �

// Solution

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
console.log(listOfNeighbours[0][0]);
console.log(listOfNeighbours[0][1]);
console.log(listOfNeighbours[1][0]);
console.log(listOfNeighbours[2][0]);
console.log(listOfNeighbours[2][1]);
console.log(listOfNeighbours[2][2]);

for (let i = 0; i < listOfNeighbours.length; i++) {
  // console.log(`Neighour`);
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighour : ${listOfNeighbours[i][y]}`);
  }
}

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?
let newPercentages2 = [];
let i = 0;
while (i < populations.length) {
  const percentageOfWorld3 = (population) =>
    newPercentages2.push((population[i] / worldPopulation) * 100);
  percentageOfWorld3(populations);
  i++;
}
console.log(newPercentages2);
