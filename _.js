const _ = {
	//clamps a number between a lower and an upper bound
	clamp(number, lower, upper) {
		//ensure the number is not lower than the lower bound
		const lowerClampedValue = Math.max(number, lower);
		//ensure the number is not higher than the upper bound
		const clampedValue = Math.min(lowerClampedValue, upper);
		return clampedValue; //return the clamped value
	},
	//checks if a number is in a specified range
	inRange(number, start, end) {
		//if end is not provided, set end to start and start to 0
		if (end === undefined) {
			end = start;
			start = 0;
		}
		//swap start and end if start is greater than end
		if (start > end) {
			let temp = end;
			end = start;
			start = temp;
		}
		//check if the number is within the range
		const isInRange = start <= number && number < end;
		return isInRange; //return the result of the range check
	},
	//Splits a string into an array of words
	words(string) {
		//split the string by spaces to get individual words
		const words = string.split(" ");
		return words; //return the array of words
	},
	//Method to pad a string
	pad(string, length) {
		//check if the desired length is shorter than or equal to the string length
		if (length <= string.length) {
			return string; //return the original string if it is long enough
		}
		//calculate start and end padding lengths
		const startPaddingLength = Math.floor((length - string.length) / 2);
		const endPaddingLength = length - string.length - startPaddingLength;

		//create the padded string
		const paddedString =
			" ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
		return paddedString;
	},
	//checks if the provided object contains a value at the specified key
	has(object, key) {
		//check if the value of the object at key is undefined or not
		const hasValue = object[key] !== undefined;
		return hasValue;
	},
	//method for invert()
	invert(object) {
		const invertedObject = {};
		//iterate each object and keys
		for (let key in object) {
			const originalValue = object[key];
			invertedObject[originalValue] = key;
		}
		return invertedObject;
	},
	//find the first key for which the predicate returns true
	findKey(object, predicate) {
		for (let key in object) {
			const value = object[key];
			const predicateReturnValue = predicate(value); //evaluate the predicate
			if (predicateReturnValue) {
				return key; //return the key if predicate is true
			} else {
				return undefined; //return undefined if not found
			}
		}
	},
	//drops the first n elements from an array
	drop(array, n) {
		if (n === undefined) {
			n = 1; //default to dropping one element if n is not provided
		}
		const droppedArray = array.slice(n); //return the array without the first n elements
		return droppedArray;
	},
	dropWhile(array, predicate) {
		//find the index of the first element that does not satisfy the predicate
		const dropNumber = array.findIndex((element, index) => {
			return !predicate(element, index, array); //negate the predicate result
		});
		// use the drop method to create the new arrays with elements dropped & return the new array
		const droppedArray = this.drop(array, dropNumber);
		return droppedArray;
	},
	//splits an array into chunks of a specified size
	chunk(array, size) {
		if (size === undefined) {
			size = 1; //default to chunk size of 1 if not provided
		}
		const arrayChunks = [];
		//iterate over the array, slicing into chunks
		for (let i = 0; i < array.length; i += size) {
			const arrayChunk = array.slice(i, i + size);
			arrayChunks.push(arrayChunk); //add chunk to the result array
		}
		return arrayChunks; //return the array of chunks
	},
};

// Export the _ object if using modules
module.exports = _;
