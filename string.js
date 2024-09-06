//!task-1
//? Count how many times a string has the letter a.
// let str1 = 0;
// const str = "hi my name is tanvir ahmed taaaaaaAAAAAaaaagim";
// for (i = 0; i <= str.length; i++) {
//   if (str[i] === "a") {
//     str1 += 1;
//   }
// }
// console.log(str1);

//!task-2
//?Count how many times a string has the letter a or A

// let str1 = 0;
// const str = "hi my name is tanvir ahmed taaaaaaAAAAAaaaagim";
// for (i = 0; i < str.length; i++) {
//   if (str[i] === "a" || str[i] == "A") {
//     str1 += 1;
//   }
// }
// console.log(str1);

//!task-3
//?Check whether a string contains all the vowels a, e, i, o, u
// const str = 'hey i do not have all the vowels u';
// let isVowel = true;
// for (i = 0; i < str.length; i++){
//     if (
//       str.includes("u") &&
//       str.includes("a") &&
//       str.includes("i") &&
//       str.includes("e") &&
//       str.includes("o")
//     ) {
//       isVowel = true;
//     } else {
//       isVowel = false;
//     }
// }
// console.log(isVowel);

//!task-4
//?If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// let inputString = "text my vex your exam Xuxse";
// let outputString = "";

// for (let i = 0; i < inputString.length; i++) {
//   let char = inputString[i];

//   if (char === "x") {
//     outputString += "y";
//   } else if (char === "X") {
//     outputString += "Y";
//   } else {
//     outputString += char;
//   }
//   console.log(char);
// }
// let str = "text my vex your exam Xuxse";
// let newStr = str.replaceAll('x','y').replaceAll('X','Y')
// console.log(newStr);

//! task-5
//?Capitalize Every first Letter of each word in a String
// const str = "hi my Name is tAnvIr ahmed tAgIm";
// let newStrings = "";
// let outputStrings = [];
// newStrings = str.split(" ");
// for (i = 0; i < newStrings.length; i++) {
//   firstLetter =
//     newStrings[i].charAt(0).toUpperCase() +
//     newStrings[i].slice(1).toLowerCase();
//   // console.log(firstLetter);
//   outputStrings.push(firstLetter);
// }
// outputStrings = outputStrings.join(" ");
// console.log(outputStrings);

