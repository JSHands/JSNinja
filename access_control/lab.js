"use strict";

let Being = require('./beings');
let procedures = require('./procedures');
let util = require('./lab.util');

console.log("*********************************************************");
console.log("* Prototypical Mad Sciencist Object Oriented JavaScript *");
console.log("*********************************************************");

// Create beings

let human = new Being.create("human");
human.addBodyPart("arms", 2);
human.addBodyPart("legs", 2);
human.addAbility("twerk", function () {
	console.log(`* twerk, twerk *`);
});
util.display("Create being", human);

let eagle = new Being.create("eagle");
eagle.addBodyPart("beak", 1);
eagle.addBodyPart("wings", 2);
eagle.addAbility("fly", function () {
	console.log(`* flap flap *`);
});
util.display("Create eagle", eagle);

let lion = new Being.create("lion");
lion.addBodyPart("mane", 1);
lion.addBodyPart("paws", 4);
lion.addAbility("roar", function () {
	console.log(`* roar, roar *`);
});
util.display("Create lion", lion);


let elephant = new Being.create("elephant");
elephant.addBodyPart("tusks", 2);
elephant.addBodyPart("trunk", 1);
elephant.addAbility("trumpet", function () {
	console.log(`* trumpet, trumpet *`);
});
util.display("Create elephant", elephant);

procedures.combine(lion, eagle);

lion.attempt("fly");
lion.attempt("twerk");


procedures.combine(eagle, elephant);

eagle.attempt("trumpet");

// Since eagle is chained to elephant's prototype
// and lion is chained to eagle's protytpe
// lion is chained to elephant's prototype

lion.attempt("trumpet");

util.canIt(lion,"fly");
util.canIt(lion,"twerk");
util.canIt(lion,"trumpet");
util.canIt(lion,"swim");

human.removeBodyPart("arms");
human.addBodyPart("tentacles", 8);

util.display("Add tentacles to human", human);

Object.defineProperty(human, "heart", {
	configurable: false,
	enumerable: true,
	value: 1,
	writable: false
});

util.display(`Add strong heart to human`, human);

console.log(`Attempting to steal a human's heart`);

human.removeBodyPart("heart");

console.log(`\nUsing Access Control\n`);

human.setAge(0);
human.setAge("lol");
human.setAge("32");
console.log(human.getAge());

if(human._weight) {
	console.log(`I can access the private weight property`);
} else {
	console.log(`I cannot access the private weight property`);
}

console.log(human.weight);

try {
	human.weight = 0;
} catch (error) {
	console.log(error);
}

human.weight = 187;
console.log(human.weight);