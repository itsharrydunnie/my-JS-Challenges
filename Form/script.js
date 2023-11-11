"use strict";

// Goal is to get data from the form and create an object with it
//forgot to link my js file lmao
//console.log("Hello World");

// getting element needed from the DOM and setting them in a variable
// got an idea now but first let me manually create the object for the text content then i will use the loop through on the nodelist
// console.log(document.querySelectorAll("input"));
// console.log(document.querySelectorAll("p"));
// const allP = document.querySelectorAll("p");
// console.log(allP[1]);
// const allInputs = document.querySelectorAll("input");
// // allInputs[2].value = "peteranietieagmail.com"

// const logInDetails = {};

// //adding even listener to the sign up button that does the work

// document.querySelector("button").addEventListener("click", function () {
//   if (!allInputs) {
//     allP[1].classList.remove("hidden");
//   }
// });

// fresh start
//Getting all the element needed from the dom and saving it to a variable
const errorMsg = document.querySelector(".emptymsg");
console.log(errorMsg);
const button = document.querySelector(".btn");
console.log(button);
const allInputs = document.querySelectorAll("input");
console.log(allInputs);

const clearField = function () {
  for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].value = "";
  }
};

const logInDetails = {};

button.addEventListener("click", function () {
  for (let i = 0; i < allInputs.length; i++) {
    if (!allInputs[i].value) {
      // console.log("This is true");
      errorMsg.classList.remove("hidden");
    } else {
      // console.log("This is false");
      logInDetails.firstName = allInputs[0].value;
      logInDetails.lastName = allInputs[1].value;
      logInDetails.email = allInputs[2].value;
      logInDetails.password = allInputs[3].value;
      logInDetails.confirmPassword = allInputs[4].value;
      logInDetails.allData = function () {
        console.log(
          `Your First Name is ${this.firstName}, your last name ${this.lastName}, your email ${this.email}, and your password is ${this.confirmPassword}`
        );
      };
      logInDetails.allData();
      console.log(logInDetails);
      clearField();
    }
  }
});
