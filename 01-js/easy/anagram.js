/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function sortString(str)
{
  return str.toLowerCase().split('').sort().join('');
}
function isAnagram(str1, str2) {
  const newStr1 = sortString(str1);
  const newStr2 = sortString(str2);
  console.log(newStr1, newStr2);
  return (newStr1 === newStr2)? true : false;
}
module.exports = isAnagram;
