/**
 * Problem
 *
 * Write a function that returns the index of two integers
 * that the sum of both indices be equal to the target sum.
 *
 * Constraint
 *
 * givenArray needs to have different integers, and the sum
 * of each element must match exactly one solution.
 *
 */

const twoSumArray = (givenArray, targetSum) => {
	// Keep track of values inside the array
	const numbersInArray = {};
	// Go over each integer in the array
	for (const number of givenArray) {
		// Formula to find pair of numbers that sum
		// to the target sum
		const potentialMatch = targetSum - number;
		if (potentialMatch in numbersInArray) {
			return [potentialMatch, number];
		}

		// Number exists on the given array, but
		// does not sum to the target sum
		numbersInArray[number] = true;
	}
	// No match was found after traversing through
	// the array
	return [];
};

const twoSumArray1 = [3, 5, -4, 8, 11, -1, 1, 6];
const targetSum1 = 10;
console.log(twoSumArray(twoSumArray1, targetSum1));
