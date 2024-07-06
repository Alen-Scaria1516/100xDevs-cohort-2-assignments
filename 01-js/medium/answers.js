// function isPalindrome(str) {
//     const isAlphabet = (char) => {
//         const code = char.charCodeAt(0);
//         return  (code >= 65 && code <= 90) ||  // A-Z
//                 (code >= 97 && code <= 122);   // a-z
//     };

//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         while (left < right && !isAlphabet(str[left])) {
//             left++;
//         }
//         while (left < right && !isAlphabet(str[right])) {
//             right--;
//         }

//         if (str[left].toLowerCase() !== str[right].toLowerCase()) {
//             return false;
//         }

//         // Move pointers inward
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log(isPalindrome('Malayalam'));