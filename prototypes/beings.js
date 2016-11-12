"use strict";

function Being (name) {
	this.name = name;
}

Being.prototype.addBodyPart = function (bodyPartName, count) {
	this[bodyPartName] = count;
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