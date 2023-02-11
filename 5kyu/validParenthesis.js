/* 

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

*/

function validParentheses(parens) {
  const reg = /\(\)/g; // regex to check for parentheses

  while (reg.test(parens)) {
    parens = parens.replace(reg, "");
  }

  return !parens;
}

console.log(validParentheses("()))"));
