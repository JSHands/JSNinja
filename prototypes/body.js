"use strict";

console.log("*********************************************************");
console.log("* Prototypical Mad Sciencist Object Oriented JavaScript *");
console.log("*********************************************************");

let display = (phase, being) => {
	console.log(`\n_________________________________________________________`);
	
	console.log(phase);
	console.log(`---------------------------------------------------------`);
	
	console.log(being);
	console.log(`_________________________________________________________`);
};

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

let canIt = (being, action) => {
	
	if (being.name) {
		console.log(`Can a ${being.name} ${action}? ${action in being? 'Yes': 'No'}`);
	} else {
		console.log(`Can a mysterious being ${action}? ${action in being? 'Yes': 'No'}`);
	}
	
};

let human = {
	name: "human",
	arms: ["left", "right"],
	twerk: function () {
		console.log("* twerk twerk *");
	},
	head: {}
};

display("Initial being", human);

human.legs = ["left", "right"];
delete human.arms;
human.tentacles = ["up", "down", "left", "right"];

display("Remove arms. Add tentacles", human);

let eagle = {
	name: "eagle",
	beak: {},
	wings: ["left", "right"],
	fly: function () {
		console.log(`* flap flap *`);
	}
};

display("Create eagle", eagle);

let lion = {
	name: "lion",
	mane: {},
	paws: {
		front: ["left", "right"],
		rear: ["left", "right"]
	},
	roar: function () {
		console.log("* roar, roar *");
	}
};

display("Create lion", lion);

combine(lion, eagle);

console.log(`\nLion can now fly`);

try {
	lion.fly();
} catch (error) {
	console.log(error);
}

console.log(`But lion cannot twerk`);

try {
	lion.twerk();
} catch (error) {
	console.log(error);
}

let elephant = {
	name: "elephant",
	trunk: {},
	tusks: ["left", "right"],
	trumpet: function () {
		console.log(`* trumpet, trumpet *`);
	}
};

combine(eagle, elephant);

console.log(`eagle can trumpet`);

try {
	eagle.trumpet();
} catch (error) {
	console.log(error);
}

console.log(`which allows the lion to also trumpet`);

try {
	lion.trumpet();
} catch (error) {
	console.log(error);
}


canIt(lion,"fly");
canIt(lion,"twerk");
canIt(lion,"trumpet");
canIt(lion,"swim");
