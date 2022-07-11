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
		// to the target number
		const potentialMatch = targetSum - number;
		if (potentialMatch in numbersInArray) {
			return [potentialMatch, number];
		}

		// Number exists on the given array, but
		// does not equal to target number
		numbersInArray[number] = true;
	}
	// A pair of numbers was not found
	// that equal target number
	return [];
};

const twoSumArray1 = [3, 5, -4, 8, 11, -1, 1, 6];
const targetSum1 = 10;
console.log(twoSumArray(twoSumArray1, targetSum1));

const betterTwoSumArray = (givenArray, targetSum) => {
	// Sort the numbers in the array
	// in ascending order
	givenArray.sort((a, b) => a - b);

	// Set left pointer to first element
	// in the array
	let leftPointer = 0;
	// Set right pointer to the last element
	// in the array
	let rightPointer = givenArray.length - 1;

	// This condition is used to narrow the
	// comparison of the two numbers
	while (leftPointer < rightPointer) {
		// Store result of the sum of two numbers
		const currentSum = givenArray[leftPointer] + givenArray[rightPointer];
		// if a comparison has been found that matches
		// the value of the target sum
		if (currentSum === targetSum) {
			// Output the first number and second number
			return [givenArray[leftPointer], givenArray[rightPointer]];
		} else if (currentSum < targetSum) {
			// Shift left pointer to the right if sum of
			// two numbers is less than target number
			leftPointer++;
		} else if (currentSum > targetSum) {
			// Shift right pointer to the left if sum of
			// two numbers is greater than target number
			rightPointer--;
		}
	}
	// A pair of numbers was not found
	// that equal target number
	return [];
};

const twoSumArray2 = [3, 5, 6, 4, 12, 8, 2, 5];
const targetSum2 = 12;
console.log(betterTwoSumArray(twoSumArray2, targetSum2));
