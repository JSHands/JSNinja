"use strict";

function Being (name) {
	
	this.name = name;
	
	let age;
	let _weigth;
	
	this.getAge = () => age;
	
	this.setAge = (value) => {
		
		if (!isNaN(value) && value > 0) {
			age = value;
		} else {
			console.log(`${value} is an invalid age.`);
		}
	};
	
	Object.defineProperty(this, 'weight', {
		get: () => {
			return _weigth
		},
		set: (value) => {
			if (!isNaN(value) && value > 0) {
				_weigth = value;
			} else {
				throw new TypeError(`${value} is an invalid weight.`);
			}
		}
	})
	
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