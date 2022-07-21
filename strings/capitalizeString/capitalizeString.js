/**
 * Problem
 *
 * Write a function that prints the initials of
 * every word in a phrase.
 *
 * Constraints
 *
 * The initial string cannot be changed and the
 * return statement needs to be an array.
 *
 */

const capitalizeInitials = givenPhrase => {
	let newPhrase = [];
	// Separate each word in the givenPhrase
	let singleWord = givenPhrase.split(' ');
	// Go over each letter inside word
	singleWord.forEach(name => {
		// Capitalize first letter and make it uppercase,
		// then, append the rest of the letters
		const initialLetter = name.charAt(0).toUpperCase() + name.slice(1);
		// Add the words capitalized to the newPhrase
		newPhrase.push(initialLetter);
	});

	// Display newPhrase
	return newPhrase;
};

const examplePhrase1 = 'michael jackson';
console.log(capitalizeInitials(examplePhrase1));
