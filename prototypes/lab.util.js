"use strict";

let display = (phase, being) => {
	console.log(`\n_________________________________________________________`);
	
	console.log(phase);
	console.log(`---------------------------------------------------------`);
	
	console.log(being);
	console.log(`_________________________________________________________`);
};

let canIt = (being, action) => {
	
	if (being.name) {
		console.log(`Can a ${being.name} ${action}? ${action in being? 'Yes': 'No'}`);
	} else {
		console.log(`Can a mysterious being ${action}? ${action in being? 'Yes': 'No'}`);
	}
	
};

module.exports = {
	display: display,
	canIt: canIt
};

