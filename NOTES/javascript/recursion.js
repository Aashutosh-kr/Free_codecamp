// replacing loop with recursion
function sum(arr, n) {
	if (n <= 0) {
		return 0;
	} else {
		return sum(arr, n - 1) + arr[n - 1];
	}
}

console.log(sum([1], 0)); // 0
console.log(sum([2, 3, 4], 1)); // 2
console.log(sum([2, 3, 4, 5], 3)); // 9

// Using recursion to create a descending array of given parameter
function countdown(n) {
	if (n < 1) {
		return [];
	} else {
		const countArray = countdown(n - 1);
		console.log(countArray);
		countArray.unshift(n);
		return countArray;
	}
}

console.log(countdown(0));
console.log(countdown(5));
console.log(countdown(10));

// Using recursion to create a ascending array of given parameter
function countup(n) {
	if (n < 1) {
		return [];
	} else {
		const countArray = countup(n - 1);
		console.log(countArray);
		countArray.unshift(n);
		return countArray;
	}
}
console.log(countup(0));
console.log(countup(5));
console.log(countup(10));

// using recursion to get a range of numbers
function rangeOfNumbers(startNum, endNum) {
	if (startNum === endNum) {
		return [startNum];
	} else {
		let arr = rangeOfNumbers(startNum, endNum - 1);
		arr.push(endNum);
		console.log(arr);
		return arr;
	}
}

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));
