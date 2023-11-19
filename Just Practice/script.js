"use strict";
// i actually wanted to just use the tenary operator in a code example. so an idea came up which is to build a drink store where we sell drinks to people. so drink variable will be created based on the user age using a tenary operator then if the user is above 18 the drinks available will be wine, acoholic drinks stuff like that if below 18 drinks will be water, fruit juice, carbonated drinks etc. i could build a one page ecommerce site that displays the drinks avialable based on the users age. a drink store, can add drinks to cart, checkout, will be delivered to the door step. a drink website for a bar. you can visit the bar in person or you can order online. if you have an occassion we can supply drinks to that occassion or events. to order a drink for an events will ask to fill a form, ages of invited guest included.you can also jump on a call with the drinks department to talk briefly things like that sha. will add to this later on landing page include short min video of drinks wine display of beautifully taken pictures of drinks

// let age = Number(
//   prompt(
//     "Welcome to our drink store. We offer the best and affordable drink. Kindly tell us your age so we can fix your a drink"
//   )
// );

// const drink = age >= 18 ? "wine 🍷 🍾🍺" : "Fruit Juice 🥤🧃";

// display18Plus(drink);

// function display18Plus(drink) {
//   if (drink === "wine 🍷 🍾🍺") {
//     console.log("Below are the drinks available");
//     const availableDrink = ["Hennesy", "blackwine", "redwine", "orangewine"];
//     console.log(availableDrink);
//   } else {
//     console.log("Sorry we don't have drinks for that age");
//   }
// }

// function logger() {
//   return console.log(`This function is working`);
//   console.log(`this is after a return keyword`);
// }

// logger();

function divide() {
  const dividednum = addNum(10, 24);
  return dividednum / 2;
}

const addNum = function (num1, num2) {
  const total = num1 + num2;
  return total;
};
const result = divide();

console.log(result);
