/**
 * Problem
 *
 * Write a function that checks if all the chracters of the
 * string contains english letters, except for one or more
 * letters that would make the string not a pangram.
 *
 * Constraint
 *
 * searchChar needs to be compared to a letter of alphabet;
 *
 */

const isStringLipogram = givenString => {
	let englishAlphabet = 'abcdefghijklmnopqrstuvwxyz';
	let missingLetters = 0;

	// Go over each lowercase character in the string
	for (let index = 0; index < 26; index++) {
		let searchChar = givenString.search(englishAlphabet[index]);

		// Check for characters not found in english alphabet
		if (searchChar < 0 || searchChar > givenString.length) {
			// Increment for each missing character
			missingLetters++;
		}
	}

	// Check for condition that string
	// would be a lipogram
	if (missingLetters >= 1) {
		return true;
	}

	// Not a pangram
	return false;
};

const checkString = 'The quick brown fox jumped over the lazy dog';
console.log(isStringLipogram(checkString));
