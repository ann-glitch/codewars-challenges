/* 

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str) {
  return str.match(/.{1,2}/g)?.map((s) => {
    if (s.length % 2 === 1) {
      return `${s}_`;
    } else {
      return s;
    }
  });
}
console.log(solution("abc"));
