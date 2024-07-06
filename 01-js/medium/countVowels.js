/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const letters = str.split('');
    let vowelsCount = 0;
    const vowels = ['a','e','i','o','u'];
    letters.forEach((letter)=>{
      if(vowels.find(vowel => vowel === (letter.toLowerCase()))){
        vowelsCount+=1;
      }
    });
    return vowelsCount;
}

module.exports = countVowels;