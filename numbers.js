/* JavaScript Number Library */

const numbersLib = () => {

	function NumformatCheck() {
		// to be added and called in each function
	}

	function add(a, b) {
		// add a to b
		return a + b;
	}

	function sub(a, b) {
		// substruct a from b
		return b - a;
	}

	function mul(a, b) {
		// multiply a by b
		return a * b;
	}

	function div(a, b) {
		// devive a by b
		return a / b;
	}

	function Exponentiation(a, b) {
		// number a to the power of b
		// return a ** b;
		return Math.pow(a, b);
	}

	function Increment(a, b) {
		// increment a by b
		// same as return add(a, b);
		return a + b;
	}

	function Decrement(a, b) {
		// decrement a by b
		//same as return sub(a, b);
		return a - b;
	}

	function NumberListA(start, end) {
		// return a list of numbers starting at start and ending at end
		let numberListA = [];
		let length = end - start + 1;
		for (let i = 1; i <= length; i++) {
			numberListA.push(start);
			start++;
		}
		return numberListA;
	}

	function NumberListB(start, end, skipEvery) {
		// return a list of numbers starting at start and ending at end but skipping every N (ie: skip every 2, or skip every 3)
		//ex) start 1, end 10 skipEvery 2 --> 1,3,5,7,9
		let numberListB = [];
		for (let i = start; i <= end; i++) {
			numberListB.push(start);
			if (start + skipEvery > end) {
				break;
			} else {
				start += skipEvery;
			}
		}
		return numberListB
	}

	function NumberListC(start, count, shouldBeRandomOrNot) {
		// return list of numbers starting, continuing for (count) and a boolean to determine if the list of numbers should be random or not
		let numberListC = [];
		for (i = start; i <= (start + count); i++) {
			if (shouldBeRandomOrNot === true) {
				// generate a random number, between start and end
				numberListC.push(Math.floor(Math.random() * (start + count)) + start);
			} else {
				numberListC.push(i);
			}
		}
		return numberListC;
	}

	function IsOdd(aNumber) {
		// is a number odd? true false
		if (aNumber % 2 != 0)
			return true; //odd
		else
			return false;
	}

	function IsEven(aNumber) {
		// is a number even? true false
		if (aNumber % 2 == 0)
			return true; //even
		else
			return false;
	}

	function RandomNumberListA(start, end, ListItemCount) {
		// return a list of random numbers between start and end
		// while loop until the length of array reaches to the given list item count -1
		//"-1" because it runs one more after it reaches to the count
		let randomNumListA = [];
		while (randomNumListA.length <= ListItemCount - 1) {
			randomNumListA.push(Math.floor(Math.random() * end) + start);
		}
		return randomNumListA;
	}

	function RandomNumberListB(start, end, count, allowDuplicates) {
		// return count number of random numbers, between start and end. use allowDuplicates to choose if we should allow duplicates in the list or not
		let randomNumListB = [];
		//ex) start = 2, end = 10, count = number of random numbers betwee start and end
		//generate Ramdom Number until the length of array reaches to the count
		while (randomNumListB.length <= count - 1) {
			randomNumListB.push(Math.floor(Math.random() * end) + start);
		}

		if (allowDuplicates === true) {
			//Duplicate allowed
			return randomNumListB.length;
		} else {
			//Duplicate not allowed
			let uniqueRandomNumListB = [...new Set(randomNumListB)];
			//let uniqueRandomNumListB =  Array.from(new Set(randomNumListB)); //either way works
			return uniqueRandomNumListB.length;
		}
	}
}


