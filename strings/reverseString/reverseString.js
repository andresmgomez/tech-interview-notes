/**
 * Problem
 *
 * Write a function that reverses all the characters of a string.
 *
 * Constraint
 *
 * index must be greater than or equal to 0;
 *
 */

const reverseString = givenString => {
	// Set variable for storing reversed string
	let tempString = '';

	// Set the starting point of the loop to be the
	// last character of the string. Then, as long
	// as index is greater than or equal to 0,
	// decrement the index position.
	for (let index = givenString.length - 1; index >= 0; index--) {
		// Append each character from last
		// to first, until it reaches end of string.
		tempString += givenString[index];
	}

	return tempString;
};

console.log(reverseString('BocaCode'));
