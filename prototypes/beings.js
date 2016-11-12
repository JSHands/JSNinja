"use strict";

function Being (name) {
	this.name = name;
}

Being.prototype.addBodyPart = function (bodyPartName, count) {
	this[bodyPartName] = count;
};

Being.prototype.removeBodyPart = function (bodyPartName) {
	
	console.log(`You are requesting to remove ${bodyPartName} from ${this.name}`);
	
	if (this[bodyPartName]) {
		
		try {
			delete this[bodyPartName];
			console.log(`${bodyPartName} removed!`);
		} catch (error) {
			console.log(`Unable to remove ${bodyPartName} from ${this.name}`);
		}
		
	} else {
		console.log(`${this.name} doesn't have ${bodyPartName}`);
	}
	
};

Being.prototype.addAbility = function (abilityName, abilityFunction) {
	this[abilityName] = abilityFunction;
};

Being.prototype.attempt = function(action) {
	console.log(`${this.name} attempts to ${action}`);
	
	try {
		this[action]();
	} catch (error) {
		console.log(`... but ${this.name} is unable to ${action}`);
	}
};

module.exports = {
	create: Being
};