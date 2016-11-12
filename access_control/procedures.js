"use strict";

let combine = (being1, being2) => {
	// Gives being1 the attributes and characteristics of being2
	console.log(`\n_________________________________________________________`);
	console.log(`Creating chimera`);
	
	if (being1.name && being2.name) {
		console.log(`${being1.name} getting properties from ${being2.name}`);
	}
	else {
		console.log("One of the being is unnamed. What a mystery!");
	}
	Object.setPrototypeOf(being1, being2);
	console.log(`_________________________________________________________`);
};

module.exports = {
	combine: combine
};