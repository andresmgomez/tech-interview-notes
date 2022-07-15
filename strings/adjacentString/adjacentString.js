/**
 * Problem
 *
 * Write a function that checks the number of times
 * a character repeats in a string
 *
 */

const repeatedCharactersInString = (givenString, character) => {
	let repeatedCharacter = 0;

	// Go over each character inside the string
	for (let index = 0; index < givenString.length; index++) {
		// Check if character matches a specific position
		if (givenString.charAt(index) == character) {
			// Increase repeated character count
			repeatedCharacter++;
		}
	}

	// Result of number of characters
	return repeatedCharacter;
};

const stringExample1 = 'Boca Code';
const chosenCharacter1 = 'o';

console.log(repeatedCharactersInString(stringExample1, chosenCharacter1));
