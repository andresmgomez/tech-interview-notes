/**
 * Problem
 *
 * Write a function that counts all the vowels
 * inside a given phrase.
 *
 * Contraint
 *
 * Only letters from the english alphabet are
 * used, and more than one word can be passed.
 *
 */

const countVowelsInWord = givenPhrase => {
	// Keep track of vowels in a string
	let countVowels = 0;
	// All the vowels in the alphabet
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	// Make each letter lowercase for comparison
	for (letter of givenPhrase.toLowerCase()) {
		// Check if word has any of these vowels
		if (vowels.includes(letter)) {
			// Add found vowel to the counter
			countVowels++;
		}
	}

	// Display number of vowels
	return countVowels;
};

const examplePhrase1 = 'I need to leave my car in the shop';
console.log(countVowelsInWord(examplePhrase1));
