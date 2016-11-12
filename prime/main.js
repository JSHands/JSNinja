"use strict";

let isPrime = (value) => {
	
	if (!isPrime.answers) {
		isPrime.answers = {};
	}
	
	if (isPrime.answers[value] !== undefined) {
		return isPrime.answers[value];
	}
	
	let prime = value !== 1;
	
	for (let i = 2; i < value; i++) {
		if (value % i === 0) {
			prime = false;
			break;
		}
	}
	
	return isPrime.answers[value] = prime;
	
};