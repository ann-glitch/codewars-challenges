/* 

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

*/

//using for loop
function isIsogram(str) {
  let test = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (test[str[i]]) {
      return false;
    }
    test[str[i]] = true;
  }
  return true;
}

//another solution using regex
function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}

console.log(isIsogram("aba"));
