// Spread the Word

// 1. Create a function that will check if "Spread the Word" is included in a string
function checkString(string) {
  let spreadString = "Spread the Word";
  if (string.includes(spreadString)) {
    return true;
  } else {
    return false;
  }
}

// 2. Create a function to insert "Spread the Word" into any string
function insertWords(string) {
  let newString = string + " Spread the Word";
  return newString;
}

// 3. Create a function to replace any other strings with "Spread the Word"
function replaceWords(string) {
  let newString = string.replace(/\S+/g, "Spread the Word");
  return newString;
}

// 4. Create a function to check if a string is empty
function isStringEmpty(string) {
  if (string === "") {
    return true;
  } else {
    return false;
  }
}

// 5. Create a function to count the number of characters in a string
function countCharacters(string) {
  let characterCount = string.length;
  return characterCount;
}

// 6. Create a function to capitalize the first letter of each word in a string
function capitalizeString(string) {
  let words = string.split(" ");
  let newString = "";
  for (let i = 0; i < words.length; i++) {
    newString += words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase() + " ";
  }
  return newString;
}

// 7. Create a function to check if a string contains only letters
function isStringLetters(string) {
  let regexLetters = /^[a-zA-Z]+$/;
  if (string.match(regexLetters)) {
    return true;
  } else {
    return false;
  }
}

// 8. Create a function to check if a string contains only numbers
function isStringNumbers(string) {
  let regexNumbers = /^[0-9]+$/;
  if (string.match(regexNumbers)) {
    return true;
  } else {
    return false;
  }
}

// 9. Create a function to check if a string is alphanumeric
function isStringAlphaNumeric(string) {
  let regexAlphaNumeric = /^[a-zA-Z0-9]+$/;
  if (string.match(regexAlphaNumeric)) {
    return true;
  } else {
    return false;
  }
}

// 10. Create a function to remove all characters from a string except letters
function removeNonLetters(string) {
  let regexLetters = /[^a-zA-Z]+/g;
  let newString = string.replace(regexLetters, "");
  return newString;
}

// 11. Create a function to remove all characters from a string except numbers
function removeNonNumbers(string) {
  let regexNumbers = /[^0-9]+/g;
  let newString = string.replace(regexNumbers, "");
  return newString;
}

// 12. Create a function to remove all characters from a string except alphanumeric
function removeNonAlphaNumeric(string) {
  let regexAlphaNumeric = /[^a-zA-Z0-9]+/g;
  let newString = string.replace(regexAlphaNumeric, "");
  return newString;
}

// 13. Create a function to check if a string starts with a specific word
function startsWithWord(string, word) {
  let firstWord = string.split(" ")[0];
  if (firstWord === word) {
    return true;
  } else {
    return false;
  }
}

// 14. Create a function to check if a string ends with a specific word
function endsWithWord(string, word) {
  let lastWord = string.split(" ").slice(-1)[0];
  if (lastWord === word) {
    return true;
  } else {
    return false;
  }
}

// 15. Create a function to check if a string is a palindrome
function isPalindrome(string) {
  let reversedString = string.split("").reverse().join("");
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}

// 16. Create a function to check if a string is a pangram
function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerString = string.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (lowerString.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}

// 17. Create a function to check if a string contains a specific number of words
function wordCount(string, count) {
  let words = string.split(" ");
  if (words.length === count) {
    return true;
  } else {
    return false;
  }
}

// 18. Create a function to check if a string is all lowercase
function isLowerCase(string) {
  let lowerString = string.toLowerCase();
  if (string === lowerString) {
    return true;
  } else {
    return false;
  }
}

// 19. Create a function to check if a string is all uppercase
function isUpperCase(string) {
  let upperString = string.toUpperCase();
  if (string === upperString) {
    return true;
  } else {
    return false;
  }
}

// 20. Create a function to reverse a string
function reverseString(string) {
  let reversedString = string.split("").reverse().join("");
  return reversedString;
}

// 21. Create a function to remove all spaces from a string
function removeSpaces(string) {
  let newString = string.replace(/\s/g, "");
  return newString;
}

// 22. Create a function to check if a string contains a url
function isUrl(string) {
  let urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
  return urlRegex.test(string);
}

// 23. Create a function to remove duplicate words from a string
function removeDuplicateWords(string) {
  let words = string.split(" ");
  let seenWords = new Set();
  let newString = "";
  for (let i = 0; i < words.length; i++) {
    if (!seenWords.has(words[i])) {
      newString += words[i] + " ";
      seenWords.add(words[i]);
    }
  }
  return newString;
}

// 24. Create a function to remove all punctuation from a string
function removePunctuation(string) {
  let newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  return newString;
}

// 25. Create a function to convert a string to camel case
function camelCaseString(string) {
  let words = string.split(" ");
  let newString = "";
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      newString += words[i].toLowerCase();
    } else {
      newString += words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
    }
  }
  return newString;
}

// 26. Create a function to check if a string contains a given letter
function containsLetter(string, letter) {
  let char = letter.charAt(0).toLowerCase();
  let lowerString = string.toLowerCase();
  if (lowerString.includes(char)) {
    return true;
  } else {
    return false;
  }
}

// 27. Create a function to check if a string is a valid email address
function isEmail(string) {
  let emailRegex = /^([A-Za-z0-9._%+-]+)@([A-Za-z0-9.-]+)\.([A-Za-z]{2,})$/;
  return emailRegex.test(string);
}

// 28. Create a function to capitalize the first letter of each word in a string without using .map()
function capitalizeWithoutMap(string) {
  let words = string.split(" ");
  let newString = "";
  for (let i = 0; i < words.length; i++) {
    newString += words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase() + " ";
  }
  return newString;
}

// 29. Create a function to remove all special characters from a string
function removeSpecialCharacters(string) {
  let regexSpecialChars = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let newString = string.replace(regexSpecialChars, "");
  return newString;
}

// 30. Create a function to find the longest word in a string
function longestWord(string) {
  let words = string.split(" ");
  let longestWord = "";
  for (let i of words) {
    if (i.length > longestWord.length) {
      longestWord = i;
    }
  }
  return longestWord;
}

// 31. Create a function to truncate a string
function truncateString(string, n) {
  let newString = string.slice(0, n) + "...";
  return newString;
}

// 32. Create a function to check if a string contains only unique characters
function isUnique(string) {
  let uniqueChars = new Set(string.split(""));
  return uniqueChars.size === string.length;
}

// 33. Create a function to remove all numbers from a string
function removeNumbers(string) {
  let newString = string.replace(/[0-9]+/g, "");
  return newString;
}

// 34. Create a function to check if a string contains only numbers
function isOnlyNumbers(string) {
  let regexNumbers = /^[0-9]+$/;
  return regexNumbers.test(string);
}

// 35. Create a function to remove all punctuation from a string
function removePunctuation2(string) {
  let newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  return newString;
}

// 36. Create a function to count the number of vowels in a string
function countVowels(string) {
  let regexVowels = /[aeiou]/gi;
  let vowels = string.match(regexVowels);
  return vowels.length;
}

// 37. Create a function to count the number of words in a string
function wordCount2(string) {
  let words = string.split(" ");
  return words.length;
}

// 38. Create a function to find the shortest word in a string
function shortestWord(string) {
  let words = string.split(" ");
  let shortestWord = words[0];
  for (let i of words) {
    if (i.length < shortestWord.length) {
      shortestWord = i;
    }
  }
  return shortestWord;
}

// 39. Create a function to convert a string to an array of characters
function stringToArray(string) {
  let charArray = string.split("");
  return charArray;
}

// 40. Create a function to convert an array of characters to a string
function arrayToString(arr) {
  let string = arr.join("");
  return string;
}

// 41. Create a function to extend a string with another string
function extendString(string, stringExtend) {
  let newString = string + " " + stringExtend;
  return newString;
}

// 42. Create a function to add a specified number of leading zeroes to a number
function addLeadingZeroes(string, n) {
  let newString = "0".repeat(n) + string;
  return newString;
}

// 43. Create a function to check if a string contains an uppercase letter
function containsUpperCase(string) {
  let regexUpperCase = /[A-Z]/;
  return regexUpperCase.test(string);
}

// 44. Create a function to check if a string contains a lowercase letter
function containsLowerCase(string) {
  let regexLowerCase = /[a-z]/;
  return regexLowerCase.test(string);
}

// 45. Create a function to capitalize the first n letters of a string
function capitalizeFirstLetters(string, n) {
  let words = string.split(" ");
  let newString = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < n) {
      newString += words[i].toUpperCase() + " ";
    } else {
      newString += words[i].substring(0, n).toUpperCase() + words[i].substring(n).toLowerCase() + " ";
    }
  }
  return newString;
}

// 46. Create a function to check if a string is blank
function isStringBlank(string) {
  let regexEmptyString = /^\s*$/;
  return regexEmptyString.test(string);
}