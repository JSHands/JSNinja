"use strict";

class Creature {
	constructor(name) {
		this.name = name;
	}
	
	addBodyPart(bodyPartName, count) {
		if (bodyPartName) {
			this[bodyPartName] = count;
		} else {
			console.log(`${bodyPartName} is not a body part.`);
		}
	}
	
	removeBodyPart(bodyPartName) {
		if (bodyPartName) {
			if (this[bodyPartName]) {
				try {
					delete this[bodyPartName];
					console.log(`${bodyPartName} removed from ${this.name}`);
				} catch (error) {
					console.log(`Unable to remove ${bodyPartName} from ${this.name}`);
				}
			} else {
				console.log(`${this.name} doesn't have ${bodyPartName}`);
			}
		} else {
			console.log(`${bodyPartName} is not a body part.`);
		}
	}
}

module.exports = {
	Creature: Creature
};
