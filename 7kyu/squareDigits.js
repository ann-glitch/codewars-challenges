/* 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9 squared up is 81

and 1 squared up is 1. (81-1-1-81) */

// function squareDigits(num) {
//   let arr = Array.from(String(num), Number); // split the numbers into an array
//   let result = arr.map((el) => el ** 2).join(""); // square each number and concatenate them.
//   return parseInt(result); // convert the input to a number.
// }

// function squareDigits(num) {
//   let answer = String(num)
//     .split("")
//     .map((el) => el ** 2)
//     .join("");

//   return parseInt(answer);
// }

// console.log(squareDigits(3212));
