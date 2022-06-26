/**
 * Problem
 *
 * Write a function that checks if all the characters in a string,
 * contain all the letters of the english alphabet.
 *
 * Constraint
 *
 * englishLetter must only have letters from 'A' to 'Z'
 *
 */

const isStringPangram = givenString => {
	// Get each letter of the string for comparison
	let eachLetter = givenString.toUpperCase().split('');
	// Go over the unicode of each english letter in the alphabet
	for (let unicodeLetter = 65; unicodeLetter < 91; unicodeLetter++) {
		// Convert the given unicode into characters
		let englishLetter = String.fromCharCode(unicodeLetter);
		// Check if each letter of given string
		// matches an english letter
		if (eachLetter.includes(englishLetter)) {
			continue;
		} else {
			// Finish comparison
			return false;
		}
	}

	return true;
};

const checkString1 = 'The quick brown fox jumps over the lazy dog';
console.log(isStringPangram(checkString1));
