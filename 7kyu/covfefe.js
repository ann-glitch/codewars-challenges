/* 

 Your are given a string. You must replace any occurence of the sequence coverage by covfefe,
 however, if you don't find the word coverage in the string,
 you must add covfefe at the end of the string with a leading space.

*/

function covfefe(str) {
  if (str.includes("coverage")) {
    return str.replace(/coverage/g, "covfefe");
  } else {
    return `${str} covfefe`;
  }
}

console.log(covfefe("coverage coverage"));
