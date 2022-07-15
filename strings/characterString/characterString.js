/**
 * Problem
 *
 * Write a function that checks if the input of a user
 * have all the characters the same.
 *
 */

const isCharactersTheSame = givenString => {
	// Keep track of length of givenString
	let allCharacters = givenString.length;

	// Go over each character inside givenString
	for (let index = 1; index < allCharacters; index++) {
		// Check if each character is not the same as the
		// first character
		if (givenString[index] !== givenString[0]) {
			// Characters are not the same
			return false;
		}
	}

	// Characters are the same
	return true;
};

const exampleString1 = 'Joe';
const userInput1 = 'jjjj';

console.log(isCharactersTheSame(userInput1));
