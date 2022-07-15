/**
 * Problem
 *
 * Write a function that checks if the second array is
 * part of the first array.
 *
 * Constraint
 *
 * subArray may not have elements that are next to each
 * other, but are in the same order or descending.
 *
 */

const isValidSubsequence = (givenArray, subArray) => {
	// Keep track of comparisons
	let sequencePointer = 0;
	// Keep track of all the elements
	let sequenceLength = subArray.length;
	// Compare each element of givenArray to subArray
	for (const element of givenArray) {
		// Have reached the end of subArray array
		if (sequencePointer === sequenceLength) {
			break;
		}
		// if the same element is found in both arrays
		if (subArray[sequencePointer] === element) {
			// Increase the pointer every time a match
			// is found
			sequencePointer++;
		}
	}

	// Result of all the elements being compared
	return sequencePointer === sequenceLength;
};

const givenArray1 = [5, 1, 22, 25, 6, -1, 8, 10];
const subArray1 = [8, 6, -1, 10];

console.log(isValidSubsequence(givenArray1, subArray1));
