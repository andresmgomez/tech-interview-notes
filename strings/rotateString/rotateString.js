/**
 * Problem
 *
 * Given a string of size any, write a function that can rotate
 * the given string by a specific number of elements.
 *
 * Constraint
 *
 * rotateNumber must be less than or equal to the length of the string
 *
 */

const leftStringRotation = (givenString, rotateNumber) => {
	// Set the start of the substring to number of rotations,
	// and the end to length of the givenArray
	const startPoint = givenString.substring(rotateNumber, givenString.length);
	// Set rotationPoint by reversing the substring
	const rotatePoint = givenString.substring(0, rotateNumber);
	// console.log(startPoint);
	// Rotate the startPoint by shifting each character by rotateNumber
	const rotateLeft = startPoint + rotatePoint;
	return rotateLeft;
};

// module.exports.leftStringRotation = leftStringRotation;

const stringExample1 = 'WeHaveJustGraduatedFromBocaCode';
console.log(leftStringRotation(stringExample1, 5));

const rightStringRotation = (givenString, rotateNumber) => {
	// Copy the characters after it have been shifted to
	// the left.
	const endPoint = givenString.length - rotateNumber;
	return leftStringRotation(givenString, endPoint);
};

const stringExample2 = 'WeHaveJustGraduatedFromBocaCode';
console.log(rightStringRotation(stringExample2, 2));
