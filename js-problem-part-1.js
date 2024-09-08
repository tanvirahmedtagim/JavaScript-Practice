//!Task-1
//?Write a function to convert temperature from Celsius to Fahrenheit.

// function celToFer(Celsius) {
//     return (Celsius * (9 / 5)) + 32;
// }
// const Fahrenheit = celToFer(36);
// console.log(Fahrenheit);

//!Task-2
//?You are given an array of numbers. Count how many times the a number is repeated in the array.

//? sample-input: numbers = [5,6,11,12,98, 5]
//? find: 5
//? output: 2
//? sample-input:
//? numbers = [5,6,11,12,98, 5]
//? find: 25
//? output: 0

// function countNum(numbers, find) {
//    let count = 0;
//     for (let number of numbers) {
//         if (number === find) {
//             count += 1;

//       }
//     }
//     return count;
// }
// const numbers = [5, 6, 11, 12, 98, 5];
// const number = countNum(numbers, 25);
// console.log(number);

//!Task-3
//? Write a function to count the number of vowels in a string.
// function countVowel(strings) {
//   let count = 0;
//   let vowels = "aeiouAEIOU";
//   for (str of strings) {
//     for (i = 0; i < str.length; i++) {
//       for (j = 0; j < vowels.length; j++) {
//         if (str[i].includes(vowels[j])) {
//           count += 1;
//         }
//       }
//     }
//   }
//   return count;
// }
// const strings = "Hi my name is Tanvir Ahmed Tagim";
// const vowel = countVowel(strings);
// console.log(vowel);

//!Task-4
//?Write a function to find the longest word in a given string.
//? sample-input: I am learning Programming to become a programmer
//?sample-output: Programming

// function longestWord(strings) {
//   strings = strings.split(" ");
//   let word = strings[0];
//   for (const str of strings) {
//     if (str.length > word.length) {
//       word = str;
//     }
//   }
//   return word;
// }
// string = "I am learning Programming to become a programmersss";
// const longest = longestWord(string);
// console.log(longest);

//!Task-5
//?Generate a random number between 10 to 20.
// function randomNum(min, max) {
//   return Math.random() * (max - min) + min;
// }
// const randomNumber = randomNum(10, 20);
// console.log(randomNumber);
