"use strict";

function fn (a, b, c) {
	console.log(`arguments: ${JSON.stringify(arguments)}`);
	console.log(`this: ${JSON.stringify(this)}`);
}

function sumArgs() {
	let sum = 0;
	for (let i = 0; i < arguments.length; ++i) {
		sum += arguments[i];
	}
	
	return sum;
}

function sumRest (...numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; ++i) {
		sum += numbers[i];
	}
	
	return sum;
}