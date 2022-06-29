/**
 * Problem
 *
 * Write a function that compares two strings to see if
 * rearranging all the letters of the given string once,
 * would form a new word in the english alaphabet.
 *
 * Constraint
 *
 * countCharacter must match the same length of both strings.
 *
 */

const isStringAnagram = (givenString, scrambleString) => {
	// Compare each word
	let findWords = {};

	// Check if both string don't have the same size
	if (givenString.length !== scrambleString.length) {
		return false;
	}

	// Go over each character for the first word
	for (let index = 0; index < givenString.length; index++) {
		// Keep track of each word in givenString
		let eachCharacter = givenString[index];
		// Increate the count if a comparison was found
		findWords[eachCharacter] = (findWords[eachCharacter] || 0) + 1;
	}

	// Go over each character for the second word
	for (let index = 0; index < scrambleString.length; index++) {
		// Keep track of each word in scrambleString
		let eachCharacter = scrambleString[index];
		// Check if character in scrambleString is
		// not found in comparison
		if (!findWords[eachCharacter]) {
			return false;
		} else {
			// Decrease the count after
			// it has been checked
			findWords[eachCharacter]--;
		}
	}

	return true;
};

const givenString = 'listen';
const scrambleString = 'silent';
console.log(isStringAnagram(givenString, scrambleString));
